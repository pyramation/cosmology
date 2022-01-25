import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button';
import Box from '../box';
import Stack from '../stack';
import Center from '../center';
import Text from '../text';
import Popover from './';

storiesOf('Popover', module)
  .add('Default', () => (
    <Center width="500px" p={5}>
      <Stack space={32}>
        <Popover
          placement="right"
          delay={1000}
          target={
            <Button
              variant="secondary"
              onMouseEnter={event => {
                console.log('mouseenter called');
              }}
              onMouseLeave={event => {
                console.log('mouseleave called');
              }}
            >
              Hover me
            </Button>
          }
        >
          <Box textAlign="left">
            <Text color="white">hello this is a very long text</Text>
            <Text color="white">hover</Text>
            <Text color="white">hover</Text>
            <Text color="white">hover</Text>
          </Box>
        </Popover>
        <Popover
          placement="left"
          target={<Button variant="secondary">Hover me</Button>}
          bg="yellow.300"
        >
          <Text>hover</Text>
        </Popover>
        <Popover
          placement="top"
          trigger="click"
          target={<Button variant="secondary">Click me</Button>}
          bg="green.400"
        >
          <Text color="white">top</Text>
        </Popover>
        <Popover
          placement="bottom"
          trigger="click"
          offset={[0, -40]}
          target={<Button variant="secondary">Click me</Button>}
          bg="blue.400"
        >
          <Text color="white">bottom</Text>
        </Popover>
      </Stack>
    </Center>
  ))
  .add('Render props', () => (
    <Center width="500px" p={5}>
      <Stack space={32}>
        <Popover
          placement="right"
          trigger="click"
          target={({ ref, onToggle }) => (
            <Button ref={ref} onClick={onToggle} variant="secondary">
              Hover me
            </Button>
          )}
        >
          <Box textAlign="left">
            <Text>hello this is a very long text</Text>
            <Text>hover</Text>
            <Text>hover</Text>
            <Text>hover</Text>
          </Box>
        </Popover>
      </Stack>
    </Center>
  ))
  .add('Flexible bg color', () => (
    <Popover
      placement="bottom"
      bg="white"
      trigger="click"
      target={<Button variant="secondary">Click me</Button>}
    >
      <Text>hover</Text>
    </Popover>
  ));
