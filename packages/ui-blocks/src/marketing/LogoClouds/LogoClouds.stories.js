import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { LogoCloud1 } from './LogoCloud1';
import { LogoCloud2 } from './LogoCloud2';
import { LogoCloud3 } from './LogoCloud3';
import { LogoCloud4 } from './LogoCloud4';
import { LogoCloud5 } from './LogoCloud5';

storiesOf('Examples/Marketing/LogoClouds', module).add(
  'LogoCloud1',
  () => {
    const majorText = text(
      'description',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );

    const brands = object('brands', [
      {
        id: 1,
        logo: 'facebook',
        name: 'facebook'
      },
      {
        id: 2,
        logo: 'twitter',
        name: 'twitter'
      },
      {
        id: 3,
        logo: 'instagram',
        name: 'instagram'
      },
      {
        id: 4,
        logo: 'youtube',
        name: 'youtube'
      },
      {
        id: 5,
        logo: 'twitch',
        name: 'twitch'
      },
      {
        id: 6,
        logo: 'slack',
        name: 'slack'
      }
    ]);

    return <LogoCloud1 majorText={majorText} brands={brands} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/LogoClouds', module).add(
  'LogoCloud2',
  () => {
    const majorText = text(
      'description',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );

    const brands = object('brands', [
      {
        id: 1,
        logo: 'facebook',
        name: 'facebook'
      },
      {
        id: 2,
        logo: 'twitter',
        name: 'twitter'
      },
      {
        id: 3,
        logo: 'instagram',
        name: 'instagram'
      },
      {
        id: 4,
        logo: 'youtube',
        name: 'youtube'
      },
      {
        id: 5,
        logo: 'twitch',
        name: 'twitch'
      },
      {
        id: 6,
        logo: 'slack',
        name: 'slack'
      }
    ]);

    return <LogoCloud2 majorText={majorText} brands={brands} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/LogoClouds', module).add(
  'LogoCloud3',
  () => {
    const majorText = text(
      'description',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );

    const brands = object('brands', [
      {
        id: 1,
        logo: 'facebook',
        name: 'facebook'
      },
      {
        id: 2,
        logo: 'twitter',
        name: 'twitter'
      },
      {
        id: 3,
        logo: 'instagram',
        name: 'instagram'
      }
    ]);

    return <LogoCloud3 majorText={majorText} brands={brands} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/LogoClouds', module).add(
  'LogoCloud4',
  () => {
    const brands = object('brands', [
      {
        id: 1,
        logo: 'facebook',
        name: 'facebook'
      },
      {
        id: 2,
        logo: 'twitter',
        name: 'twitter'
      },
      {
        id: 3,
        logo: 'instagram',
        name: 'instagram'
      },
      {
        id: 4,
        logo: 'youtube',
        name: 'youtube'
      },
      {
        id: 5,
        logo: 'twitch',
        name: 'twitch'
      },
      {
        id: 6,
        logo: 'slack',
        name: 'slack'
      }
    ]);

    return <LogoCloud4 brands={brands} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/LogoClouds', module).add(
  'LogoCloud5',
  () => {
    const majorText = text(
      'title',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );

    const description = text(
      'description',
      'In scelerisque in purus sit amet luctus. Suspendisse a laoreet nulla. Donec aliquam nisi sit amet nisi condimentum, eget fringilla purus auctor. Etiam luctus enim dui, vel pretium purus ullamcorper non. Aenean volutpat auctor turpis at dignissim. Curabitur mattis libero nisl, eu tincidunt odio laoreet in. Maecenas enim orci, tincidunt non euismod ut, vulputate in dui. Nulla a sem dapibus, ultrices nibh eu, efficitur neque.'
    );

    const links = object('link', [
      {
        id: 1,
        text: 'Create Account',
        href: '/',
        variant: 'primary'
      },
      {
        id: 2,
        text: 'Contact Us',
        href: '/',
        variant: 'tertiary',
        intent: 'primary'
      }
    ]);

    const brands = object('brands', [
      {
        id: 1,
        logo: 'facebook',
        name: 'facebook'
      },
      {
        id: 2,
        logo: 'twitter',
        name: 'twitter'
      },
      {
        id: 3,
        logo: 'instagram',
        name: 'instagram'
      },
      {
        id: 4,
        logo: 'youtube',
        name: 'youtube'
      },
      {
        id: 5,
        logo: 'twitch',
        name: 'twitch'
      },
      {
        id: 6,
        logo: 'slack',
        name: 'slack'
      }
    ]);

    return (
      <LogoCloud5
        majorText={majorText}
        description={description}
        links={links}
        brands={brands}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
