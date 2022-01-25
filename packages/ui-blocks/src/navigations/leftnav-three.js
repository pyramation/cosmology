import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, Box } from '@webql/core';
import {
  LeftNav,
  LeftNavMidbox,
  LeftNavBottom,
  LeftNav_Button,
  NavThreeTop,
  NavThreeTop_One,
  NavThreeTop_Two,
  NavThreeTop_Three,
  TopNavPhoto,
  NavThreeTop_Four
} from './styled';

export const LeftnavThree = ({
  dashboardImg1,
  dashboardImg2,
  dashboardImg3,
  projectName,
  updatedTime,
  page
}) => {
  const links = [
    { id: 1, icon: 'web-page', href: '/', text: 'Pages', pagename: 'pages' },
    { id: 2, icon: 'post', href: '/', text: 'Posts', pagename: 'posts' },
    { id: 3, icon: 'media', href: '/', text: 'Media', pagename: 'media' },
    {
      id: 4,
      icon: 'collaborator',
      href: '/',
      text: 'Teams',
      pagename: 'teams'
    },
    {
      id: 5,
      icon: 'settings',
      href: '/',
      text: 'Settings',
      pagename: 'settings'
    }
  ];

  return (
    <LeftNav>
      <NavThreeTop>
        <NavThreeTop_One>
          <Text fontSize="lg" color="#4D4D4D">
            {projectName}
          </Text>
          <Icon color="#888888" size={6} name="more-horizontal" />
        </NavThreeTop_One>
        <NavThreeTop_Two>
          <Text mt={1} color="#888888" fontSize="xs">
            {updatedTime}
          </Text>
        </NavThreeTop_Two>
        <NavThreeTop_Three>
          <TopNavPhoto className="topNav-photo" src={dashboardImg1} />
          <TopNavPhoto className="topNav-photo" src={dashboardImg2} />
          <TopNavPhoto className="topNav-photo" src={dashboardImg3} />
        </NavThreeTop_Three>
        <NavThreeTop_Four>
          <LeftNav_Button>Preview Website</LeftNav_Button>
        </NavThreeTop_Four>
      </NavThreeTop>
      <Box pt={2}>
        {links.map(link => {
          const { text, icon, pagename } = link;

          return (
            <LeftNavMidbox active={page === pagename}>
              <Icon
                color={page === pagename ? '#05A2FF' : '#888888'}
                size={5}
                name={icon}
              />
              <Text color={page === pagename ? '#05A2FF' : '#888888'}>
                {text}
              </Text>
            </LeftNavMidbox>
          );
        })}
      </Box>
      <LeftNavBottom>
        <Icon color="#888888" size={5} mr={3} name="power-button" />
        <Text color="#888888"> Sign Out</Text>
      </LeftNavBottom>
    </LeftNav>
  );
};

LeftnavThree.propTypes = {
  dashboardImg1: PropTypes.any,
  dashboardImg2: PropTypes.any,
  dashboardImg3: PropTypes.any,
  projectName: PropTypes.string,
  updatedTime: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  page: PropTypes.string
};

LeftnavThree.defaultProps = {
  dashboardImg1:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  dashboardImg2:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  dashboardImg3:
    'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-yuri-manei-3211476.jpg&fm=jpg',
  projectName: 'Project Name',
  updatedTime: 'Updated 2 hours ago',
  userName: 'blueshark',
  email: 'Blueshark-design@studio.com',
  location: 'London, UK',
  page: 'media'
};
