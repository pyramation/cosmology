import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, Avatar, Box } from '@webql/core';
import {
  MobileLeftNavContainer,
  MobileLeftNavTop,
  MobileLeftNavMidbox,
  MobileLeftNavBottom,
  LeftChevron,
  MobileMainSectionNav,
  MobileMainSectionNav1
} from './styled';

export const MobileMenuTwo = ({ dashboardImg, profileName, page, title }) => {
  const [LeftAnimate, setLeftAnimate] = useState(true);

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
    <>
      <MobileMainSectionNav>
        <MobileMainSectionNav1>
          <Icon
            onClick={() => setLeftAnimate(false)}
            style={{ cursor: 'pointer' }}
            mt={2}
            color="#888888"
            size={6}
            name="hamburger"
          />
          <Text ml={2} color="#4D4D4D">
            {title.toLocaleUpperCase()}
          </Text>
        </MobileMainSectionNav1>
      </MobileMainSectionNav>
      <MobileLeftNavContainer left={LeftAnimate}>
        <MobileLeftNavTop>
          <Avatar src={dashboardImg} size={100} />
          <Text mt={3} mb={8} fontSize="lg" color="#4D4D4D">
            {profileName}
          </Text>
          <LeftChevron>
            <Icon
              style={{ cursor: 'pointer' }}
              onClick={() => setLeftAnimate(true)}
              color="#888888"
              size={5}
              name="chevrons-left"
            />
          </LeftChevron>
        </MobileLeftNavTop>
        <Box>
          {links.map(link => {
            const { text, icon, pagename } = link;

            return (
              <MobileLeftNavMidbox active={page === pagename}>
                <Icon
                  color={page === pagename ? '#05A2FF' : '#888888'}
                  size={5}
                  name={icon}
                />
                <Text color={page === pagename ? '#05A2FF' : '#888888'}>
                  {text}
                </Text>
              </MobileLeftNavMidbox>
            );
          })}
        </Box>
        <MobileLeftNavBottom>
          <Icon color="#888888" size={5} mr={3} name="power-button" />
          <Text color="#888888"> Sign Out</Text>
        </MobileLeftNavBottom>
      </MobileLeftNavContainer>
    </>
  );
};

MobileMenuTwo.propTypes = {
  dashboardImg: PropTypes.any,
  profileName: PropTypes.string,
  page: PropTypes.string,
  title: PropTypes.string
};

MobileMenuTwo.defaultProps = {
  dashboardImg:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  profileName: 'Blue Shark Studio',
  page: 'project',
  title: 'projects'
};
