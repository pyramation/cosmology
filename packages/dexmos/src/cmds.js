
import _create_mnemonic_wallet from './commands/create-mnemonic-wallet';
import _get_balances from './commands/get-balances';
import _get_latest_block from './commands/get-latest-block';
import _get_price from './commands/get-price';
import _get_transaction from './commands/get-transaction';
import _ibc_transfer from './commands/ibc-transfer';
import _join_pool from './commands/join-pool';
import _list_apis from './commands/list-apis';
import _list_pools from './commands/list-pools';
import _list_prices from './commands/list-prices';
import _lock_tokens from './commands/lock-tokens';
import _send from './commands/send';
import _swap_exact_amount_in from './commands/swap-exact-amount-in';
import _wallet_from_mnemonic from './commands/wallet-from-mnemonic';
const Commands = {};
Commands['create-mnemonic-wallet'] = _create_mnemonic_wallet;
Commands['get-balances'] = _get_balances;
Commands['get-latest-block'] = _get_latest_block;
Commands['get-price'] = _get_price;
Commands['get-transaction'] = _get_transaction;
Commands['ibc-transfer'] = _ibc_transfer;
Commands['join-pool'] = _join_pool;
Commands['list-apis'] = _list_apis;
Commands['list-pools'] = _list_pools;
Commands['list-prices'] = _list_prices;
Commands['lock-tokens'] = _lock_tokens;
Commands['send'] = _send;
Commands['swap-exact-amount-in'] = _swap_exact_amount_in;
Commands['wallet-from-mnemonic'] = _wallet_from_mnemonic;

  export { Commands }; 

  