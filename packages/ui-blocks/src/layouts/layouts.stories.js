import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Box, Text, Icon } from '@webql/core';
import { CenteredLayout, BasicSiteLayout } from './index';
import { DownloadApp } from '../sections/download-app';
import { select, text } from '@storybook/addon-knobs';
import SideLayout from './side';
import { Subscribe, Register } from '../auth';
import { Footer } from '../footer';
import appImageUrl from '../sections/stories/default-app-image.png';

storiesOf('Examples/Layout', module).add('CenteredLayout', () => {
  const logoIcon = select(
    'logoIcon',
    ['home', 'github', 'users', 'calendar', 'archive'],
    'home'
  );

  const header = text('header', 'Title');
  const subhead = text('subhead', 'subtitle and/or description');

  return (
    <CenteredLayout header={header} subhead={subhead}>
      stuff goes here
    </CenteredLayout>
  );
});

storiesOf('Examples/Layout', module).add('BasicSiteLayout', () => {
  return (
    <BasicSiteLayout
      topLinks={[
        {
          href: '#',
          label: 'Blog'
        },
        {
          href: '#',
          label: 'Swatches'
        },
        {
          href: '#',
          label: 'Sellers'
        }
      ]}
      companyName="Web, Inc."
      bottomLinks={[
        {
          href: '#',
          label: 'Terms'
        },
        {
          href: '#',
          label: 'Privacy'
        },
        {
          href: '#',
          label: 'Security'
        }
      ]}
    >
      <DownloadApp
        appImageUrl={appImageUrl}
        title="Free knitting pattern generator"
        description="Download our app to customize and sell fast in minutes."
        descriptionColor="#766543"
        iOSAppUrl="#"
        androidAppUrl="#"
      />
    </BasicSiteLayout>
  );
});

storiesOf('Examples/Layout', module).add('SideLayout', () => {
  return (
    <>
      <SideLayout
        logo="https://logoipsum.com/logo/logo-10.svg"
        header="signup today!"
        // Toggle this to Switch background column side
        // 'left' or 'right'
        backgroundPosition="right"
        backgroundImageUrl="https://images.unsplash.com/photo-1569493086584-33e0b36f3145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80"
        backgroundContent={
          <Box bg="white" textAlign="center" p={6} borderRadius="sm">
            <Icon name="access" size={16} />
            <Text mt={4}>Create your account</Text>
            <Text mt={4}>
              Signup to discover and connect with your darker side
            </Text>
            <Button mt={4}>Sign up now</Button>
          </Box>
        }
      >
        <Subscribe minWidth="0" />
      </SideLayout>
    </>
  );
});

storiesOf('Examples/Layout', module).add('SideLayout with Terms', () => {
  return (
    <>
      <SideLayout
        logo="https://logoipsum.com/logo/logo-10.svg"
        header="signup today!"
        backgroundImageUrl="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      >
        <Register />
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
      </SideLayout>
    </>
  );
});
