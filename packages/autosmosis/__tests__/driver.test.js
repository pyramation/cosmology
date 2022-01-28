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
    expect(jobs.length).toEqual(14)

    expect(jobs[0].inputCoin).toEqual("LUNA")
    expect(jobs[0].targetCoin).toEqual("UST")
    expect(jobs[0].amount).toBeGreaterThan(0)

    expect(jobs[5].job.inputCoin).toEqual("UST")
    expect(jobs[5].job.targetCoin).toEqual("STARS")
    expect(jobs[5].job.amount).toBeGreaterThan(0)
  })
})
