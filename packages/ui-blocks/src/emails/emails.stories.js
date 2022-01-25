import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Box, Link } from '@webql/core';
import { Verification } from './verification';

storiesOf('Emails/Templates', module).add('Verification', () => {
  return (
    <Verification
      bg="#D6DDE6"
      title="Welcome to acme"
      titleColor="#3F3F3F"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      contactText={
        <Box fontSize={{ _: 'sm', sm: 'md' }}>
          <Text fontStyle="italic" fontSize="inherit">
            Any questions or concerns?
          </Text>
          <Text as="span" fontStyle="italic" fontSize="inherit">
            Contact our support staff at &nbsp;
            <Link href="mailto:mycoolbusiness@gmail.com">
              <Text as="span" fontWeight="bold">
                mycoolbusiness@gmail.com
              </Text>
            </Link>
          </Text>
        </Box>
      }
      footer={<Text>MyAwesomeCompany</Text>}
    />
  );
});

storiesOf('Emails/Templates', module).add('Verification2', () => {
  return (
    <Verification
      bg="#ffffff"
      title="Welcome to acme"
      titleColor="#FBCFA8"
      buttonBgColor="#FBCFA8"
      buttonTextColor="#25302F"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      contactText={
        <Box fontSize={{ _: 'sm', sm: 'md' }}>
          <Text fontStyle="italic" fontSize="inherit">
            Any questions or concerns?
          </Text>
          <Text as="span" fontStyle="italic" fontSize="inherit">
            Contact our support staff at &nbsp;
            <Link href="mailto:mycoolbusiness@gmail.com">
              <Text as="span" fontWeight="bold">
                mycoolbusiness@gmail.com
              </Text>
            </Link>
          </Text>
        </Box>
      }
      footer={<Text>MyAwesomeCompany</Text>}
    />
  );
});
