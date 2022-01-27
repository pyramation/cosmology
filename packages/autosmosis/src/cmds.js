
import _create_mnemonic_wallet from './commands/create-mnemonic-wallet';
import _join_pool from './commands/join-pool';
import _lock_tokens from './commands/lock-tokens';
import _swap_exact_amount_in from './commands/swap-exact-amount-in';
const Commands = {};
Commands['create-mnemonic-wallet'] = _create_mnemonic_wallet;
Commands['join-pool'] = _join_pool;
Commands['lock-tokens'] = _lock_tokens;
Commands['swap-exact-amount-in'] = _swap_exact_amount_in;

  export { Commands }; 

  