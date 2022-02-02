// @ts-nocheck
import validatorPricesFixture from '../__fixtures__/imperator/tokens/v2/all/data.json';
import pairsFixture from '../__fixtures__/imperator/pairs/v1/summary/data.json';
import poolsFixture from '../__fixtures__/keplr/osmosis/gamm/v1beta1/pools/data.json';
import lockedPoolsFixture from '../__fixtures__/keplr/osmosis/lockup/v1beta1/account_locked_coins/osmo1/data.json';

import {
    symbolsAndDisplayValuesToCoinsArray,
    getTradesRequiredToGetBalances,
    lookupRoutesForTrades,
    getFilteredPoolsWithValues,
    convertValidatorPricesToDenomPriceHash
} from '../src/utils/osmo';

const prices = convertValidatorPricesToDenomPriceHash(validatorPricesFixture);
const pools = getFilteredPoolsWithValues({ prices, pools: poolsFixture.pools })


it('single route swaps', async () => {
    const balances = symbolsAndDisplayValuesToCoinsArray(
        [
            {
                symbol: 'ATOM',
                amount: 1000
            },
            {
                symbol: 'OSMO',
                amount: 1000
            }
        ]
    );
    const desired = symbolsAndDisplayValuesToCoinsArray(
        [
            {
                symbol: 'STARS',
                amount: 1000
            },
            {
                symbol: 'CMDX',
                amount: 100
            },
            {
                symbol: 'HUAHUA',
                amount: 10000
            }
        ]
    );
    const trades = getTradesRequiredToGetBalances({ prices, balances, desired });

    console.log(trades);

    const routes = lookupRoutesForTrades({
         prices, pools, trades, pairs: pairsFixture.data
    });

    expect(routes).toMatchSnapshot();
});
