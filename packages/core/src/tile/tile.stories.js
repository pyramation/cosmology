import React from 'react';
import { storiesOf } from '@storybook/react';
import Tile from './index';

storiesOf('Tile', module).add('Default', () => (
  <Tile
    image="https://picsum.photos/id/237/300/250"
    title="Daily Blog"
    time="Update 3 hours ago"
    type="lgi"
    active="active"
  />
));

storiesOf('Tile', module).add('Small', () => (
  <React.Fragment>
    <Tile
      image="https://picsum.photos/id/237/300/250"
      title="Daily Blog"
      time="Update 3 hours ago"
      type="smi"
      active="no"
    />

    <Tile
      video=""
      title="Daily Blog"
      time="Update 3 hours ago"
      type="smv"
      active="no"
    />
  </React.Fragment>
));
