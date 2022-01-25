import React from 'react';
import {
  Button,
  Box,
  Icon,
  Text,
  Link,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormFieldError,
  FormSubmitError
} from '@webql/core';
import { useForm } from 'react-hook-form';
import {
  VALIDATION_ERRORS,
  HELPER_TEXTS,
  PASSWORD_REGEX,
  UUID_REGEX
} from './utils';

export const ResetPassword = ({
  passwordText = 'New Password',
  confirmText = 'Confirm Password',
  submitText = 'Change Password',
  loginHref = '/login',
  forgotHref = '/forgot',
  primaryColor,
  onSubmit = data => console.log(data),
  loading,
  submitError,
  resetToken,
  roleId,
  success = false,
  resetSubmitted = false,
  ...otherProps
} = {}) => {
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  const currentPwd = watch('password');

  if (resetSubmitted) {
    if (success) {
      return (
        <Box
          p={{ _: 8, lg: 10 }}
          minWidth={{ _: '0', sm: 'sm' }}
          maxWidth="md"
          {...otherProps}
        >
          <Box textAlign="center">
            <Icon name="circle-check" size={10} color="accent" />
            <Text mt={4}>New Password Set</Text>
            <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} p={12}>
              New password has been set successfully.
            </Text>
            <Link href={loginHref} underline>
              Back to login page
            </Link>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          p={{ _: 8, lg: 10 }}
          minWidth={{ _: '0', sm: 'sm' }}
          maxWidth="md"
          {...otherProps}
        >
          <Box textAlign="center">
            <Icon name="alert-circle" size={10} color="orange.300" />
            <Text fontSize={{ _: 'sm', lg: 'md' }} mt={4} lineHeight="tall">
              Sorry, your password reset was not successful or the link has
              already expired.
            </Text>
            <Text fontSize={{ _: 'xs', lg: 'sm' }} mt={4} lineHeight="tall">
              you may request another&nbsp;
              <Link href={forgotHref} underline>
                password reset
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
    }
  }

  return (
    <Box
      id="reset-password-form"
      minWidth={{ _: '0', sm: 'sm' }}
      maxWidth="md"
      {...otherProps}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box p={{ _: 8, lg: 10 }}>
        <Stack space={5}>
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
                  if (!value || value !== currentPwd)
                    return 'Passwords do not match';
                  return true;
                }
              })}
            />
            {errors.confirmPassword && (
              <FormFieldError>{errors.confirmPassword.message}</FormFieldError>
            )}
          </FormControl>

          <Input
            ref={register({ required: true })}
            size="md"
            name="resetToken"
            type="hidden"
            value={resetToken}
          />
          <Input
            ref={register({ required: true, pattern: UUID_REGEX })}
            size="md"
            name="roleId"
            type="hidden"
            value={roleId}
          />

          <Button
            bg={primaryColor}
            loading={loading}
            type="submit"
            form="reset-password-form"
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
