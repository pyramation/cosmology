import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {
  getOsmosisAssetInfo,
  baseUnitsToDollarValue,
  convertValidatorPricesToDenomPriceHash
} from 'cosmology';
import { ArrowSmRightIcon, ArrowSmDownIcon } from '@heroicons/react/solid';
import PoolPairImage from './PoolPairImage';

/**
 * @typedef {('queued'|'running'|'success'|'failed')} Status
 */
/**
 *
 * @param {object} param0
 * @param {Job} param0.job
 * @param {object} param0.tokens
 * @returns
 */
const Jobs = ({ job, tokens }) => {
  /** @type {[Status, (Status)=>void]} */
  const [status, setStatus] = useState('queued');
  const [showDetails, setShowDetails] = useState(false);

  const prices = convertValidatorPricesToDenomPriceHash(tokens);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStatus = 'success';
      // const newStatus = driver.getStatus(job.txnId);
      setStatus(newStatus);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  /**
   *
   * @param {Status} status
   */
  function getColor(status) {
    if (status === 'queued') return '#333';
    if (status === 'running') return 'yellow';
    if (status === 'success') return 'green';
    if (status === 'failed') return 'red';
  }

  function formatAmount(amt) {
    if (amt < 0.01) return '< 0.01';
    return amt.toFixed(2);
  }

  function renderJob(job) {
    if (job.type === 'swap') {
      console.log({ job });
      const sellCoin = job?.data?.swap?.trade?.sell;
      const buyCoin = job?.data?.swap?.trade?.buy;
      const sellSymbol = sellCoin?.symbol;
      const buySymbol = buyCoin?.symbol;
      const sellAmount = sellCoin?.displayAmount;
      const buyAmount = buyCoin?.displayAmount;
      const sellDollarAmount = baseUnitsToDollarValue(
        prices,
        sellSymbol,
        sellCoin?.amount
      );
      const buyDollarAmount = baseUnitsToDollarValue(
        prices,
        buySymbol,
        buyCoin?.amount
      );
      const sellAssetInfo = getOsmosisAssetInfo(sellSymbol);
      const buyAssetInfo = getOsmosisAssetInfo(buySymbol);
      const sellLogo = sellAssetInfo?.logo_URIs?.png;
      const buyLogo = buyAssetInfo?.logo_URIs?.png;

      return (
        <div className="job-wrapper">
          <p className="detail-text" style={{ marginBottom: 4 }}>
            Swap {formatAmount(sellAmount)} {sellSymbol} for{' '}
            {formatAmount(buyAmount)} {buySymbol}
          </p>
          <div className="horiz" style={{ marginBottom: 4 }}>
            <img src={sellLogo} />
            <ArrowSmRightIcon style={{ opacity: '80%' }} />
            <img src={buyLogo} />
            <p
              className="main-text"
              style={{ marginLeft: 8, opacity: 0.5, fontSize: 12 }}
            >
              (~${formatAmount(sellDollarAmount)})
            </p>
          </div>
        </div>
      );
    } else if (job.type === 'join' || job.type === 'lock') {
      const poolId = job?.data?.poolId;
      const poolNickname = job?.data?.poolInfo?.nickname;

      const firstAsset = job.data?.poolInfo?.poolAssetsPretty?.[0];
      const secondAsset = job.data?.poolInfo?.poolAssetsPretty?.[1];
      const firstSymbol = firstAsset?.symbol;
      const secondSymbol = secondAsset?.symbol;
      const firstOsmoAsset = getOsmosisAssetInfo(firstSymbol);
      const secondOsmoAsset = getOsmosisAssetInfo(secondSymbol);
      const firstLogo = firstOsmoAsset?.logo_URIs?.png;
      const secondLogo = secondOsmoAsset?.logo_URIs?.png;
      console.log({ firstSymbol, firstOsmoAsset, firstLogo });

      return (
        <div className="job-wrapper">
          <div className="horiz">
            <PoolPairImage images={[firstLogo, secondLogo]} height={36} />
            <b
              className="detail-text"
              style={{ fontSize: 12, marginRight: 6, marginLeft: 4 }}
            >
              #{poolId}:
            </b>{' '}
            <span className="detail-text" style={{ fontSize: 12 }}>
              {poolNickname}
            </span>
          </div>
        </div>
      );
    }

    // else if (job.type === 'lock') {
    //   console.log({ job });
    //   return <div className="job-wrapper"></div>;
    // }
  }

  return (
    <div className="job-container" key={job.id}>
      {/* <div
        className="job-status-indicator"
        style={{ backgroundColor: getColor(status) }}
      /> */}
      {renderJob(job)}
      {/* {job.type === 'swap'
          ? 'Swap ' + job.job.inputCoin + ' for ' + job.job.targetCoin
          : job.type === 'joinPool'
          ? 'Deposit into pool #' + job.job.poolId
          : job.type === 'lockTokens'
          ? 'Lock LP for pool #' + job.job.poolId
          : 'UNKNOWN JOB TYPE - this is not expected'} */}
      <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
        <div
          className="horiz"
          style={{ justifyContent: 'flex-end', marginBottom: 8 }}
        >
          <p
            className="main-text"
            style={{
              fontSize: 12,
              opacity: 0.5,
              textTransform: 'uppercase'
            }}
          >
            {job.type}
          </p>
          {job.status && (
            <div
              className="job-status-indicator"
              style={{ backgroundColor: getColor(job.status) }}
            />
          )}
        </div>
        <a
          href="#"
          onClick={() => setShowDetails(!showDetails)}
          className="detail-text"
          style={{
            opacity: 1,
            color: '#0279E1',
            fontSize: 12,
            fontWeight: '400 !important',
            display: 'flex'
          }}
        >
          {/* <ArrowSmDownIcon style={{ width: 16, height: 16 }} /> */}
          {showDetails ? <>Hide&nbsp;details</> : <>Show&nbsp;details</>}
        </a>
      </div>
      {showDetails && (
        <>
          <div style={{ flexBasis: '100%' }} />
          <div className="job-details">
            <pre className="detail-text" style={{ textAlign: 'left' }}>
              {JSON.stringify(job, null, 2)}
            </pre>
          </div>
        </>
      )}
    </div>
  );
};

export default Jobs;
