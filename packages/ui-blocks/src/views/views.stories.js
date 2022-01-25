import { storiesOf } from '@storybook/react';
import React from 'react';
import TeamsView from './teams-view';

const teamData = [
  {
    name: 'Daily Post Team',
    members: [
      {
        image: 'https://image.flaticon.com/icons/svg/145/145862.svg',
        name: 'Test User 1',
        email: 'user1@test.com',
        roles: ['Contributor', 'Admin'],
        online: true
      },
      {
        image: 'https://image.flaticon.com/icons/svg/145/145862.svg',
        name: 'Test User 2',
        email: 'user2@test.com',
        roles: ['Contributor']
      },
      {
        image: 'https://image.flaticon.com/icons/svg/145/145862.svg',
        name: 'Test User 3',
        email: 'user3@test.com',
        roles: ['Author']
      }
    ]
  },
  {
    name: 'Featured Article Team',
    members: [
      {
        image: 'https://image.flaticon.com/icons/svg/145/145862.svg',
        name: 'Test User 2',
        email: 'user2@test.com'
      },
      {
        image: 'https://image.flaticon.com/icons/svg/145/145862.svg',
        name: 'Test User 3',
        email: 'user3@test.com'
      }
    ]
  }
];

storiesOf('Unfinished/TeamsView', module).add('TeamsView', () => {
  return (
    <TeamsView
      users={teamData.reduce(
        (all, curr) => [
          ...all,
          ...curr.members.filter(
            member => all.findIndex(m => m.email === member.email) < 0
          )
        ],
        []
      )}
      teams={teamData}
    />
  );
});
