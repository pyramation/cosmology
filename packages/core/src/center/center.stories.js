import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Center from '.';

storiesOf('Center', module).add('Default', () => (
  <Box width="500px" height="300px" bg="gray.200">
    <Center intrinsic centerText>
      <Box bg="gray.300" width="200px" p={3}>
        Hello there
      </Box>
    </Center>
  </Box>
));
