import { CoinGeckoToken, geckoPrice } from '../clients/coingecko'
import { Token } from '../model/Token'
import { DriverClient } from "./driverclient"

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

  // 3. get prices of finalNeededCoins and all my wallet's tokens 
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
    DriverClient.swap(swap.inputCoin, swap.targetCoin, swap.amount)
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
