import { SigningStargateClient } from '@cosmjs/stargate'
import { CoinDenom } from '../..'
export declare const gasEstimation: (
  denom: CoinDenom,
  stargateClient: SigningStargateClient,
  address: string,
  msgs: object[],
  memo: string,
  modifier: number
) => Promise<any>
