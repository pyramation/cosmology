import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Stack from '../stack';
import Input from '../input';
import FormLabel from '../form-label';
import FormHelperText from '../form-helper-text';
import FormFieldError from '../form-field-error';
import FormControl from './';

storiesOf('FormControl', module).add('Default', () => (
  <Box p={10}>
    <Stack space={5}>
      <FormControl required>
        <FormLabel>Enter your address</FormLabel>
        <Input size="sm" type="text" placeholder="Your address" />
        <FormHelperText>We never send your data to CIA</FormHelperText>
      </FormControl>
      <FormControl disabled>
        <FormLabel>Enter your address</FormLabel>
        <Input size="sm" type="text" placeholder="Your address" />
        <FormHelperText>We never send your data to CIA</FormHelperText>
      </FormControl>
      <FormControl invalid>
        <FormLabel>Enter your address</FormLabel>
        <Input size="sm" type="text" placeholder="Your address" />
        <FormHelperText>We never send your data to CIA</FormHelperText>
        <FormFieldError>Something went super wrong</FormFieldError>
      </FormControl>
    </Stack>
  </Box>
));
