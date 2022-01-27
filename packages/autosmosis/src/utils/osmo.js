import { prompt, promptOsmoWallet } from '../utils';
import { promptChain  } from '../utils';
import { getClient } from '../messages';

export const osmoRpcClient = async (argv) => {
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
//   const [account] = await wallet.getAccounts();

  try {
    // const rest = chain.apis.rest.map(({ address }) => address);
    const rpc = chain.apis.rpc.map(({ address }) => address).map(value => {
      return {
        name: `${value} (mainnet)`,
        value
      }
    });
    if (process.env.CHAIN_ID) {
        argv.chainId = process.env.CHAIN_ID;
    }
    if (process.env.RPC_ENDPOINT) {
        argv.rpcEndpoint = process.env.RPC_ENDPOINT;
    }
    
    const questions = [
      {
        type: 'list',
        name: 'chainId',
        message: 'chainId',
        choices: ['localnet-1', 'osmosis-testnet-0', 'osmosis-1']
      },
      {
        type: 'list',
        name: 'rpcEndpoint',
        message: 'rpcEndpoint',
        choices: [...rpc, ...osmosTestnetRpcs]
      }
      //   {
      //     type: 'list',
      //     name: 'restEndpoint',
      //     message: 'restEndpoint',
      //     choices: [...rest, ...osmosTestnetRests]
      //   }
    ];
    const { rpcEndpoint, chainId } = await prompt(questions, argv);
    // if (osmosTestnetRests.includes(restEndpoint)) {
    //   console.log('WARN: using TESTNET');
    // }

    const client = await getClient({ rpcEndpoint: rpcEndpoint, wallet });
    // const address = account.address;

    argv.chainId = chainId;
    argv.rpcEndpoint = rpcEndpoint;
    // argv.restEndpoint = restEndpoint;
    return {client, wallet};

} catch (e) {
    console.log('error ' + e);
  }
};
