import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Stack from '../stack';
import Text from '../text';
import Box from '../box';
import Button from '../button';
import ButtonGroup from './';

const RadioDemo = () => {
  const [selected, setSelected] = useState();
  const onSelect = (event, index) => {
    setSelected(index);
  };

  return (
    <Stack space={3}>
      <Text>Use button group as radio</Text>
      <ButtonGroup
        mode="radio"
        variant="secondary"
        selected={selected}
        onSelect={onSelect}
      >
        <Button size="md">Btn A</Button>
        <Button size="md">Btn B</Button>
        <Button size="md">Btn C</Button>
      </ButtonGroup>
    </Stack>
  );
};

storiesOf('Button Group', module)
  .add('Default', () => (
    <Box display="flex">
      <Stack space={3}>
        <Text>Basic button group</Text>
        <ButtonGroup>
          <Button size="md" onClick={() => console.log('A')}>
            Btn A
          </Button>
          <Button size="md" onClick={() => console.log('B')}>
            Btn B
          </Button>
          <Button size="md" onClick={() => console.log('C')}>
            Btn C
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack space={3} ml={4}>
        <Text>With icon</Text>
        <ButtonGroup>
          <Button size="md" icon="activity" />
          <Button size="md" icon="archive" />
          <Button size="md" icon="edit" />
        </ButtonGroup>
      </Stack>
      <Stack space={3} ml={4}>
        <Text>Disabled</Text>
        <ButtonGroup disabled>
          <Button size="md">Btn A</Button>
          <Button size="md">Btn B</Button>
          <Button size="md">Btn C</Button>
        </ButtonGroup>
      </Stack>
      <Stack space={3} ml={4}>
        <Text>Single Disabled</Text>
        <ButtonGroup>
          <Button size="md" disabled startIcon="activity">
            Btn A
          </Button>
          <Button size="md" startIcon="activity">
            Btn B
          </Button>
          <Button size="md" startIcon="activity">
            Btn C
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  ))
  .add('Usage as radio', () => <RadioDemo />);
