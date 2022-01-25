import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { Box, Heading } from '@webql/core';
import { SideNav } from '.';

const LogoDefault = props => {
  const { fill, circleFill, ...attributes } = props;
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...attributes}>
      <path
        d="M13.14 4.18c2.07-.33 3.63 2 2.46 4.41-1 2.38-4.69 4.85-8.81 3.76a8.19 8.19 0 01-6.63-6 5.26 5.26 0 01.12-2.9 3.19 3.19 0 00.3 2.38 2.51 2.51 0 002.5 1A18.54 18.54 0 007 6c1.65-.5 4-1.64 6.14-1.82z"
        fill={fill ? fill : 'currentColor'}
      />
      <circle
        cx={12.26}
        cy={7.72}
        r={2.07}
        fill={circleFill ? circleFill : '#fff'}
      />
    </svg>
  );
};

storiesOf('Unfinished/SideNav', module).add('SideNav', () => {
  const width = text('width', '300px');
  const logo = text(
    'logo',
    'https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
  );
  const links = object('links', [
    {
      icon: 'home',
      text: 'Dashboard',
      active: true
    },
    {
      icon: 'users',
      text: 'Team'
    },
    {
      icon: 'folder',
      text: 'Projects'
    },
    {
      icon: 'calendar',
      text: 'Calendar'
    },
    {
      icon: 'clipboard',
      text: 'Documents'
    },
    {
      icon: 'bar-chart',
      text: 'Reports'
    }
  ]);
  return (
    <SideNav heading="Some heading" logo={logo} links={links} width={width}>
      <Box>
        <Heading fontSize="2xl">Some data</Heading>
      </Box>
    </SideNav>
  );
});
