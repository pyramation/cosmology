import React, { Component, useState } from 'react';
import {
    OsmosisApiClient,
    OsmosisValidatorClient,
    getCoinFromDenom,
    symbolsAndDisplayValuesToCoinsArray,
    getTradesRequiredToGetBalances,
    getSwaps,
    getFilteredPoolsWithValues,
    convertValidatorPricesToDenomPriceHash
} from 'dexmos';

import { chains } from '@pyramation/cosmos-registry';
import { Keplr } from '@keplr-wallet/types';

// TODO add test env switches
const osmoChainConfig = chains.find(el => el.chain_name === 'osmosis');
const restEndpoint = osmoChainConfig.apis.rest[0].address;
const SwapTest = (props) => {

    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [balances, setBalances] = useState([]);

    /**
     * 
     * @returns {Keplr}
     */
    const getKeplr = () => {
        if (typeof window === 'undefined') return null;
        else return window['keplr']
    }

    const getBalance = async () => {
        setLoading(true);
        setLoaded(false);
        setBalances([]);

        const client = new OsmosisApiClient({
            url: restEndpoint
        });

        // get public key (address)
        getKeplr().enable(osmoChainConfig.chain_id);
        const offlineSigner = getKeplr().getOfflineSigner(osmoChainConfig.chain_id);
        const accounts = await offlineSigner.getAccounts();
        const osmoAddress = accounts[0].address;
        console.log(osmoAddress);

        // get balances
        const data = await client.getBalances(osmoAddress)
        console.log({ data });

        // get prices
        const validator = new OsmosisValidatorClient({
            url: 'https://api-osmosis.imperator.co/'
        });
        const tokensAndPrices = await validator.getTokens();
        console.log(tokensAndPrices); 

        const pairsSummary = await validator.getPairsSummary();
        console.log(pairsSummary);

        const poolsInfo = await client.getPools();
        console.log(poolsInfo); 

        const prices = convertValidatorPricesToDenomPriceHash(tokensAndPrices);
        const pools = getFilteredPoolsWithValues({ prices, pools: poolsInfo.pools })

        console.log(prices);
        console.log(pools);

        // enrich balance data
        /**
         * @type {{
         * denom:string;
         * amount:number;
         * }[]}
         */

        if (data && data.result) {
            const balanceList = data.result;
            const enrichedBalanceList = [];
            for (let balance of balanceList) {
                const coin = getCoinFromDenom(balance.denom);
                enrichedBalanceList.push({
                    ...coin,
                    amount: balance.amount
                });
            }

            setBalances(enrichedBalanceList);
        }
        setLoading(false);
        setLoaded(true);
    }


    return <div >
        <button onClick={getBalance}>Get balance</button>
        {loading ?
            'Loading...' :
            balances.length ?
                balances.map(b => {
                    return <div className='horiz' key={b.base} style={{ borderBottom: '1px solid #212838' }}>
                        <img src={b.logo_URIs.png} width={50} height={50} style={{ padding: 8 }} />
                        <div style={{ marginLeft: 16 }}>
                            <h4 className='main-text'>{b.symbol}</h4>
                            <p className='detail-text' style={{ fontSize: 12 }}>{b.base}</p>
                        </div>
                        <h5 className='main-text' style={{ marginLeft: 'auto', marginRight: 8 }}>{b.amount}</h5>
                    </div>
                })
                :
                loaded ?
                    "Didn't find any non-zero balances."
                    :
                    ""}
    </div>
}

export default SwapTest;
