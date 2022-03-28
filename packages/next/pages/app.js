import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faSearch } from '@fortawesome/fontawesome-free-solid';
import ReactSlider from 'react-slider';
import { Driver, assets, OsmosisApiClient, prettyPool } from 'cosmology';
import PoolAdder from '../src/components/PoolAdder';
import { fetchListOfPools } from '../src/clients/cosmology';
import PoolPairImage from '../src/components/subComponents/PoolPairImage';
import PoolAllocSummary from '../src/components/PoolAllocSummary';
import Nav from '../src/components/Nav';
import Job from '../src/components/subComponents/Job';
import SelectBalances from '../partials/SelectBalances';
import { chains } from '@cosmology/cosmos-registry';
import useRoot from '../src/hooks/useRoot';
import Compounder from '../src/orchestration/compounder';
import LoadingIndicator from '../src/components/subComponents/LoadingIndicator';
import CompounderStatus from '../partials/CompounderStatus';

const SYMBOLCOINHASH = {};
const COINHASH = assets.reduce((m, asset) => {
  m[asset.base] = asset;
  SYMBOLCOINHASH[asset.symbol] = asset;
  return m;
}, {});

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

fontawesome.library.add(faTimes);

const defaultPools = [
  {
    id: 0,
    icon: '/terra.png',
    nickname: 'UST',
    symbol: 'UST',
    denom:
      'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
    rewardAlloc: 100,
    isSingle: true
  }
];

let saverTimeout = null;

const osmoChainConfig = chains.find((el) => el.chain_name === 'osmosis');

