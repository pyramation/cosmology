import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean, object } from '@storybook/addon-knobs';
import { NavBar1 } from './NavBar1';
import { NavBar2 } from './NavBar2';
import { NavBar3 } from './NavBar3';
import { NavBar4 } from './NavBar4';

storiesOf('Examples/Marketing/NavBars', module).add('NavBar1', () => {
  const backgroundColor = text('backgroundColor', '#f8f9fa');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const closable = boolean('closable', true);
  const mask = boolean('mask', true);
  const maskClosable = boolean('maskClosable', true);
  const title = text('title', 'Menu');
  const width = text('width', '256');
  const zIndex = text('zIndex', 1000);
  const placement = select('placement', ['right', 'left'], 'right');
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const links = object('links', [
    { id: 1, type: 'link', href: '/', text: 'Home', active: true },
    { id: 2, type: 'link', href: '/', text: 'Features' },
    { id: 3, type: 'link', href: '/', text: 'Pricing' },
    { id: 4, type: 'link', href: '/', text: 'Services' },
    { id: 5, type: 'link', href: '/', text: 'About Us' },
    {
      id: 6,
      type: 'button',
      href: '/',
      text: 'Get Started',
      variant: 'tertiary',
      intent: 'primary'
    }
  ]);

  return (
    <NavBar1
      backgroundColor={backgroundColor}
      fixed={fixed}
      sticky={sticky}
      links={links}
      width={width}
      title={title}
      closable={closable}
      placement={placement}
      zIndex={zIndex}
      mask={mask}
      maskClosable={maskClosable}
      logo={logo}
      logoAttr={logoAttr}
    />
  );
});

storiesOf('Examples/Marketing/NavBars', module).add('NavBar2', () => {
  const backgroundColor = text('backgroundColor', '#f8f9fa');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const closable = boolean('closable', true);
  const mask = boolean('mask', true);
  const maskClosable = boolean('maskClosable', true);
  const title = text('title', 'Menu');
  const width = text('width', '256');
  const zIndex = text('zIndex', '1000');
  const placement = select('placement', ['right', 'left'], 'right');
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
  const rightLinks = object('rightLinks', [
    {
      id: 1,
      href: '/',
      type: 'link',
      text: 'Login',
      active: true,
      variant: 'secondary'
    },
    {
      id: 2,
      href: '/',
      type: 'button',
      text: 'Get Started',
      variant: 'primary'
    }
  ]);

  return (
    <NavBar2
      backgroundColor={backgroundColor}
      fixed={fixed}
      sticky={sticky}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
      width={width}
      title={title}
      closable={closable}
      placement={placement}
      zIndex={zIndex}
      mask={mask}
      maskClosable={maskClosable}
      logo={logo}
      logoAttr={logoAttr}
    />
  );
});

storiesOf('Examples/Marketing/NavBars', module).add('NavBar3', () => {
  const backgroundColor = text('backgroundColor', '#f8f9fa');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const duration = text('duration', '500');
  const leftLinks = object('leftLinks', [
    { id: 1, href: '/', text: 'Home', active: true },
    { id: 2, href: '/', text: 'Features' },
    { id: 3, href: '/', text: 'Pricing' },
    { id: 4, href: '/', text: 'Services' }
  ]);
  const rightLinks = object('rightLinks', [
    { id: 1, href: '/', text: 'Sign in' },
    { id: 2, href: '/', text: 'Sign up' },
    { id: 3, href: '/', text: 'Free Trail' }
  ]);

  return (
    <NavBar3
      backgroundColor={backgroundColor}
      fixed={fixed}
      sticky={sticky}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
      logo={logo}
      logoAttr={logoAttr}
      duration={duration}
    />
  );
});

storiesOf('Examples/Marketing/NavBars', module).add('NavBar4', () => {
  const backgroundColor = text('backgroundColor', '#f8f9fa');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const menuFixed = select('menuFixed', ['top', 'bottom'], 'top');
  const sticky = boolean('sticky', false);
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const links = object('links', [
    { id: 1, href: '/', type: 'link', text: 'Home', active: true },
    { id: 2, href: '/', type: 'link', text: 'Features' },
    { id: 3, href: '/', type: 'link', text: 'Pricing' },
    { id: 4, href: '/', type: 'link', text: 'Services' },
    { id: 5, href: '/', type: 'button', text: 'About Us' }
  ]);

  return (
    <NavBar4
      backgroundColor={backgroundColor}
      fixed={fixed}
      menuFixed={menuFixed}
      sticky={sticky}
      logo={logo}
      logoAttr={logoAttr}
      links={links}
    />
  );
});
