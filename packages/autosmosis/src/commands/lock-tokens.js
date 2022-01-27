import { prompt, promptOsmoWallet } from '../utils';
import { promptChain } from '../utils';
import { getClient, signAndBroadcast, messages } from '../messages';
import { coin } from '@cosmjs/amino';

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

  // TODO add to Osmo Client
  // https://lcd-osmosis.keplr.app/osmosis/pool-incentives/v1beta1/lockable_durations
  const durations = [
    { name: '1 Day', value: "86400000000000" },
    { name: '7 Days', value: "604800000000000" },
    { name: '14 Days', value: "1209600000000000" },
  ];

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
        choices: ['localnet-1', 'osmosis-testnet-0', 'osmosis-1']
      },
      {
        type: 'list',
        name: 'rpcUrl',
        message: 'RpcUrl',
        choices: [...rpc, ...osmosTestnetRpcs]
      },
      {
        type: 'list',
        name: 'duration',
        message: 'duration',
        choices: durations
      }
      //   {
      //     type: 'list',
      //     name: 'restUrl',
      //     message: 'restUrl',
      //     choices: [...rest, ...osmosTestnetRests]
      //   }
    ];
    const { restUrl, rpcUrl, chainId, duration } = await prompt(questions, argv);
    if (osmosTestnetRests.includes(restUrl)) {
      console.log('WARN: using TESTNET');
    }

    const client = await getClient({ rpcEndpoint: rpcUrl, wallet });
    const address = account.address;
    const { msg, fee } = messages.lockTokens({
      owner: address,
      coins: [
        coin("50000000000000000000", 'gamm/pool/606'),
      ],
      duration
    });

    console.log({ chainId, address, msg, fee });
    console.log(JSON.stringify({ msg }, null, 2));
    const res = await signAndBroadcast({ client, chainId, address, msg, fee });

    console.log(res);
  } catch (e) {
    console.log('error ' + e);
  }
};
