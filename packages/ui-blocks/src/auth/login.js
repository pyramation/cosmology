import React from 'react';
import {
  Link,
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Checkbox,
  Divider,
  Text,
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

export const Login = ({
  emailText = 'Email address',
  passwordText = 'Password',
  rememberText = 'Remember me',
  forgotText = 'Forgot password?',
  forgotHref = '/forgot',
  dontHaveAnAccountText = `Don't have an account?`,
  submitText = 'Sign In',
  signupText = 'Sign up',
  signupHref = 'login',
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
      id="login-form"
      minWidth={{ _: '0', sm: 'sm' }}
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

          <Stack inline justifyContent="space-between">
            <Checkbox
              name="rememberMe"
              fontWeight="medium"
              size={{ _: 'sm', xl: 'md' }}
              flexShrink={0}
              ref={register()}
            >
              {rememberText}
            </Checkbox>
            <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }}>
              <Link href={forgotHref} underline muted>
                {forgotText}
              </Link>
            </Text>
          </Stack>

          <Button
            loading={loading}
            type="submit"
            form="login-form"
            bg={primaryColor}
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
      <Divider />

      <Box p={{ _: 4, lg: 6 }} textAlign="center">
        <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }}>
          {dontHaveAnAccountText}
          &nbsp;
          <Link href={signupHref} underline>
            {signupText}
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
