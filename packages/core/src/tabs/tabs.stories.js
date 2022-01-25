import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Flex from '../flex';
import Text from '../text';
import Icon from '../icon';
import Tabs from '.';

storiesOf('Tabs', module).add('Enclosed', () => (
  <Box width="500px" p={4}>
    <Tabs variant="enclosed" mt={4}>
      <Tabs.TabList>
        <Tabs.Tab>
          <Flex alignItems="center">
            <Text>One</Text>
            <Icon name="close" size={3} mx={2} />
          </Flex>
        </Tabs.Tab>
        <Tabs.Tab>
          <Flex alignItems="center">
            <Text>Two Tab yo</Text>
            <Icon name="close" size={3} mx={2} />
          </Flex>
        </Tabs.Tab>
        <Tabs.Tab>
          <Flex alignItems="center">
            <Text>Three Tab yooooo</Text>
            <Icon name="close" size={3} mx={2} />
          </Flex>
        </Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanels>
        <Tabs.TabPanel>
          <h1>one!</h1>
          <button>yo</button>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <h1>two!</h1>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <h1>three!</h1>
        </Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  </Box>
));
