import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Notifications, Text, Avatar, Box } from '@webql/core';
import {
  MobileLeftNavContainer,
  MobileLeftNavTop,
  MobileLeftNavMidbox,
  MobileLeftNavBottom,
  LeftChevron,
  MobileRightNavContainer,
  MobRightNavTop,
  MobRightNavMid,
  MobileRightNavMidIcon,
  MobRightNavBot,
  MobRightNavBotbox,
  MobileMainSectionNav,
  MobileMainSectionNav1,
  MobileMainSectionNav3
} from './styled';

export const MobileMenuOne = ({ dashboardImg, profileName, page, title }) => {
  const [LeftAnimate, setLeftAnimate] = useState(true);
  const [RightAnimate, setRightAnimate] = useState(true);

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

  const linkstwo = [
    { id: 1, href: '/', text: 'Alphabet A-Z' },
    { id: 2, href: '/', text: 'Alphabet Z-A' },
    {
      id: 3,
      href: '/',
      text: 'Date Created'
    },
    {
      id: 4,
      href: '/',
      text: 'Date Modified'
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
        <MobileMainSectionNav3>
          <Icon
            onClick={() => setRightAnimate(false)}
            style={{ cursor: 'pointer' }}
            mt={2}
            color="#888888"
            size={6}
            name="more-horizontal"
          />
        </MobileMainSectionNav3>
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

      <MobileRightNavContainer right={RightAnimate}>
        <MobRightNavTop>
          <Icon
            onClick={() => setRightAnimate(!RightAnimate)}
            style={{ cursor: 'pointer' }}
            mt={2}
            color="#888888"
            size={6}
            name="chevrons-right"
          />
        </MobRightNavTop>
        <MobRightNavMid>
          <Text fontSize="xs" color="#888888">
            View
          </Text>
          <MobileRightNavMidIcon>
            <Icon mt={2} color="#888888" size={6} name="align-justify" />
            <Box mt={2} ml={2}>
              <Notifications type="thumbnail-status" />
            </Box>
          </MobileRightNavMidIcon>
        </MobRightNavMid>
        <MobRightNavBot>
          {linkstwo.map(linkstwo => {
            const { text } = linkstwo;

            return (
              <MobRightNavBotbox>
                <Text fontSize="xs" color="#888888">
                  {text}
                </Text>
              </MobRightNavBotbox>
            );
          })}
        </MobRightNavBot>
      </MobileRightNavContainer>
    </>
  );
};

MobileMenuOne.propTypes = {
  dashboardImg: PropTypes.any,
  profileName: PropTypes.string,
  page: PropTypes.string,
  title: PropTypes.string
};

MobileMenuOne.defaultProps = {
  dashboardImg:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  profileName: 'Blue Shark Studio',
  page: 'project',
  title: 'PROJECTS'
};
