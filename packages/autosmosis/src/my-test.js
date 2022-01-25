import { OsmosisClient } from '../src/clients/osmosis';
import { coins, coin } from '@cosmjs/launchpad';
import {
  DeepPartial,
  MsgDelegate
} from 'cosmjs-types/cosmos/staking/v1beta1/tx';

import { Secp256k1HdWallet, SigningCosmosClient } from '@cosmjs/launchpad';
import { AminoTypes, SigningStargateClient, StargateClient } from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx';

const mnemonic =
  'mammal wrestle hybrid cart choose flee transfer filter fly object swamp rookie';
const go = async () => {
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'osmo'
  });
  const [{ address }] = await wallet.getAccounts();
  const rpcEndpoint = 'http://143.244.147.126:26657';
  const registry = new Registry();

  const aminoTypes = new AminoTypes({
    additions: {
      '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn': {
        aminoType: 'osmosis/gamm/swap-exact-amount-in',
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => {
          return {
            sender,
            routes,
            token_in: tokenIn,
            token_out_min_amount: tokenOutMinAmount
          }
        },
        fromAmino: ({ sender, routes, token_in, token_out_min_amount }) => {
          return {
            sender,
            routes,
            tokenIn: token_in,
            tokenOutMinAmount: token_out_min_amount
          }
        }
      }
    }
  })

  registry.register('/osmosis.gamm.v1beta1.MsgSwapExactAmountIn', MsgSend);
  registry.register('/osmosis/gamm/swap-exact-amount-in', MsgSend);
  registry.register('osmosis/gamm/swap-exact-amount-in', MsgSend);
  registry.register('osmosis.gamm.swap-exact-amount-in', MsgSend);
  registry.register('/osmosis.gamm.swap-exact-amount-in', MsgSend);


  // console.log("type",registry.lookupType('/osmosis.gamm.v1beta1.MsgSwapExactAmountIn').)

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    { registry: registry, aminoTypes: aminoTypes }
  );

  const fee = {
    amount: coins(0, 'uosmo'),
    gas: '250000'
  };
  const msg = {
    typeUrl: '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn',
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
  const signed = await client.sign(address, [msg], fee, 'mymemo');

  console.log(signed);
  // maybe we need to update registry

  //   const client = new OsmosisClient({
  //     wallet,
  //     rpcEndpoint: 'http://143.244.147.126:26657'
  //   });

  //   await client.init();

  //   const obj = await client.swapExactAmountIn({
  //     sender: TEST_ADDR1,
  //     routes: [
  //       {
  //         poolId: '606',
  //         tokenOutDenom:
  //           'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
  //       }
  //     ],
  //     tokenIn: {
  //       denom:
  //         'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
  //       amount: '4091500000'
  //     },
  //     tokenOutMinAmount: '733197'
  //   });

  //   const signed = await client.sign(obj);

  //   console.log('obj transaction:', signed);
};

go();
