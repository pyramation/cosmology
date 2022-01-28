import { CoinGeckoToken, getPrices, assets } from "dexmos";
import {getBalance} from "../cosmo"

export class DriverClient {
  static async getWalletBalances() {

    return { LUNA: 13, OSMO: 50, STARS: 2000 };
  }

  static async swap(inputCoin, targetCoin, amount) {
    return null;
  }

  static joinPool(poolId, amount) {}

  static lockTokens(poolId) {}

  /**
   *
   * @param {string} txHash
   * @returns {('success'|'failed'|'running'|'queued')}
   */
  static async pollStatus(txHash) {
    return "success";
  }

  static async getPrices(coins) {
    const coinsInGeckoFormat = coins.map((coin) => {
      const geckoAsset = assets.find(({ symbol }) => symbol === coin);
      return geckoAsset.coingecko_id;
    });

    const pricesInGeckoFormat = await getPrices(coinsInGeckoFormat);

    var prices = {};
    Object.keys(pricesInGeckoFormat).map((geckoId) => {
      const geckoAsset = assets.find(
        ({ coingecko_id }) => coingecko_id === geckoId
      );
      prices[geckoAsset.symbol] = pricesInGeckoFormat[geckoId].usd;
    });

    return prices;
  }
}
