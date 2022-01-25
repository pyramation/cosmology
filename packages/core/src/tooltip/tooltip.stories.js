import React from 'react';
import { storiesOf } from '@storybook/react';
import Stack from '../stack';
import Box from '../box';
import Button from '../button';
import Text from '../text';
import Tooltip from './';

storiesOf('Tooltip', module).add('Default', () => (
  <Stack space={6} p={20} textAlign="center">
    <Box>
      <Tooltip content="I'm tool tip! (default)">
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
    <Box>
      <Tooltip
        content={
          <Box p={2}>
            <Text color="palette.primary.dark" fontSize="sm">
              I'm tool tip! <br />
              (custom content, Intent: primary)
            </Text>
          </Box>
        }
        intent="primary"
        placement="top"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
    <Box>
      <Tooltip
        content="I'm tool tip! (Intent: success)"
        intent="success"
        placement="bottom"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
    <Box>
      <Tooltip
        content="I'm tool tip! (Intent: warning)"
        intent="warning"
        placement="left"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
    <Box>
      <Tooltip
        content="I'm tool tip! (Intent: danger)"
        intent="danger"
        placement="right"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  </Stack>
));
