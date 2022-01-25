import React from 'react';
import { storiesOf } from '@storybook/react';
import { SidebarSimple } from '.';
import { Icon } from '@webql/core';

import { select, text, boolean, object, color } from '@storybook/addon-knobs';

storiesOf('Unfinished/Sidebar', module).add('SidebarSimple', () => {
  const title = text('title', 'Menu');
  const logoIcon = select(
    'logoIcon',
    ['home', 'github', 'users', 'calendar', 'archive'],
    'archive'
  );
  const logo = <Icon mr={6} size={12} name={logoIcon} />;

  const links = object('links', [
    { id: 1, icon: 'home', href: '/', text: 'Dashboard', selected: true },
    { id: 2, icon: 'users', href: '/', text: 'Team' },
    { id: 3, icon: 'folder', href: '/', text: 'Projects' },
    { id: 4, icon: 'calendar', href: '/', text: 'Calendar' },
    { id: 5, icon: 'archive', href: '/', text: 'Documents' },
    { id: 6, icon: 'bar-chart', href: '/', text: 'Reports' }
  ]);

  return <SidebarSimple links={links} title={title} logo={logo} />;
});
