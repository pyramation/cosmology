import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Link from './';

storiesOf('Link', module).add('Default', () => (
  <Box p={3}>
    <Box>
      <Link href="#">Click me to heaven</Link>
    </Box>
    <Box>
      <Link href="#" color>
        Click me to heaven
      </Link>
    </Box>
    <Box>
      <Link href="#" external>
        Click me to heaven external
      </Link>
    </Box>
    <Box>
      <Link href="#" external color>
        Click me to heaven external
      </Link>
    </Box>
    <Box>
      <Link href="#" disabled>
        disabled internal
      </Link>
    </Box>
    <Box>
      <Link href="#" external color disabled>
        disabled external
      </Link>
    </Box>
  </Box>
));
