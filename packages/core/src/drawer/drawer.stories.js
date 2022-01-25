import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Button from '../button';
import Flex from '../flex';
import Drawer from './';

const DrawerDemo = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer id="my-drawer" open={open} onClose={() => setOpen(false)}>
        <Box bg="gray.200" width={400} height="100vh">
          <Flex>
            <Button onClick={() => setOpen(false)}>Close me</Button>
          </Flex>
        </Box>
      </Drawer>
    </>
  );
};

storiesOf('Drawer', module).add('Default', () => <DrawerDemo />);
