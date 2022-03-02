import { filter } from 'fuzzy';
import { assets as osmosisAssets } from '../assets';
import { assets, chains } from '@pyramation/cosmos-registry';
import { prompt as inquirerer } from 'inquirerer';
import { getChain, getChainByChainId } from './chain'

const assetList = assets.reduce(
  (m, { assets }) => [...m, ...assets.map(({ symbol }) => symbol)],
  []
).sort();

export const getFuzzySearch = (list) => {
  return (answers, input) => {
    input = input || '';
    return new Promise(function (resolve) {
      setTimeout(function () {
        const fuzzyResult = filter(input, list);
        resolve(
          fuzzyResult.map(function (el) {
            return el.original;
          })
        );
      }, 25);
    });
  };
};

const coinSymbols = osmosisAssets.map(({ symbol }) => symbol).sort();
const allChains = chains.map(a => a.chain_id);

const transform = (questions) => {
  return questions.map((q) => {
    if (q.type === 'fuzzy') {
      const choices = q.choices;
      delete q.choices;
      return {
        ...q,
        type: 'autocomplete',
        source: getFuzzySearch(choices)
      };
    } else if (q.type === 'fuzzy:token') {
      return {
        ...q,
        type: 'autocomplete',
        source: getFuzzySearch(coinSymbols)
      };
    } else if (q.type === 'fuzzy:chain') {
      return {
        ...q,
        type: 'autocomplete',
        source: getFuzzySearch(allChains)
      };
    } else if (q.type === 'checkbox:token') {
      return {
        ...q,
        type: 'checkbox',
        choices: coinSymbols
      };
    } else {
      return q;
    }
  });
};

export const prompt = async (questions = [], argv = {}) => {
  questions = transform(questions);
  return await inquirerer(questions, argv);
};

export const promptMnemonic = async (argv = {}) => {
  if (process.env.MNEMONIC) {
    argv.mnemonic = process.env.MNEMONIC;
  }
  return await prompt(
    [
      {
        type: 'password',
        name: 'mnemonic',
        message: 'mnemonic'
      }
    ],
    argv
  );
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

export const promptChainIdAndChain = async (argv) => {
  const { chainId } = await prompt(
    [
      {
        type: 'fuzzy',
        name: 'chainId',
        message: 'chainId',
        choices: chains.map(c=>c.chain_id).sort()
      }
    ],
    argv
  );
  argv.chainId = chainId;
  return await getChainByChainId( chainId );
};
