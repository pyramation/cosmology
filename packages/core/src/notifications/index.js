import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Avatar from '../avatar';
import {
  RedTag,
  BellNotification,
  ProfileNotification,
  GreenTag,
  GreenTagLg,
  ThumbnailStatus,
  ActiveTag
} from './styled';

const Notifications = ({ type, number, img }) => {
  if (type === 'bell-notification') {
    return (
      <BellNotification>
        <RedTag>{number}</RedTag>
        <Icon name="bell" color="#808080" />
      </BellNotification>
    );
  } else if (type === 'profile-notification') {
    return (
      <ProfileNotification>
        <GreenTag></GreenTag>
        <Avatar src={img} size={8} pd={0} />
      </ProfileNotification>
    );
  } else if (type === 'profile-notification-lg') {
    return (
      <ProfileNotification>
        <GreenTagLg></GreenTagLg>
        <Avatar src={img} size={12} pd={0} />
      </ProfileNotification>
    );
  } else if (type === 'thumbnail-status') {
    return (
      <ThumbnailStatus>
        <ActiveTag>
          <Icon size={4} name="thumbnail-view" color="#696969" />
        </ActiveTag>
      </ThumbnailStatus>
    );
  }
};

export default Notifications;

Notifications.displayName = 'Notifications';

Notifications.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
  img: PropTypes.any
};

Notifications.defaultProps = {
  type: 'bell-notification',
  text: 'Blue Shark Studio',
  img:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
};
