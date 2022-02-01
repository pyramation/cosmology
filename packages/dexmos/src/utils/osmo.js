// osmo specific utils

import { Token } from '../model/Token';
import { assets, chains } from '@pyramation/cosmos-registry';
import { assets as osmosisAssets } from '../assets';
import { displayUnitsToDenomUnits, baseUnitsToDisplayUnits, getOsmosisSymbolIbcName } from '.';
import Long from 'long';

/**
 *
 * @typedef {{
 * id: string;
 * address: string;
 * displayPoolAssets: object[];
 * poolAssets: object[];
 * pricePerShare: number;
 * totalShares: Coin;
 * totalValue: number;
 * totalWeight: number;
 * }} Pool
 *
 * @typedef {{
 * amount:string;
 * denom:string;
 * }} Coin
 * 
 * @typedef {Object.<string, number>} PriceHash
 *
 */

/**
 * @typedef {(
 * string
 * )} CoinDenom
 *
 */

/**
 * @typedef {(
 * 'ATOM'|
 * 'OSMO'|
 * 'ION'|
 * 'AKT'|
 * 'DVPN'|
 * 'IRIS'|
 * 'CRO'|
 * 'XPRT'|
 * 'REGEN'|
 * 'IOV'|
 * 'NGM'|
 * 'EEUR'|
 * 'JUNO'|
 * 'LIKE'|
 * 'UST'|
 * 'LUNA'|
 * 'BCNA'|
 * 'SCRT'|
 * 'MED'
 * )} CoinSymbol
 *
 * @typedef {('cosmos'|
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
 * 'vidulum')} CoinGeckoToken
 *
 * 
 * @typedef {Object.<CoinGeckoToken, {usd: number}>} CoinGeckoUSDResponse
 * 
 */


/**
 * @param {CoinSymbol} token
 * @returns {CoinGeckoToken}
 */
export const getCoinGeckoIdForSymbol = (token) => {
    const rec = osmosisAssets.find(({ symbol }) => symbol === token);
    const geckoId = rec?.coingecko_id;
    if (!geckoId) {
        return console.log(`cannot find coin: ${token}`);
    }
    return geckoId;
};

/**
 * @param {CoinGeckoToken} geckoId
 * @returns {CoinSymbol}
 */
export const getSymbolForCoinGeckoId = (geckoId) => {
    const rec = osmosisAssets.find(({ coingecko_id }) => coingecko_id === geckoId);
    const symbol = rec?.symbol;
    if (!symbol) {
        console.log(`WARNING: cannot find coin for geckoId: ${geckoId}`);
    }
    return symbol;
};

/**
 * @param {CoinDenom} denom
 * @returns {CoinSymbol}
 */
export const osmoDenomToSymbol = (denom) => {
    const rec = osmosisAssets.find(({ base }) => base === denom);
    const symbol = rec?.symbol;
    if (!symbol) {
        // console.log(`cannot find symbol ${denom} `);
        return null;
    }
    return symbol;
}

/**
 * @param {CoinSymbol} token
 * @returns {CoinDenom}
 */
export const symbolToOsmoDenom = (token) => {
    const rec = osmosisAssets.find(({ symbol }) => symbol === token);
    const base = rec?.base;
    if (!base) {
        console.log(`cannot find base for token ${token}`);
        return null;
    }
    return base;
}

/**
 * @type {object}
 * @property {CoinSymbol} symbol - the human readable all-caps version, e.g. ATOM, OSMO, etc.
 * @property {CoinDenom} denom - denomination, e.g. uosmo, or ibc/143....
 * @property {number} amount - the amount of the token
 */

export class OsmosisToken {
    /**
     * @param {object} param0
     * @param {CoinSymbol} param0.symbol - the human readable all-caps version, e.g. ATOM, OSMO, etc.
     * @param {CoinDenom} param0.denom - denomination, e.g. uosmo, or ibc/143....
     * @param {number} param0.amount - the amount of the token
     */
    constructor({ symbol, denom, amount = 0 }) {
        if (symbol) {
            this.symbol = symbol;
            this.denom = symbolToOsmoDenom(symbol);
        }
        if (denom) {
            this.denom = denom;
            this.symbol = symbolToOsmoDenom(denom);
        }
        this.amount = displayUnitsToDenomUnits(this.symbol, amount);
    }
    toJSON() {
        return {
            denom: this.denom,
            amount: this.amount
        };
    }
}

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Coin} param0.coin
 */
