import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  MobileBottomNav,
  CreateProject,
  MobileLeftNav,
  MobRightNav,
  ItemsInfo,
  MobileMenuOne,
  MobileMenuTwo
} from './';

storiesOf('Unfinished/Mobile', module).add('Bottom Nav-1', () => {
  return <MobileBottomNav type="bot-nav1" />;
});

storiesOf('Unfinished/Mobile', module).add('Bottom Nav-2', () => {
  return <MobileBottomNav type="bot-nav2" />;
});

storiesOf('Unfinished/Mobile', module).add('Create Project', () => {
  return <CreateProject />;
});

storiesOf('Unfinished/Mobile', module).add('Items Info', () => {
  return <ItemsInfo />;
});

storiesOf('Unfinished/Mobile', module).add('Mobile Menu-1', () => {
  return (
    <MobileMenuOne
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
      page="project"
      title="PROJECTS"
    />
  );
});

storiesOf('Unfinished/Mobile', module).add('Mobile Menu-2', () => {
  return (
    <MobileMenuTwo
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
      page="project"
      title="PROJECTS"
    />
  );
});
