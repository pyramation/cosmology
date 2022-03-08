import { osmoDenomToSymbol, symbolToOsmoDenom } from '..';
import { CosmosApiClient } from '../clients/cosmos';
import { 
    baseUnitsToDisplayUnits,
    displayUnitsToDenomUnits,
    getCosmosAssetInfoByDenom,
    getWalletFromMnemonic,
    getBaseAndDisplayUnitsByDenom,
    baseUnitsToDisplayUnitsByDenom,
    getCosmosAssetInfo
 } from '../utils';
import { promptChain, promptMnemonic } from '../utils/prompt';
import {
    SigningStargateClient,
    calculateFee,
    assertIsDeliverTxSuccess,
    GasPrice
  } from '@cosmjs/stargate'
import { messages } from '../messages/native';
  

// import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx.js";
// import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx.js";
// import { MsgExec } from "cosmjs-types/cosmos/authz/v1beta1/tx.js";

// import {
//     coin
//   } from '@cosmjs/stargate'



export default async (argv) => {
  argv = await promptMnemonic(argv);
  const chain = await promptChain(argv);
  console.log(JSON.stringify(chain.apis, null, 2));

//   const url = await findAvailableUrl(chain.chain_id, chain.apis.rest.map(r=>r.address))
//   console.log({url});

  const client = new CosmosApiClient({
      url: chain.apis.rest[0].address
  });

  
  // check re-stake (w display or base?)
  const base = getCosmosAssetInfo(argv.chainToken).assets.find((a)=>a.symbol === argv.chainToken).base;
  if (!base) throw new Error('cannot find asset base unit');
  const defaultGasPrice = '0.0025' + base;

  const signer = await getWalletFromMnemonic({mnemonic: argv.mnemonic, token: argv.chainToken})


  const stargateClient =  await SigningStargateClient.connectWithSigner(
    chain.apis.rpc[0].address,
    signer
  );

  const getAddress = async () => {
    const accounts = await signer.getAccounts()
    return accounts[0].address
  }

  const getFee = (gas, gasPrice) => {
    if(!gas) gas = 200_000
    if(!gasPrice) gasPrice = GasPrice.fromString(defaultGasPrice);
    return calculateFee(gas, gasPrice);
  }


  const [mainAccount] = await signer.getAccounts();

  const { address } = mainAccount;
//   console.log(address);


  const balances = await client.getBalances(address);
//   console.log(balances);

  const delegations = await client.getDelegations(address);

  if (delegations.result && delegations.result.length) {
    console.log(delegations.result)
  }

  const messagesToClaim = [];

  const rewards = await client.getRewards(address);
  if (rewards.rewards && rewards.rewards.length) {
    rewards.rewards.forEach(data=>{
        const { 
            validator_address,
            reward
        } = data;
        const [{denom, amount}] = reward;

        const asset = getCosmosAssetInfoByDenom(denom);
        console.log(asset);
        const value = baseUnitsToDisplayUnitsByDenom(denom, amount);
        console.log({denom, value});

        messagesToClaim.push(messages.withdrawDelegatorReward({
            delegatorAddress: address,
            validatorAddress: validator_address
        }));

    });
  }

  const simulate = async (address, msgs, memo, modifier) => {
    const estimate = await stargateClient.simulate(address, msgs, memo);
    console.log({estimate})
    return (parseInt(estimate * (modifier || 1.5)))
  };

  const getGasPrice = async (address, msgs, memo, modifier) => {
    let fee;
    let gas;
    try {
      gas = await simulate(address, msgs, memo)
      fee = getFee(gas);
    //   fee = getFee(gas, gasPrice)
      console.log(fee);
      return fee;
    //   const feeAmount = Number(fee.amount[0].amount);
    //   return feeAmount;
    } catch (error) {
      console.log(error);
    }
  };


  console.log(JSON.stringify(messagesToClaim, null, 2));

  const fee = await getGasPrice(address, messagesToClaim);
  console.log({fee});


  // ERROR from cosmjs: 'Gas price must be set in the client options when auto gas is used'
//   stargateClient.gasPrice = defaultGasPrice;

  stargateClient.signAndBroadcast(address, messagesToClaim, fee, 'DexmosClaim').then((result) => {
    try {
      assertIsDeliverTxSuccess(result);
      stargateClient.disconnect();
    } catch (error) {
        console.log(error);
    }
}, (error) => {
      console.log(error);
  })

  

};
 