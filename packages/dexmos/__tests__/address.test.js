// @ts-nocheck
import cases from 'jest-in-case';

import { Secp256k1HdWallet } from '@cosmjs/amino';
// import {
//     toBech32,
//     fromBech32,
//     lookup
// } from '../src/utils/bech32';

const mnemonic="mammal wrestle hybrid cart choose flee transfer filter fly object swamp rookie"

const addresses = {
    terra: 'terra172xqaafhz6djy448p32633q4rl7eaz4wqnjn46',
    juno: 'juno1mwwvfu804wcaanz8j78f8h75flxkyjuaur4ktj',
    somm: 'somm1mwwvfu804wcaanz8j78f8h75flxkyjuaxdepay',
    stars: 'stars1mwwvfu804wcaanz8j78f8h75flxkyjua7dps8l',
    osmo: 'osmo1mwwvfu804wcaanz8j78f8h75flxkyjuaz29a6u',
    cosmos: 'cosmos1mwwvfu804wcaanz8j78f8h75flxkyjua23kdvw',
    secret: 'secret1dfr9468pskryssxgr6nh882avguurp2ql0da9y',
    akash: 'akash1mwwvfu804wcaanz8j78f8h75flxkyjua82m245'
};


cases('wallets', async opts => {
    const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: opts.name
        // TODO use the `slip44` from chain
        // hdPaths: makeHdPath(coinType, index)
      });
      const [mainAccount] = await wallet.getAccounts();
      console.log(mainAccount.address)

    expect(mainAccount.address).toBe(opts.addy);
}, [
    { name: 'akash', addy: addresses.akash },
    { name: 'terra', addy: addresses.terra },
    { name: 'juno', addy: addresses.juno },
    { name: 'somm', addy: addresses.somm },
    { name: 'stars', addy: addresses.stars },
    { name: 'osmo', addy: addresses.osmo },
    { name: 'cosmos', addy: addresses.cosmos },
    { name: 'secret', addy: addresses.secret }
]);