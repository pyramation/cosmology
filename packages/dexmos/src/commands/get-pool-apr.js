import { OsmosisValidatorClient } from '../clients/validator';
import {  prompt } from '../utils';

const client = new OsmosisValidatorClient();

const getPools = async (argv) => {
    if (argv.poolId) return [];
    const pools = await client.getPools();
    return Object.keys(pools).map(poolId=> {
        if (pools[poolId][0].liquidity > argv['liquidity-limit']) {
            return {
                name: pools[poolId].map(a=>a.symbol).join('/'),
                value: poolId
            };
        }
    }).filter(Boolean);
};

const convertAprToApy = (apr) => 
     Math.pow(1 + (apr / 365), 365) - 1;

const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
const BLOCKS_IN_A_YEAR = SECONDS_PER_YEAR / 14;
const aprToApy = (interest, frequency = BLOCKS_IN_A_YEAR) => ((1 + (interest / 100) / frequency) ** frequency - 1) * 100;


const convertAprToApyObj = (obj) => {
    return {
        ...obj,
        apy_1d: aprToApy(obj.apr_1d),
        apy_7d: aprToApy(obj.apr_7d),
        apy_14d: aprToApy(obj.apr_14d)
    }
}
    

export default async (argv) => {

    if (!argv['liquidity-limit']) argv['liquidity-limit'] = 100_000;

    const pools = await getPools(argv);
    let { poolId } = await prompt(
        [
            {
                type: 'checkbox',
                name: 'poolId',
                message: 'poolId',
                choices: pools
            }
        ],
        argv
    );

    if (!Array.isArray(poolId)) {
        poolId = [poolId];
    }

    for (let p=0; p<poolId.length; p++) {
        const now = Date.now();

        const [{apr_list}] = await client.getPoolApr(poolId[p]);

        const osmoIncentives = apr_list.filter(i=>
            new Date(i.start_date) <= new Date() && i.symbol == 'OSMO').map(convertAprToApyObj)
        
        const externalIncentives = apr_list.filter(i=>
            new Date(i.start_date) <= new Date() && i.symbol != 'OSMO').map(convertAprToApyObj)
        
        const futureIncentives = apr_list.filter(i=>
            new Date(i.start_date) > new Date()).map(convertAprToApyObj)
        
        const totalIncentives = convertAprToApyObj(apr_list.filter(i=>
                new Date(i.start_date) <= new Date())
                .reduce((m, incentive)=> {
                    m.apr_1d += incentive.apr_1d;
                    m.apr_7d += incentive.apr_7d;
                    m.apr_14d += incentive.apr_14d;
                    return m;
                }, {
                    apr_1d: 0,
                    apr_7d: 0,
                    apr_14d: 0
                }))

        console.log(`POOL ${poolId[p]}`);
        console.log({
            osmoIncentives,
            externalIncentives,
            futureIncentives,
            totalIncentives
        });


    }


};
