import { Coin, CoinGeckoToken, prettyPool } from './src'

declare module 'cosmology' {
  export * from './src'

  export interface PairsSummary {
    updated_at: number
    data: ValidatorPair[]
  }

  export interface PoolsInfo {
    pagination: {
      next_key: string
      total: string
    }
    pools: osmosis.gamm.v1beta1.Pool
  }

  export interface Balances {
    height: string
    result: Coin[]
  }

  export interface DisplayCoin {
    symbol: string
    denom: string
    amount: string
    displayAmount: string
    dollarAmount?: string
  }
}
