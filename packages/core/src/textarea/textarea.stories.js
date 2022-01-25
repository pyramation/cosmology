import React from 'react';
import { storiesOf } from '@storybook/react';
import Stack from '../stack';
import Textarea from './';

storiesOf('Textarea', module)
  .add('Default', () => (
    <Stack space={4}>
      <Textarea
        maxWidth="sm"
        mx="auto"
        mt={2}
        placeholder="Here is a sample placeholder"
        size="md"
      />
      <Textarea
        maxWidth="sm"
        mx="auto"
        mt={2}
        placeholder="Here is a sample placeholder"
        size="md"
        invalid
      />
      <Textarea
        maxWidth="sm"
        mx="auto"
        mt={2}
        placeholder="Here is a sample placeholder"
        size="md"
        disabled
      />
    </Stack>
  ))
  .add('Expandable height', () => (
    <Textarea
      expandable
      maxWidth="sm"
      mx="auto"
      mt={2}
      placeholder="Here is a sample placeholder"
      size="md"
    />
  ));
