import React from 'react';
import { storiesOf } from '@storybook/react';
import Hotkeys from './index';
import Text from '../text';
import Box from '../box';

storiesOf('Hotkeys', module).add('Hotkeys', () => (
  <>
    <Box border="1px" borderStyle="dashed" p={4}>
      <Text>Enter Command + K</Text>
    </Box>
    <Hotkeys
      keys="meta+k"
      onEntered={() => window.alert('you entered meta+k')} // eslint-disable-line
    />

    <Box border="1px" borderStyle="dashed" p={4}>
      <Text>Enter CTRL + `</Text>
    </Box>
    <Hotkeys
      keys="ctrl+`"
      onEntered={() => window.alert('you entered CTRL+`')} // eslint-disable-line
    />
  </>
));
