import { prompt, promptOsmoWallet } from '../utils';
import { promptChain  } from '../utils';
import { getClient, signAndBroadcast, messages } from '../messages';
import { coin } from '@cosmjs/amino';

export default async (argv) => {
  argv.chainToken = 'OSMO';
  const osmosTestnetRests = ['http://143.244.147.126:1317'];
  const osmosTestnetRpcs = ['http://143.244.147.126:26657'];

  const chain = await promptChain(argv);
  const wallet = await promptOsmoWallet(argv);
  const [account] = await wallet.getAccounts();

  try {
    // const rest = chain.apis.rest.map(({ address }) => address);
    const rpc = chain.apis.rpc.map(({ address }) => address);
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
    const { msg, fee } = messages.joinPool({
      poolId: '606',
      sender: address,
      shareOutAmount: '101010101',
      tokenIn: coin(0, 'uosmo'),
      tokenInMaxs: [
        coin(10, 'uatom'),
        coin(20, 'uosmo')
      ]
    });

    console.log({ chainId, address, msg, fee });
    const res = await signAndBroadcast({ client, chainId, address, msg, fee });

    console.log(res);
  } catch (e) {
    console.log('error ' + e);
  }
};
