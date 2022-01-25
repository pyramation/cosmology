import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Stack from '../stack';
import Checkbox from '.';

storiesOf('Checkbox', module).add('Default', () => (
  <Box width="500px" height="300px">
    <Stack space={4}>
      <Stack inline space={4}>
        <Box>
          <Checkbox size="lg" color="yellow.300" defaultChecked>
            Large
          </Checkbox>
        </Box>

        <Box>
          <Checkbox size="lg">Large</Checkbox>
        </Box>

        <Box>
          <Checkbox size="lg" indeterminate>
            Medium
          </Checkbox>
        </Box>
      </Stack>

      <Stack inline space={4}>
        <Box>
          <Checkbox color="green.300" defaultChecked>
            Medium
          </Checkbox>
        </Box>

        <Box>
          <Checkbox>Medium</Checkbox>
        </Box>

        <Box>
          <Checkbox indeterminate>Medium</Checkbox>
        </Box>
      </Stack>

      <Stack inline space={4}>
        <Box>
          <Checkbox size="sm" color="cyan.300" defaultChecked>
            Small
          </Checkbox>
        </Box>

        <Box>
          <Checkbox size="sm">Small</Checkbox>
        </Box>

        <Box>
          <Checkbox indeterminate size="sm">
            Small
          </Checkbox>
        </Box>
      </Stack>

      <Stack inline space={4}>
        <Box>
          <Checkbox defaultChecked disabled>
            checkbox
          </Checkbox>
        </Box>
        <Box>
          <Checkbox invalid>checkbox</Checkbox>
        </Box>
      </Stack>
    </Stack>
  </Box>
));
