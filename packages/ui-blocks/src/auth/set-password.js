import React from 'react';
import {
  Button,
  Box,
  Text,
  Icon,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormFieldError,
  FormSubmitError
} from '@webql/core';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERRORS, HELPER_TEXTS, PASSWORD_REGEX } from './utils';

export const SetPassword = ({
  currentPasswordText = 'Current Password',
  passwordText = 'New password',
  confirmText = 'Confirm new password',
  submitText = 'Change password',
  currentPasswordHelperText = 'Enter your current password',
  currentPasswordError,
  primaryColor,
  success,
  // ====
  onSubmit = data => console.log(data),
  loading,
  submitError,
  ...otherProps
} = {}) => {
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      currentPassword: '',
      password: '',
      confirmPassword: ''
    }
  });

  const password = watch('password');

  if (success) {
    return (
      <Box
        p={{ _: 8, lg: 10 }}
        maxWidth="md"
        minWidth={{ _: '0', sm: 'sm' }}
        {...otherProps}
      >
        <Box textAlign="center">
          <Icon name="circle-check" size={10} color="accent" />
          <Text mt={4}>New Password Set</Text>
          <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} mt={12}>
            New password has been set successfully.
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      id="set-password-form"
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      {...otherProps}
    >
      <Box p={{ _: 8, lg: 10 }}>
        <Stack space={5}>
          <FormControl invalid={Boolean(errors.currentPassword)}>
            <FormLabel>{currentPasswordText}</FormLabel>
            <Input
              size="md"
              name="currentPassword"
              type="password"
              ref={register({ required: true })}
            />
            <FormHelperText>{currentPasswordHelperText}</FormHelperText>
            {errors.currentPassword && (
              <FormFieldError>{currentPasswordError}</FormFieldError>
            )}
          </FormControl>

          <FormControl invalid={Boolean(errors.password)}>
            <FormLabel>{passwordText}</FormLabel>
            <Input
              size="md"
              name="password"
              type="password"
              ref={register({ required: true, pattern: PASSWORD_REGEX })}
            />
            {HELPER_TEXTS.password && (
              <FormHelperText>{HELPER_TEXTS.password}</FormHelperText>
            )}
            {errors.password && (
              <FormFieldError>{VALIDATION_ERRORS.password}</FormFieldError>
            )}
          </FormControl>

          <FormControl invalid={Boolean(errors.confirmPassword)}>
            <FormLabel>{confirmText}</FormLabel>
            <Input
              size="md"
              name="confirmPassword"
              type="password"
              ref={register({
                validate: value => {
                  if (!value || value !== password)
                    return 'Passwords do not match';
                  return true;
                }
              })}
            />
            {errors.confirmPassword && (
              <FormFieldError>{errors.confirmPassword.message}</FormFieldError>
            )}
          </FormControl>

          <Button
            bg={primaryColor}
            loading={loading}
            type="submit"
            form="set-password-form"
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
