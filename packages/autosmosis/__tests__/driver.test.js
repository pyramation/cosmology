import prices from '../__fixtures__/coingecko/api/v3/simple/price/data.json'
import { Driver } from '../src/driver/driver'
import { Token } from '../src/model/Token'

describe('testGetAllJobs', () => {
  it('can calculate all necessary jobs', async () => {
    let driver = new Driver()
    const jobs = await driver.getAllJobs([
      { "type": "coin", "coin": "UST", "weight": 0.3 },
      { "type": "pool", "pool": { "id": 562, "coin1": "LUNA", "coin2": "UST", "balance": 0.5 }, "weight": 0.3 },
      { "type": "pool", "pool": { "id": 611, "coin1": "ATOM", "coin2": "STARS", "balance": 0.7 }, "weight": 0.4 }
    ])

    expect(jobs).length === 6

    expect(jobs[0].inputCoin === "OSMO")
    expect(jobs[0].targetCoin === "UST")
    expect(jobs[0].amount > 0)

    expect(jobs[5].inputCoin === "OSO")
    expect(jobs[5].targetCoin === "UST")
    expect(jobs[5].amount > 0)
    // .toEqual([
    //   { "inputCoin": "LUNA", "targetCoin": "UST", "amount": 13 },
    //   { "inputCoin": "OSMO", "targetCoin": "UST", "amount": 50 },
    //   { "inputCoin": "STARS", "targetCoin": "UST", "amount": 2000 },
    //   { "inputCoin": "UST", "targetCoin": "LUNA", "amount": 316.25 },
    //   { "inputCoin": "UST", "targetCoin": "ATOM", "amount": 590.35 },
    //   { "inputCoin": "UST", "targetCoin": "STARS", "amount": 7.73 },
    // ])
  })
})
