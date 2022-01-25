import React from 'react';
import PropTypes from 'prop-types';
import { Notifications, Text, Icon } from '@webql/core';
import {
  ProfileProjectsBox,
  ProfileProjectsLeft,
  ProfileMemberRight,
  ProfileImgBox,
  ProfileProjectTextbox,
  MemberTag,
  MobileProfileProjectsBox,
  MobileProfileProjectsLeft,
  MobileProfileImgbox,
  MobileProfileProjectTextbox,
  MobileProfileMemberRight,
  MobileMemberTag
} from './styled';

export const MembersBlock = ({ name, email, position, imageURL }) => {
  return (
    <React.Fragment>
      <ProfileProjectsBox tabanddesktop>
        <ProfileProjectsLeft>
          <ProfileImgBox>
            <Notifications img={imageURL} type="profile-notification-lg" />
          </ProfileImgBox>
          <ProfileProjectTextbox>
            <Text fontSize="md" color="#888888">
              {name}
            </Text>
            <Text fontSize="xs" color="#888888">
              {email}
            </Text>
          </ProfileProjectTextbox>
        </ProfileProjectsLeft>

        <ProfileMemberRight>
          <MemberTag>
            <Text fontSize="xs" color="#ffffff">
              {position}
            </Text>
          </MemberTag>
          <Icon color="#888888" size={4} name="more-horizontal" />
        </ProfileMemberRight>
      </ProfileProjectsBox>

      <MobileProfileProjectsBox mobileonly>
        <MobileProfileProjectsLeft>
          <MobileProfileImgbox>
            <Notifications img={imageURL} type="profile-notification-lg" />
          </MobileProfileImgbox>
          <MobileProfileProjectTextbox>
            <Text fontSize="md" color="#888888">
              {name}
            </Text>
            <Text pt={1} pb={2} fontSize="xs" color="#888888">
              {email}
            </Text>

            <MobileMemberTag>
              <Text fontSize="xs" color="#ffffff">
                {position}
              </Text>
            </MobileMemberTag>
          </MobileProfileProjectTextbox>
        </MobileProfileProjectsLeft>

        <MobileProfileMemberRight>
          <Icon mb={2} color="#888888" size={4} name="more-horizontal" />
        </MobileProfileMemberRight>
      </MobileProfileProjectsBox>
    </React.Fragment>
  );
};

MembersBlock.propTypes = {
  name: PropTypes.any,
  email: PropTypes.string,
  position: PropTypes.string,
  imageURL: PropTypes.string
};

MembersBlock.defaultProps = {
  name: 'Username',
  email: 'email@organization.com',
  position: 'Contributor',
  imageURL:
    'https://archziner.com/wp-content/uploads/2020/06/black-and-white-pencil-portrait-drawing-harry-potter-doodles-white-background.jpg'
};
