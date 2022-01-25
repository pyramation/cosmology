import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '.';
import Box from '../box';

storiesOf('Accordion', module)
  .add('Default', () => (
    <Box width="500px">
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <Box>Open</Box>
            <Accordion.Icon />
          </Accordion.Header>
          <Accordion.Panel>I am contents</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            <Box>Open 2</Box>
            <Accordion.Icon />
          </Accordion.Header>
          <Accordion.Panel>I am contents really longgggg</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ))
  .add('Single', () => (
    <Box width="500px">
      <Accordion single>
        <Accordion.Item>
          <Accordion.Header>
            <Box>Open</Box>
            <Accordion.Icon />
          </Accordion.Header>
          <Accordion.Panel>I am contents</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            <Box>Open 2</Box>
            <Accordion.Icon />
          </Accordion.Header>
          <Accordion.Panel>I am contents really longgggg</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ));
