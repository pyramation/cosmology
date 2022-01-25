import React from 'react';
import { storiesOf } from '@storybook/react';
import Stack from '../stack';
import Checkbox from '../checkbox';
import CheckboxGroup from './';

storiesOf('CheckboxGroup', module).add('Default', () => (
  <Stack space={6}>
    <CheckboxGroup defaultValue={['fondue', 'noodle']}>
      <Checkbox value="fondue">Fondue</Checkbox>
      <Checkbox value="sushi">Sushi</Checkbox>
      <Checkbox value="noodle">noodle</Checkbox>
    </CheckboxGroup>
    <CheckboxGroup inline defaultValue={['fondue', 'noodle']}>
      <Checkbox value="fondue">Fondue</Checkbox>
      <Checkbox value="sushi">Sushi</Checkbox>
      <Checkbox value="noodle">noodle</Checkbox>
    </CheckboxGroup>
  </Stack>
));
