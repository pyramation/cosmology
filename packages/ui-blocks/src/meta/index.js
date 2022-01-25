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
} from '../auth/utils';

const FormItem = ({
  name,
  type,
  errors,
  label,
  register,
  defaultValue,
  helperText
}) => {
  switch (type.pgType) {
    case 'uuid':
      return null;
    case 'image':
      return (
        <FormControl invalid={Boolean(errors[name])} id={name}>
          <FormLabel>{label}</FormLabel>
          <img src={defaultValue?.url} />
          <Input
            name={name}
            size="md"
            type="text"
            ref={register({ required: false })}
            defaultValue={defaultValue?.url}
          />
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {errors[name] && <FormFieldError>Error Message Here</FormFieldError>}
        </FormControl>
      );

    default:
      return (
        <FormControl invalid={Boolean(errors[name])} id={name}>
          <FormLabel>{label}</FormLabel>
          <Input
            name={name}
            size="md"
            type="text"
            ref={register({ required: false })}
            defaultValue={defaultValue}
          />
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {errors[name] && <FormFieldError>Error Message Here</FormFieldError>}
        </FormControl>
      );
  }
};

export const MetaForm = ({
  primaryColor,
  submitText = 'Save',
  // ====
  loading,
  onSubmit = data => console.log(data),
  submitError,
  meta,
  data = {},
  hidden = [],
  ...otherProps
} = {}) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Box
      id="meta-form"
      minWidth={{ _: '0', md: 'sm' }}
      {...otherProps}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box p={{ _: 8, lg: 10 }}>
        <Stack space={5}>
          {meta.fields
            .filter(field => !hidden.includes(field.name))
            .map(field => {
              return (
                <FormItem
                  name={field.name}
                  type={field.type}
                  errors={errors}
                  label={field.name}
                  register={register}
                  defaultValue={data[field.name]}
                  helperText="hello helper text"
                />
              );
            })}

          <Button
            loading={loading}
            type="submit"
            form="meta-form"
            bg={primaryColor}
          >
            {submitText}
          </Button>

          {submitError && <FormSubmitError>{submitError}</FormSubmitError>}
        </Stack>
      </Box>
    </Box>
  );
};
