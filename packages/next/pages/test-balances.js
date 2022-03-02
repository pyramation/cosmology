import React, { Component, useState } from 'react';

import { Bech32Address } from '@keplr-wallet/cosmos';

import { OsmosisApiClient, getCoinFromDenom } from 'dexmos';

import { Keplr } from '@keplr-wallet/types';


const BalanceTest = (props) => {

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

        // const osmoChainConfig = EmbedChainInfos[0] (do we need to get the other chains as well?)
        const osmoChainConfig = {
            rpc: 'https://rpc-osmosis.keplr.app',
            rest: 'https://lcd-osmosis.keplr.app',
            chainId: 'osmosis-1',
            chainName: 'Osmosis',
            stakeCurrency: {
                coinDenom: 'OSMO',
                coinMinimalDenom: 'uosmo',
                coinDecimals: 6,
                coinGeckoId: 'osmosis',
                coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
            },
            bip44: {
                coinType: 118,
            },
            bech32Config: Bech32Address.defaultBech32Config('osmo'),
            currencies: [
                {
                    coinDenom: 'OSMO',
                    coinMinimalDenom: 'uosmo',
                    coinDecimals: 6,
                    coinGeckoId: 'osmosis',
                    coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
                },
                {
                    coinDenom: 'ION',
                    coinMinimalDenom: 'uion',
                    coinDecimals: 6,
                    coinGeckoId: 'ion',
                    coinImageUrl: window.location.origin + '/public/assets/tokens/ion.png',
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: 'OSMO',
                    coinMinimalDenom: 'uosmo',
                    coinDecimals: 6,
                    coinGeckoId: 'osmosis',
                    coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
                },
            ],
            features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
            explorerUrlToTx: 'https://www.mintscan.io/osmosis/txs/{txHash}',
        };

        const client = new OsmosisApiClient({
            url: osmoChainConfig.rest
        });

        // get public key (address)
        getKeplr().enable(osmoChainConfig.chainId);
        const offlineSigner = getKeplr().getOfflineSigner(osmoChainConfig.chainId);
        const accounts = await offlineSigner.getAccounts();
        const osmoAddress = accounts[0].address;
        console.log(osmoAddress);

        // get balances
        const data = await client.getBalances(osmoAddress)
        console.log({ data });

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

export default BalanceTest
