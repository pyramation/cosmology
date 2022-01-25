import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Dashboard,
  Settings,
  Profile,
  Collaborators,
  Media,
  SettingsTwo,
  PublicProfile,
  SettingsPro,
  ProjectInformation
} from './';

storiesOf('Unfinished/Dashboard', module).add('Projects', () => {
  const tileData = [
    {
      id: 1,
      title: 'Daily Blog',
      time: 'Updated 3 hours ago',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    },
    {
      id: 2,
      title: 'Art in the Heart',
      time: 'Updated 2 hours ago',
      imageURL:
        'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
    },
    {
      id: 3,
      title: 'Travellous',
      time: 'Updated 1 hours ago',
      imageURL: 'https://picsum.photos/id/237/300/250'
    },
    {
      id: 4,
      title: 'The New Era',
      time: 'Updated 4 hours ago',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    }
  ];

  return (
    <Dashboard
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
      tileData={tileData}
      page="project"
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Settings', () => {
  return (
    <Settings
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      dashboardImg="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      profileName="Blue Shark Studio"
      page="settings"
      logo="profile"
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Profile', () => {
  const projectData = [
    {
      id: 1,
      title: 'Daily Blog',
      status: 'On-going',
      imageURL:
        'https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 2,
      title: 'Art in the Heart',
      status: 'Published',
      imageURL:
        'https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 3,
      title: 'Travellous',
      status: 'Published',
      imageURL:
        'https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 4,
      title: 'The New Era',
      status: 'Cancelled',
      imageURL:
        'https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  const membersData = [
    {
      id: 1,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
    },
    {
      id: 2,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
      id: 3,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
    },
    {
      id: 4,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }
  ];
  return (
    <Profile
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg"
      dashboardImg="https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg"
      profileName="Blue Shark Studio"
      page="profile"
      projectData={projectData}
      membersData={membersData}
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Collaborators', () => {
  const membersData = [
    {
      id: 1,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    },
    {
      id: 2,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
    },
    {
      id: 3,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL: 'https://picsum.photos/id/237/300/250'
    },
    {
      id: 4,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    }
  ];

  const teamsData = [
    {
      id: 1,
      title: 'Featured Article Team',
      members: '3'
    },
    {
      id: 2,
      title: 'Daily Post Team',
      members: '21'
    }
  ];

  const historyData = [
    {
      id: 1,
      info: 'How to live a decent life',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*',
      time: '1 days ago'
    },
    {
      id: 2,
      info: 'Cats always plan a crime',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*',
      time: '1 days ago'
    },
    {
      id: 3,
      info: 'About Us',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*',
      time: '1 days ago'
    }
  ];
  return (
    <Collaborators
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      dashboardImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      profileName="Blue Shark Studio"
      page="teams"
      membersData={membersData}
      teamsData={teamsData}
      historyData={historyData}
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Media', () => {
  return (
    <Media
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      dashboardImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      profileName="Blue Shark Studio"
      page="media"
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Settings Two', () => {
  return (
    <SettingsTwo
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      dashboardImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      profileName="Blue Shark Studio"
      page="settings"
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Public Profile', () => {
  return (
    <PublicProfile
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      dashboardImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      profileName="Blue Shark Studio"
      page="settings"
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Settings Profile', () => {
  return (
    <SettingsPro
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      dashboardImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      profileName="Blue Shark Studio"
      page="settings"
    />
  );
});

storiesOf('Unfinished/Dashboard', module).add('Project Information', () => {
  const membersData = [
    {
      id: 1,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    },
    {
      id: 2,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
    },
    {
      id: 3,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL: 'https://picsum.photos/id/237/300/250'
    },
    {
      id: 4,
      name: 'Username',
      email: 'email@organization.com',
      position: 'Contributors',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
    }
  ];

  const teamsData = [
    {
      id: 1,
      title: 'Featured Article Team',
      members: '3'
    },
    {
      id: 2,
      title: 'Daily Post Team',
      members: '21'
    }
  ];

  const historyData = [
    {
      id: 1,
      info: 'How to live a decent life',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*',
      time: '1 days ago'
    },
    {
      id: 2,
      info: 'Cats always plan a crime',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*',
      time: '1 days ago'
    },
    {
      id: 3,
      info: 'About Us',
      imageURL:
        'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*',
      time: '1 days ago'
    }
  ];
  return (
    <ProjectInformation
      topNavLogo1="logo"
      topNavPlaceholder="Blue Shark Studio"
      topNavLogo2="bell"
      topNavLogo3="user"
      profileImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      dashboardImg="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
      profileName="Blue Shark Studio"
      page="project"
      logo="profile"
      membersData={membersData}
      teamsData={teamsData}
      historyData={historyData}
    />
  );
});
