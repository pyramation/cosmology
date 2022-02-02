import { RestClient } from './rest';

// TODO use price here!

/**
 * @typedef {{
 *  price: number;
 *  denom: string;
 *  symbol: string;
 *  liquidity: number;
 *  liquidity_24h_change: number;
 *  volume_24h: number;
 *  volume_24h_change: number;
 *  name: string;
 * }} ValidatorToken
 * 
 */

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
}
