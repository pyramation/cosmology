import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { SignInSide } from '.';

storiesOf('Examples/Layout', module).add('SideStyle', () => {
  const background = text(
    'background',
    'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80'
  );
  const avatar = text(
    'avatar',
    'https://image.flaticon.com/icons/svg/145/145862.svg'
  );
  const header = text('header', 'Sign in to your account');
  const socials = object('socials', [
    { icon: 'facebook' },
    { icon: 'twitter' },
    { icon: 'github' }
  ]);
  const email = object('email', {
    type: 'text'
  });
  const password = object('password', {
    type: 'password'
  });
  const button = object('button', {
    text: 'Sign in',
    onClick: () => console.log('handle sign in')
  });

  return (
    <SignInSide
      background={background}
      avatar={avatar}
      header={header}
      email={email}
      socials={socials}
      password={password}
      button={button}
    />
  );
});
