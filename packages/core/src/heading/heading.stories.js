import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

storiesOf('Heading', module).add('Heading', () => (
  <>
    <Heading as="h1" size="2xl">
      COrona virus is no joke
    </Heading>
    <Heading as="h2" size="xl">
      COrona virus is no joke
    </Heading>
    <Heading as="h3" size="lg">
      COrona virus is no joke
    </Heading>
    <Heading as="h4" size="md">
      COrona virus is no joke
    </Heading>
    <Heading as="h5" size="sm">
      COrona virus is no joke
    </Heading>
    <Heading as="h6" size="xs">
      COrona virus is no joke
    </Heading>
  </>
));
