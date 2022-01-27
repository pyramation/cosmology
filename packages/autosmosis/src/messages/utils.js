import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';

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