const App = () => {
  const [ourPools, setOurPools] = useState(null);
  const [showPoolAdder, setShowPoolAdder] = useState(false);
  const [queuedPools, setQueuedPools] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [screen, setScreen] = useState('pools');
  const [swaps, setSwaps] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [driver, setDriver] = useState(null);

  const loadConfig = {
    loadBalances: true,
    loadTokens: true,
    loadPairsSummary: true,
    loadPoolsInfo: true
  };
  const {
    client,
    validator,
    keplr,
    balances,
    tokens,
    pairsSummary,
    poolsInfo,
    loading
  } = useRoot({
    chainConfig: osmoChainConfig,
    ...loadConfig
  });

  // console.log({ balances, tokens, poolsInfo });

  useEffect(() => {
    (async () => {
      if (!driver) {
        setDriver(new Driver());
      }
      if (accounts.length === 0) {
        return;
      }
      const client = new OsmosisApiClient();
      const balances = await client.getBalances(accounts[0].address);
      console.log(balances);
    })();
  }, [accounts]);

  useEffect(() => {
    if (!ourPools) {
      const savedPoolSettings = window.localStorage.getItem('poolsConfig');
      const exclusions = window.localStorage.getItem('exclusions');
      setOurPools(
        savedPoolSettings ? JSON.parse(savedPoolSettings) : defaultPools
      );
      setExclusions(exclusions ? JSON.parse(exclusions) : []);
    }
    if (queuedPools.length) {
      const poolsToAdd = [];
      for (const queuedPool of queuedPools) {
        let shouldAdd = true;
        for (const ourPool of ourPools) {
          // don't add if we have it
          // @ts-ignore
          if (ourPool.id === queuedPools.id) {
            shouldAdd = false;
            break;
          }
        }
        if (shouldAdd) {
          poolsToAdd.push(queuedPool);
        }
      }
      const newPools = [...ourPools, ...poolsToAdd];
      setOurPools(newPools);
      setQueuedPools([]);
      resetPoolSettingsSaver();
    }
  }, [queuedPools]);

  function savePoolSettings() {
    console.log('Saving', ourPools);
    window.localStorage.setItem('poolsConfig', JSON.stringify(ourPools));
    window.localStorage.setItem('exclusions', JSON.stringify(exclusions));
  }

  function resetPoolSettingsSaver() {
    if (saverTimeout) clearTimeout(saverTimeout);
    saverTimeout = setTimeout(() => {
      savePoolSettings();
      saverTimeout = null;
    }, 30);
  }

  function handleRewardAllocChange(pidx, newValue) {
    // console.log("handleRewardAllocChange")
    setOurPools(
      ourPools
        ? ourPools.map((p, i) => {
            if (i === pidx) p.rewardAlloc = newValue;
            return p;
          })
        : null
    );
    resetPoolSettingsSaver();
  }

  function addPool(pool) {
    // console.log("addPool", ourPools);
    setQueuedPools([pool]);
  }

  function deletePool(iToDelete) {
    setOurPools(ourPools.filter((p, pi) => pi !== iToDelete));
    resetPoolSettingsSaver();
  }

  const totalAlloc = ourPools
    ? ourPools.reduce((total, p) => total + p.rewardAlloc, 0.0000001)
    : 100;

  async function triggerSwapsPreview() {
    if (loading) {
      // eslint-disable-next-line no-alert
      alert('still loading');
      return;
    }
    if (totalAlloc === 0.0000001)
      // eslint-disable-next-line no-alert
      return alert('You must allocate your rewards into at least one pool.');

    /** @type {CoinWeight[]} */
    const poolObjectsMapped = ourPools.map((pool) => {
      return {
        weight: pool.rewardAlloc / totalAlloc,
        type: pool.isSingle ? 'coin' : 'pool',
        coin: pool.isSingle ? pool.symbol : null,
        pool: pool.isSingle
          ? null
          : {
              coin1: pool.poolAssetsPretty?.[0]?.symbol,
              coin2: pool.poolAssetsPretty?.[1]?.symbol,
              id: pool.id,
              balance: pool.poolAssetsPretty?.[0]?.ratio
            },
        denom: pool.isSingle ? pool.denom : pool.totalShares.denom
      };
    });

    console.log({ balances });
    const compounder = new Compounder({
      tokens,
      lcdClient: client,
      osmoChainConfig,
      keplr,
      pairs: pairsSummary,
      pools: poolsInfo
    });

    const jobs = await compounder.constructAndExecuteJobs(
      balances,
      poolObjectsMapped,
      exclusions,
      true
    );

    console.log(jobs);

    // const jobs = await driver.getAllJobs(poolObjectsMapped);
    setScreen('preview');
    setJobs(jobs);
  }

  function handleSetExclusions(newExclusions) {
    setExclusions(newExclusions);
    setScreen('pools');
    resetPoolSettingsSaver();
  }

  function handleEditExclusions() {
    setScreen('balances');
  }

  function handleRun() {
    driver.executejobs(jobs);
  }

  if (!poolsInfo.pools || !poolsInfo.pools.length) {
    return <div>Loading Pools...</div>;
  }

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ position: 'fixed', bottom: 0, left: 0 }}>
        <LoadingIndicator
          loadConfig={loadConfig}
          loading={loading}
          loadables={{
            balances,
            tokens,
            pairsSummary,
            poolsInfo
          }}
        />
      </div>
      <Nav accounts={accounts} setAccounts={setAccounts} />
      <div
        className="container maxwidth-xs"
        data-aos="fade-in"
        style={{ marginTop: 120, textAlign: 'center' }}
      >
        <div
          className="grid-container light-border column animate-resize"
          style={{ borderRadius: 32, alignItems: 'stretch' }}
        >
          {screen === 'balances' ? (
            <SelectBalances
              exclusions={exclusions}
              handleSetExclusions={handleSetExclusions}
              keplr={keplr}
              balances={balances}
              tokens={tokens}
              osmoChainConfig={osmoChainConfig}
            />
          ) : screen === 'preview' ? (
            <CompounderStatus jobs={jobs} tokens={tokens} />
          ) : (
            <>
              <div className="grid-item" style={{ textAlign: 'center' }}>
                <h3 className="main-text paragraph">Auto-Compounder Config</h3>
              </div>
              <div className="grid-item" style={{ textAlign: 'left' }}>
                <p
                  className="detail-text"
                  style={{ paddingLeft: 8, marginBottom: 4 }}
                >
                  Pools to compound into:
                </p>
                <div className="pool-list">
                  {ourPools &&
                    ourPools.map((pool, i) => {
                      const rewardAllocPercent =
                        (pool.rewardAlloc / totalAlloc) * 100;

                      return (
                        <div
                          key={pool.nickname + pool.id}
                          className="pool light-border"
                        >
                          <div className="delete" onClick={() => deletePool(i)}>
                            <FontAwesomeIcon icon="times" />
                          </div>
                          {pool.isSingle ? (
                            <img
                              style={{ marginRight: 39 - 26 + 5 }}
                              className="icon"
                              src={pool.icon}
                            />
                          ) : (
                            <PoolPairImage
                              images={pool.images || []}
                              height={26}
                            />
                          )}
                          <div>
                            <h5 className="main-text">{pool.nickname}</h5>
                            <p
                              className="detail-text"
                              style={{ marginLeft: 0, opacity: '50%' }}
                            >
                              {rewardAllocPercent.toFixed(2)}%
                            </p>
                          </div>
                          <div
                            style={{
                              flex: 1,
                              maxWidth: '45%',
                              marginLeft: 'auto'
                            }}
                          >
                            {/* <ReactSlider style={{ width: 200 }} disabled={true} min={0} max={100} value={pool.rewardAlloc} /> */}
                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              value={pool.rewardAlloc}
                              min={0}
                              max={100}
                              onChange={(nv) => handleRewardAllocChange(i, nv)}
                            />
                          </div>
                          {/* <input style={{ textAlign: 'right', marginRight: 0 }} className='percentage-input' type='number' value={pool.rewardAlloc} onChange={(e) => handleRewardAllocChange(i, e.currentTarget.value)}></input>*/}
                        </div>
                      );
                    })}
                  {showPoolAdder ? (
                    <PoolAdder
                      data={poolsInfo.pools.map((pool) =>
                        prettyPool(pool, { includeDetails: true })
                      )}
                      addPool={addPool}
                      setShowPoolAdder={setShowPoolAdder}
                    />
                  ) : (
                    <button
                      onClick={() => setShowPoolAdder(true)}
                      className="secondary-button"
                      style={{
                        marginBottom: 8,
                        alignSelf: 'center',
                        fontSize: 14
                      }}
                    >
                      <FontAwesomeIcon icon="plus" style={{ marginRight: 8 }} />
                      Add Pool
                    </button>
                  )}
                  {/* <div className='pools-alloc-summary__container'>
                            <PoolAllocSummary />
                        </div> */}
                </div>
              </div>
              <p className="detail-text" style={{ marginBottom: 4 }}>
                Running with{' '}
                {exclusions.length
                  ? exclusions.length +
                    (exclusions.length > 1 ? ' assets' : ' asset') +
                    ' excluded from compounding '
                  : 'no exclusions '}
                <a
                  href="#"
                  style={{ color: '#0089FF' }}
                  onClick={handleEditExclusions}
                >
                  <b>Edit</b>
                </a>
              </p>
              <div className="grid-item" style={{ display: 'flex', flex: 1 }}>
                <button
                  className="action-button"
                  style={{ flex: 1, height: 60 }}
                  onClick={() => triggerSwapsPreview()}
                >
                  Preview swaps &amp; fees
                </button>
              </div>
            </>
          )}
        </div>
        <p className="detail-text" style={{ fontSize: 12 }}>
          Want this to run automatically every day? Use our{' '}
          <a href="#" style={{ color: '#0089FF' }}>
            <b>NPM module</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
