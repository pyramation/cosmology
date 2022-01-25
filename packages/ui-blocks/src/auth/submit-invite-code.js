import React, { useState } from 'react';
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
  Link,
  Stack,
  Text
} from '@webql/core';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERRORS, EMAIL_REGEX } from './utils';

export const SubmitInviteCode = ({
  fieldText = 'Invite Code',
  submitText = 'Invite',
  helperText = 'Submit your code to join!',
  primaryColor,
  success = false,
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
          <Text mt={4}>Invite Successful.</Text>
          <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }} p={12}>
            Invite claimed successfully.
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      id="submit-invite-form"
      minWidth={{ _: '0', sm: 'sm' }}
      {...otherProps}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box p={{ _: 8, lg: 10 }}>
        <Stack space={5}>
          <FormControl invalid={Boolean(errors.email)}>
            <FormLabel>{fieldText}</FormLabel>
            <Input
              name="inviteToken"
              size="md"
              type="text"
              placeholder="your invite code here"
              ref={register({ required: true })}
            />
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          <Button
            bg={primaryColor}
            loading={loading}
            type="submit"
            form="submit-invite-form"
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
