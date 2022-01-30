import { getCosmosAssetInfo, getOsmosisAssetInfo, osmoRpcClient, prompt, displayUnitsToDenomUnits, getOsmosisSymbolIbcName } from '../utils';
import { signAndBroadcast, } from '../messages';
import { messages } from '../messages/native';
import Long from 'long';
import { coin, coins } from '@cosmjs/amino';
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { assets } from '@pyramation/cosmos-registry';

export default async (argv) => {
    const { client, wallet } = await osmoRpcClient(argv);
    const [account] = await wallet.getAccounts();
    // https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/aminotypes.ts#L464
    const { receiver, symbol, amount } = await prompt([
        {
            type: 'string',
            name: 'receiver',
            message: 'receiver'
        },
        {
            type: 'fuzzy:token',
            name: 'symbol',
            message: 'symbol'
        },
        {
            type: 'number',
            name: 'amount',
            message: 'amount'
        }
    ], argv);
    
    // const coinInfo = getCosmosAssetInfo(symbol);
    // if (!coinInfo) {
    //     throw new Error('coin not found.')
    // }
    // const chainId = coinInfo.chain_id;
    // const asset = coinInfo.assets.find(a=>a.symbol===symbol);
    // if (!asset) {
    //     throw new Error('coin not found.')
    // }
    
    // const base = asset.denom_units.find(d=>d.denom===asset.base);
    // const display = asset.denom_units.find(d=>d.denom===asset.display);

    // if (!base || !display) {
    //     throw new Error('cannot find denom for coin');
    // }

    const sendAmount = displayUnitsToDenomUnits(symbol, amount);
    const ibc = getOsmosisSymbolIbcName(symbol);
    const address = account.address;

    return;

    const msgte = Uint8Array.from(MsgTransfer.encode({
        sender: address,
        receiver,
        token: coin(
            "500000",
            "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        ),
        sourcePort: "transfer",
        sourceChannel: "channel-0",
        timeoutHeight: {
            revisionNumber: Long.fromString("1"),
            revisionHeight: Long.fromString("1653666")
        },
        timeoutTimestamp: Long.fromString(Date.now() + '')
    }).finish());
    
    const { msg, fee } = messages.transfer({
        sender: address,
        receiver,
        token: coin("500000", "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
        sourcePort: "transfer",
        sourceChannel: "channel-0",
        timeoutHeight: {
            revisionNumber: Long.fromString("1"),
            revisionHeight: Long.fromString("1653666")
        },
        timeoutTimestamp: Long.fromString(Date.now() + '')
    });

    console.log({ chainId: argv.chainId, address, msg, fee });
    const res = await signAndBroadcast({ client, chainId: argv.chainId, address, msg, fee });

    console.log(res);
};
