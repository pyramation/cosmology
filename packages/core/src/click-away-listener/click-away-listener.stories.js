import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Button from '../button';
import Text from '../text';
import ClickAwayListener from './';

const Demo = () => {
  const [clickedAway, setClickedAway] = useState(false);
  return (
    <Box bg="bg.100" p={12}>
      <ClickAwayListener
        onClickAway={() => {
          setClickedAway(true);
        }}
      >
        <div>
          <Button>Click outside of me to see</Button>
          <Button
            variant="secondary"
            onClick={() => {
              setClickedAway(false);
            }}
          >
            Reset
          </Button>
        </div>
      </ClickAwayListener>

      {clickedAway && <Text>You clicked away from the blue button!</Text>}
    </Box>
  );
};
storiesOf('ClickAwayListener', module).add('Default', () => <Demo />);
