import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './';
import Text from '../text';
import Flex from '../flex';
import Box from '../box';

storiesOf('Divider', module)
  .add('Horizontal', () => (
    <Box p={3} width="200px">
      <Text>Hello</Text>
      <Divider />
      <Text>Hello</Text>
      <Divider />
      <Text>Hello</Text>
    </Box>
  ))
  .add('Vertical', () => (
    <Flex p={3}>
      <Text>Hello</Text>
      <Divider orientation="vertical" />
      <Text>Hello</Text>
      <Divider orientation="vertical" />
      <Text>Hello</Text>
    </Flex>
  ));
