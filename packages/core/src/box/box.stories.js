import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './index';
import Stack from '../stack';

storiesOf('Box', module)
  .add('Box', () => (
    <Box p={32} backgroundColor="gray.100">
      Hello there I am a box
    </Box>
  ))
  .add('Box with shadow', () => (
    <Stack p={6} width="500px" alignItems="center">
      <Box
        width="300px"
        height="300px"
        backgroundColor="gray.100"
        boxShadow="xs"
      >
        xs
      </Box>
      <Box
        width="300px"
        height="300px"
        backgroundColor="gray.100"
        boxShadow="sm"
      >
        sm
      </Box>
      <Box
        width="300px"
        height="300px"
        backgroundColor="gray.100"
        boxShadow="md"
      >
        md
      </Box>
      <Box
        width="300px"
        height="300px"
        backgroundColor="gray.100"
        boxShadow="lg"
      >
        lg
      </Box>
    </Stack>
  ));
