
import _claim from './commands/claim';
import _create_mnemonic_wallet from './commands/create-mnemonic-wallet';
import _decrypt from './commands/decrypt';
import _delegate from './commands/delegate';
import _encrypt from './commands/encrypt';
import _get_balances from './commands/get-balances';
import _get_cosmos_balance from './commands/get-cosmos-balance';
import _get_latest_block from './commands/get-latest-block';
import _get_pool_apr from './commands/get-pool-apr';
import _get_price from './commands/get-price';
import _get_transaction from './commands/get-transaction';
import _join from './commands/join';
import _keychain_del from './commands/keychain-del';
import _keychain_get from './commands/keychain-get';
import _keychain_set from './commands/keychain-set';
import _list_apis from './commands/list-apis';
import _list_pools from './commands/list-pools';
import _list_prices from './commands/list-prices';
import _lock from './commands/lock';
import _rebalance_batch from './commands/rebalance-batch';
import _rebalance from './commands/rebalance';
import _reinvest from './commands/reinvest';
import _salt_decrypt from './commands/salt-decrypt';
import _salt_encrypt from './commands/salt-encrypt';
import _salt_generate from './commands/salt-generate';
import _shamir_decrypt from './commands/shamir-decrypt';
import _shamir_encrypt from './commands/shamir-encrypt';
import _swap from './commands/swap';
import _version from './commands/version';
import _vote from './commands/vote';
const Commands = {};
Commands['claim'] = _claim;
Commands['create-mnemonic-wallet'] = _create_mnemonic_wallet;
Commands['decrypt'] = _decrypt;
Commands['delegate'] = _delegate;
Commands['encrypt'] = _encrypt;
Commands['get-balances'] = _get_balances;
Commands['get-cosmos-balance'] = _get_cosmos_balance;
Commands['get-latest-block'] = _get_latest_block;
Commands['get-pool-apr'] = _get_pool_apr;
Commands['get-price'] = _get_price;
Commands['get-transaction'] = _get_transaction;
Commands['join'] = _join;
Commands['keychain-del'] = _keychain_del;
Commands['keychain-get'] = _keychain_get;
Commands['keychain-set'] = _keychain_set;
Commands['list-apis'] = _list_apis;
Commands['list-pools'] = _list_pools;
Commands['list-prices'] = _list_prices;
Commands['lock'] = _lock;
Commands['rebalance-batch'] = _rebalance_batch;
Commands['rebalance'] = _rebalance;
Commands['reinvest'] = _reinvest;
Commands['salt-decrypt'] = _salt_decrypt;
Commands['salt-encrypt'] = _salt_encrypt;
Commands['salt-generate'] = _salt_generate;
Commands['shamir-decrypt'] = _shamir_decrypt;
Commands['shamir-encrypt'] = _shamir_encrypt;
Commands['swap'] = _swap;
Commands['version'] = _version;
Commands['vote'] = _vote;

  export { Commands }; 

  