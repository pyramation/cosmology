import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, object } from '@storybook/addon-knobs';
import { Banner1 } from './Banner1';
import { Banner2 } from './Banner2';
import { Banner3 } from './Banner3';

storiesOf('Examples/Marketing/Banners', module).add(
  'Banner1',
  () => {
    const icon = text('icon', 'download');
    const link = object('link', {
      href: '/',
      text: 'Learn more',
      textColor: 'blackAlpha.900',
      backgroundColor: 'whiteAlpha.900'
    });
    const fixed = select('fixed', ['top', 'bottom'], 'bottom');
    const textarea = text(
      'text',
      'Big news! We’ re excited to announce a brand new product.'
    );
    return (
      <Banner1
        fixed={fixed}
        timeout={1000}
        icon={icon}
        link={link}
        text={textarea}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Banners', module).add(
  'Banner2',
  () => {
    const icon = text('icon', 'download');
    const link = object('link', {
      href: '/',
      text: 'Learn more',
      textColor: 'blackAlpha.900',
      backgroundColor: 'whiteAlpha.900'
    });
    const fixed = select('fixed', ['top', 'bottom'], 'bottom');
    const textarea = text(
      'text',
      'Big news! We’ re excited to announce a brand new product.'
    );
    return (
      <Banner2
        fixed={fixed}
        timeout={1000}
        icon={icon}
        link={link}
        text={textarea}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Banners', module).add(
  'Banner3',
  () => {
    const link = object('link', {
      href: '/',
      text: 'Learn more',
      icon: 'arrow-right'
    });
    const fixed = select('fixed', ['top', 'bottom'], 'bottom');
    const textarea = text(
      'text',
      'Big news! We’ re excited to announce a brand new product.'
    );
    return <Banner3 fixed={fixed} timeout={1000} link={link} text={textarea} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
