import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../radio';
import RadioGroup from './';

storiesOf('RadioGroup', module).add('Default', () => (
  <RadioGroup inline space={4} defaultValue="1">
    <Radio value="1" disabled>
      Radio 1
    </Radio>
    <Radio value="2">Radio 2</Radio>
    <Radio value="3">Radio 3</Radio>
  </RadioGroup>
));
