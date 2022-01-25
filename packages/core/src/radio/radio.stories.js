import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Stack from '../stack';
import Radio from '.';

storiesOf('Radio', module).add('Default', () => (
  <Box width="500px" height="300px">
    <Stack space={4}>
      <Stack inline space={4}>
        <Box>
          <Radio size="sm" name="1" id="1">
            Radio sm
          </Radio>
        </Box>

        <Box>
          <Radio size="md" name="1" id="2" color="green.300">
            Radio md
          </Radio>
        </Box>

        <Box>
          <Radio size="lg" name="1" id="3" color="orange.300">
            Radio lg
          </Radio>
        </Box>
      </Stack>

      <Box>
        <Radio name="2" id="4" color="pink.300" invalid>
          Radio invalid
        </Radio>
      </Box>

      <Box>
        <Radio name="3" id="5" color="teal.300" disabled>
          Radio disabled
        </Radio>
      </Box>

      <Box>
        <Radio name="4" id="6" color="cyan.300" defaultChecked>
          Radio defaultChecked
        </Radio>
      </Box>

      <Box width="full" bg="#ffffcc" p={2}>
        <Radio name="5" id="7" color="purple.300" fluidWidth>
          Radio fluidWidth
        </Radio>
      </Box>
    </Stack>
  </Box>
));
