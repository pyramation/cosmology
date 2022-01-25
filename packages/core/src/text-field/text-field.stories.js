import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Stack from '../stack';
import TextField from './index';

storiesOf('TextField', module).add('Default', () => (
  <Box p={10}>
    <Stack space={5}>
      <TextField
        size="sm"
        name="fullname"
        placeholder="Enter your fullname"
        label="fullname"
        onFocus={() => console.log('focus fullname')}
        onBlur={() => console.log('blur fullname')}
      />
      <TextField
        invalid
        error="Wrong address format"
        size="sm"
        name="address"
        placeholder="Enter your address"
        label="address"
        onFocus={() => console.log('hello')}
      />
    </Stack>
  </Box>
));
