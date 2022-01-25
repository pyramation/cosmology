import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { DataDisplayStat1 } from './DataDisplayStat1';
import { DataDisplayStat2 } from './DataDisplayStat2';
import { DataDisplayStat3 } from './DataDisplayStat3';

storiesOf('Examples/ApplicationUi/DataDisplayStats', module).add(
  'DataDisplayStat1',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const stats = object('stats', [
      { id: 1, headline: 'Sed et purus felis', data: '123,456' },
      { id: 2, headline: 'Maecenas et interdum', data: '60.15%' },
      { id: 3, headline: 'uspendisse at magna nisi', data: '30.27%' }
    ]);

    return <DataDisplayStat1 title={title} stats={stats} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/DataDisplayStats', module).add(
  'DataDisplayStat2',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const stats = object('stats', [
      {
        id: 1,
        icon: 'users',
        headline: 'Sed et purus felis',
        data: '12,345',
        status: { icon: 'arrow-up', text: '123', color: 'success' },
        link: { href: '/', text: 'View all' }
      },
      {
        id: 2,
        icon: 'email',
        headline: 'Maecenas et interdum',
        data: '60.15%',
        status: { icon: 'arrow-up', text: '8.7%', color: 'success' },
        link: { href: '/', text: 'View all' }
      },
      {
        id: 3,
        icon: 'mouse-pointer',
        headline: 'uspendisse at magna nisi',
        data: '30.27%',
        status: { icon: 'arrow-down', text: '5.4%', color: 'danger' },
        link: { href: '/', text: 'View all' }
      }
    ]);

    return <DataDisplayStat2 title={title} stats={stats} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/DataDisplayStats', module).add(
  'DataDisplayStat3',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const stats = object('stats', [
      {
        id: 1,
        headline: 'Sed et purus felis',
        data: '123,456',
        text: 'amet 123,321',
        tag: { color: 'success', icon: 'arrow-up', text: '10%' }
      },
      {
        id: 2,
        headline: 'Maecenas et interdum',
        data: '60.15%',
        text: 'amet 59.02%',
        tag: { color: 'success', icon: 'arrow-up', text: '2.02%' }
      },
      {
        id: 3,
        headline: 'uspendisse at magna nisi',
        data: '30.27%',
        text: 'amet 31.45%',
        tag: { color: 'danger', icon: 'arrow-up', text: '1.05%' }
      }
    ]);

    return <DataDisplayStat3 title={title} stats={stats} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
