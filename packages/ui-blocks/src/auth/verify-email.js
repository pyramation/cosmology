import React from 'react';
import { Box, Icon, Text, Divider, Link, Loader } from '@webql/core';

const EmailVerified = ({ loginHref = '/login', ...otherProps }) => {
  return (
    <Box
      p={{ _: 8, lg: 10 }}
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      {...otherProps}
    >
      <Box textAlign="center">
        <Icon name="circle-check" size={10} color="accent" />
        <Text mt={4}>Email verification complete!</Text>
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
          <Link href={loginHref} underline>
            Back to login page
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export const VerifyEmailLoading = ({ ...otherProps }) => {
  return (
    <Box
      p={{ _: 8, lg: 10 }}
      minWidth={{ _: '0', md: 'sm' }}
      maxWidth="md"
      {...otherProps}
    >
      <Box textAlign="center">
        <Loader />
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
          verification in progress...
        </Text>
      </Box>
    </Box>
  );
};

const VerificationTokenExpired = ({
  loginHref = '/login',
  requestVerificationHref = '/send-verification',
  ...otherProps
}) => {
  return (
    <Box
      p={{ _: 8, lg: 10 }}
      minWidth={{ _: '0', md: 'sm' }}
      maxWidth="md"
      {...otherProps}
    >
      <Box textAlign="center">
        <Icon name="alert-circle" size={10} color="orange.300" />
        <Text fontSize={{ _: 'sm', lg: 'md' }} mt={4} lineHeight="tall">
          Sorry, either the email has already been verified, your account
          verification was not successful, or the link has expired.
        </Text>
        <Text fontSize={{ _: 'xs', lg: 'sm' }} mt={4} lineHeight="tall">
          you may request another&nbsp;
          <Link href={requestVerificationHref} underline>
            verification email
          </Link>
        </Text>
        <Divider />
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
          <Link href={loginHref} underline>
            Back to login page
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export const VerifyEmail = ({
  loginHref = '/login',
  requestVerificationHref = '/send-verification',
  initiated = false,
  success = false,
  loading = false,
  ...otherProps
}) => {
  if (!initiated || loading) {
    return <VerifyEmailLoading loginHref={loginHref} {...otherProps} />;
  }
  if (success) {
    return <EmailVerified loginHref={loginHref} {...otherProps} />;
  }
  return <VerificationTokenExpired loginHref={loginHref} {...otherProps} />;
};
