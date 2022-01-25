import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../text';
import Box from '../box';
import AspectRatioBox from '.';

storiesOf('AspectRatioBox', module)
  .add('Default', () => (
    <>
      <Text mb={4}>
        The following video will have equal sides (aspect ratio 1:1)
      </Text>
      <AspectRatioBox maxWidth="560px" ratio={1}>
        <Box
          as="iframe"
          title="naruto"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        />
      </AspectRatioBox>
    </>
  ))
  .add('16:9', () => (
    <>
      <Text mb={4}>The following video will have aspect ratio 16:9</Text>
      <AspectRatioBox maxWidth="560px" ratio={16 / 9}>
        <Box
          as="iframe"
          title="naruto"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        />
      </AspectRatioBox>
    </>
  ));
