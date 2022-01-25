import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './';
import Stack from '../stack';
import Box from '../box';

storiesOf('Avatar', module)
  .add('Avatar default', () => (
    <Box display="flex">
      <Avatar src={null} />
      <Avatar src={null} size={10} />
      <Avatar src={null} size={12} />
    </Box>
  ))
  .add('Avatar loading', () => <Avatar src={null} loading />)
  .add('Avatar text', () => (
    <Stack inline space={4}>
      {'abcdefghijklmnopqrstuvwxyz'
        .toUpperCase()
        .split('')
        .map(char => (
          <Avatar src="hellothere" key={char} name={char} />
        ))}
    </Stack>
  ))
  .add('Avatar image', () => (
    <Avatar
      src="https://image.flaticon.com/icons/svg/145/145862.svg"
      name="David Beckham"
      size={12}
    />
  ));
