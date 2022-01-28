import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faSearch } from "@fortawesome/fontawesome-free-solid";
import ReactSlider from "react-slider";
import { getAllSwaps, assets, OsmosisApiClient } from "autosmosis";
import PoolAdder from "../src/components/PoolAdder";
import { fetchListOfPools } from "../src/clients/autosmosis";
import PoolPairImage from "../src/components/subComponents/PoolPairImage";
import PoolAllocSummary from "../src/components/PoolAllocSummary";
import Nav from "../src/components/Nav";

const COINHASH = assets.reduce((m, asset) => {
    m[asset.base] = asset;
    return m;
}, {});
console.log(COINHASH);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

fontawesome.library.add(faTimes);

export async function getServerSideProps(ctx) {
  // we could do this in frontend, but i didn't want to create a spinner
  const pools = await fetchListOfPools();

  return {
    props: {
      pools,
    },
  };
}

const defaultPools = [
  {
    id: 0,
    icon: "/terra.png",
    nickname: "UST",
    symbol: "UST",
    rewardAlloc: 100,
    isSingle: true,
  },
];

let saverTimeout = null;

const App = ({ pools }) => {
  const [ourPools, setOurPools] = useState(null);
  const [showPoolAdder, setShowPoolAdder] = useState(false);
  const [queuedPools, setQueuedPools] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [ourPools, setOurPools] = useState(null);
  const [showPoolAdder, setShowPoolAdder] = useState(false);
  const [queuedPools, setQueuedPools] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [swaps, setSwaps] = useState([]);

  function resetPoolSettingsSaver() {
    if (saverTimeout) clearTimeout(saverTimeout);
    saverTimeout = setTimeout(() => {
      savePoolSettings();
      saverTimeout = null;
    }, 30);
  }

  useEffect(async () => {
      if (accounts.length === 0) {
          return
      }
    const client = new OsmosisApiClient();
    const balances = await client.getBalances(accounts[0].address);
    console.log(balances);
  }, [accounts]);

  useEffect(() => {
    if (!ourPools) {
      const savedPoolSettings = window.localStorage.getItem("poolsConfig");
      setOurPools(
        savedPoolSettings ? JSON.parse(savedPoolSettings) : defaultPools
      );
    }
    if (queuedPools.length) {
      const poolsToAdd = [];
      for (let queuedPool of queuedPools) {
        let shouldAdd = true;
        for (let ourPool of ourPools) {
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

    const totalAlloc = ourPools ? ourPools.reduce((total, p) => total + p.rewardAlloc, 0.0000001) : 100

    async function triggerSwapsPreview() {
        if (totalAlloc === 0.0000001) return alert("You must allocate your rewards into at least one pool.");

        const poolObjectsMapped = ourPools.map(pool => {
            return {
                type: pool.isSingle ? "coin" : "pool",
                coin: pool.isSingle ? pool.symbol : null,
                pool: pool.isSingle ? null : {
                    coin1: pool.poolAssetsPretty?.[0]?.symbol,
                    coin2: pool.poolAssetsPretty?.[1]?.symbol,
                    id: pool.id,
                    balance: pool.poolAssetsPretty?.[0]?.ratio
                },
                weight: pool.rewardAlloc / totalAlloc
            }
        });

        const swaps = await getAllSwaps(poolObjectsMapped);
        setShowPreview(true);
        setSwaps(swaps);
    }

    console.log(ourPools)

    return <div>
        <Nav />
        <div className='container maxwidth-xs' data-aos='fade-in' style={{ marginTop: 120, textAlign: 'center' }}>
            <div className='grid-container light-border column animate-resize' style={{ borderRadius: 32, alignItems: 'stretch' }}>
                {showPreview ?
                    <div >
                        {swaps.map(swap => {
                            return <div key={swap.inputCoin + "->" + swap.outputCoin + ":" + swap.amount} className='swap-container'>

                            </div>
                        })}
                        <pre>
                            {JSON.stringify(swaps, null, 2)}
                        </pre>
                    </div>
                    :
                    <>
                        <div className='grid-item' style={{ textAlign: 'center' }}>
                            <h3 className='main-text paragraph'>Auto-Compounder Config</h3>
                        </div>
                        <div className='grid-item' style={{ textAlign: 'left' }}>
                            <p className='detail-text' style={{ paddingLeft: 8 }}>Pools</p>
                            <div className='pool-list'>
                                {ourPools && ourPools.map((pool, i) => {
                                    const rewardAllocPercent = pool.rewardAlloc / totalAlloc * 100;

                                    return <div key={pool.nickname + pool.id} className='pool light-border'>
                                        <div className='delete' onClick={() => deletePool(i)}><FontAwesomeIcon icon='times' /></div>
                                        {pool.isSingle ? <img style={{ marginRight: 39 - 26 + 5 }} className='icon' src={pool.icon} />
                                            :
                                            <PoolPairImage images={pool.images || []} height={26} />
                                        }
                                        <div>
                                            <h5 className='main-text'>{pool.nickname}</h5>
                                            <p className='detail-text' style={{ marginLeft: 0, opacity: '50%' }}>{rewardAllocPercent.toFixed(2)}%</p>
                                        </div>
                                        <div style={{ flex: 1, maxWidth: '45%', marginLeft: 'auto' }}>
                                            {/* <ReactSlider style={{ width: 200 }} disabled={true} min={0} max={100} value={pool.rewardAlloc} /> */}
                                            <ReactSlider
                                                className="horizontal-slider"
                                                thumbClassName="example-thumb"
                                                trackClassName="example-track"
                                                value={pool.rewardAlloc}
                                                min={0}
                                                max={100}
                                                onChange={nv => handleRewardAllocChange(i, nv)}
                                            />
                                        </div>
                                        {/* <input style={{ textAlign: 'right', marginRight: 0 }} className='percentage-input' type='number' value={pool.rewardAlloc} onChange={(e) => handleRewardAllocChange(i, e.currentTarget.value)}></input>*/}
                                    </div>
                                })}
                                {showPoolAdder ?
                                    <PoolAdder data={pools} addPool={addPool} setShowPoolAdder={setShowPoolAdder} />
                                    :
                                    <button onClick={() => setShowPoolAdder(true)} className='secondary-button' style={{ marginBottom: 8, alignSelf: 'center', fontSize: 14 }}><FontAwesomeIcon icon='plus' style={{ marginRight: 8 }} />Add Pool</button>
                                }
                                {/* <div className='pools-alloc-summary__container'>
                            <PoolAllocSummary />
                        </div> */}
                            </div>
                        </div>
                        <div className='grid-item' style={{ display: 'flex', flex: 1 }}>
                            <button className='action-button' style={{ flex: 1, height: 60 }} onClick={() => triggerSwapsPreview()}>Preview swaps &amp; fees</button>
                        </div>
                    </>
                }
            </div>
          </div>
          <div className="grid-item" style={{ display: "flex", flex: 1 }}>
            <button
              className="action-button"
              style={{ flex: 1, height: 60 }}
              onClick={() => triggerSwapsPreview()}
            >
              Preview swaps &amp; fees
            </button>
          </div>
        </div>
        <p className="detail-text" style={{ fontSize: 12 }}>
          Want this to run automatically every day? Use our{" "}
          <a href="#" style={{ color: "#0089FF" }}>
            <b>NPM module</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
