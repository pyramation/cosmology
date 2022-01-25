import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Flex from '../flex';
import Text from '../text';
import Icon from '../icon';
import Tabs from '../tabs';
import OverflowList from './index';

function makeString(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const tabs = [...Array(200).keys()].map(k => makeString(random(1, 10)));

const Example = () => {
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(40);
    }, 1500);
  }, []);

  return (
    <Box id="container" overflow="hidden" bg="bg.100" height={10} width="100%">
      <OverflowList activeIndex={activeTab}>
        {tabs.map((tab, index) => (
          <Tabs.Tab key={tab}>
            <Flex alignItems="center">
              <Text color={index === activeTab ? 'cyan.600' : 'black'}>
                Tab {tab} {index === activeTab ? 'selected' : ''}
              </Text>
              <Icon name="close" size={3} mx={2} />
            </Flex>
          </Tabs.Tab>
        ))}
      </OverflowList>

      <Tabs.TabPanels>
        {tabs.map(tab => (
          <Tabs.TabPanel key={tab}>
            <h1>tab {tab} panel</h1>
            <button>yo</button>
          </Tabs.TabPanel>
        ))}
      </Tabs.TabPanels>
    </Box>
  );
};

storiesOf('OverflowList', module).add('Default', () => <Example />);
