import { prompt, promptOsmoWallet } from '../utils';
import { promptChain  } from '../utils';
import { getClient, signAndBroadcast, messages } from '../messages';

export default async (argv) => {
  argv.chainToken = 'OSMO';
  const osmosTestnetRests = ['http://143.244.147.126:1317'].map(value => {
    return {
      name: `${value} (testnet)`,
      value
    }
  });
  const osmosTestnetRpcs = ['http://143.244.147.126:26657'].map(value => {
    return {
      name: `${value} (testnet)`,
      value
    }
  });

  const chain = await promptChain(argv);
  const wallet = await promptOsmoWallet(argv);
  const [account] = await wallet.getAccounts();

  try {
    // const rest = chain.apis.rest.map(({ address }) => address);
    const rpc = chain.apis.rpc.map(({ address }) => address).map(value => {
      return {
        name: `${value} (mainnet)`,
        value
      }
    });
    const questions = [
      {
        type: 'list',
        name: 'chainId',
        message: 'chainId',
        choices: ['localnet-1', 'osmosis-testnet-0']
      },
      {
        type: 'list',
        name: 'rpcUrl',
        message: 'RpcUrl',
        choices: [...rpc, ...osmosTestnetRpcs]
      }
      //   {
      //     type: 'list',
      //     name: 'restUrl',
      //     message: 'restUrl',
      //     choices: [...rest, ...osmosTestnetRests]
      //   }
    ];
    const { restUrl, rpcUrl, chainId } = await prompt(questions, argv);
    if (osmosTestnetRests.includes(restUrl)) {
      console.log('WARN: using TESTNET');
    }

    const client = await getClient({ rpcEndpoint: rpcUrl, wallet });
    const address = account.address;
    const { msg, fee } = messages.swapExactAmountIn({
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
    });

    console.log({ chainId, address, msg, fee });
    const res = await signAndBroadcast({ client, chainId, address, msg, fee });

    console.log(res);
  } catch (e) {
    console.log('error ' + e);
  }
};
