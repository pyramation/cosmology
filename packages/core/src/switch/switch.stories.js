import { storiesOf } from '@storybook/react';
import React from 'react';
import Box from '../box';
import Stack from '../stack';
import Switch from '../switch';

const stories = storiesOf('Switch', module);

stories.addDecorator(story => {
  return (
    <Box maxWidth="lg" mx="auto" mt={6} p={6}>
      {story()}
    </Box>
  );
});

stories.add('Default color', () => (
  <Stack inline>
    <Switch size="sm" onChange={e => console.log(e.target.checked)} />
    <Switch size="md" onChange={e => console.log(e.target.checked)} />
    <Switch size="lg" onChange={e => console.log(e.target.checked)} />
    <Switch size="lg" disabled onChange={e => console.log(e.target.checked)} />
  </Stack>
));

stories.add('Custom color', () => (
  <Stack inline>
    <Switch
      size="sm"
      onChange={e => console.log(e.target.checked)}
      color="green.400"
    />
    <Switch
      size="md"
      onChange={e => console.log(e.target.checked)}
      color="blue.600"
    />
    <Switch
      size="lg"
      isDisabled
      onChange={e => console.log(e.target.checked)}
      color="cyan.300"
    />
  </Stack>
));
