import { assets } from '../assets';
import { CosmosApiClient } from './cosmos';

const assetHashMap = assets.reduce((m, asset) => {
  m[asset.base] = asset;
  return m;
}, {});

// Cosmos LCD API
// https://www.notion.so/Stake-Systems-LCD-RPC-gRPC-Instances-04a99a9a9aa14247a42944931eec7024

export class OsmosisApiClient extends CosmosApiClient {
  constructor({ url = 'https://osmosis.stakesystems.io/' } = {}) {
    super({ url })
    this._clientType = 'Osmosis API';
  }

  async getPools() {
    const endpoint = `osmosis/gamm/v1beta1/pools?pagination.limit=750`;
    return await this.request(endpoint);
  }

  async getPool(poolId) {
    const endpoint = `osmosis/gamm/v1beta1/pools/${poolId}`;
    return await this.request(endpoint);
  }

  async getIncentivizedPools() {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
    return await this.request(endpoint);
  }

  async getAccountLockedLongerDuration(address) {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration/${address}`;
    return await this.request(endpoint);
  }

  async getAccountLockedCoins(address) {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${address}`;
    return await this.request(endpoint);
  }

  async getEpochProvision() {
    const endpoint = `osmosis/mint/v1beta1/epoch_provisions`;
    return await this.request(endpoint);
  }

  async getEpochs() {
    const endpoint = `osmosis/epochs/v1beta1/epochs`;
    return await this.request(endpoint);
  }

  async getDistrInfo() {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
    return await this.request(endpoint);
  }

  async getParams() {
    const endpoint = `osmosis/mint/v1beta1/params`;
    return await this.request(endpoint);
  }

  async getLockableDuration() {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
    return await this.request(endpoint);
  }

  async getPoolsPretty({ includeDetails = false } = {}) {
    const { pools } = await this.getPools();

    const prettyPools = pools.map((pool, i) => {
      const totalWeight = Number(pool.totalWeight);
      const tokens = pool.poolAssets.map(({ token, weight }) => {
        const asset = assetHashMap?.[token.denom];
        const symbol = asset?.symbol ?? token.denom;
        const ratio = Number(weight) / totalWeight;
        const obj = {
          symbol,
          amount: token.amount,
          ratio
        };
        if (includeDetails) {
          obj.info = asset;
        }
        return obj;
      });
      if (!i) console.log(pool);
      const value = {
        nickname: tokens.map(t => t.symbol).join('/'),
      };
      if (includeDetails) {
        value.images = tokens.map(t => {
          const imgs = t?.info?.logo_URIs;
          if (imgs) {
            return {
              token: t.symbol,
              images: imgs
            };
          }
        }).filter(Boolean)
      }
      return {
        ...value,
        ...pool,
        poolAssetsPretty: tokens
      };
    });

    return prettyPools;
  }

}