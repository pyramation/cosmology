import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  osmoDenomToSymbol,
  convertValidatorPricesToDenomPriceHash,
  convertWeightsIntoCoins,
  OsmosisApiClient,
  getTradesRequiredToGetBalances,
  getSwaps,
  calculateMaxCoinsForPool,
  calculateShareOutAmount,
  signAndBroadcastTilTxExists,
  messages,
  getSigningOsmosisClient,
  coin
} from 'cosmology';
import { loadBalance } from '../utils/utils';

const MINIMUM_USD_REINVESTMENT_THRESHOLD = 0.01; // ignore anything with balance less than this

import c from 'ansi-colors';

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
    this.rpcEndpoint = osmoChainConfig.apis.rpc[0].address;

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
   * @param {Balance[]} balances list of symbols to exclude
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

    const sellable = balances
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
   * @param {object} arg0
   * @param {Balance[]} arg0.balances list of symbols to exclude
   * @param {CoinWeight[]} arg0.targetWeights list of symbols to exclude
   * @param {string[]} arg0.exclusions list of symbols to exclude
   * @param {boolean=} arg0.simulate list of symbols to exclude
   * @param {Function=} arg0.setJobStatusById list of symbols to exclude
   *
   * @returns {Promise<Job[]>}
   */
  async constructAndExecuteJobs({
    balances,
    targetWeights,
    exclusions,
    simulate = true,
    setJobStatusById = (id, newStatus) => {}
  }) {
    const pools = await this.api.getPoolsPretty({ loadedPools: this.pools });
    const [account] = await this.signer.getAccounts();
    const osmoAddress = account.address;

    let stargateClient = null;
    if (!simulate)
      stargateClient = await getSigningOsmosisClient({
        rpcEndpoint: this.rpcEndpoint,
        signer: this.signer
      });

    const sell = this.getSellable(balances, exclusions);

    console.log(this.pools);
    const result = convertWeightsIntoCoins({
      weights: targetWeights,
      pools,
      prices: this.prices,
      balances: balances
    });

    console.log({ result });

    /** @type {Job[]} */
    const jobs = [];
    for (let i = 0; i < result.pools.length; i++) {
      const pool = result.pools[i];
      const desired = pool.coins;

      ////////////////// START SWAPS

      balances = await loadBalance(
        this.keplr,
        this.client,
        this.osmoChainConfig.chain_id,
        sell
      );

      const trades = getTradesRequiredToGetBalances({
        prices: this.prices,
        balances: balances,
        desired
      });

      if (!trades.length)
        console.log(
          'User has enough funds to deposit into pool. No swaps needed.'
        );

      const swaps = await getSwaps({ pools, trades, pairs: this.pairs.data });

      console.log({ swaps, balances, desired });

      const swapIdPrefix = `swap_${i}`;
      for (let s = 0; s < swaps.length; s++) {
        const swap = swaps[s];
        /** @type {Job} */
        const swapJob = {
          id: `${swapIdPrefix}_${s}`,
          type: 'swap',
          status: '',
          data: {
            swap,
            trades
          }
        };

        jobs.push(swapJob);
      }

      if (!simulate)
        await this.doSwaps({
          swaps,
          osmoAddress,
          stargateClient,
          client: this.client,
          idPrefix: swapIdPrefix,
          setJobStatusById
        });

      ////////////////// END SWAPS
      ////////////////// START JOIN

      const poolId = pool.denom.split('/')[2];
      const poolInfo = await this.client.getPoolPretty(poolId);

      // todo: Change this dynamically (dont always use max)
      const coinsNeeded = calculateMaxCoinsForPool(
        this.prices,
        poolInfo,
        balances
      );
      const shareOutAmount = calculateShareOutAmount(poolInfo, coinsNeeded);

      const join = {
        poolId,
        poolInfo,
        shareOutAmount,
        tokenInMaxs: coinsNeeded
      };
      const joinJobId = `join_${i}`;
      /** @type {Job} */
      const joinJob = {
        id: joinJobId,
        type: 'join',
        status: '',
        data: join
      };

      jobs.push(joinJob);
      // console.log(`\nSWAPS for ${c.bold.magenta(result.pools[i].name)}`);
      if (!simulate)
        await this.doJoin({
          poolId,
          osmoAddress,
          shareOutAmount,
          coinsNeeded,
          stargateClient,
          client: this.client,
          osmoChainConfig: this.osmoChainConfig,
          setJobStatus: (status) => setJobStatusById(joinJobId, status)
        });

      ////////////////// END JOIN
      ////////////////// START LOCK

      balances = await loadBalance(
        this.keplr,
        this.client,
        this.osmoChainConfig.chain_id,
        sell
      );

      const gammTokens = simulate
        ? [{ poolId, denom: pool.denom, amount: shareOutAmount }]
        : balances
            .filter((a) => a.denom.startsWith('gamm'))
            .map((obj) => {
              return {
                ...obj,
                poolId: obj.denom.split('/')[2]
              };
            });

      if (!gammTokens.length) {
        // eslint-disable-next-line no-alert
        alert('no gamm tokens to stake');
        return null;
      }

      const duration = '1209600000';

      const coins = [gammTokens.find((gamm) => gamm.poolId === poolId)].map(
        ({ denom, amount }) => ({ amount, denom })
      );

      const lock = {
        gammTokens,
        duration,
        displayDuration: '14 days',
        coins,
        poolId,
        poolInfo
      };
      const lockJobId = `lock_${i}`;
      /** @type {Job} */
      const lockJob = {
        id: lockJobId,
        type: 'lock',
        status: '',
        data: lock
      };
      jobs.push(lockJob);

      if (!simulate)
        await this.doLock({
          duration,
          coins,
          osmoAddress,
          stargateClient,
          client: this.client,
          osmoChainConfig: this.osmoChainConfig,
          setJobStatus: (status) => setJobStatusById(lockJobId, status)
        });
      ////////////////// END LOCK
    }

    return jobs;
  }

  async doSwaps({
    swaps,
    osmoAddress,
    stargateClient,
    client,
    idPrefix,
    setJobStatusById
  }) {
    for (let s = 0; s < swaps.length; s++) {
      const swap = swaps[s];
      const swapJobId = `${idPrefix}_${s}`;
      setJobStatusById(swapJobId, 'running');
      const {
        trade: { sell, buy, beliefValue },
        routes
      } = swap;

      console.log(
        `TRADE ${c.bold.yellow(
          sell.displayAmount + ''
        )} ($${beliefValue}) worth of ${c.bold.red(
          sell.symbol
        )} for ${c.bold.green(buy.symbol)}`
      );
      const r = routes
        .map((r) => [r.tokenInSymbol, r.tokenOutSymbol].join('->'))
        .join(', ')
        .toLowerCase();

      console.log(c.gray(`  routes: ${r}`));

      const { msg, fee } = messages.swapExactAmountIn({
        sender: osmoAddress,
        routes,
        tokenIn: {
          denom: sell.denom,
          amount: sell.amount.split('.')[0]
        },
        tokenOutMinAmount: Number(buy.amount.split('.')[0]) * 0.98 + '' // TODO: configurable slippage
      });

      console.log({ stargateClient, client });

      const res = await signAndBroadcastTilTxExists({
        client: stargateClient,
        cosmos: client,
        chainId: this.osmoChainConfig.chain_id,
        address: osmoAddress,
        msg,
        fee,
        memo: ''
      });

      const block = res?.tx_response?.height;
      if (block) {
        console.log(`success at block ${block}`);
        setJobStatusById(swapJobId, 'success');
      } else {
        console.log('no block found for tx! EXITING...');
        setJobStatusById(swapJobId, 'failed');
        //TODO: stop execution
      }
    }
  }

  async doJoin({
    poolId,
    osmoAddress,
    shareOutAmount,
    coinsNeeded,
    stargateClient,
    client,
    osmoChainConfig,
    setJobStatus
  }) {
    setJobStatus('running');
    const { msg, fee } = messages.joinPool({
      poolId: poolId + '', // string!
      sender: osmoAddress,
      shareOutAmount,
      tokenInMaxs: coinsNeeded.map((c) => {
        return coin(c.amount, c.denom);
      })
    });

    console.log(JSON.stringify(msg, null, 2));

    console.log({ client, stargateClient });

    const res = await signAndBroadcastTilTxExists({
      client: stargateClient,
      cosmos: client,
      chainId: osmoChainConfig.chain_id,
      address: osmoAddress,
      msg,
      fee,
      memo: ''
    });

    const block = res?.tx_response?.height;

    if (block) {
      console.log(`success at block ${block}`);
    } else {
      console.log('no block found for tx!');
    }
    console.log('\n\n\n\n\ntx');
    console.log(res);
  }

  async doLock({
    duration,
    coins,
    osmoAddress,
    stargateClient,
    client,
    osmoChainConfig,
    setJobStatus
  }) {
    const { msg, fee } = messages.lockTokens({
      owner: osmoAddress,
      coins,
      duration
    });

    console.log(JSON.stringify(msg, null, 2));

    const res = await signAndBroadcastTilTxExists({
      client: stargateClient,
      cosmos: client,
      chainId: osmoChainConfig.chain_id,
      address: osmoAddress,
      msg,
      fee,
      memo: ''
    });

    const block = res?.tx_response?.height;

    if (block) {
      console.log(`success at block ${block}`);
      setJobStatus('success');
    } else {
      console.log('no block found for tx!');
      setJobStatus('failed');
      //TODO: Stop execution
    }
    console.log('\n\n\n\n\ntx');
    console.log(res);
  }
}
