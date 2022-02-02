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
import {
    getCoinGeckoIdForSymbol,
    getSymbolForCoinGeckoId,
    osmoDenomToSymbol,
    symbolToOsmoDenom,
    OsmosisToken,
    convertCoinToDisplayValues,
    convertCoinsToDisplayValues,
    calculateCoinsBalance,
    convertPricesToDenomPriceHash,
    getPoolByGammName,
    getUserPools,
    convertPoolToDisplayValues,
    convertPoolsToDisplayValues,
    getFilteredPoolsWithValues,
    symbolsAndDisplayValuesToCoinsArray,
    getTradesRequiredToGetBalances,
    displayWeightsToCoinWeights
} from '../src/utils/osmo';

/*
 - [ ] list of coins you want (via weights)
 - [ ] list of pools you want (via weights)

 - [ ] calculate coins needed for pools
 - [ ] calculate routes for swaps
 */

const prices = convertPricesToDenomPriceHash(pricesFixture);
const pools = getFilteredPoolsWithValues({ prices, pools: poolsFixture.pools });


cases('getPoolByGammName', opts => {
    const prices = convertPricesToDenomPriceHash(pricesFixture)
    const pools = getFilteredPoolsWithValues({ prices, pools: poolsFixture.pools })
    expect(getPoolByGammName(pools, opts.name).id).toEqual(opts.poolId);
}, [
    {
        name: 'gamm/pool/1',
        poolId: "1"
    },
    {
        name: 'gamm/pool/600',
        poolId: "600"
    },
    {
        name: 'gamm/pool/606',
        poolId: "606"
    }
]);


it('parse weights', async () => {
    expect(displayWeightsToCoinWeights({weights: [
        {
            weight: 5,
            denom: 'gamm/pool/3'
        },
        {
            weight: 5,
            denom: 'gamm/pool/1'
        },
        {
            weight: 5,
            poolId: '600'
        },
        {
            weight: 5,
            denom: 'gamm/pool/606'
        },
        {
            weight: 2,
            symbol: 'LUNA',
            denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0'
        },
        {
            weight: 10,
            symbol: 'UST',
            denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC'
        }
    ], pools, prices})).toMatchSnapshot();
});

it('pools desired', async () => {
    // CONVERT WEIGHTS of POOLS/COINS into COINS

    const weights = [
        {
            weight: 5,
            denom: 'gamm/pool/3'
        },
        {
            weight: 5,
            denom: 'gamm/pool/1'
        },
        {
            weight: 5,
            poolId: '600'
        },
        {
            weight: 5,
            denom: 'gamm/pool/606'
        },
        {
            weight: 2,
            symbol: 'LUNA',
            denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0'
        },
        {
            weight: 10,
            symbol: 'UST',
            denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC'
        }
    ];


    const result = displayWeightsToCoinWeights({weights, pools, prices});
    expect(result).toMatchSnapshot();
    
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
