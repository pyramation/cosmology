import { RestClient } from './rest';
import autobind from 'class-autobind';

/**
 *
 *
 * @typedef {{
 *  denom: string;
 *  exponent: number;
 *  name: string;
 *  symbol: string;
 *  price: number;
 *  price_24h_chainge: number;
 *  liquidity: number;
 *  liquidity_24h_change: number;
 *  volume_24h: number;
 *  volume_24h_change: number;
 * }} ValidatorToken
 *
 * @typedef {{
 *  price: number;
 * }} ValidatorTokenPrice
 *
 * @typedef {{
 * start_date: string;
 * denom: string;
 * symbol: string;
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
 *
 * interestingly this one has "price" which I think is the
 * price of the LP token? TODO: verify...
 *
 * @typedef {{
 *  pool_address: string;
 *  pool_id: string;
 *  base_name: string;
 *  base_symbol: string;
 *  base_address: string;
 *  quote_name: string;
 *  quote_symbol: string;
 *  quote_address: string;
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
    autobind(this); // React ES6 doesn't bind this -> meaning we get 'unable to read property 'request' of undefined
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
   * @param {string} symbol
   * @returns {Promise<ValidatorToken[]>}
   */
  async getToken(symbol) {
    const endpoint = `tokens/v2/${symbol}`;
    return await this.request(endpoint);
  }

  /**
   * @param {string} symbol
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
   * @param {string} symbol
   * @returns {Promise<ValidatorPoolApr[]>}
   */
  async getPoolApr(symbol) {
    const endpoint = `apr/v1/${symbol}`;
    return await this.request(endpoint);
  }

  /**
   * TODO: incorrect type (export in index.d.ts)
   * {
   * updated_at: number
   * data:ValidatorPair[]
   * }
   * @returns {Promise<ValidatorPair[]>}
   */
  async getPairsSummary() {
    const endpoint = `pairs/v1/summary`;
    return await this.request(endpoint);
  }
}
