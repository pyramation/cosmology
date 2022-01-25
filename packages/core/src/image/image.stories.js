import React from 'react';
import { storiesOf } from '@storybook/react';
import Img, { DefaultFallbackImg } from './';

const stories = storiesOf('Image', module);

stories.add('Default', () => (
  <Img
    width={300}
    height={250}
    fallback={<DefaultFallbackImg width={300} height={250} />}
    src="https://picsum.photos/id/237/300/250"
    alt="doggo"
    borderRadius="sm"
  />
));
