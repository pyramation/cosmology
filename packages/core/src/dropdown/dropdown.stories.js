import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './index';

storiesOf('Dropdown', module).add('Dropdowns', () => (
  <React.Fragment>
    <Dropdown
      height="36px"
      width="240px"
      img="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      text="Blue Shark Studio"
      type="dropdown-1"
    />
    <Dropdown
      text="Alphabet A-Z"
      type="dropdown-2"
      height="40px"
      width="186px"
    />
  </React.Fragment>
));
