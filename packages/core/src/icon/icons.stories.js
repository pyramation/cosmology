import React from 'react';
import { storiesOf } from '@storybook/react';

import icons from './icons';
import Icon from './index';
import Text from '../text';
import Center from '../center';
import Stack from '../stack';
import Box from '../box';

storiesOf('Icon', module)
  .add('Icon', () => (
    <Box display="flex">
      <Box bg="white" p={4}>
        <Center>
          <Stack space={4}>
            {Object.keys(icons).map(iconName => (
              <Stack inline space={3} key={iconName}>
                <Box color="gray.600">
                  <Icon name={iconName} size={6} />
                </Box>
                <Text>{iconName}</Text>
              </Stack>
            ))}
          </Stack>
        </Center>
      </Box>
      <Box>
        <Center>
          <Stack space={4}>
            {Object.keys(icons).map(iconName => (
              <Stack inline space={3} key={iconName}>
                <Box color="blue.600">
                  <Icon name={iconName} size={6} />
                </Box>
                <Text>{iconName}</Text>
              </Stack>
            ))}
          </Stack>
        </Center>
      </Box>
    </Box>
  ))
  .add('Fallback Icon', () => (
    <Box color="blue.600">
      <Icon name="hello there" size={6} />
    </Box>
  ));
