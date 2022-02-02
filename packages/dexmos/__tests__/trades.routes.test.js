// @ts-nocheck
import validatorPricesFixture from '../__fixtures__/imperator/tokens/v2/all/data.json';
import poolsFixture from '../__fixtures__/keplr/osmosis/gamm/v1beta1/pools/data.json';
import lockedPoolsFixture from '../__fixtures__/keplr/osmosis/lockup/v1beta1/account_locked_coins/osmo1/data.json';

import {
    symbolsAndDisplayValuesToCoinsArray,
    getTradesRequiredToGetBalances,
    convertWeightsIntoCoins,
    getFilteredPoolsWithValues,
    convertValidatorPricesToDenomPriceHash
} from '../src/utils/osmo';

const prices = convertValidatorPricesToDenomPriceHash(validatorPricesFixture);
const pools = getFilteredPoolsWithValues({ prices, pools: poolsFixture.pools })

describe('trade routes', () => {
    const balances = symbolsAndDisplayValuesToCoinsArray(
        [
            {
                symbol: 'ATOM',
                amount: 100
            },
            {
                symbol: 'OSMO',
                amount: 1000
            }
        ]
    );
    
    
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

    it('determines pool allocations', async () => {
        // - [x] determine value of each allocation
        // - [x] given value of pool allocation, determine amount of coins
        const result = convertWeightsIntoCoins({ weights, pools, prices, balances });
        expect(result).toMatchSnapshot();
    });



    it('pool trades', async () => {
        // - [x] determine trades required for pools
        const result = convertWeightsIntoCoins({ weights, pools, prices, balances });
        for (let i=0; i<result.pools.length; i++) {
            const desired = result.pools[i].coins;
            const trades = getTradesRequiredToGetBalances({ prices, balances, desired })
            const a = {
                name: result.pools[i].name,
                trades
            };
            expect(a).toMatchSnapshot();
        }
    });

    it('determines pool allocations', async () => {
        // - [x] determine trades required for coins
        const result = convertWeightsIntoCoins({ weights, pools, prices, balances });
        const trades = getTradesRequiredToGetBalances({ prices, balances, desired: result.coins })
        expect(trades).toMatchSnapshot();
    });
});
