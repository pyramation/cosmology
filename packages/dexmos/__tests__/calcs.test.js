// @ts-nocheck
import pricesFixture from '../__fixtures__/coingecko/api/v3/simple/price/data.json';
import bankFixture from '../__fixtures__/keplr/bank/balances/osmo1x/data.json';
import poolsFixture from '../__fixtures__/keplr/osmosis/gamm/v1beta1/pools/data.json';
import { Token } from '../src/model/Token';
import { assets, chains } from '@pyramation/cosmos-registry';
import { assets as osmosisAssets } from '../src/assets';
import cases from 'jest-in-case';
import { displayUnitsToDenomUnits, baseUnitsToDisplayUnits, getOsmosisSymbolIbcName } from '../src/utils';

/*
    - [ ] give how much of each coin you're willing to sell
    - [ ] list of coins you want (via weights)
    - [ ] list of pools you want (via weights)


    - [ ] calculate value of LP pool
    */


// OSMOSIS ONLY FUNC
const getCoinGeckoIdForSymbol = (token) => {
    const rec = osmosisAssets.find(({ symbol }) => symbol === token);
    const geckoId = rec?.coingecko_id;
    if (!geckoId) {
        return console.log('cannot find coin');
    }
    return geckoId;
};

const getSymbolForCoinGeckoId = (geckoId) => {
    const rec = osmosisAssets.find(({ coingecko_id }) => coingecko_id === geckoId);
    const symbol = rec?.symbol;
    if (!symbol) {
        return console.log('cannot find coin');
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
        return console.log('cannot find symbol');
    }
    return symbol;
}

const symbolToOsmoDenom = (token) => {
    const rec = osmosisAssets.find(({ symbol }) => symbol === token);
    const base = rec?.base;
    if (!base) {
        return console.log('cannot find base');
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

cases('displayUnitsToDenomUnits)', opts => {
    expect(displayUnitsToDenomUnits(opts.name, opts.amount)).toBe(opts.value);
}, [
    { name: 'ATOM', amount: 10, value: 10000000 },
    { name: 'AKT', amount: .6, value: 600000 },
    { name: 'OSMO', amount: 10, value: 10000000 }
]);

cases('osmoDenomToSymbol)', opts => {
    expect(osmoDenomToSymbol(opts.denom)).toBe(opts.name);
}, [
    { name: 'ATOM', denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2' },
    { name: 'AKT', denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4' },
    { name: 'OSMO', denom: 'uosmo' }
]);

cases('symbolToOsmoDenom)', opts => {
    expect(symbolToOsmoDenom(opts.name)).toBe(opts.denom);
}, [
    { name: 'ATOM', denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2' },
    { name: 'AKT', denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4' },
    { name: 'OSMO', denom: 'uosmo' }
]);


const calculateCurrentPorfolioWithValues = ({ prices, balances }) => {
    const values = balances.map(({denom, amount}) => {
        const price = prices[denom];
        const symbol = osmoDenomToSymbol(denom);
        if (isNaN(price)) throw new Error('bad price, NaN.');
        const displayAmount = baseUnitsToDisplayUnits(symbol, amount)
        if (isNaN(displayAmount)) throw new Error('bad amount, NaN.');
        return {
            denom, 
            amount,
            displayAmount,
            value: displayAmount * prices[denom]
        };
    });
    return values;
};

const calculateCurrentPorfolioBalance = ({ prices, balances }) => {
    return calculateCurrentPorfolioWithValues
        ({prices, balances}).reduce((m, v)=> {
        const { value } = v;
        return value + m;
    }, 0);
};


const convertPricesToDenomPriceHash = (prices) => {
    return Object.keys(prices).reduce((m, geckoId) => {
        const symbol = getSymbolForCoinGeckoId(geckoId);
        const denom = symbolToOsmoDenom(symbol);
        m[denom] = prices[geckoId].usd;
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




it('calculate portfolio value (balances)', () => {
    const balances = [
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

    const prices = convertPricesToDenomPriceHash({
        cosmos: { usd: 1500 },
        'terra-luna': { usd: 68.91 },
        'akash-network': { usd: 22 },
        osmosis: { usd: 1000 },
        comdex: { usd: 4.13 },
        secret: { usd: 5.3 }
    });
    const value = calculateCurrentPorfolioBalance({prices, balances});
    expect(value).toBe(137000);
});

it('calculate pool value (user LP)', () => { });
it('calculate pool value (global)', () => { });

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
