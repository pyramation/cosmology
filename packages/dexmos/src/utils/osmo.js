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
 * denom:CoinDenom;
 * }} LockedPool
 * 
 * @typedef {{
 * amount:string;
 * denom:CoinDenom;
 * value:number;
 * allocation:number;
 * poolId:string;
 * }} LockedPoolDisplay
 *
 * @typedef {{
 * amount:string;
 * denom:CoinDenom;
 * }} Coin
 * 
 * @typedef {{
 * amount:string;
 * denom:CoinDenom;
 * displayAmount: number;
 * value: number;
 * symbol: CoinSymbol;
 * }} CoinValue
 * 
 * @typedef {{
 * amount:string;
 * symbol:CoinSymbol;
 * }} DisplayCoin
 *  
 * @typedef {{
 * sell:CoinValue
 * buy:CoinValue;
 * beliefValue:string;
 * }} Trade
 * 
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
 * @typedef {Object.<CoinDenom, number>} PriceHash
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
 * @property {string} amount - the amount of the token
 */

export class OsmosisToken {
    /**
     * @param {object} param0
     * @param {CoinSymbol|null} param0.symbol - the human readable all-caps version, e.g. ATOM, OSMO, etc.
     * @param {CoinDenom|null} param0.denom - denomination, e.g. uosmo, or ibc/143....
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
        this.amount = '' + displayUnitsToDenomUnits(this.symbol, amount)
    }
    /**
     * @returns {Coin} 
     */
    toJSON() {
        return {
            denom: this.denom,
            amount: this.amount
        };
    }
}


/**
* @param {DisplayCoin[]} coins 
* @returns {Coin[]} 
*/

export const symbolsAndDisplayValuesToCoinsArray = ( coins ) => 
    coins.map(({ symbol, amount }) => ({
        denom: symbolToOsmoDenom(symbol),
        amount: '' + displayUnitsToDenomUnits(symbol, amount)
    }));

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {CoinDenom} param0.denom
 * @param {number} param0.value - usd value
 * @returns {CoinValue} 
 */
export const convertCoinValueToCoin = ({ prices, denom, value }) => {
    const price = prices[denom];
    const symbol = osmoDenomToSymbol(denom);
    if (isNaN(price)) {
        // console.log(`bad price for ${denom} NaN.`);
        return null;
    }
    const displayAmount = value / prices[denom];
    return {
        symbol,
        denom,
        amount: '' + displayUnitsToDenomUnits(symbol, displayAmount),
        displayAmount,
        value
    };
};

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Coin} param0.coin
 * @returns {CoinValue} 
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
        symbol,
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
 * @returns {CoinValue[]} 
 */
export const convertCoinsToDisplayValues = ({ prices, coins }) =>
coins.map((coin) => convertCoinToDisplayValues({ prices, coin }));

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Coin[]} param0.coins
 */
