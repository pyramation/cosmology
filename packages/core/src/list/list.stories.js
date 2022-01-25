import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import Box from '../box';
import Icon from '../icon';
import Divider from '../divider';
import { List, ListItem } from './';

storiesOf('List', module).add('Default', () => {
  const customBgColor = color(
    'Custom Background Color',
    'rgba(130,209,29,0.66)'
  );
  const customTextColor = color('Custom Text Color', 'rgba(65,117,5,0.79)');

  return (
    <Box
      display="flex"
      flexWrap={{ _: 'wrap', md: 'nowrap' }}
      p={{ _: 4, md: 16 }}
    >
      <Box mr={{ md: 8 }} mb={{ _: 8, md: 0 }}>
        <p style={{ marginBottom: '12px' }}>default</p>
        <List>
          <ListItem heading>Data</ListItem>
          <ListItem selected>
            <Icon mr={3} size={4} name="align-center" />
            Graph
          </ListItem>
          <ListItem selected highlighted onClick={() => console.log('data')}>
            <Icon mr={3} size={4} name="align-justify" />
            Selected and highlighted
          </ListItem>
          <ListItem>
            <Icon mr={3} size={4} name="bar-chart" />
            Nucleus
          </ListItem>
          <Divider />
          <ListItem heading>Typography</ListItem>
          <ListItem disable>
            <Icon mr={3} size={4} name="bell" />
            Sadist (disable)
          </ListItem>
          <ListItem disable>
            <Icon mr={3} size={4} name="align-center" />
            Kale (disable)
          </ListItem>
        </List>
      </Box>

      <Box width="lg" mr={{ md: 8 }} mb={{ _: 8, md: 0 }}>
        <p style={{ marginBottom: '12px' }}>custom list</p>
        <List width="full">
          <ListItem heading color="orange.700">
            Theme Color
          </ListItem>
          <ListItem selected bg="orange.500">
            <Icon mr={3} size={4} name="align-center" />
            selected
          </ListItem>
          <ListItem
            selected
            highlighted
            bg="orange.500"
            onClick={() => console.log('data')}
          >
            <Icon mr={3} size={4} name="align-justify" />
            Selected and highlighted
          </ListItem>
          <ListItem bg="orange.500" color="orange.600">
            <Icon mr={3} size={4} name="bar-chart" />
            Nucleus
          </ListItem>
          <Divider />
          <ListItem heading color="green.700">
            RGBA / HEX
          </ListItem>
          <ListItem bg={customBgColor} color={customTextColor}>
            <Icon mr={3} size={4} name="bell" />
            RGBA
          </ListItem>
          <ListItem bg="#afaf00" color="#585800">
            <Icon mr={3} size={4} name="bar-chart" />
            HEX
          </ListItem>
          <ListItem bg="green.300" color="green.700">
            <Icon mr={3} size={4} name="align-center" />
            THEME
          </ListItem>
        </List>
      </Box>
    </Box>
  );
});
