// @ts-nocheck
import cases from 'jest-in-case';
import { HdPath, Slip10RawIndex } from "@cosmjs/crypto";

/**
 * The Cosmos Hub derivation path in the form `m/44'/118'/0'/0/a`
 * with 0-based account index `a`.
 */
export function makeHdPath(coinType = 118, account = 0) {
    return [
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(coinType),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.normal(0),
        Slip10RawIndex.normal(account),
    ];
}


import { Secp256k1HdWallet } from '@cosmjs/amino';
// import {
//     toBech32,
//     fromBech32,
//     lookup
// } from '../src/utils/bech32';
import { chains } from '@pyramation/cosmos-registry';

const mnemonic = "mammal wrestle hybrid cart choose flee transfer filter fly object swamp rookie"

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

const coinTypes = Object.keys(addresses).reduce((m, name)=>{
    const chain = chains.find((obj)=>obj.bech32_prefix===name);
    if (!chain) {
        throw new Error(name + ' is undefined')
    }
    m[name] = chain.slip44;
    return m;
}, []);

console.log(coinTypes)

cases('wallets', async opts => {
    const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: opts.name,
        hdPaths: [makeHdPath(coinTypes[opts.name], 0)]
        // TODO use the `slip44` from chain
        // hdPaths: makeHdPath(coinType, index)
    });
    const [mainAccount] = await wallet.getAccounts();
    expect(mainAccount.address).toBe(addresses[opts.name]);
}, [
    { name: 'akash' },
    { name: 'terra' },
    { name: 'juno' },
    { name: 'somm' },
    { name: 'stars' },
    { name: 'osmo' },
    { name: 'cosmos' },
    { name: 'secret' }
]);