import axios from 'axios';

const config = {
  fetchUrl:
    'https://api.coingecko.com/api/v3/simple/price?ids=cosmos,osmosis,ion,akash-network,sentinel,iris-network,crypto-com-chain,persistence,regen,starname,e-money,e-money-eur,juno-network,likecoin,terrausd,terra-luna,bitcanna,terra-krw,secret,medibloc,comdex,cheqd-network,vidulum&vs_currencies=usd'
};

/**
 * @typedef {Object.<
 * ('cosmos'|
 * 'osmosis'|
 * 'ion'|
 * 'akash-network'|
 * 'sentinel'|
 * 'iris-network'|
 * 'crypto-com-chain'|
 * 'persistence'|
 * 'regen'|
 * 'starname'|
 * 'e-money'|
 * 'e-money-eur'|
 * 'juno-network'|
 * 'likecoin'|
 * 'terrausd'|
 * 'terra-luna'|
 * 'bitcanna'|
 * 'terra-krw'|
 * 'secret'|
 * 'medibloc'|
 * 'comdex'|
 * 'cheqd-network'|
 * 'vidulum'),
 * {usd: string}
 * >} TokenPricesUSDResponse
 */

/**
 *
 * @param {string[]} pair
 *
 * @returns
 */
export async function getPrice(pair) {
  try {
    const response = await axios.get(config.fetchUrl);

    return response.data;
  } catch (e) {
    console.error(
      'CoinGecko API response error:',
      e.response ? e.response.data : e
    );
    return null;
  }
}
