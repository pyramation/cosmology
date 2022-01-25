import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, Avatar, Box } from '@webql/core';
import { LeftNav, LeftNavTop, LeftNavMidbox, LeftNavBottom } from './styled';

export const LeftnavOne = ({ dashboardImg, profileName, page }) => {
  const links = [
    { id: 1, icon: 'files', href: '/', text: 'Project', pagename: 'project' },
    { id: 2, icon: 'collaborator', href: '/', text: 'Team', pagename: 'team' },
    {
      id: 3,
      icon: 'activity',
      href: '/',
      text: 'Activity',
      pagename: 'activity'
    },
    {
      id: 4,
      icon: 'settings',
      href: '/',
      text: 'Settings',
      pagename: 'settings'
    }
  ];

  return (
    <LeftNav>
      <LeftNavTop>
        <Avatar src={dashboardImg} name={profileName} size={100} />
        <Text mt={3} mb={8} fontSize="lg" color="#4D4D4D">
          {profileName}
        </Text>
      </LeftNavTop>
      <Box>
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

LeftnavOne.propTypes = {
  dashboardImg: PropTypes.any,
  profileName: PropTypes.string,
  page: PropTypes.string
};

LeftnavOne.defaultProps = {
  dashboardImg:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  profileName: 'Blue Shark Studio',
  page: 'project'
};
