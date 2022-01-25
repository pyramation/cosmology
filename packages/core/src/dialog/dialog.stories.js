import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button';
import Stack from '../stack';
import Divider from '../divider';
import Heading from '../heading';
import Input from '../input';
import FormLabel from '../form-label';
import FormHelperText from '../form-helper-text';
import FormControl from '../form-control';
import Dialog, {
  DialogBody,
  DialogCloseButton,
  DialogHeader,
  DialogFooter
} from './';

const Dialog1 = () => {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        id="my-modal"
        open={open}
        onClose={() => setOpen(false)}
        size="lg"
      >
        <DialogHeader>
          <Heading size="md">Create new database</Heading>
        </DialogHeader>
        <DialogCloseButton />
        <Divider space={0} />
        <DialogBody>
          <Stack
            as="form"
            onSubmit={event => {
              event.preventDefault();
              console.log('calling submit');
            }}
          >
            <FormControl required>
              <FormLabel>Name</FormLabel>
              <Input
                autoFocus
                size="sm"
                type="text"
                placeholder="Database name"
              />
              <FormHelperText>
                A name is necessary for a database
              </FormHelperText>
            </FormControl>
          </Stack>
        </DialogBody>
        <Divider space={0} />
        <DialogFooter>
          <Stack inline>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setOpen2(true);
              }}
            >
              Open outer dialog
            </Button>
            <Button variant="primary" type="submit">
              Create database
            </Button>
          </Stack>
        </DialogFooter>
      </Dialog>
      <NestedDialog open={open2} onClose={() => setOpen2(false)} />
    </>
  );
};

const NestedDialog = ({ open, onClose }) => {
  return (
    <Dialog id="outer-modal" open={open} onClose={onClose}>
      <DialogHeader>
        <Heading size="md">Outer dialog</Heading>
      </DialogHeader>
      <DialogCloseButton />
      <Divider space={0} />
      <DialogBody>
        <Stack
          as="form"
          onSubmit={event => {
            event.preventDefault();
            console.log('calling submit');
          }}
        >
          <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input
              autoFocus
              size="sm"
              type="text"
              placeholder="Database name"
            />
            <FormHelperText>A name is necessary for a database</FormHelperText>
          </FormControl>
        </Stack>
      </DialogBody>
      <Divider space={0} />
      <DialogFooter>
        <Stack inline>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create database
          </Button>
        </Stack>
      </DialogFooter>
    </Dialog>
  );
};

storiesOf('Dialog', module).add('Default', () => <Dialog1 />);
