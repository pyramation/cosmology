import { assets, chains } from '@pyramation/cosmos-registry';
import { assets as osmosisAssets } from '../assets/index';

import { prompt } from './prompt';

const assetList = assets.reduce(
  (m, { assets }) => [...m, ...assets.map(({ symbol }) => symbol)],
  []
);

export const getCosmosAssetInfo = (symbol) => 
  assets.find(a=>!!a.assets.find(i=>i.symbol === symbol));

export const getOsmosisAssetInfo = (symbol) => 
  osmosisAssets.find(a=>a.symbol === symbol);

export const getOsmosisAssetIbcInfo = (symbol) => {
  const assetInfo = getOsmosisAssetInfo(symbol);
  return assetInfo?.ibc;
};

export const getOsmosisAssetDenom = (symbol) => {
  const assetInfo = getOsmosisAssetInfo(symbol);
  return assetInfo?.base;
};

export const getNameOfChain = (chain_id) => {
  const chain = chains.find(c=>c.chain_id===chain_id);
  return chain?.chain_name;
};

export const getBaseAndDisplayUnits = (symbol) => {
  const coinInfo = getCosmosAssetInfo(symbol);
  if (!coinInfo) {
      throw new Error('coin not found.')
  }
  const asset = coinInfo.assets.find(a=>a.symbol===symbol);
  if (!asset) {
      throw new Error('coin not found.')
  }
  
  const base = asset.denom_units.find(d=>d.denom===asset.base);
  const display = asset.denom_units.find(d=>d.denom===asset.display);

  if (!base || !display) {
      throw new Error('cannot find denom for coin');
  }

  return { base, display };
}

export const getOsmosisSymbolIbcName = (symbol) => {
  const coinInfo = getOsmosisAssetInfo(symbol);
  if (!coinInfo) {
      throw new Error('coin not found.')
  }
  return coinInfo.base;
}

export const displayUnitsToDenomUnits = (symbol, amount) => {
  const { display } = getBaseAndDisplayUnits(symbol);
  return amount * Math.pow(10, display.exponent); 
}

export const getChain = async ({ token }) => {
  const chainFromAssets = assets.find(({ assets }) => {
    const found = assets.find(({ symbol }) => symbol === token);
    if (found) return true;
  });
  const chain = chains.find(
    ({ chain_id }) => chain_id == chainFromAssets.chain_id
  );
  return chain;
};

export const promptChain = async (argv) => {
  const { chainToken } = await prompt(
    [
      {
        type: 'fuzzy',
        name: 'chainToken',
        message: 'chainToken',
        choices: assetList
      }
    ],
    argv
  );
  argv.chainToken = chainToken;
  return await getChain({ token: chainToken });
};
