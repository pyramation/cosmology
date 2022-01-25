import React from 'react';
import { storiesOf } from '@storybook/react';
import random from 'lodash/random';
import Box from '../box';
import Button from '../button';
import Stack from '../stack';
import Message from './message';
import { Intent } from '../constants';
import { toast } from './';

let counter = 0;

const ToastDemo = () => {
  const onClick = () => {
    const method = ['info', 'warn', 'error', 'success', 'primary', 'secondary'][
      random(0, 5)
    ];
    toast[method](`Hello there super toasty ${counter++}`, {
      position: 'bottom-right'
    });
  };
  return <Button onClick={onClick}>Create toast</Button>;
};

storiesOf('Toast', module)
  .add('ToastMessage Appearance', () => (
    <Stack space={6}>
      <Box>
        <Message intent={Intent.PRIMARY}>
          One toast popped, toasty of {Intent.PRIMARY}
        </Message>
      </Box>

      <Box>
        <Message intent={Intent.SECONDARY}>
          One toast popped, toasty of {Intent.SECONDARY}
        </Message>
      </Box>

      <Box>
        <Message icon="check-circle" intent={Intent.SUCCESS}>
          One toast popped, toasty of {Intent.SUCCESS}
        </Message>
      </Box>

      <Box>
        <Message icon="alert-circle" intent={Intent.WARNING}>
          One toast popped, toasty of {Intent.WARNING}
        </Message>
      </Box>

      <Box>
        <Message icon="help-circle" intent={Intent.INFO}>
          One toast popped, toasty of {Intent.INFO}
        </Message>
      </Box>

      <Box>
        <Message
          icon="alert-triangle"
          action={{
            text: 'Retry',
            onClick: () => {
              console.log('retrying');
            }
          }}
          intent={Intent.DANGER}
        >
          You do not have permissions to perform this action. Please contact
          your system administrator to request the appropriate access rights.
        </Message>
      </Box>
    </Stack>
  ))
  .add('Trigger toast', () => <ToastDemo />);
