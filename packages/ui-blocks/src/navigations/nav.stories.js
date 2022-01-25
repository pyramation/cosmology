import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  LeftnavOne,
  LeftnavTwo,
  LeftnavThree,
  TopnavOne,
  TopnavTwo,
  TabNavigation
} from '.';

storiesOf('Unfinished/Navigations', module).add('Left Navigation-One', () => {
  return (
    <LeftnavOne
      topNavLogo1="logo"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
      page="project"
    />
  );
});

storiesOf('Unfinished/Navigations', module).add('Left Navigation-Two', () => {
  return (
    <LeftnavTwo
      topNavLogo1="logo"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
    />
  );
});

storiesOf('Unfinished/Navigations', module).add('Left Navigation-Three', () => {
  return (
    <LeftnavThree
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
      page="media"
    />
  );
});

storiesOf('Unfinished/Navigations', module).add('Top Navigation-One', () => {
  return (
    <TopnavOne
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      notNum="10"
      proImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    />
  );
});

storiesOf('Unfinished/Navigations', module).add('Top Navigation-Two', () => {
  return (
    <TopnavTwo
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      notNum="10"
      proImg="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-yuri-manei-3211476.jpg&fm=jpg"
    />
  );
});

storiesOf('Unfinished/Navigations', module).add('Tab Navigation', () => {
  return <TabNavigation page="project" />;
});
