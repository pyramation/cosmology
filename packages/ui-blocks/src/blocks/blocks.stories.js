import React from 'react';
import { storiesOf } from '@storybook/react';
import { HistoryBlock, MembersBlock, ProjectsBlock, TeamsBlock } from './';

storiesOf('Unfinished/Blocks', module).add('History Block', () => {
  return <HistoryBlock />;
});

storiesOf('Unfinished/Blocks', module).add('Members Block', () => {
  return <MembersBlock />;
});

storiesOf('Unfinished/Blocks', module).add('Teams Block', () => {
  return <TeamsBlock />;
});

storiesOf('Unfinished/Blocks', module).add('Projects Block', () => {
  return <ProjectsBlock />;
});
