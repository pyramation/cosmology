// @ts-nocheck
import pricesFixture from '../__fixtures__/coingecko/api/v3/simple/price/data.json';
import bankFixture from '../__fixtures__/keplr/bank/balances/osmo1x/data.json';
import poolsFixture from '../__fixtures__/keplr/osmosis/gamm/v1beta1/pools/data.json';
import lockedPoolsFixture from '../__fixtures__/keplr/osmosis/lockup/v1beta1/account_locked_coins/osmo1/data.json';
import { Token } from '../src/model/Token';
import { assets, chains } from '@pyramation/cosmos-registry';
import { assets as osmosisAssets } from '../src/assets';
import cases from 'jest-in-case';
import { displayUnitsToDenomUnits, baseUnitsToDisplayUnits, getOsmosisSymbolIbcName } from '../src/utils';
import Long from 'long';

/*
    - [ ] give how much of each coin you're willing to sell
    - [ ] list of coins you want (via weights)
    - [ ] list of pools you want (via weights)

    - [x] calculate value of LP pool
    - [x] filter pools that have LOW value or are NOT calculable...
    */


// OSMOSIS ONLY FUNC
const getCoinGeckoIdForSymbol = (token) => {
    const rec = osmosisAssets.find(({ symbol }) => symbol === token);
    const geckoId = rec?.coingecko_id;
    if (!geckoId) {
        return console.log(`cannot find coin: ${symbol}`);
    }
    return geckoId;
};

const getSymbolForCoinGeckoId = (geckoId) => {
    const rec = osmosisAssets.find(({ coingecko_id }) => coingecko_id === geckoId);
    const symbol = rec?.symbol;
    if (!symbol) {
        console.log(`WARNING: cannot find coin for geckoId: ${geckoId}`);
    }
    return symbol;
};

cases('getCoinGeckoIdForSymbol', opts => {
    expect(getCoinGeckoIdForSymbol(opts.name)).toBe(opts.geckoId);
}, [
    { name: 'ATOM', geckoId: 'cosmos' },
    { name: 'AKT', geckoId: 'akash-network' },
    { name: 'OSMO', geckoId: 'osmosis' }
]);

cases('getSymbolForCoinGeckoId', opts => {
    expect(getSymbolForCoinGeckoId(opts.geckoId)).toBe(opts.name);
}, [
    { name: 'ATOM', geckoId: 'cosmos' },
    { name: 'AKT', geckoId: 'akash-network' },
    { name: 'OSMO', geckoId: 'osmosis' }
]);


const osmoDenomToSymbol = (ibcName) => {
    const rec = osmosisAssets.find(({ base }) => base === ibcName);
    const symbol = rec?.symbol;
    if (!symbol) {
        // console.log(`cannot find symbol ${ibcName} `);
        return null;
    }
    return symbol;
}

const symbolToOsmoDenom = (token) => {
    const rec = osmosisAssets.find(({ symbol }) => symbol === token);
    const base = rec?.base;
    if (!base) {
        return console.log(`cannot find base for token ${token}`);
    }
    return base;
}


