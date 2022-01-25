import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormFieldError,
  FormHelperText,
  FormLabel,
  FormSubmitError,
  Icon,
  Input,
  Stack,
  Text
} from '@webql/core';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERRORS, EMAIL_REGEX } from './utils';

export const ForgotPassword = ({
  emailText = 'Email address',
  submitText = 'Send Reset',
  helperText = 'We will send a code to your email',
  primaryColor,
  sentEmail = false,
  onSubmit = data => console.log(data),
  submitError,
  loading,
  ...otherProps
} = {}) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      email: ''
    }
  });

  if (sentEmail) {
    return (
      <Box
        p={{ _: 8, lg: 10 }}
        minWidth={{ _: '0', sm: 'sm' }}
        maxWidth="md"
        {...otherProps}
      >
        <Box textAlign="center">
          <Icon name="circle-check" size={10} color="accent" />
          <Text mt={4}>Forgot password</Text>
          <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
            An email has been sent to the provided email address with further
            instructions.
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      id="forgot-password-form"
      minWidth={{ _: '0', sm: 'sm' }}
      {...otherProps}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
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
              ref={register({ pattern: EMAIL_REGEX })}
            />
            <FormHelperText>{helperText}</FormHelperText>
            {errors.email && (
              <FormFieldError>{VALIDATION_ERRORS.email}</FormFieldError>
            )}
          </FormControl>

          <Button
            bg={primaryColor}
            loading={loading}
            type="submit"
            form="forgot-password-form"
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
