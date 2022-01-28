import { Token, getPrices, OsmosisApiClient, messages } from "dexmos";
import { DriverClient } from "./driverclient";
import asyncPool from "tiny-async-pool";
import axios from "axios";
import { getBalance, getPool } from "../cosmo";

export class Driver {
  constructor() {
    this.txnStatus = {};
  }

  /**
   * @param {*} jobs
   * @returns true on success, else false
   * TODO return error message
   */
  async executejobs(jobs) {}

  /**
   * getAllJobs returns a list of jobs to achieve the desired allocations
   * sum of all weights must === 1
   * @param {*} allocationsAndWeights is a list of desired final pools/coins and their weights
   * @returns a list of jobs
   */
  async getAllJobs(address) {
    const jobs = [];

    // 1. get the wallet balances
    const balanceResponse = await getBalance(address);
    const balance = parseInt(balanceResponse["balances"][0].amount, 10);

    // 3. fetch all the needed prices
    const prices = await getPrices(["osmosis", "cosmos"]);

    const swapInAmount = balance / 2.1;
    const minSwapOutAmount = Math.ceil(
      (swapInAmount * prices.cosmos.usd) / prices.osmosis.usd
    );

    // SWAP
    const swapMsg = messages.swapExactAmountIn({
      sender: address,
      routes: [
        {
          poolId: "1",
          tokenOutDenom:
            "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        },
      ],
      tokenIn: {
        denom: "uosmo",
        amount: `${swapInAmount}`,
      },
      tokenOutMinAmount: `${minSwapOutAmount}`,
    });

    jobs.push({
      msg: swapMsg,
      type: "swap",
      text: "Swap OSMO for ATOM",
      status: "queued",
    });

    const poolData = await getPool("1");

    let totalTokenAmount = null;
    for (let i = 0; i < poolData.pool.poolAssets.length; i++) {
      const asset = poolData.pool.poolAssets[i];
      if (
        asset.token.denom ===
        "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
      ) {
        totalTokenAmount = parseInt(asset.token.amount);
        break;
      }
    }

    const shareOutAmount =
      (minSwapOutAmount / totalTokenAmount) *
      parseInt(poolData.pool.totalShares.amount);

    // JOIN
    const joinMsg = messages.joinPool({
      sender: address,
      poolId: "1",
      shareOutAmount: shareOutAmount.toLocaleString("fullwide", {
        useGrouping: false,
      }),
      tokenInMaxs: [
        {
          denom: "uosmo",
          amount: `${balance / 2}`,
        },
        {
          denom:
            "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
          amount: `${minSwapOutAmount}`,
        },
      ],
    });

    jobs.push({
      msg: joinMsg,
      type: "joinPool",
      text: "Deposit ATOM+OSMO for LP",
      status: "queued",
    });

    // LOCK
    const lockMsg = messages.lockTokens({
      owner: address,
      duration: "1209600s",
      coins: [
        {
          denom: "gamm/pool/1",
          amount: shareOutAmount.toLocaleString("fullwide", {
            useGrouping: false,
          }),
        },
      ],
    });

    jobs.push({
      msg: joinMsg,
      type: "lock",
      text: "Lock Tokens for Rewards",
      status: "queued",
    });

    return jobs;
  }
}
