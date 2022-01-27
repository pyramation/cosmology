import { coins, coin, SigningCosmosClient, makeSignDoc, makeStdTx } from './moduleSrc/@cosmjs/launchpad';
import { Secp256k1HdWallet } from '@cosmjs/launchpad';
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { decodeTxRaw, Registry } from '@cosmjs/proto-signing';
import { osmosis } from './proto/generated/codecimpl';
import axios from 'axios';
import { mnemonic as mn, chainId as ci, rpcEndpoint as rpc, lcdEndpoint as lcd } from './my-test';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';
import { BaseAccount, cosmos } from '@keplr-wallet/cosmos';
import { BroadcastMode } from './moduleSrc/@cosmjs/launchpad/build';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing';


const NET = 'LOCAL'; //process.env.local ? 'LOCAL' : 'TESTNET';

const mnemonic = mn;

const chainId = ci;

// rpc
const rpcEndpoint = rpc;

// lcd
const lcdEndpoint = lcd;

export const keplerMain = async () => {
    // wallet
    //   const wallet = await 
    // address
    // const accounts = await wallet.getAccounts();

    await window.keplr.enable(chainId);
    const offlineSigner = window.keplr.getOfflineSignerOnlyAmino(chainId);
    const accounts = await offlineSigner.getAccounts();

    const [{ address }] = accounts;

    console.log({ address });
    // lcd for account info

    // const authAccountInfo = await axios.get(
    //     `${lcdEndpoint}/auth/accounts/${address}`
    // );

    // console.log({ authAccountInfo: authAccountInfo.data.result.value });

    // registry
    const registry = new Registry();

    // aminotypes
    const aminoTypes = new AminoTypes({
        additions: {
            '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn': {
                aminoType: 'osmosis/gamm/swap-exact-amount-in',
                toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => {
                    return {
                        sender,
                        routes: routes.map((r) => {
                            return {
                                pool_id: r.poolId,
                                token_out_denom: r.tokenOutDenom
                            };
                        }),
                        token_in: tokenIn,
                        token_out_min_amount: tokenOutMinAmount
                    };
                },
                fromAmino: ({ sender, routes, token_in, token_out_min_amount }) => {
                    return {
                        sender,
                        routes: routes.map((r) => {
                            return {
                                poolId: r.pool_id,
                                tokenOutDenom: r.token_out_denom
                            };
                        }),
                        tokenIn: token_in,
                        tokenOutMinAmount: token_out_min_amount
                    };
                }
            }
        }
    });

    registry.register(
        '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn',
        osmosis.gamm.v1beta1.MsgSwapExactAmountIn
    );

    // const client = await SigningStargateClient.connectWithSigner(
    //     rpcEndpoint,
    //     wallet,
    //     { registry: registry, aminoTypes: aminoTypes }
    // );

    const client = new SigningCosmosClient(
        "/api/lcd",
        accounts[0].address,
        offlineSigner,
    );

    const fee = {
        amount: coins(0, 'uosmo'),
        gas: '250000'
    };

    const msg = {
        type: '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn',
        value: {
            sender: address,
            routes: [
                {
                    poolId: '606',
                    tokenOutDenom:
                        'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
                }
            ],
            tokenIn: {
                denom:
                    'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
                amount: '4091500000'
            },
            tokenOutMinAmount: '733197'
        }
    };

    const protoMsg = {
        type_url: '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn',
        value: osmosis.gamm.v1beta1.MsgSwapExactAmountIn.encode({
            sender: msg.value.sender,
            routes: msg.value.routes.map((route) => {
                return {
                    poolId: Long.fromString(route.poolId),
                    tokenOutDenom: route.tokenOutDenom,
                };
            }),
            tokenIn: msg.value.tokenIn,
            tokenOutMinAmount: msg.value.tokenOutMinAmount,
        }).finish(),
    }

    // const ourKeplr = new KeplrWalletConnectV1()
    const tx = await client.sign([msg], fee, null);
    const res = await window.keplr.sendTx(chainId, tx, BroadcastMode.Block);
    console.log(res);
    // client.signAndBroadcast([msg], fee, 'fuck');

    // const { accountNumber, sequence } = await client.getSequence(address);

    // const signDoc = makeSignDoc([msg], fee, chainId, 'memotestt', accountNumber, sequence);
    // const signResponse = await window.keplr.signAmino(chainId, address, signDoc, undefined);

    //makeStdTx(signResponse.signed, signResponse.signature)

    // const result = await window.keplr.sendTx(chainId, stdTx, BroadcastMode.Block);
    // console.log({ result });
    // console.log({address});
    // const { accountNumber, sequence } = await client.getSequence(address);

    // console.log({ accountNumber, sequence });

    // const result = await client.signAndBroadcast([msg], fee, 'memo')

    // const stdTx = await client.sign([msg], fee, 'memmon');
    // console.log({ stdTx });

    // // const txBytes = TxRaw.encode(stdTx).finish();
    // const result = await client.broadcastTx
    // const result = await client.broadcastTx(stdTx);

    // console.log({ result });
};
