import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Flex from '../flex';
import Text from '../text';
import Button from '../button';
import Link from '../link';
import Modal from './index';

const ModalDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal id="my-modal" open={open} onClose={() => setOpen(false)}>
        <Box p={16} bg="white" p={4}>
          <Text>Try tabbing, the focus will be trapped inside the modal</Text>
          <Flex my={4}>
            <Button>Hello</Button>
            <Button>Hello</Button>
            <Button>Hello</Button>
            <Button>Hello</Button>
            <Button>Hello</Button>
          </Flex>
          <Link href="#" external>
            Click me to URL external
          </Link>
        </Box>
      </Modal>
    </>
  );
};
storiesOf('Modal', module).add('Default', () => <ModalDemo />);
