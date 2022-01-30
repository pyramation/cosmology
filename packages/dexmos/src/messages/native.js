import { coins } from '@cosmjs/amino';

/**
 * @typedef {{
 * poolId:string;
 * tokenOutDenom:string;
 * }} Route
 *
 * @typedef {{
 * amount:string;
 * denom:string;
 * }} Coin
 *
 */

export const messages = {
    /**
     * @param {object} param0
     * @param {string} param0.sourcePort
     * @param {string} param0.sourceChannel
     * @param {Coin} param0.token
     * @param {string} param0.sender
     * @param {string} param0.receiver
     * @param {{
     *  revisionHeight: Long;
     *  revisionNumber: Long;
     * }} param0.timeoutHeight
     * @param {Long} param0.timeoutTimestamp
     */
    transfer: ({
        sourcePort,
        sourceChannel,
        token,
        sender,
        receiver,
        timeoutHeight,
        timeoutTimestamp
     }) => {
        const fee = {
            amount: coins(0, 'uosmo'),
            gas: "130000"
        };

        // https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/aminotypes.ts#L464
        // MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between ICS20 enabled chains. See ICS Spec here: https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
        return {
            fee,
            msg: {
                typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
                value: {
                    // the port on which the packet will be sent
                    sourcePort,
                    // the channel by which the packet will be sent
                    sourceChannel,
                    // the tokens to be transferred
                    token,
                    // the sender address
                    sender,
                    // the recipient address on the destination chain
                    receiver,
                    // Timeout height relative to the current block height. The timeout is disabled when set to 0.
                    timeoutHeight,
                    // Timeout timestamp (in nanoseconds) relative to the current block timestamp. The timeout is disabled when set to 0.
                    timeoutTimestamp
                }
            }
        };
    },
    
    /**
     * @param {object} param0
     * @param {string} param0.toAddress
     * @param {string} param0.fromAddress
     * @param {Coin[]} param0.amount
     */
    send: ({
        toAddress,
        fromAddress,
        amount
    }) => {
        // TODO dynamically look up fee! don't assume OSMOSIS
        
        const fee = {
            amount: coins(0, 'uosmo'),
            gas: "130000"
        };

        return {
            fee,
            msg: {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    toAddress,
                    fromAddress,
                    amount
                }
            }
        };
    }
};