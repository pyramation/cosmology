import React from 'react';
import {
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormHelperText,
  FormFieldError,
  FormSubmitError
} from '@webql/core';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERRORS, HELPER_TEXTS, EMAIL_REGEX } from './utils';

export const Unsubscribe = ({
  emailText = 'Email address',
  nameText = 'First name',
  submitText = 'Unsubscribe',
  primaryColor,
  // ====
  loading,
  onSubmit = data => console.log(data),
  submitError,
  ...otherProps
} = {}) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  return (
    <Box
      id="signup-form"
      minWidth={{ _: '0', md: 'sm' }}
      maxWidth="md"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      {...otherProps}
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
            {HELPER_TEXTS.email && (
              <FormHelperText>{HELPER_TEXTS.email}</FormHelperText>
            )}
            {errors.email && (
              <FormFieldError>{VALIDATION_ERRORS.email}</FormFieldError>
            )}
          </FormControl>

          <Input size="md" name="token" type="hidden" />

          <Button
            bg={primaryColor}
            loading={loading}
            type="submit"
            form="signup-form"
          >
            {submitText}
          </Button>

          <Text
            as="p"
            textAlign="center"
            lineHeight="tall"
            muted
            fontSize={{ _: 'xs', xl: 'sm' }}
          >
            We'll miss you!
          </Text>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