export const convertCoinToDisplayValues = ({ prices, coin }) => {
    const { denom, amount } = coin;
    const price = prices[denom];
    const symbol = osmoDenomToSymbol(denom);
    if (isNaN(price)) {
        // console.log(`bad price for ${denom} NaN.`);
        return null;
    }
    const displayAmount = baseUnitsToDisplayUnits(symbol, amount)
    if (isNaN(displayAmount)) {
        // console.log('bad amount, NaN.');
        return null;
    }
    return {
        denom,
        amount,
        displayAmount,
        value: displayAmount * prices[denom]
    };
};

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Coin[]} param0.coins
 */
export const convertCoinsToDisplayValues = ({ prices, coins }) =>
    coins.map((coin) => convertCoinToDisplayValues({ prices, coin }));

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Coin[]} param0.coins
 */
export const calculateCurrentPorfolioBalance = ({ prices, coins }) => {
    return convertCoinsToDisplayValues
        ({ prices, coins }).reduce((m, v) => {
            const { value } = v;
            return value + m;
        }, 0);
};

/**
 * 
 * @param {CoinGeckoUSDResponse} prices 
 * @returns {PriceHash}
 */

export const convertPricesToDenomPriceHash = (prices) => {
    return Object.keys(prices).reduce((m, geckoId) => {
        const symbol = getSymbolForCoinGeckoId(geckoId);
        if (symbol) {
            const denom = symbolToOsmoDenom(symbol);
            m[denom] = prices[geckoId].usd;
        }
        return m;
    }, {});
};

/**
 * 
 * @param {object} pools
 * @param {string} gammId
 * @returns {Pool}
 */

export const getPoolByGammName = (pools, gammId) => {
    return pools.find(({ totalShares: { denom } }) => denom === gammId);
};

export const getUserPools = ({ pools, lockedPools }) => {
    return lockedPools.map(({ denom, amount }) => {
        const pool = getPoolByGammName(pools, denom);
        // TODO why some pools missing?
        if (!pool) return null;
        const value = pool.pricePerShare * amount;
        return {
            denom,
            amount,
            value,
            allocation: Number(amount) / Number(pool.totalShares.amount),
            poolId: pool.id
        };
    }).filter(Boolean);
};


/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Pool} param0.pool
 */

export const convertPoolToDisplayValues = ({ prices, pool }) => {
    const { totalShares, poolAssets } = pool;
    let totalValue = 0;
    pool.displayPoolAssets = poolAssets.map(({ token, weight }) => {
        const value = convertCoinToDisplayValues({ prices, coin: token });
        if (!value) return undefined;
        totalValue += value.value;
        return {
            token,
            weight,
            allocation: Long.fromString(weight) / Long.fromString(pool.totalWeight),
            symbol: osmoDenomToSymbol(token.denom),
            value
        };
    }).filter(Boolean);
    pool.totalValue = totalValue;
    // pool.pricePerShareL = Long.fromValue(totalValue) / Long.fromString(totalShares.amount),
    // TODO verify 10^18
    pool.pricePerShare = Number(totalValue) / Number(totalShares.amount) * Math.pow(10, 18),
        pool.pricePerShare = Number(totalValue) / Number(totalShares.amount)
    return pool;
};

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Pool[]} param0.pools
 */
export const convertPoolsToDisplayValues = ({ prices, pools }) =>
    pools.map(pool => convertPoolToDisplayValues({ prices, pool }));

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Pool[]} param0.pools
 */
export const getFilteredPoolsWithValues = ({ prices, pools }) =>
    convertPoolsToDisplayValues({ prices, pools })
        // remove small pools    
        .filter(({ totalValue }) => totalValue >= 100000)
        // remove DIG or VIDL or coins not on coingecko that don't get prices    
        .filter(({ poolAssets, displayPoolAssets }) => poolAssets.length === displayPoolAssets.length);


