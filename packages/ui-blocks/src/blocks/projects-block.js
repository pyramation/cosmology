import React from 'react';
import { Text, Icon } from '@webql/core';
import {
  ProfileProjectsLeft,
  ProfileProjectTextbox,
  ProfileProjectImg,
  ProfileProject_Imgbox,
  ProfileTeams_Box
} from './styled';
import PropTypes from 'prop-types';

export const ProjectsBlock = ({ title, status, imageURL }) => {
  return (
    <ProfileTeams_Box>
      <ProfileProjectsLeft>
        <ProfileProject_Imgbox>
          <ProfileProjectImg className="profile-project-img" src={imageURL} />
        </ProfileProject_Imgbox>
        <ProfileProjectTextbox>
          <Text fontSize="md" color="#888888">
            {title}
          </Text>
          <Text fontSize="xs" color="#888888">
            {status}
          </Text>
        </ProfileProjectTextbox>
      </ProfileProjectsLeft>

      <Icon color="#888888" size={4} name="more-horizontal" />
    </ProfileTeams_Box>
  );
};

ProjectsBlock.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  imageURL: PropTypes.any
};

ProjectsBlock.defaultProps = {
  title: 'Daily Blog',
  status: 'Published',
  imageURL:
    'https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
};
