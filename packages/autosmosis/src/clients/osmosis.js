import bent from 'bent';
import { getClient } from '../messages/utils';
import { assets } from '../assets';

const assetHashMap = assets.reduce((m, asset) => {
  m[asset.base] = asset;
  return m;
}, {});

// import { messages } from '../messages/create';
// export class OsmosisClient {
//   constructor({ rpcEndpoint, wallet }) {
//     this.rpcEndpoint = rpcEndpoint;
//     this.wallet = wallet;
//   }
//   async init() {
//     this.client = getClient({
//       rpcEndpoint: this.rpcEndpoint,
//       wallet: this.wallet
//     });
//   }
// }

export class OsmosisApiClient {
  constructor({ url = 'https://lcd-osmosis.keplr.app/' } = {}) {
    this.url = url.endsWith('/') ? url : `${url}/`;
  }

  async getBalances(address) {
    const endpoint = `bank/balances/${address}`;
    return await this.request(endpoint);
  }

  async getPools() {
    const endpoint = `osmosis/gamm/v1beta1/pools?pagination.limit=750`;
    return await this.request(endpoint);
  }

  async authInfo(address) {
    const endpoint = `auth/accounts/${address}`;
    return await this.request(endpoint);
  }

  async getPoolsPretty({ includeDetails = false } = {}) {
    const { pools } = await this.getPools();

    const prettyPools = pools.map((pool,i) => {
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
        nickname: tokens.map(t=>t.symbol).join('/'),
      };
      if (includeDetails) {
        value.images = tokens.map(t=>{
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

  get() {
    return bent(this.url, 'GET', 'json', 200);
  }

  async request(endpoint) {
    try {
      const body = {};
      const headers = {};
      const result = await this.get()(endpoint, body, headers);
      if (result.response) {
        return result.response;
      }
      return result;
    } catch (e) {
      console.error(
        'Osmosis API response error:',
        e.response ? e.response.data : e
      );
      return null;
    }
  }
}
