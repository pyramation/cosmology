import prices from '../__fixtures__/coingecko/api/v3/simple/price/data.json'
import { getAllSwaps } from '../src/driver/driver'
import { Token } from '../src/model/Token'

describe('testGetAllSwaps', () => {
  it('can calculate all necessary swaps', async () => {
    const swaps = getAllSwaps([
      { "type": "coin", "coin": "UST", "weight": 0.3 },
      { "type": "pool", "pool": { "coin1": "LUNA", "coin2": "UST", "id": 562, "balance": 0.5 }, "weight": 0.3 },
      { "type": "pool", "pool": { "coin1": "ATOM", "coin2": "STARS", "id": 611, "balance": 0.7 }, "weight": 0.4 }
    ])

    expect(swaps).toEqual([
      { "inputCoin": "LUNA", "targetCoin": "UST", "amount": 13 },
      { "inputCoin": "OSMO", "targetCoin": "UST", "amount": 50 },
      { "inputCoin": "STARS", "targetCoin": "UST", "amount": 2000 },
      { "inputCoin": "UST", "targetCoin": "LUNA", "amount": NaN }, //TODO fix amounts
      { "inputCoin": "UST", "targetCoin": "ATOM", "amount": NaN },
      { "inputCoin": "UST", "targetCoin": "STARS", "amount": NaN },
    ])
  })
})
