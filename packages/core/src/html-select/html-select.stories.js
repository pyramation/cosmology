import React from 'react';
import { storiesOf } from '@storybook/react';
import HTMLSelect from '.';
import Box from '../box';
import Stack from '../stack';

const stories = storiesOf('HTMLSelect', module);

stories.add('Default', () => (
  <HTMLSelect placeholder="Select option">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </HTMLSelect>
));

stories.add('sizes', () => (
  <Box>
    <Stack>
      {['sm', 'md', 'lg'].map(size => (
        <HTMLSelect key={size} placeholder="Placeholder" size={size} />
      ))}
    </Stack>
  </Box>
));
