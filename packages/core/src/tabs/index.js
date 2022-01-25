import React from 'react';

import Root from './tabs';
import Tab from './tab';
import TabPanel from './tab-panel';
import TabPanels from './tab-panels';
import TabList from './tab-list';

const Tabs = props => {
  return <Root {...props} />;
};

Tabs.Tab = Tab;

Tabs.TabPanels = TabPanels;

Tabs.TabPanel = TabPanel;

Tabs.TabList = TabList;

export default Tabs;
