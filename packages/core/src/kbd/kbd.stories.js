import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Icon from '../icon';
import Flex from '../flex';
import Kbd from './';

storiesOf('Kbd', module).add('Default', () => (
  <Box p={3}>
    <Flex>
      <Kbd mr={3}>K</Kbd>
      <Kbd mr={3}>G</Kbd>
      <Kbd mr={3}>P</Kbd>
      <Kbd>
        <Icon name="command" size="inherit" /> &nbsp; <span>+ P</span>
      </Kbd>
    </Flex>
    <Flex mt={3}>
      <Kbd mr={3} size="md">
        K
      </Kbd>
      <Kbd mr={3} size="md">
        G
      </Kbd>
      <Kbd mr={3} size="md">
        P
      </Kbd>
      <Kbd size="md">
        <Icon name="command" size="inherit" /> &nbsp; <span>+ P</span>
      </Kbd>
    </Flex>
  </Box>
));
