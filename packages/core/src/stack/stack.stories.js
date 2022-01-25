import React from 'react';
import { storiesOf } from '@storybook/react';
import Stack from './index';
import Box from '../box';

const stories = storiesOf('Stack', module);

stories.add('vertical stack', () => (
  <Stack space={4} p={3} marginDir="topDown" backgroundColor="gray.400">
    <Box backgroundColor="gray.200" p={2}>
      ooooooo
    </Box>
    <Box backgroundColor="gray.200" p={2}>
      ahhhhh
    </Box>
    <Box backgroundColor="gray.200" p={2}>
      Woah!
    </Box>
  </Stack>
));

stories.add('inline stack', () => (
  <Box m={2} border="1px" borderColor="black">
    <Stack inline wrap space={2} backgroundColor="gray.400">
      <Box backgroundColor="gray.200" p={2}>
        ooooooo
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        ahhhhh
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
    </Stack>
  </Box>
));

stories.add('recursive stack', () => (
  <Stack recursive space="4" p={3} backgroundColor="gray.400">
    <Box backgroundColor="gray.200" p={2}>
      ooooooo
    </Box>
    <Box backgroundColor="gray.200" p={2}>
      ahhhhh
    </Box>
    <Box backgroundColor="gray.700" p="3">
      <Box backgroundColor="gray.200" p={2}>
        ooooooo
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        ahhhhh
      </Box>
      <Box backgroundColor="gray.200" p={2}>
        Woah!
      </Box>
    </Box>
  </Stack>
));
