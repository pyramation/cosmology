import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { coins } from '@cosmjs/launchpad';

import { aminos } from './types';
import { msgs } from './msgs';

export const getClient = async ({ rpcEndpoint, wallet }) => {
  // registry
  const registry = new Registry();

  // aminotypes
  const aminoTypes = new AminoTypes({
    additions: Object.keys(aminos).reduce((m, key) => {
      const meta = msgs[key];
      const { toAmino, fromAmino } = aminos[key];
      m[meta.amino] = {
        aminoType: meta.type,
        toAmino,
        fromAmino
      };
      return m;
    }, {})
  });

  // register the goods
  Object.keys(aminos).forEach((key) => {
    const meta = msgs[key];
    registry.register(meta.amino, meta.osmosis);
  });

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    { registry: registry, aminoTypes: aminoTypes }
  );

  return client;
};

export const signAndBroadcast = async ({
  client,
  chainId,
  address,
  msg,
  fee
}) => {
  const { accountNumber, sequence } = await client.getSequence(address);
  const txRaw = await client.sign(address, [msg], fee, 'yolo-our-memo', {
    accountNumber: accountNumber,
    sequence: sequence,
    chainId
  });
  const txBytes = TxRaw.encode(txRaw).finish();
  return await client.broadcastTx(txBytes);
};

export const generateMessage = (name, msg) => {
  if (!msgs[name]) throw new Error('missing message.');
  const gas = msgs[name].gas + ''; // TEST if needs string or if number is ok
  const fee = {
    amount: coins(0, 'uosmo'),
    gas
  };

  return {
    fee,
    msg: {
      typeUrl: msgs[name].amino,
      value: msg
    }
  };
};
