import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Text from '../text';
import Grid from './';

storiesOf('Grid', module)
  .add('Default', () => (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Box w="100%" h="100px" p={4} bg="gray.200">
        hello
      </Box>
      <Box w="100%" h="100px" p={4} bg="gray.200">
        hello
      </Box>
      <Box w="100%" h="100px" p={4} bg="gray.200">
        hello
      </Box>
      <Box w="100%" h="100px" p={4} bg="gray.200">
        hello
      </Box>
      <Box w="100%" h="100px" p={4} bg="gray.200">
        hello
      </Box>
    </Grid>
  ))
  .add('Auto responsive', () => (
    <>
      <Text mb={4}>
        In this example the items will auto break when its width is smaller than
        300px. Resize the viewport to see
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        <Box w="100%" h="100px" p={4} bg="gray.200">
          hello
        </Box>
        <Box w="100%" h="100px" p={4} bg="gray.200">
          hello
        </Box>
        <Box w="100%" h="100px" p={4} bg="gray.200">
          hello
        </Box>
        <Box w="100%" h="100px" p={4} bg="gray.200">
          hello
        </Box>
        <Box w="100%" h="100px" p={4} bg="gray.200">
          hello
        </Box>
      </Grid>
    </>
  ));
