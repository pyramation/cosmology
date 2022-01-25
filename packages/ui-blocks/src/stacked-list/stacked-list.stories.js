import React from 'react';
import { TwoColumnAvatar } from './two-column-avatar';
import { storiesOf } from '@storybook/react';
import { select, text, object } from '@storybook/addon-knobs';
import { Icon } from '@webql/core';

storiesOf('Unfinished/StackedList', module).add('TwoColumnAvatar', () => {
  const taskLogoIcon = select(
    'Task icon',
    ['check-circle', 'github', 'check', 'checkbox', 'circle-check'],
    'circle-check'
  );
  const logo = (
    <Icon mt={1} size={4} mr={1} color="green.300" name={taskLogoIcon} />
  );

  /* const name = text("Username","Harry Potter");
    const email = text("User email","Potter.Dad@hogwarts.com")
    const avatarImage = text("Image URL","https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg")
    const dateApplied = text("Apply Date"," August 7,2020")
    const taskDone = text("Task completed","Completed phone screening")*/

  const links = object('users', [
    {
      id: 1,
      name: 'Carry Fischer',
      email: 'CarryF@hotmail.com',
      dateApplied: 'July 17,2020',
      taskDone: 'Phone screening done',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    },
    {
      id: 2,
      name: 'Andrew Newman',
      email: 'Andy.newman@gmail.com',
      dateApplied: 'June 11,2020',
      taskDone: 'Phone screening done',
      imageURL:
        'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
    },
    {
      id: 3,
      name: 'Emanual Keith',
      email: 'Emanual.isLive@hotmail.com',
      dateApplied: 'Aug 15,2020',
      taskDone: 'Phone screening done',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    }
  ]);
  return <TwoColumnAvatar users={links} taskDoneIcon={logo} />;
});
