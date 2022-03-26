/**
 *
 * @returns {import("@keplr-wallet/types").Keplr}
 */
export const getKeplr = () => {
  if (typeof window === 'undefined') return null;
  else return window['keplr'];
};

/**
 *
 * @param {('queued'|'running'|'success'|'failed')} status
 * @returns
 */
export function getColor(status) {
  if (status === 'queued') return '#333';
  if (status === 'running') return 'yellow';
  if (status === 'success') return 'green';
  if (status === 'failed') return 'red';
}

export async function loadBalance(keplr, client, chain_id) {
  try {
    // this will probably need to be edited for when we also load other networks (SECRET)
    const offlineSigner = keplr.getOfflineSigner(chain_id);
    const accounts = await offlineSigner.getAccounts();
    const osmoAddress = accounts[0].address;
    const balances = await client.getBalances(osmoAddress);
    return balances;
  } catch (e) {
    console.error('There was an error loading balances:', e);
    return [];
  }
}