class OsmosisToken {
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

cases('displayUnitsToDenomUnits', opts => {
    expect(displayUnitsToDenomUnits(opts.name, opts.amount)).toBe(opts.value);
}, [
    { name: 'ATOM', amount: 10, value: 10000000 },
    { name: 'AKT', amount: .6, value: 600000 },
    { name: 'OSMO', amount: 10, value: 10000000 }
]);

cases('osmoDenomToSymbol', opts => {
    expect(osmoDenomToSymbol(opts.denom)).toBe(opts.name);
}, [
    { name: 'ATOM', denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2' },
    { name: 'AKT', denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4' },
    { name: 'OSMO', denom: 'uosmo' }
]);

cases('symbolToOsmoDenom', opts => {
    expect(symbolToOsmoDenom(opts.name)).toBe(opts.denom);
}, [
    { name: 'ATOM', denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2' },
    { name: 'AKT', denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4' },
    { name: 'OSMO', denom: 'uosmo' }
]);


const convertCoinToDisplayValues = ({ prices, coin }) => {
    const {denom, amount} = coin;
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

const convertCoinsToDisplayValues = ({ prices, coins }) => 
     coins.map((coin) => convertCoinToDisplayValues({prices, coin}));

const calculateCurrentPorfolioBalance = ({ prices, coins }) => {
    return convertCoinsToDisplayValues
        ({prices, coins}).reduce((m, v)=> {
        const { value } = v;
        return value + m;
    }, 0);
};


const convertPricesToDenomPriceHash = (prices) => {
    return Object.keys(prices).reduce((m, geckoId) => {
        const symbol = getSymbolForCoinGeckoId(geckoId);
        if (symbol) {
            const denom = symbolToOsmoDenom(symbol);
            m[denom] = prices[geckoId].usd;
        }
        return m;
    }, {});
};

cases('convertPricesToDenomPriceHash', opts => {
    expect(convertPricesToDenomPriceHash(opts.prices)).toEqual(opts.hash);
}, [
    {
        name: 'test1',
        prices: { 'akash-network': {usd: 100}, cosmos: {usd: 20} },
        hash: {
            "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4": 100,
            "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2": 20
        }
    }
]);
const getPoolByGammName = (pools, gammId) => {
    return pools.find(({totalShares: { denom }}) => denom === gammId);
};

const getUserPools = ({pools, lockedPools}) => {
    return lockedPools.map(({denom, amount})=> {
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

cases('getPoolByGammName', opts => {
    const prices = convertPricesToDenomPriceHash(pricesFixture)
    const pools = getFilteredPoolsWithValues({prices, pools: poolsFixture.pools})
    expect(getPoolByGammName(pools, opts.name).id).toEqual(opts.poolId);
}, [
    {
        name: 'gamm/pool/1',
        poolId: "1"
    },
    {
        name: 'gamm/pool/600',
        poolId: "600"
    }
]);

const convertPoolToDisplayValues = ({prices, pool}) => {
    const { totalShares, poolAssets } = pool;
    let totalValue = 0;
    pool.displayPoolAssets = poolAssets.map(({token, weight})=> {
        const value = convertCoinToDisplayValues({prices, coin: token});
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
    pool.pricePerShare = Number(totalValue) / Number(totalShares.amount) * Math.pow(10,18),
    pool.pricePerShare = Number(totalValue) / Number(totalShares.amount) 
    return pool;
};

const convertPoolsToDisplayValues = ({prices, pools}) => 
     pools.map(pool=> convertPoolToDisplayValues({prices, pool}) );
    
const getFilteredPoolsWithValues = ({prices, pools}) => 
    convertPoolsToDisplayValues({prices, pools})
    // remove small pools    
    .filter(({totalValue})=>totalValue>=100000)
    // remove DIG or VIDL or coins not on coingecko that don't get prices    
    .filter(({poolAssets, displayPoolAssets})=>poolAssets.length===displayPoolAssets.length);

describe('basic portfolio', ()=> {
    const coins = [
        {
            symbol: 'ATOM',
            amount: 10
        },
        {
            symbol: 'AKT',
            amount: 1000
        },
        {
            symbol: 'OSMO',
            amount: 100
        }
    ].map(({ symbol, amount }) => {
        return (new OsmosisToken({ symbol, amount })).toJSON();
    });

    const prices = convertPricesToDenomPriceHash(pricesFixture)

    it('calculate portfolio value (balances)', () => {
        const value = calculateCurrentPorfolioBalance({prices, coins});
        expect(value).toBe(3086.3);
    });
    
    it('calculate pool value (global)', () => {
        const values = getFilteredPoolsWithValues({prices, pools: poolsFixture.pools})
        // console.log(JSON.stringify(values, null, 2))
        const [first, second] = values;
        expect(first).toMatchSnapshot();
        expect(second).toMatchSnapshot();
    });
    


    it('calculate pool value (user LP)', () => {
        const pools = getFilteredPoolsWithValues({prices, pools: poolsFixture.pools})
        const result = getUserPools({pools, lockedPools: lockedPoolsFixture.coins})
        expect(result).toMatchSnapshot();
    });
    
    

});



it('calcs', async () => {
    // console.log(prices);
    // console.log(bank);
    // console.log(pools);
    // let driver = new Driver()
    // const jobs = await driver.getAllJobs([
    //   { "type": "coin", "coin": "UST", "weight": 0.3 },
    //   { "type": "pool", "pool": { "id": 562, "coin1": "LUNA", "coin2": "UST", "balance": 0.5 }, "weight": 0.3 },
    //   { "type": "pool", "pool": { "id": 611, "coin1": "ATOM", "coin2": "STARS", "balance": 0.7 }, "weight": 0.4 }
    // ])
    // console.log(jobs);
    // expect(jobs.length).toEqual(10)

    // expect(jobs[0].job.inputCoin).toEqual("LUNA")
    // expect(jobs[0].job.targetCoin).toEqual("UST")
    // expect(jobs[0].job.amount).toBeGreaterThan(0)

    // expect(jobs[5].job.inputCoin).toEqual("UST")
    // expect(jobs[5].job.targetCoin).toEqual("STARS")
    // expect(jobs[5].job.amount).toBeGreaterThan(0)
})
