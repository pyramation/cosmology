import { CoinGeckoToken, getPrice } from '../clients/coingecko'
import { Token } from '../model/Token'

/**
 * getAllSwaps returns a list of swaps to achieve the desired allocations
 * sum of all weights must === 1
 * @param {*} allocationsAndWeights is a list of desired final pools/coins and their weights
 * @returns a list of swaps
 */
export function getAllSwaps(allocationsAndWeights) {
  var swaps = {}

  var walletBalances = [ // TODO test data
    { "coin": "LUNA", "amount": 13 }, { "coin": "OSMO", "amount": 50 }, { "coin": "STARS", "amount": 2000 }
  ]
  // 1. get my wallet balances
  // var walletBalances = client.getWalletBalances()

  var prices = { // TODO test data
    "LUNA": 999.9, "OSMO": 5.31, "STARS": 0.5321, "ATOM": 30.31
  }
  // 2. grab the price of all my wallet's tokens and desired tokens in UST
  // var prices = {}

  walletBalances.forEach(balance => {
    // prices[balance.coin] = client.getPrice(balance.coin)
  })

  allocationsAndWeights.array.forEach(allocation => {
    if (allocation.type === "coin") {
      // prices[allocation.coin] = client.getPrice(allocation.coin)
    }
    if (allocation.type === "pool") {
      // prices[allocation.pool.coin1] = client.getPrice(allocation.pool.coin1)
      // prices[allocation.pool.coin2] = client.getPrice(allocation.pool.coin2)
    }
    // prices[allocation.coin] = client.getPrice(balance.coin)
  })

  // 3. calculate my wallet's total balance
  var totalBalance = 0
  walletBalances.forEach(balance => {
    totalBalance += balance.amount * prices[balance.coin]
  })

  // 4. swap everything for UST
  walletBalances.forEach(balance => {
    if (balance.coin != "UST") {
      swaps.push({"inputCoin": balance.coin, "targetCoin": "UST", "amount": balance.amount})
    }
  })

  // 5. calculate final amounts of needed coins
  // var neededCoins = {"LUNA": 40, "ATOM": 13, "STARS": 0, "UST": 1300.123}
  var neededCoins = {}
  allocationsAndWeights.array.forEach(allocation => {
    if (allocation.type === "pool") {
      // coin1 in the pool
      var amountForAllocation = totalBalance * allocation.weight * allocation.pool.balance
      if (neededCoins[allocation.coin1]) {
        neededCoins[allocation.pool.coin1] += amountForAllocation
      } else {
        neededCoins[allocation.pool.coin1] = amountForAllocation
      }

      // coin2 in the pool
      amountForAllocation = totalBalance * allocation.weight * 1 - allocation.pool.balance
      if (neededCoins[allocation.coin2]) {
        neededCoins[allocation.pool.coin2] += amountForAllocation
      } else {
        neededCoins[allocation.pool.coin2] = amountForAllocation
      }
    }

    if (allocation.type === "coin") {
      if (neededCoins[allocation.coin]) {
        neededCoins[allocation.coin] += totalBalance * allocation.weight
      } else {
        neededCoins[allocation.coin] = totalBalance * allocation.weight
      }
    }
  })

  // 6. swap to needed coins
  neededCoins.array.forEach((coin, amount) => {
    swaps.push({"inputCoin": "UST", "targetCoin": coin, amount})
  });

  return swaps
}

/**
 * @param {*} allocationsAndWeights
 * @param {*} swaps
 * @returns true on success, else false
 * TODO return error message
 */
export function executeSwapsAndAllocate(allocationsAndWeights, swaps) {
  // 1. do the swaps
  swaps.array.forEach(swap => {
    // client.swap(swap.inputCoin, swap.targetCoin, swap.amount)
  })

  // 2. deposit into the LP and bond
  allocationsAndWeights.array.forEach(allocation => {
    if (allocation.type === "coin") {
      // do nothing
    }
    if (allocation.type === "pool") {
      // client.deposit(allocation.pool.id, totalBalance * allocation.weight * allocation.pool.balance)
      // client.bond(allocation.pool.id)
    }
  })
  return true
}
