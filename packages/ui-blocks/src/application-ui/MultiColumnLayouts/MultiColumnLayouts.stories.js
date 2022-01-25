import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { MultiColumnLayout1 } from './MultiColumnLayout1';
import { MultiColumnLayout2 } from './MultiColumnLayout2';
import { MultiColumnLayout3 } from './MultiColumnLayout3';
import { MultiColumnLayout4 } from './MultiColumnLayout4';
import { MultiColumnLayout5 } from './MultiColumnLayout5';
import { MultiColumnLayout6 } from './MultiColumnLayout6';
import { MultiColumnLayout7 } from './MultiColumnLayout7';

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout1',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'gray.50');
    const brand = text('brand', 'Launchql');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const slideLinks = object('slideLinks', [
      { id: 1, icon: 'home', href: '/', text: 'Home', active: true },
      { id: 2, icon: 'users', href: '/', text: 'Features' },
      { id: 3, icon: 'folder', href: '/', text: 'Pricing' },
      { id: 4, icon: 'calendar', href: '/', text: 'Services' },
      { id: 5, icon: 'inbox', href: '/', text: 'About Us' },
      { id: 6, icon: 'bar-chart', href: '/', text: 'Curabitur' }
    ]);
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });

    return (
      <MultiColumnLayout1
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        avatar={avatar}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout2',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'gray.50');
    const brand = text('brand', 'Launchql');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const slideLinks = object('slideLinks', [
      { id: 1, icon: 'home', href: '/', text: 'Home', active: true },
      { id: 2, icon: 'users', href: '/', text: 'Features' },
      { id: 3, icon: 'folder', href: '/', text: 'Pricing' },
      { id: 4, icon: 'calendar', href: '/', text: 'Services' },
      { id: 5, icon: 'inbox', href: '/', text: 'About Us' },
      { id: 6, icon: 'bar-chart', href: '/', text: 'Curabitur' }
    ]);
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });

    return (
      <MultiColumnLayout2
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        avatar={avatar}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout3',
  () => {
    const navBackgroundColor = text(
      'navBackgroundColor',
      'palette.primary.base'
    );
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const search = object('search', {
      icon: 'search',
      text: 'Search eget dolor'
    });
    const navLinks = object('navLinks', [
      { id: 1, href: '/', text: 'Home' },
      { id: 2, href: '/', text: 'Features' }
    ]);
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });
    const rightBoxColor = ('text', 'gray.50');

    return (
      <MultiColumnLayout3
        navBackgroundColor={navBackgroundColor}
        navLinks={navLinks}
        logoAttr={logoAttr}
        search={search}
        avatar={avatar}
        rightBoxColor={rightBoxColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout4',
  () => {
    const navBackgroundColor = text('navBackgroundColor', 'white');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const search = object('search', {
      icon: 'search',
      text: 'Search eget dolor'
    });
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });
    const button = text('button', 'Pellentesque tempus');
    const contentColor = text('contentColor', 'gray.50');

    return (
      <MultiColumnLayout4
        navBackgroundColor={navBackgroundColor}
        logoAttr={logoAttr}
        search={search}
        avatar={avatar}
        button={button}
        contentColor={contentColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout5',
  () => {
    const logoBackgroundColor = text(
      'logoBackgroundColor',
      'palette.primary.base'
    );
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const slideLinks = object('slideLinks', [
      { id: 1, href: '/', icon: 'inbox', active: true },
      { id: 2, href: '/', icon: 'archive' },
      { id: 3, href: '/', icon: 'username' },
      { id: 4, href: '/', icon: 'flag' },
      { id: 5, href: '/', icon: 'slash' },
      { id: 6, href: '/', icon: 'edit-3' }
    ]);
    const search = object('search', {
      icon: 'search',
      text: 'Search eget dolor'
    });
    const navLinks = object('navLinks', [
      { id: 'navLink1', href: '/', text: 'Scelerisque' },
      { id: 'navLink2', href: '/', text: 'Magna' },
      { id: 'navLink3', href: '/', text: 'Dapibus' }
    ]);
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });
    const contentColor = text('contentColor', 'gray.50');

    return (
      <MultiColumnLayout5
        logoBackgroundColor={logoBackgroundColor}
        logoAttr={logoAttr}
        search={search}
        slideLinks={slideLinks}
        navLinks={navLinks}
        avatar={avatar}
        contentColor={contentColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout6',
  () => {
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const slideBackgroundColor = text(
      'slideBackgroundColor',
      'palette.primary.base'
    );
    const slideLinks = object('slideLinks', [
      { id: 1, href: '/', icon: 'inbox', text: 'Inbox' },
      { id: 2, href: '/', icon: 'archive', text: 'Archive' },
      { id: 3, href: '/', icon: 'username', text: 'User', active: true },
      { id: 4, href: '/', icon: 'flag', text: 'Flag' },
      { id: 5, href: '/', icon: 'slash', text: 'Slash' },
      { id: 6, href: '/', icon: 'edit-3', text: 'Edit' }
    ]);
    const search = object('search', {
      icon: 'search',
      text: 'Search eget dolor'
    });
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);
    const contentLeftColor = text('contentLeftColor', 'gray.50');

    return (
      <MultiColumnLayout6
        slideBackgroundColor={slideBackgroundColor}
        logoAttr={logoAttr}
        search={search}
        slideLinks={slideLinks}
        avatar={avatar}
        lists={lists}
        contentLeftColor={contentLeftColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/MultiColumnLayouts', module).add(
  'MultiColumnLayout7',
  () => {
    const logoBackgroundColor = text(
      'logoBackgroundColor',
      'palette.primary.base'
    );
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const slideBackgroundColor = text(
      'slideBackgroundColor',
      'palette.primary.dark'
    );
    const slideLinks = object('slideLinks', [
      { id: 1, href: '/', icon: 'inbox', text: 'Inbox' },
      { id: 2, href: '/', icon: 'archive', text: 'Archive' },
      { id: 3, href: '/', icon: 'username', text: 'User' },
      { id: 4, href: '/', icon: 'flag', text: 'Flag' },
      { id: 5, href: '/', icon: 'slash', text: 'Slash' },
      { id: 6, href: '/', icon: 'edit-3', text: 'Edit' }
    ]);
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });
    const contentRightColor = text('contentColor', 'gray.50');

    return (
      <MultiColumnLayout7
        logoBackgroundColor={logoBackgroundColor}
        logoAttr={logoAttr}
        slideBackgroundColor={slideBackgroundColor}
        slideLinks={slideLinks}
        avatar={avatar}
        contentRightColor={contentRightColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
