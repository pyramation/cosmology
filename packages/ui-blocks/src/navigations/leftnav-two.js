import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, Avatar, Box } from '@webql/core';
import {
  LeftNav,
  LeftNavBottom,
  NavTwoTop,
  NavTwoTop_1,
  NavTwoTop_2,
  NavIcon_Box,
  NavTwoTop_3,
  NavTwoTop_Left,
  NavTwoTop_Right,
  LeftNav_Button
} from './styled';

export const LeftnavTwo = ({
  dashboardImg,
  profileName,
  userName,
  email,
  location
}) => {
  return (
    <LeftNav>
      <NavTwoTop>
        <NavTwoTop_1>
          <NavTwoTop_Left>
            <Avatar src={dashboardImg} name={profileName} size={100} />
            <Text mt={2} fontSize="lg" color="#4D4D4D">
              {profileName}
            </Text>
            <Text mt={2} fontSize="sm" color="#888888">
              @{userName}
            </Text>
          </NavTwoTop_Left>
          <NavTwoTop_Right>
            <Icon color="#888888" size={6} name="more-horizontal" />
          </NavTwoTop_Right>
        </NavTwoTop_1>
        <NavTwoTop_2>
          <NavIcon_Box>
            <Icon color="#4D4D4D" size={4} mr={3} name="mail" />
            <Text color="#4D4D4D"> {email}</Text>
          </NavIcon_Box>

          <Box mt={2}>
            <NavIcon_Box>
              <Icon color="#4D4D4D" size={4} mr={3} name="map-pin" />
              <Text color="#4D4D4D">{location}</Text>
            </NavIcon_Box>
          </Box>
        </NavTwoTop_2>
        <NavTwoTop_3>
          <Box mr={1}>
            <LeftNav_Button>Follow</LeftNav_Button>
          </Box>
          <Box ml={2}>
            <LeftNav_Button>Message</LeftNav_Button>
          </Box>
        </NavTwoTop_3>
      </NavTwoTop>

      <Box></Box>

      <LeftNavBottom>
        <Icon color="#888888" size={5} mr={3} name="power-button" />
        <Text color="#888888"> Sign Out</Text>
      </LeftNavBottom>
    </LeftNav>
  );
};

LeftnavTwo.propTypes = {
  dashboardImg: PropTypes.any,
  profileName: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  logoutLogo: PropTypes.string,
  page: PropTypes.string
};

LeftnavTwo.defaultProps = {
  dashboardImg:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  profileName: 'Blue Shark Studio',
  userName: 'blueshark',
  email: 'Blueshark-design@studio.com',
  location: 'London, UK',
  logoutLogo: 'power-button',
  page: 'project'
};
