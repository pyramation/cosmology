import { getClient } from "dexmos";

const RPC_URL = "http://143.244.147.126:26657";

export const initClient = async () => {
  const offlineSigner = window.keplr.getOfflineSigner("osmosis-testnet-0");

  return getClient({ rpcEndpoint: RPC_URL, wallet: offlineSigner });
};
