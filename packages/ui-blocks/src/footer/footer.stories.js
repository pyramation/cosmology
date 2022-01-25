import React from 'react';
import { storiesOf } from '@storybook/react';
import { Register } from '../auth/index';
import { Icon } from '@webql/core';
import { CenteredLayout } from '../layouts';
import { Footer } from './';

const logo = <Icon size={12} name="github" />;

storiesOf('Elements/Footer', module).add('no links', () => {
  return (
    <>
      <CenteredLayout
        logo={logo}
        header="Sign up today"
        subhead="it's quick and easy"
      >
        <Register />
      </CenteredLayout>
      <Footer companyName="Web, Inc." />
    </>
  );
});

storiesOf('Elements/Footer', module).add('links', () => {
  return (
    <>
      <CenteredLayout
        logo={logo}
        header="Sign up today"
        subhead="it's quick and easy"
      >
        <Register />
      </CenteredLayout>
      <Footer
        companyName="Web, Inc."
        links={[
          {
            label: 'Terms',
            href: '/terms'
          },
          {
            label: 'Privacy',
            href: '/privacy'
          },
          {
            label: 'Security',
            href: '/security'
          }
        ]}
      />
    </>
  );
});
