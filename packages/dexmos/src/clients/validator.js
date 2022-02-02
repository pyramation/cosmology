import { RestClient } from './rest';

/**
 * 
 * @typedef {(
 * string
 * )} CoinDenom
 *
 * @typedef {( 
 * string
 * )} CoinSymbol
 * 
 * @typedef {{
 *  price: number;
 *  denom: CoinDenom;
 *  symbol: CoinSymbol;
 *  liquidity: number;
 *  liquidity_24h_change: number;
 *  volume_24h: number;
 *  volume_24h_change: number;
 *  name: string;
 * }} ValidatorToken
 * 
 * @typedef {{
 *  price: number;
 * }} ValidatorTokenPrice
 * 
 * @typedef {{
 * start_date: string;
 * denom: CoinDenom;
 * symbol: CoinSymbol;
 * apr_1d: number;
 * apr_7d: number;
 * apr_14d: number;
 * }} ValidatorCoinApr
 * 
 * @typedef {{
 *  pool_id: number;
 *  apr_list: ValidatorCoinApr[]
 * }} ValidatorPoolApr
 * 
 * @typedef {{
 *  pool_address: string;
 *  pool_id: string;
 *  base_name: string;
 *  base_symbol: CoinSymbol;
 *  base_address: CoinDenom;
 *  quote_name: string;
 *  quote_symbol: CoinSymbol;
 *  quote_address: CoinDenom;
 *  price: number;
 *  base_volume_24h: number;
 *  quote_volume_24h: number;
 *  volume_24h: number;
 *  volume_7d: number;
 *  liquidity: number;
 *  liquidity_atom: number;
 * }} ValidatorPair
 * 
 */

//  https://api-osmosis.imperator.co/swagger/#/
export class OsmosisValidatorClient extends RestClient {
  constructor({ url = 'https://api-osmosis.imperator.co/' } = {}) {
    super({ url });
    this._clientType = 'Osmosis Validator';
  }

  async getPools() {
    const endpoint = `search/v1/pools`;
    return await this.request(endpoint);
  }

  /**
   * @returns {Promise<ValidatorToken[]>}
   */
  async getTokens() {
    const endpoint = `tokens/v2/all`;
    return await this.request(endpoint);
  }

  /**
   * @param {CoinSymbol} symbol
   * @returns {Promise<ValidatorToken[]>}
   */
  async getToken(symbol) {
    const endpoint = `tokens/v2/${symbol}`;
    return await this.request(endpoint);
  }
  
  /**
   * @param {CoinSymbol} symbol
   * @returns {Promise<ValidatorTokenPrice[]>}
   */
  async getTokenPrice(symbol) {
    const endpoint = `tokens/v2/price/${symbol}`;
    return await this.request(endpoint);
  }

  /**
   * @returns {Promise<ValidatorPoolApr[]>}
   */
  async getPoolAprs() {
    const endpoint = `apr/v1/all`;
    return await this.request(endpoint);
  }

  /**
   * @param {CoinSymbol} symbol
   * @returns {Promise<ValidatorPoolApr[]>}
   */
   async getPoolApr(symbol) {
    const endpoint = `apr/v1/${symbol}`;
    return await this.request(endpoint);
  }

  /**
   * @returns {Promise<ValidatorPair[]>}
   */
   async getPairsSummary() {
    const endpoint = `pairs/v1/summary`;
    return await this.request(endpoint);
  }

}

/*

NOTE about dynamic APR list!

Here is DVPN, but it's actually NOT active
Is there a route where we know if these are still active?
or how to find out?

    "pool_id": 5,
    "apr_list": [
      {
        "start_date": "2021-06-19T05:44:53.216494037Z",
        "denom": "uosmo",
        "symbol": "OSMO",
        "apr_1d": 34.07079603251842,
        "apr_7d": 54.51335904043854,
        "apr_14d": 68.14179059931155
      },
      {
        "start_date": "2022-12-10T00:00:00Z",
        "denom": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
        "symbol": "DVPN",
        "apr_1d": 45.70191185539188,
        "apr_7d": 205.65860334926344,
        "apr_14d": 457.0191185539188
      }
    ]

*/