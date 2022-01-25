import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Flex from '../flex';
import Checkbox from '../checkbox';
import Editable from './index';

const ControlledEditing = () => {
  const [editing, setEditing] = React.useState(false);

  return (
    <Flex flexDirection="column" p={6}>
      <Checkbox
        size="sm"
        checked={editing}
        onChange={event => setEditing(event.target.checked)}
      >
        Toggle editing mode
      </Checkbox>

      <Editable
        mt={5}
        width="300px"
        placeholder="Enter something"
        editing={editing}
        onConfirm={val => {
          console.log('CONFIRM', val);
        }}
      />
    </Flex>
  );
};

storiesOf('Editable', module)
  .add('Default', () => (
    <Box p={6}>
      <Editable
        width="300px"
        defaultValue="oh hell nah"
        placeholder="Enter something"
        onCancel={val => console.log('CANCEL: ', val)}
        onConfirm={val => console.log('CONFIRM: ', val)}
        onChange={val => console.log('CHANGE: ', val)}
        onEdit={editing => console.log('EDIT: ', editing)}
      />
    </Box>
  ))
  .add('Controlled usage', () => <ControlledEditing />);
