import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { DescriptionList1 } from './DescriptionList1';
import { DescriptionList2 } from './DescriptionList2';
import { DescriptionList3 } from './DescriptionList3';
import { DescriptionList4 } from './DescriptionList4';
import { DescriptionList5 } from './DescriptionList5';

storiesOf('Examples/ApplicationUi/DescriptionLists', module).add(
  'DescriptionList1',
  () => {
    const title = text('title', 'Vivamus ultrices nisl');
    const subTitle = text('subTitle', 'et semper sem tempor eget');

    const upload = object('upload', [
      {
        id: 1,
        icon: 'paperclip',
        fileName: 'Duis auctor porttitor diam.txt',
        link: { href: '/', text: 'Download' }
      },
      {
        id: 2,
        icon: 'paperclip',
        fileName: 'Nam vitae mi eu erat convallis tristique.pdf',
        link: { href: '/', text: 'Download' }
      }
    ]);

    const list = object('list', [
      { id: 1, headline: 'Proin id', data: 'RIVER LYNCH' },
      {
        id: 2,
        headline: 'Pellentesque viverra',
        data: 'lorem at tellus blandit'
      },
      { id: 3, headline: 'Fusce molestie', data: 'Ruence1934@cuvox.de' },
      { id: 4, headline: 'Vivamus malesuada', data: '$150,000' },
      {
        id: 5,
        headline: 'Nunc rhoncus',
        data:
          'Aliquam euismod elementum bibendum. Sed lacinia enim ac tincidunt porttitor. Vivamus rhoncus, nibh in maximus sodales, lacus libero tincidunt purus, id malesuada nibh diam id purus. Mauris placerat tristique tellus sit amet condimentum. Nam elit magna, congue ac elit eget, tempor venenatis ex. Integer erat diam, facilisis vitae aliquet eget, convallis non eros.'
      },
      { id: 6, headline: 'Tincidunt ac', file: upload }
    ]);

    return <DescriptionList1 title={title} subTitle={subTitle} list={list} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/DescriptionLists', module).add(
  'DescriptionList2',
  () => {
    const title = text('title', 'Vivamus ultrices nisl');
    const subTitle = text('subTitle', 'et semper sem tempor eget');

    const upload = object('upload', [
      {
        id: 1,
        icon: 'paperclip',
        fileName: 'Duis auctor porttitor diam.txt',
        link: { href: '/', text: 'Download' }
      },
      {
        id: 2,
        icon: 'paperclip',
        fileName: 'Nam vitae mi eu erat convallis tristique.pdf',
        link: { href: '/', text: 'Download' }
      }
    ]);

    const list = object('list', [
      { id: 1, headline: 'Proin id', data: 'RIVER LYNCH' },
      {
        id: 2,
        headline: 'Pellentesque viverra',
        data: 'lorem at tellus blandit'
      },
      { id: 3, headline: 'Fusce molestie', data: 'Ruence1934@cuvox.de' },
      { id: 4, headline: 'Vivamus malesuada', data: '$150,000' },
      {
        id: 5,
        headline: 'Nunc rhoncus',
        data:
          'Aliquam euismod elementum bibendum. Sed lacinia enim ac tincidunt porttitor. Vivamus rhoncus, nibh in maximus sodales, lacus libero tincidunt purus, id malesuada nibh diam id purus. Mauris placerat tristique tellus sit amet condimentum. Nam elit magna, congue ac elit eget, tempor venenatis ex. Integer erat diam, facilisis vitae aliquet eget, convallis non eros.'
      },
      { id: 6, headline: 'Nunc rhoncus', file: upload }
    ]);

    return <DescriptionList2 title={title} subTitle={subTitle} list={list} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/DescriptionLists', module).add(
  'DescriptionList3',
  () => {
    const title = text('title', 'Vivamus ultrices nisl');
    const subTitle = text('subTitle', 'et semper sem tempor eget');

    const upload = object('upload', [
      {
        id: 1,
        icon: 'paperclip',
        fileName: 'Duis auctor porttitor diam.txt',
        link1: { href: '/', text: 'Update' },
        link2: { href: '/', text: 'Remove' }
      },
      {
        id: 2,
        icon: 'paperclip',
        fileName: 'Nam vitae mi eu erat convallis tristique.pdf',
        link1: { href: '/', text: 'Update' },
        link2: { href: '/', text: 'Remove' }
      }
    ]);

    const list = object('list', [
      {
        id: 1,
        headline: 'Proin id',
        data: 'RIVER LYNCH',
        link: { href: '/', text: 'Update' }
      },
      {
        id: 2,
        headline: 'Pellentesque viverra',
        data: 'lorem at tellus blandit',
        link: { href: '/', text: 'Update' }
      },
      {
        id: 3,
        headline: 'Fusce molestie',
        data: 'Ruence1934@cuvox.de',
        link: { href: '/', text: 'Update' }
      },
      {
        id: 4,
        headline: 'Vivamus malesuada',
        data: '$150,000',
        link: { href: '/', text: 'Update' }
      },
      {
        id: 5,
        headline: 'Nunc rhoncus',
        data:
          'Aliquam euismod elementum bibendum. Sed lacinia enim ac tincidunt porttitor. Vivamus rhoncus, nibh in maximus sodales, lacus libero tincidunt purus, id malesuada nibh diam id purus. Mauris placerat tristique tellus sit amet condimentum. Nam elit magna, congue ac elit eget, tempor venenatis ex. Integer erat diam, facilisis vitae aliquet eget, convallis non eros.',
        link: { href: '/', text: 'Update' }
      },
      { id: 6, headline: 'Nunc rhoncus', file: upload }
    ]);

    return <DescriptionList3 title={title} subTitle={subTitle} list={list} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/DescriptionLists', module).add(
  'DescriptionList4',
  () => {
    const title = text('title', 'Vivamus ultrices nisl');
    const subTitle = text('subTitle', 'et semper sem tempor eget');

    const upload = object('upload', [
      {
        id: 1,
        icon: 'paperclip',
        fileName: 'Duis auctor porttitor diam.txt',
        link: { href: '/', text: 'Download' }
      },
      {
        id: 2,
        icon: 'paperclip',
        fileName: 'Nam vitae mi eu erat convallis tristique.pdf',
        link: { href: '/', text: 'Download' }
      }
    ]);

    const list = object('list', [
      { id: 1, headline: 'Proin id', data: 'RIVER LYNCH' },
      {
        id: 2,
        headline: 'Pellentesque viverra',
        data: 'lorem at tellus blandit'
      },
      { id: 3, headline: 'Fusce molestie', data: 'Ruence1934@cuvox.de' },
      { id: 4, headline: 'Vivamus malesuada', data: '$150,000' },
      {
        id: 5,
        headline: 'Nunc rhoncus',
        data:
          'Aliquam euismod elementum bibendum. Sed lacinia enim ac tincidunt porttitor. Vivamus rhoncus, nibh in maximus sodales, lacus libero tincidunt purus, id malesuada nibh diam id purus. Mauris placerat tristique tellus sit amet condimentum. Nam elit magna, congue ac elit eget, tempor venenatis ex. Integer erat diam, facilisis vitae aliquet eget, convallis non eros.'
      },
      { id: 6, headline: 'Nunc rhoncus', file: upload }
    ]);

    return <DescriptionList4 title={title} subTitle={subTitle} list={list} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/DescriptionLists', module).add(
  'DescriptionList5',
  () => {
    const title = text('title', 'Vivamus ultrices nisl');
    const subTitle = text('subTitle', 'et semper sem tempor eget');

    const upload = object('upload', [
      {
        id: 1,
        icon: 'paperclip',
        fileName: 'Duis auctor porttitor diam.txt',
        link: { href: '/', text: 'Download' }
      },
      {
        id: 2,
        icon: 'paperclip',
        fileName: 'Nam vitae mi eu erat convallis tristique.pdf',
        link: { href: '/', text: 'Download' }
      }
    ]);

    const list1 = object('list1', [
      { id: 1, headline: 'Proin id', data: 'RIVER LYNCH' },
      {
        id: 2,
        headline: 'Pellentesque viverra',
        data: 'lorem at tellus blandit'
      },
      { id: 3, headline: 'Fusce molestie', data: 'Ruence1934@cuvox.de' },
      { id: 4, headline: 'Vivamus malesuada', data: '$150,000' }
    ]);

    const list2 = object('list2', [
      {
        id: 1,
        headline: 'Nunc rhoncus',
        data:
          'Aliquam euismod elementum bibendum. Sed lacinia enim ac tincidunt porttitor. Vivamus rhoncus, nibh in maximus sodales, lacus libero tincidunt purus, id malesuada nibh diam id purus. Mauris placerat tristique tellus sit amet condimentum. Nam elit magna, congue ac elit eget, tempor venenatis ex. Integer erat diam, facilisis vitae aliquet eget, convallis non eros.'
      },
      { id: 2, headline: 'Nunc rhoncus', file: upload }
    ]);

    return (
      <DescriptionList5
        title={title}
        subTitle={subTitle}
        list1={list1}
        list2={list2}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
