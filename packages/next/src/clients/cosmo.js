//  const BASE_URL = "https://osmosis.stakesystems.io/";
export const BASE_URL = "http://143.244.147.126:1317";

const get = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export const getBalance = async (address) => {
  return get(`${BASE_URL}/cosmos/bank/v1beta1/balances/${address}`);
};

export const getTransaction = async (hash) => {
  return get(`${BASE_URL}/cosmos/tx/v1beta1/txs/${hash}`);
};

export const getPool = async (id) => {
    return get(`${BASE_URL}/osmosis/gamm/v1beta1/pools/${id}`);
};
