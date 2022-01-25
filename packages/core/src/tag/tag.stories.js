import React from 'react';
import { storiesOf } from '@storybook/react';

import Stack from '../stack';
import Flex from '../flex';
import Tag from './';

storiesOf('Tag', module).add('Default', () => (
  <Flex justifyContent="center" py={8}>
    <Stack space={8}>
      <Stack inline>
        <Tag>Default</Tag>
        <Tag
          removeable
          onRemove={() => {
            console.log('with remove button');
          }}
        >
          with remove button
        </Tag>
        <Tag dot>with dot</Tag>
        <Tag maxWidth="lg" truncate>
          I'm the longggggggggggg text, Integer nisi nisi, lobortis non nibh id,
          condimentum eleifend turpis. Quisque consectetur turpis id eros
          fringilla rutrum. Proin nec magna finibus leo placerat faucibus ut a
          felis. Quisque sed laoreet nunc. Aliquam vehicula mi eu enim aliquet
          dapibus. Fusce sed dui consectetur, congue sapien eget, tempor risus.
          Nam sed dui vitae lacus pellentesque commodo. Sed malesuada elit vitae
          nulla sodales, at luctus nunc rhoncus. Maecenas sit amet blandit diam.
          Phasellus diam ante, auctor non justo vitae, porta vulputate libero.
        </Tag>
      </Stack>
      <Stack inline>
        <Tag fontSize="xs">font size xs</Tag>
        <Tag fontSize="sm">font size sm</Tag>
        <Tag fontSize="md">font size md</Tag>
        <Tag fontSize="lg">font size lg</Tag>
        <Tag fontSize="xl">font size xl</Tag>
      </Stack>
      <Stack inline>
        <Tag borderRadius="sm">border radius sm</Tag>
        <Tag borderRadius="md">border radius md</Tag>
        <Tag borderRadius="lg">border radius lg</Tag>
        <Tag borderRadius="round">border radius round</Tag>
      </Stack>
      <Stack inline>
        <Tag
          dot
          color="palette.primary.base"
          removeable
          onRemove={() => {
            console.log('removed Primary Tag');
          }}
        >
          Primary Tag
        </Tag>
        <Tag
          dot
          color="palette.secondary.base"
          removeable
          onRemove={() => {
            console.log('removed Secondary Tag');
          }}
        >
          Secondary Tag
        </Tag>
        <Tag
          dot
          color="palette.success.base"
          removeable
          onRemove={() => {
            console.log('removed Success Tag');
          }}
        >
          Success Tag
        </Tag>
        <Tag
          dot
          color="palette.warning.base"
          removeable
          onRemove={() => {
            console.log('removed Warning Tag');
          }}
        >
          Warning Tag
        </Tag>
        <Tag
          dot
          color="palette.danger.base"
          removeable
          onRemove={() => {
            console.log('removed Danger Tag');
          }}
        >
          Danger Tag
        </Tag>
        <Tag
          dot
          color="palette.info.base"
          removeable
          onRemove={() => {
            console.log('removed Info Tag');
          }}
        >
          Info Tag
        </Tag>
      </Stack>
    </Stack>
  </Flex>
));
