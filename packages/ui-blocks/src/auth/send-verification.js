import React from 'react';
import {
  Button,
  Box,
  Loader,
  Stack,
  Icon,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormFieldError,
  FormSubmitError
} from '@webql/core';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERRORS, EMAIL_REGEX } from './utils';

const VerificationSending = ({ ...otherProps }) => {
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
          loading...
        </Text>
      </Box>
    </Box>
  );
};

const VerificationSent = ({ ...otherProps }) => {
  return (
    <Box
      p={{ _: 8, lg: 10 }}
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      {...otherProps}
    >
      <Box textAlign="center">
        <Icon name="circle-check" size={10} color="accent" />
        <Text mt={4}>Email verification sent</Text>
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
          Please check the provided email for the verification link
        </Text>
      </Box>
    </Box>
  );
};

const VerificationProbablySent = ({ ...otherProps }) => {
  return (
    <Box
      p={{ _: 8, lg: 10 }}
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      {...otherProps}
    >
      <Box textAlign="center">
        <Icon name="alert-circle" size={10} color="orange.300" />
        <Text mt={4}>Request Limit reached</Text>
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
          We likely received a verification request already, if you still
          haven't received a verification email after 5 minutes, you can try
          requesting again or reach out to support.
        </Text>
      </Box>
    </Box>
  );
};

const VerificationNotNeededOrWrongEmail = ({ ...otherProps }) => {
  return (
    <Box
      p={{ _: 8, lg: 10 }}
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      {...otherProps}
    >
      <Box textAlign="center">
        <Icon name="alert-circle" size={10} color="orange.300" />
        <Text mt={4}>
          Email is already verified or not associated with this account
        </Text>
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
          If you think you've reached this in error, please contact support
        </Text>
      </Box>
    </Box>
  );
};

export const SendVerification = ({
  emailText = 'Email address',
  submitText = 'Send Verification',
  primaryColor,
  loading,
  onSubmit = data => console.log(data),
  submitError,
  suppliedEmail,
  success,
  initiated,
  ...otherProps
} = {}) => {
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  if (loading) {
    return <VerificationSending />;
  }

  if (initiated) {
    if (success === true) {
      return <VerificationSent />;
    } else if (success === false) {
      return <VerificationNotNeededOrWrongEmail />;
    } else {
      return <VerificationProbablySent />;
    }
  }
  return (
    <Box
      id="send-verification-form"
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      {...otherProps}
      onSubmit={handleSubmit(onSubmit)}
      as="form"
    >
      <Box p={{ _: 8, lg: 10 }}>
        <Stack space={5}>
          <FormControl invalid={Boolean(errors.email)}>
            <FormLabel>{emailText}</FormLabel>
            <Input
              name="email"
              size="md"
              type="text"
              placeholder="your@email.com"
              defaultValue={suppliedEmail}
              ref={register({ pattern: EMAIL_REGEX })}
            />
            <FormHelperText>
              Enter the email address for the verification email
            </FormHelperText>
            {errors.email && (
              <FormFieldError>{VALIDATION_ERRORS.email}</FormFieldError>
            )}
          </FormControl>

          <Button
            bg={primaryColor}
            loading={loading}
            type="submit"
            form="send-verification-form"
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
