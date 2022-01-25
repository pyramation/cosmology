import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Icon from '../icon';
import Menu from './';

storiesOf('Menu', module).add('Default', () => (
  <Box p={16}>
    <Menu>
      <Menu.Button>open me</Menu.Button>
      <Menu.List placement="right">
        <Menu.Item heading>Data</Menu.Item>
        <Menu.Item
          href="#"
          external
          onSelect={() => {
            console.log('1');
          }}
        >
          <Icon mr={3} size={4} name="align-center" />
          Graph
        </Menu.Item>
        <Menu.Item
          onSelect={() => {
            console.log('2');
          }}
        >
          <Icon mr={3} size={4} name="align-justify" />
          Table
        </Menu.Item>
        <Menu.Item
          onSelect={() => {
            console.log('3');
          }}
        >
          <Icon mr={3} size={4} name="bar-chart" />
          Nucleus
        </Menu.Item>
        <Menu.Divider space={1} />
        <Menu.Item heading>Typography</Menu.Item>
        <Menu.Item
          onSelect={() => {
            console.log('4');
          }}
          disabled
        >
          <Icon mr={3} size={4} name="bell" />
          Sadist
        </Menu.Item>
        <Menu.Item
          href="#"
          external
          disabled
          onSelect={() => {
            console.log('1');
          }}
        >
          <Icon mr={3} size={4} name="align-center" />
          Kale
        </Menu.Item>
      </Menu.List>
    </Menu>
  </Box>
));
