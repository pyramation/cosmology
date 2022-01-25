import React from 'react';
import {
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Text,
  Link,
  FormHelperText,
  FormFieldError,
  FormSubmitError
} from '@webql/core';
import { useForm } from 'react-hook-form';
import {
  VALIDATION_ERRORS,
  HELPER_TEXTS,
  EMAIL_REGEX,
  PASSWORD_REGEX
} from './utils';

export const Register = ({
  signinHref = '/login',
  emailText = 'Email address',
  passwordText = 'Password',
  alreadyHaveAnAccount = `Already have an account?`,
  submitText = 'Sign Up',
  signInText = 'Sign In',
  termsHref = '/terms-of-service',
  privacyHref = 'privacy',
  primaryColor,
  // ====
  inviteToken,
  loading,
  suppliedEmail = '',
  onSubmit = data => console.log(data),
  submitError,
  ...otherProps
} = {}) => {
  // TODO reset()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      email: suppliedEmail,
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

          <FormControl invalid={Boolean(errors.password)}>
            <FormLabel>{passwordText}</FormLabel>
            <Input
              name="password"
              size="md"
              type="password"
              placeholder="Password"
              ref={register({ pattern: PASSWORD_REGEX })}
            />
            {HELPER_TEXTS.password && (
              <FormHelperText>{HELPER_TEXTS.password}</FormHelperText>
            )}
            {errors.password && (
              <FormFieldError>{VALIDATION_ERRORS.password}</FormFieldError>
            )}
          </FormControl>

          <Input
            name="inviteToken"
            type="hidden"
            ref={register()}
            value={inviteToken}
          />

          <Button
            loading={loading}
            type="submit"
            form="signup-form"
            bg={primaryColor}
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
            By signing up, you agree to the&nbsp;
            <Link href={termsHref} underline>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link href={privacyHref} underline>
              Privacy Policy
            </Link>
            .
          </Text>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
      <Divider />

      <Box p={{ _: 4, lg: 6 }} textAlign="center">
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }}>
          {alreadyHaveAnAccount}
          &nbsp;
          <Link href={signinHref} underline>
            {signInText}
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
