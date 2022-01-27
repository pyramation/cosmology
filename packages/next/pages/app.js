import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faSearch } from '@fortawesome/fontawesome-free-solid'
import ReactSlider from 'react-slider'
import { assets } from 'autosmosis';
import PoolAdder from '../src/components/PoolAdder';
import { fetchListOfPools } from '../src/clients/autosmosis';
import PoolPairImage from '../src/components/subComponents/PoolPairImage';
import PoolAllocSummary from '../src/components/PoolAllocSummary';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

fontawesome.library.add(faTimes);

export async function getServerSideProps(ctx) {
    // we could do this in frontend, but i didn't want to create a spinner
    const pools = await fetchListOfPools();

    return {
        props: {
            pools
        }
    }
}

const defaultPools = [
    {
        id: 0,
        icon: '/terra.png',
        nickname: 'UST',
        rewardAlloc: 100,
        isSingle: true
    },
]

const App = ({ pools }) => {

    const [ourPools, setOurPools] = useState(defaultPools);
    const [showPoolAdder, setShowPoolAdder] = useState(false);
    const [queuedPools, setQueuedPools] = useState([]);

    useEffect(() => {
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
                    poolsToAdd.push(queuedPool)
                }
            }
            setOurPools([...ourPools, ...poolsToAdd]);
            setQueuedPools([]);
        }
    }, [queuedPools]);

    function handleRewardAllocChange(pidx, newValue) {
        console.log("handleRewardAllocChange")
        setOurPools(ourPools.map((p, i) => {
            if (i === pidx) p.rewardAlloc = newValue
            return p;
        }));
    }

    function addPool(pool) {
        console.log("addPool", ourPools);
        setQueuedPools([pool])
    }

    console.log(ourPools)

    return <div>
        <div className='container maxwidth-xs' style={{ marginTop: 120, textAlign: 'center' }}>
            <div className='grid-container light-border column' style={{ borderRadius: 32, alignItems: 'stretch' }}>
                <div className='grid-item' style={{ textAlign: 'center' }}>
                    <h3 className='main-text paragraph'>Auto-Compounder Config</h3>
                </div>
                <div className='grid-item' style={{ textAlign: 'left' }}>
                    <p className='detail-text' style={{ paddingLeft: 8 }}>Pools</p>
                    <div className='pool-list'>
                        {ourPools.map((pool, i) => {
                            return <div key={pool.nickname + pool.id} className='pool light-border'>
                                <div className='delete' onClick={() => setOurPools(ourPools.filter((p, pi) => pi !== i))}><FontAwesomeIcon icon='times' /></div>
                                {pool.isSingle ? <img style={{ marginRight: 39 - 26 + 5 }} className='icon' src={pool.icon} />
                                    :
                                    <PoolPairImage images={pool.images || []} height={26} />
                                }
                                <div>
                                    <h5 className='main-text'>{pool.nickname}</h5>
                                    <p className='detail-text' style={{ marginLeft: 0, opacity: '50%' }}>{pool.rewardAlloc}%</p>
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
                        <div className='pools-alloc-summary__container'>
                            <PoolAllocSummary />
                        </div>
                    </div>
                </div>
                <div className='grid-item' style={{ display: 'flex', flex: 1 }}>
                    <button className='action-button' style={{ flex: 1, height: 60 }}>Preview swaps &amp; fees</button>
                </div>
            </div>
            <p className="detail-text" style={{ fontSize: 12 }}>Want this to run automatically every day? Use our <a href="#" style={{ color: "#0089FF" }}><b>NPM module</b></a></p>
        </div>
    </div>
}

export default App