export const calculateCoinsBalance = ({ prices, coins }) => {
    return convertCoinsToDisplayValues
        ({ prices, coins }).reduce((m, v) => {
            if (!v) {
                console.log(new Error().stack)
            }
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

/**
 * 
 * @param {object} param0
 * @param {Pool[]} param0.pools
 * @param {LockedPool[]} param0.lockedPools
 * @returns {LockedPoolDisplay[]}
 */

export const getUserPools = ({ pools, lockedPools }) => {
    return lockedPools.map(({ denom, amount }) => {
        const pool = getPoolByGammName(pools, denom);
        // TODO why some pools missing?
        if (!pool) return null;
        const value = pool.pricePerShare * Number(amount);
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

/**
 * @param {object} param0
 * @param {PriceHash} param0.prices
 * @param {Coin[]} param0.balances
 * @param {Coin[]} param0.desired
 * @param {Pool[]} param0.pools
 */
export const getTradesRequiredToGetBalances = ({
    prices,
    balances,
    desired
}) => {

    const totalCurrent = calculateCoinsBalance({prices, coins: balances });
    const totalDesired = calculateCoinsBalance({prices, coins: desired });
    
    if (totalDesired > totalCurrent) {
        throw new Error('insufficient balance');
    }
    
    const hasEnough = desired.reduce((m, {denom, amount})=> {
        const current = balances.find((c)=>c.denom===denom);
        if (!current) return false;
        if (current.amount >= amount) return m && true;
        return false;
    }, true);
    
    if (hasEnough) {
        // no trades are required
        return [];
    }

    const currentCoins = convertCoinsToDisplayValues({prices, coins: balances});
    const desiredCoins = convertCoinsToDisplayValues({prices, coins: desired});

    // returns a list of the available coins
    const availableCoins = balances.reduce((m, coin)=> {
        const { denom } = coin;
        const desiredCoin = desiredCoins.find((c)=>c.denom===denom);
        if (!desiredCoin) {
            return [...m, coin];
        }

        const diff = Number(coin.amount) - Number(desiredCoin.amount);
        if (diff <= 0) {
            return m;
        }

        return [...m, {
            denom: coin.denom,
            amount: diff
        }];
    }, []);

    // coins needed
    const desiredCoinsNeeded = desired.reduce((m, coin)=> {
        const { denom } = coin;
        const current = currentCoins.find((c)=>c.denom===denom);
        if (!current) {
            return [...m, coin];
        }
        const diff = {
            denom: coin.denom,
            amount: Number(coin.amount) - Number(current.amount)
        };
        if (diff.amount <= 0) return m;
        return [...m, diff];
    }, []);

    const availableCoinsValue = calculateCoinsBalance({prices, coins: availableCoins });
    const desiredCoinsNeededValue = calculateCoinsBalance({prices, coins: desiredCoinsNeeded });

    const availableCoinsWithValues = convertCoinsToDisplayValues({prices, coins: availableCoins });
    const desiredCoinsNeededWithValues = convertCoinsToDisplayValues({prices, coins: desiredCoinsNeeded });

 
    if (desiredCoinsNeededValue >= availableCoinsValue) {
        throw new Error('not possible yet with current cases');
    }

    // trades are required
    const trades = desiredCoinsNeededWithValues.reduce((m, coin)=> {
        let valueNeeded = coin.value;
        for (let i=0; i<availableCoinsWithValues.length; i++) {
            if (valueNeeded <= 0) continue;
            const current = availableCoinsWithValues[i];
            if (coin.symbol === current.symbol) continue;

            if (current.value >= valueNeeded) {
                // console.log(`I desired:${coin.symbol} avail:${current.symbol}`);
                // console.log(`I valueNeeded:${valueNeeded}`);
                // 1. value is more than what is needed
                // TAKE WHAT YOU NEED
                const leftOver = current.value - valueNeeded;
                const amountUsed = valueNeeded;
                valueNeeded -= amountUsed;
                
                m.push({
                    sell: convertCoinValueToCoin({prices, denom: current.denom, value: amountUsed}),
                    buy: convertCoinValueToCoin({prices, denom: coin.denom, value: amountUsed}),
                    beliefValue: amountUsed
                });
                
                current.value = leftOver;
                availableCoinsWithValues[i].value = leftOver;
            } else if (current.value < valueNeeded) {               
                // console.log(`II desired:${coin.symbol} avail:${current.symbol}`);
                // console.log(`II valueNeeded:${valueNeeded}`);
                // 2. value is less than what is needed
                // TAKE IT ALL!
                const amountUsed = current.value;
                valueNeeded -= amountUsed;

                m.push({
                    sell: convertCoinValueToCoin({prices, denom: current.denom, value: amountUsed}),
                    buy: convertCoinValueToCoin({prices, denom: coin.denom, value: amountUsed}),
                    beliefValue: amountUsed
                });

                current.value = 0;
                availableCoinsWithValues[i].value = 0;

            }

        }
        return m;
    }, []);

    const balanceLeft = []

    return {trades, balanceLeft};
};