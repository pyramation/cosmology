import { filter } from 'fuzzy';
import { prompt } from 'inquirerer';
import { Commands as commands } from './cmds';

const keys = Object.keys(commands);

export const search = (answers, input) => {
  input = input || '';
  return new Promise(function (resolve) {
    setTimeout(function () {
      var fuzzyResult = filter(input, keys);
      resolve(
        fuzzyResult.map(function (el) {
          return el.original;
        })
      );
    }, 25);
  });
};

const question = [
  {
    _: true,
    type: 'autocomplete',
    name: 'cmd',
    message: 'what do you want to do?',
    source: search
  }
];

export const cli = async (argv) => {
  var { cmd } = await prompt(question, argv);
  if (typeof commands[cmd] === 'function') {
    await commands[cmd](argv);
  } else {
    console.log('command not found.');
  }
};
