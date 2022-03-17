import { chains } from '@cosmology/cosmos-registry';
import { prompt } from '../utils';
import { osmoRestClient } from '../utils';
import { getSigningOsmosisClient } from '../messages/utils';
import { messages } from '../messages/messages';
import { signAndBroadcastTilTxExists } from '../messages/utils';

const osmoChainConfig = chains.find((el) => el.chain_name === 'osmosis');
// const restEndpoint = osmoChainConfig.apis.rest[0].address;
const rpcEndpoint = osmoChainConfig.apis.rpc[0].address;

export default async (argv) => {
  const { client, wallet: signer } = await osmoRestClient(argv);
  const [account] = await signer.getAccounts();

  const accountBalances = await client.getBalances(account.address);

  const gammTokens = accountBalances.result
    .filter((a) => a.denom.startsWith('gamm'))
    .map((obj) => {
      return {
        ...obj,
        poolId: obj.denom.split('/')[2]
      };
    });

  if (!gammTokens.length) {
    return console.log('no gamm tokens to stake');
  }

  const { poolId } = await prompt(
    [
      {
        type: 'list',
        name: 'poolId',
        message: 'choose pools to invest in',
        choices: gammTokens.map((gamm) => {
          return gamm.poolId;
        })
      }
    ],
    argv
  );

  if (Array.isArray(poolId)) throw new Error('only atomic joins right now.');

  let { duration } = await prompt(
    [
      {
        type: 'list',
        name: 'duration',
        message: 'unbonding duration (days)',
        choices: [14, 7, 1]
      }
    ],
    argv
  );

  switch (duration) {
    case 1:
    case '1':
      duration = '86400000';
      break;
    case 7:
    case '7':
      duration = '604800000';
      break;
    default:
      duration = '1209600000';
      break;
  }

  const coins = [gammTokens.find((gamm) => gamm.poolId === poolId)].map(
    ({ denom, amount }) => ({ amount, denom })
  );
  const { msg, fee } = messages.lockTokens({
    owner: account.address,
    coins,
    duration
  });

  console.log(JSON.stringify(msg, null, 2));

  const accounts = await signer.getAccounts();
  const osmoAddress = accounts[0].address;
  const stargateClient = await getSigningOsmosisClient({
    rpcEndpoint,
    signer
  });

  const res = await signAndBroadcastTilTxExists({
    client: stargateClient,
    cosmos: client,
    chainId: osmoChainConfig.chain_id,
    address: osmoAddress,
    msg,
    fee,
    memo: ''
  });

  const block = res?.tx_response?.height;

  if (block) {
    console.log(`success at block ${block}`);
  } else {
    console.log('no block found for tx!');
  }
  console.log('\n\n\n\n\ntx');
  console.log(res);
};
