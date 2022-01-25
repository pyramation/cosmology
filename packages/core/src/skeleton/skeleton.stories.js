import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../text';
import Skeleton from '.';
import Stack from '../stack';

storiesOf('Skeleton', module).add('Default', () => (
  <Stack space={2}>
    <Skeleton loading>
      <Text>Hello there</Text>
      <Text>Hello there</Text>
      <Text>Hello there</Text>
    </Skeleton>
    <Skeleton loading>
      <Text>Hello there</Text>
    </Skeleton>
    <Skeleton loading>
      <Text>Hello there</Text>
    </Skeleton>
    <Skeleton loading width="300px" height="300px" />
  </Stack>
));
