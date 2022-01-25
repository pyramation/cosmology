import React from 'react';
import { Text, Icon } from '@webql/core';
import PropTypes from 'prop-types';
import {
  ProfileProjectsBox,
  ProfileProjectsLeft,
  ProfileMemberRight,
  ProfileProjectTextbox,
  ProfileTeams_Box
} from './styled';

export const TeamsBlock = ({ title, members }) => {
  return (
    <ProfileTeams_Box>
      <ProfileProjectsLeft>
        <ProfileProjectTextbox>
          <Text fontSize="md" color="#888888">
            {title}
          </Text>
          <Text fontSize="xs" color="#888888">
            {members} members
          </Text>
        </ProfileProjectTextbox>
      </ProfileProjectsLeft>

      <ProfileMemberRight>
        <Icon color="#888888" size={4} name="more-horizontal" />
      </ProfileMemberRight>
    </ProfileTeams_Box>
  );
};

TeamsBlock.propTypes = {
  title: PropTypes.string,
  members: PropTypes.string
};

TeamsBlock.defaultProps = {
  title: 'Featured Article Team',
  members: '3 members'
};
