import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  osmoDenomToSymbol,
  getOsmosisAssetInfo,
  getCosmosAssetInfo,
  convertValidatorPricesToDenomPriceHash,
  convertWeightsIntoCoins,
  OsmosisApiClient,
  getAvailableBalance,
  getTradesRequiredToGetBalances,
  getSwaps
} from 'cosmology';
import { loadBalance } from '../utils/utils';

const MINIMUM_USD_REINVESTMENT_THRESHOLD = 0.01; // ignore anything with balance less than this

export default class Compounder {
  constructor({
    tokens,
    lcdClient, // (osmo rest client)
    osmoChainConfig,
    keplr,
    pairs,
    pools
  }) {
    // Tokens & prices
    this.tokens = tokens;
    this.prices = convertValidatorPricesToDenomPriceHash(tokens);

    // osmosis rest client
    this.client = lcdClient;

    // osmo chain config
    this.osmoChainConfig = osmoChainConfig;

    // keplr and signer
    this.keplr = keplr;
    this.signer = keplr.getOfflineSignerOnlyAmino(osmoChainConfig.chain_id);

    // osmosis api client
    this.api = new OsmosisApiClient();

    this.pairs = pairs;
    this.pools = pools;
  }

  /**
   *
   * @param {Balances} balances list of symbols to exclude
   * @param {string[]} exclusions list of symbols to exclude
   *
   * @returns {DisplayBalance[]}
   */
  getSellable(balances, exclusions) {
    // parallel rules
    const rules = [];

    // minimum balance rule
    rules.push(async (balance) => {
      const symbol = osmoDenomToSymbol(balance.denom);
      const dollarValue = baseUnitsToDollarValue(
        this.prices,
        symbol,
        balance.amount
      );
      if (dollarValue < MINIMUM_USD_REINVESTMENT_THRESHOLD) return false;
      return true;
    });

    // exclusion rule
    rules.push(async (balance, exclusions) => {
      const symbol = osmoDenomToSymbol(balance.denom);
      if (exclusions.includes(symbol)) return false;
      return true;
    });

    const sellable = balances.result
      .filter(async (balance) => {
        const ruleResults = await Promise.all(
          rules.map((rule) => {
            return rule(balance, exclusions);
          })
        );
        const finalResult = ruleResults.reduce(
          (finalResult, ruleResult) => finalResult && ruleResult,
          true
        );
        return finalResult;
      })
      .map((balance) => {
        const symbol = osmoDenomToSymbol(balance.denom);
        const displayAmount = baseUnitsToDisplayUnits(symbol, balance.amount);
        const dollarAmount = baseUnitsToDollarValue(
          this.prices,
          symbol,
          balance.amount
        );
        return {
          symbol,
          denom: symbol.denom,
          amount: balance.amount,
          displayAmount,
          dollarAmount
        };
      });

    return sellable;
  }

  /**
   *
   * @param {Balances} balances list of symbols to exclude
   * @param {CoinWeight[]} targetWeights list of symbols to exclude
   * @param {string[]} exclusions list of symbols to exclude
   */
  async constructAndExecuteJobs(
    balances,
    targetWeights,
    exclusions,
    simulate = true
  ) {
    const pools = await this.api.getPoolsPretty({ loadedPools: this.pools });
    const [account] = await this.signer.getAccounts();
    const address = account.address;

    const sell = this.getSellable(balances, exclusions);

    console.log(this.pools);
    const result = convertWeightsIntoCoins({
      weights: targetWeights,
      pools,
      prices: this.prices,
      balances: balances.result
    });

    const jobs = [];
    for (let i = 0; i < result.pools.length; i++) {
      const desired = result.pools[i].coins;

      balances = await loadBalance(
        this.keplr,
        this.client,
        this.osmoChainConfig.chain_id
      );

      const trades = getTradesRequiredToGetBalances({
        prices: this.prices,
        balances: balances.result,
        desired
      });

      const swaps = await getSwaps({ pools, trades, pairs: this.pairs.data });
      const swapJob = {
        type: 'swap',
        swaps,
        trades: []
      };

      jobs.push(swapJob);
      // console.log(`\nSWAPS for ${c.bold.magenta(result.pools[i].name)}`);

      if (!simulate) {
        // for (let s = 0; s < swaps.length; s++) {
        //     const swap = swaps[s];
        //     const {
        //         trade: { sell, buy, beliefValue },
        //         routes
        //     } = swap;
        //     console.log(
        //         `TRADE ${c.bold.yellow(
        //             sell.displayAmount + ''
        //         )} ($${beliefValue}) worth of ${c.bold.red(
        //             sell.symbol
        //         )} for ${c.bold.green(buy.symbol)}`
        //     );
        //     const r = routes
        //         .map((r) => [r.tokenInSymbol, r.tokenOutSymbol].join('->'))
        //         .join(', ')
        //         .toLowerCase();
        //     console.log(c.gray(`  routes: ${r}`));
        //     const { msg, fee } = messages.swapExactAmountIn({
        //         sender: osmoAddress,
        //         routes,
        //         tokenIn: {
        //             denom: sell.denom,
        //             amount: sell.amount.split('.')[0]
        //         },
        //         tokenOutMinAmount: Number(buy.amount.split('.')[0]) * 0.98 + ''
        //     });
        //     const res = await signAndBroadcastTilTxExists({
        //         client: stargateClient,
        //         cosmos: client,
        //         chainId: osmoChainConfig.chain_id,
        //         address: osmoAddress,
        //         msg,
        //         fee,
        //         memo: ''
        //     });
        //     const block = res?.tx_response?.height;
        //     if (block) {
        //         console.log(`success at block ${block}`);
        //     } else {
        //         console.log('no block found for tx! EXITING...');
        //         process.exit(1);
        //     }
        //     //
      }
    }

    return jobs;
  }
}
