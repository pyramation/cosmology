import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Box, Link } from '@webql/core';
import { DownloadApp } from '../download-app';
import { AppStore } from '../app-store';
import { Footer } from '../../footer';
import { Header } from '../../header';
import appImageUrl from './default-app-image.png';

const Container = ({ bg, children }) => {
  return (
    <Box bg={bg} p={{ _: 8, md: 10, lg: 16, xl: 20 }}>
      <Header
        navLinks={[
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
      />
      {children}
      <Box p={6}>
        <Footer
          companyName="Dashboard Earth, Inc."
          links={[
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
        />
      </Box>
    </Box>
  );
};

storiesOf('Examples/Sections/DownloadApp', module).add('Apple', () => {
  return (
    <Container bg="#DBE5E4">
      <DownloadApp
        appImageUrl={appImageUrl}
        title="Free knitting pattern generator"
        description="Download our app to customize and sell fast in minutes."
        descriptionColor="#766543"
        iOSAppUrl="#"
        androidWaitListText={
          <Box>
            <Text as="span" fontWeight="semibold">
              Android user?
            </Text>
            &nbsp;
            <Text as="span" fontStyle="italic" color="#766543">
              Join our{' '}
              <Link href="#" underline external color="blue.400">
                newsletter
              </Link>{' '}
              &nbsp; to be the first to know when Android app is release
            </Text>
          </Box>
        }
      />
    </Container>
  );
});

storiesOf('Examples/Sections/DownloadApp', module).add('Android', () => {
  return (
    <Container bg="#FDEBDB">
      <DownloadApp
        appImageUrl={appImageUrl}
        title="Free knitting pattern generator"
        titleColor="#A6BEBD"
        description="Download our app to customize and sell fast in minutes."
        descriptionColor="#466968"
        androidAppUrl="#"
        IOSWaitListText={
          <Box>
            <Text as="span" fontWeight="semibold">
              Apple user?
            </Text>
            &nbsp;
            <Text as="span" fontStyle="italic" color="#766543">
              Join our{' '}
              <Link href="#" underline external color="blue.400">
                newsletter
              </Link>{' '}
              &nbsp; to be the first to know when iOS app is release
            </Text>
          </Box>
        }
      />
    </Container>
  );
});

storiesOf('Examples/Sections/DownloadApp', module).add('Both', () => {
  return (
    <Container bg="#FDEBDB">
      <DownloadApp
        appImageUrl={appImageUrl}
        title="Free knitting pattern generator"
        description="Download our app to customize and sell fast in minutes."
        descriptionColor="#766543"
        androidAppUrl="#"
        iOSAppUrl="#"
      />
    </Container>
  );
});

storiesOf('Examples/Sections/Download', module).add('Download', () => {
  return (
    <Container bg="#FDEBDB">
      <AppStore
        appImageUrl={appImageUrl}
        title="Free knitting pattern generator"
        description="Download our app to customize and sell fast in minutes."
        descriptionColor="#766543"
        androidAppUrl="#"
        iOSAppUrl="#"
      />
    </Container>
  );
});

storiesOf('Examples/Sections/Download', module).add('Download/android', () => {
  return (
    <Container bg="#FDEBDB">
      <AppStore
        appImageUrl={appImageUrl}
        title="Free knitting pattern generator"
        description="Download our app to customize and sell fast in minutes."
        descriptionColor="#766543"
        iOSAppUrl="#"
        androidWaitListText={
          <Box>
            <Text as="span" fontWeight="semibold">
              Android user?
            </Text>
            &nbsp;
            <Text as="span" fontStyle="italic" color="black">
              Join our{' '}
              <Link href="/subscribe" underline external color="blue.400">
                newsletter
              </Link>
              &nbsp; to be the first to know when our Android app is released
            </Text>
          </Box>
        }
      />
    </Container>
  );
});
