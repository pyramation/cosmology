import { coins } from '@cosmjs/launchpad';
import { Secp256k1HdWallet } from '@cosmjs/launchpad';
import axios from 'axios';
import { generateOsmoMessage, getClient, signAndBroadcast } from './messages';

const NET = process.env.local ? 'LOCAL' : 'TESTNET';

const mnemonic =
  NET === 'LOCAL'
    ? 'health nest provide snow total tissue intact loyal cargo must credit wrist'
    : 'mammal wrestle hybrid cart choose flee transfer filter fly object swamp rookie';

const chainId = NET === 'LOCAL' ? 'localnet-1' : 'osmosis-testnet-0';

// rpc
const rpcEndpoint =
  NET === 'LOCAL' ? 'http://10.0.0.15:26657' : 'http://143.244.147.126:26657';

// lcd
const lcdEndpoint =
  NET === 'LOCAL' ? 'http://10.0.0.15:1317' : 'http://143.244.147.126:1317';

export const main = async () => {
  // wallet
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'osmo'
  });
  // address
  const accounts = await wallet.getAccounts();
  const [{ address }] = accounts;
  // lcd for account info

  const authAccountInfo = await axios.get(
    `${lcdEndpoint}/auth/accounts/${address}`
  );

  console.log({ authAccountInfo: authAccountInfo.data.result.value });

  const client = await getClient({ rpcEndpoint, wallet });

  const { msg, fee } = generateOsmoMessage('swapExactAmountIn', {
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

  const res = await signAndBroadcast({ client, chainId, address, msg, fee });

  console.log(res);
};

main();
