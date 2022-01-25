import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './';
import Stack from '../stack';

storiesOf('Loader', module).add('Default', () => (
  <Stack>
    <Loader />
    <Loader size={40} />
    <Loader size={20} />
  </Stack>
));
