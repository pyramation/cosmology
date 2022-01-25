import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { StackedLayout1 } from './StackedLayout1';
import { StackedLayout2 } from './StackedLayout2';
import { StackedLayout3 } from './StackedLayout3';
import { StackedLayout4 } from './StackedLayout4';
import { StackedLayout5 } from './StackedLayout5';
import { StackedLayout6 } from './StackedLayout6';
import { StackedLayout7 } from './StackedLayout7';
import { StackedLayout8 } from './StackedLayout8';
import { StackedLayout9 } from './StackedLayout9';

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout1',
  () => {
    const navBackgroundColor = text('navBackgroundColor', 'blackAlpha.900');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, href: '/', text: 'Home', active: true },
      { id: 2, href: '/', text: 'Features' },
      { id: 3, href: '/', text: 'Pricing' },
      { id: 4, href: '/', text: 'Services' },
      { id: 5, href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const titleBackgroundColor = text('titleBackgroundColor', 'white');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout1
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        titleBackgroundColor={titleBackgroundColor}
        boxBackgroundColor={boxBackgroundColor}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout2',
  () => {
    const brand = (text, 'Launchql');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout2
        brand={brand}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout3',
  () => {
    const brand = (text, 'Launchql');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const backgroundColor = text('backgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout3
        brand={brand}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        backgroundColor={backgroundColor}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout4',
  () => {
    const navBackgroundColor = text('navBackgroundColor', 'accent');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' },
      { id: 5, type: 'link', href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const titleBackgroundColor = text('titleBackgroundColor', 'white');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout4
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        titleBackgroundColor={titleBackgroundColor}
        boxBackgroundColor={boxBackgroundColor}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout5',
  () => {
    const navBackgroundColor = text('navBackgroundColor', 'blackAlpha.800');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' },
      { id: 5, type: 'link', href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const backgroundColor = text('titleBackgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout5
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        backgroundColor={backgroundColor}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout6',
  () => {
    const navBackgroundColor = text(
      'navBackgroundColor',
      'palette.primary.base'
    );
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' },
      { id: 5, type: 'link', href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const search = object('search', { icon: 'search', text: 'Search' });
    const backgroundColor = text('titleBackgroundColor', 'gray.50');
    const boxBackgroundColor = text('boxBackgroundColor', 'white');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout6
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        backgroundColor={backgroundColor}
        boxBackgroundColor={boxBackgroundColor}
        lists={lists}
        search={search}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout7',
  () => {
    const navBackgroundColor = text(
      'navBackgroundColor',
      'palette.primary.base'
    );
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' },
      { id: 5, type: 'link', href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const titleBackgroundColor = text('titleBackgroundColor', 'white');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout7
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        titleBackgroundColor={titleBackgroundColor}
        boxBackgroundColor={boxBackgroundColor}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout8',
  () => {
    const navBackgroundColor = text('navBackgroundColor', 'blackAlpha.800');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' },
      { id: 5, type: 'link', href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const titleBackgroundColor = text('titleBackgroundColor', 'white');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout8
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        title={title}
        titleBackgroundColor={titleBackgroundColor}
        boxBackgroundColor={boxBackgroundColor}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLayouts', module).add(
  'StackedLayout9',
  () => {
    const navBackgroundColor = text(
      'navBackgroundColor',
      'palette.primary.base'
    );
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const leftLinks = object('leftLinks', [
      { id: 1, type: 'link', href: '/', text: 'Home', active: true },
      { id: 2, type: 'link', href: '/', text: 'Features' },
      { id: 3, type: 'link', href: '/', text: 'Pricing' },
      { id: 4, type: 'link', href: '/', text: 'Services' },
      { id: 5, type: 'link', href: '/', text: 'About Us' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const search = object('search', { icon: 'search', text: 'Search' });
    const backgroundColor = text('backgroundColor', 'gray.50');
    const boxBackgroundColor = text('boxBackgroundColor', 'white');
    const copyRight = text('text', '© 2021 Vivamus eu tortor libero');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <StackedLayout9
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        leftLinks={leftLinks}
        avatar={avatar}
        search={search}
        backgroundColor={backgroundColor}
        boxBackgroundColor={boxBackgroundColor}
        copyRight={copyRight}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
