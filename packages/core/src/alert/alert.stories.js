import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button';
import Alert from './';
import { Intent } from '../constants';

const AlertDemo = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open alert</Button>
      <Alert
        id="my-alert"
        open={open}
        onClose={setOpen}
        icon="trashbin"
        intent={Intent.DANGER}
        message="Couldn't create the file because the containing folder doesn't exist anymore. You will be redirected to your user folder."
        confirmText="Okay"
        cancelText="Cancel"
      />
    </>
  );
};

storiesOf('Alert', module).add('Default', () => <AlertDemo />);
