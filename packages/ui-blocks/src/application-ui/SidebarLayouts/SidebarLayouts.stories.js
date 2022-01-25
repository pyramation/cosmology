import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { SidebarLayout1 } from './SidebarLayout1';
import { SidebarLayout2 } from './SidebarLayout2';
import { SidebarLayout3 } from './SidebarLayout3';
import { SidebarLayout4 } from './SidebarLayout4';
import { SidebarLayout5 } from './SidebarLayout5';
import { SidebarLayout6 } from './SidebarLayout6';
import { SidebarLayout7 } from './SidebarLayout7';
import { SidebarLayout8 } from './SidebarLayout8';

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout1',
  () => {
    const slideBackgroundColor = text(
      'slideBackgroundColor',
      'palette.primary.base'
    );
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
    const search = object('search', { icon: 'search', text: 'Search' });
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <SidebarLayout1
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        search={search}
        avatar={avatar}
        title={title}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout2',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'blackAlpha.800');
    const brandBackgroundColor = text('brandBackgroundColor', 'blackAlpha.900');
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
    const search = object('search', { icon: 'search', text: 'Search' });
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.100');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <SidebarLayout2
        slideBackgroundColor={slideBackgroundColor}
        brandBackgroundColor={brandBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        search={search}
        avatar={avatar}
        title={title}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout3',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'white');
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
    const search = object('search', { icon: 'search', text: 'Search' });
    const searchBackgroundColor = text('titleBackgroundColor', 'white');
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const title = text('title', 'Ullamcorper');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.100');
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <SidebarLayout3
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        search={search}
        avatar={avatar}
        title={title}
        searchBackgroundColor={searchBackgroundColor}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout4',
  () => {
    const slideBackgroundColor = text(
      'slideBackgroundColor',
      'palette.primary.base'
    );
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
    const title = text('title', 'Ullamcorper');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });

    return (
      <SidebarLayout4
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        title={title}
        boxBackgroundColor={boxBackgroundColor}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout5',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'blackAlpha.800');
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
    const title = text('title', 'Ullamcorper');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.100');
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });

    return (
      <SidebarLayout5
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        title={title}
        boxBackgroundColor={boxBackgroundColor}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout6',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'white');
    const brand = text('brand', 'Launchql');
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const title = text('title', 'Ullamcorper');
    const search = object('search', { icon: 'search', text: 'Search' });
    const slideLinks = object('slideLinks', [
      { id: 1, icon: 'home', href: '/', text: 'Home', active: true },
      { id: 2, icon: 'users', href: '/', text: 'Features' },
      { id: 3, icon: 'folder', href: '/', text: 'Pricing' },
      { id: 4, icon: 'calendar', href: '/', text: 'Services' },
      { id: 5, icon: 'inbox', href: '/', text: 'About Us' },
      { id: 6, icon: 'bar-chart', href: '/', text: 'Curabitur' }
    ]);
    const avatar = object('avatar', {
      name: 'HAYDEN WOLF',
      email: 'Nord1931@cuvox.de',
      avatarImage: 'https://thispersondoesnotexist.com/image'
    });
    const lists = object('lists', [
      { id: 'list1', text: 'auctor eget' },
      { id: 'list2', text: 'malesuada' },
      { id: 'list3', text: 'quis nulla' }
    ]);

    return (
      <SidebarLayout6
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        title={title}
        search={search}
        avatar={avatar}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout7',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'white');
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
    const title = text('title', 'Ullamcorper');
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });

    return (
      <SidebarLayout7
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        title={title}
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

storiesOf('Examples/ApplicationUi/SidebarLayouts', module).add(
  'SidebarLayout8',
  () => {
    const slideBackgroundColor = text('slideBackgroundColor', 'white');
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
    const title = text('title', 'Ullamcorper');
    const boxBackgroundColor = text('boxBackgroundColor', 'gray.50');
    const avatar = object('avatar', {
      avatarImage: 'https://thispersondoesnotexist.com/image',
      name: 'DEBORAH DEAN',
      text: 'Member Setting',
      href: '/'
    });

    return (
      <SidebarLayout8
        slideBackgroundColor={slideBackgroundColor}
        brand={brand}
        logoAttr={logoAttr}
        slideLinks={slideLinks}
        title={title}
        boxBackgroundColor={boxBackgroundColor}
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
