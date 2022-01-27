import { CoinGeckoToken, geckoPrice } from '../clients/coingecko'
import { Token } from '../model/Token'

/**
 * getAllSwaps returns a list of swaps to achieve the desired allocations
 * sum of all weights must === 1
 * @param {*} allocationsAndWeights is a list of desired final pools/coins and their weights
 * @returns a list of swaps
 */
export function getAllSwaps (allocationsAndWeights) {
  var swaps = []

  // 1. get my wallet balances
  var walletBalances = DriverClient.getWalletBalances()

  // 2. calculate final amounts of needed coins
  var finalNeededCoins = {}
  allocationsAndWeights.forEach(allocation => {
    if (allocation.type === 'pool') {
      // coin1 in the pool
      var amountForAllocation =
        Math.floor(
          totalBalance * allocation.weight * allocation.pool.balance * 100
        ) / 100
      if (finalNeededCoins[allocation.coin1]) {
        finalNeededCoins[allocation.pool.coin1] += amountForAllocation
      } else {
        finalNeededCoins[allocation.pool.coin1] = amountForAllocation
      }

      // coin2 in the pool
      amountForAllocation =
        Math.floor(
          totalBalance * allocation.weight * 1 - allocation.pool.balance * 100
        ) / 100
      if (finalNeededCoins[allocation.coin2]) {
        finalNeededCoins[allocation.pool.coin2] += amountForAllocation
      } else {
        finalNeededCoins[allocation.pool.coin2] = amountForAllocation
      }
    }

    if (allocation.type === 'coin') {
      if (finalNeededCoins[allocation.coin]) {
        finalNeededCoins[allocation.coin] += totalBalance * allocation.weight
      } else {
        finalNeededCoins[allocation.coin] = totalBalance * allocation.weight
      }
    }
  })

  // 3. get prices of all my wallet's tokens and finalNeededCoins
  var neededPrices = []
  for (const [coin, _] of Object.entries(walletBalances)) {
    neededPrices.push(coin)
  }

  allocationsAndWeights.forEach(allocation => {
    if (allocation.type === 'coin') {
      if (!(allocation.coin in finalNeededCoins)) {
        finalNeededCoins.push(allocation.coin)
      }
    }
    if (allocation.type === 'pool') {
      if (!(allocation.pool.coin1 in finalNeededCoins)) {
        finalNeededCoins.push(allocation.pool.coin1)
      }
      if (!(allocation.pool.coin2 in finalNeededCoins)) {
        finalNeededCoins.push(allocation.pool.coin2)
      }
    }
  })
  var prices = DriverClient.getPrices(finalNeededCoins)

  // 4. calculate my wallet's total balance
  var totalBalance = 0
  for (const [coin, amount] of Object.entries(walletBalances)) {
    totalBalance += prices[coin] * amount
  }

  // 5. swap everything for UST
  for (const [coin, amount] of Object.entries(walletBalances)) {
    if ('UST' !== coin) {
      swaps.push({ inputCoin: coin, targetCoin: 'UST', amount: amount })
    } else {
      throw Error(coin)
    }
  }

  // 6. swap to needed coins
  for (const [coin, amount] of Object.entries(finalNeededCoins)) {
    if ('UST' !== coin) {
      swaps.push({ inputCoin: 'UST', targetCoin: coin, amount: amount })
    }
  }

  return swaps
}

/**
 * @param {*} allocationsAndWeights
 * @param {*} swaps
 * @returns true on success, else false
 * TODO return error message
 */
export function executeSwapsAndAllocate (allocationsAndWeights, swaps) {
  // 1. do the swaps
  swaps.array.forEach(swap => {
    // DriverClient.swap(swap.inputCoin, swap.targetCoin, swap.amount)
  })

  // 2. deposit into the LP and bond
  allocationsAndWeights.array.forEach(allocation => {
    if (allocation.type === 'coin') {
      // do nothing
    }
    if (allocation.type === 'pool') {
      DriverClient.deposit(allocation.pool.id, totalBalance * allocation.weight * allocation.pool.balance)
      DriverClient.bond(allocation.pool.id)
    }
  })
  return true
}

class DriverClient {
  static getWalletBalances() {
    return { LUNA: 13, OSMO: 50, STARS: 2000 }
  }

  static swap() {

  }

  static deposit(poolId, amount) {

  }

  static bond(poolId) {

  }

  static getPrices(coins) {
    // var prices = geckoPrice(coins)
    // return prices
    return { "LUNA": 59.9, "OSMO": 5.31, "STARS": 0.5321, "ATOM": 30.31 }
    // return {"medibloc":{"usd":0.0365264},"cosmos":{"usd":36.63},"terra-luna":{"usd":68.91},"crypto-com-chain":{"usd":0.366689},"akash-network":{"usd":1.81},"juno-network":{"usd":18.14},"terrausd":{"usd":1.02},"osmosis":{"usd":9.1},"comdex":{"usd":4.13},"persistence":{"usd":3.89},"secret":{"usd":5.3},"bitcanna":{"usd":0.131344},"e-money":{"usd":1.13},"cheqd-network":{"usd":0.108305},"regen":{"usd":1.4},"likecoin":{"usd":0.02503058},"terra-krw":{"usd":0.00084594},"ion":{"usd":12307.17},"sentinel":{"usd":0.01176001},"starname":{"usd":0.056813},"e-money-eur":{"usd":1.1},"vidulum":{"usd":0.278524},"iris-network":{"usd":0.069877}}
  }
}
