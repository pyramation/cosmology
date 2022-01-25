import React from 'react';
import { storiesOf } from '@storybook/react';
import Notifications from './index';

storiesOf('Notifications', module)
  .add('Bell Notifications', () => (
    <Notifications number="7" type="bell-notification" />
  ))
  .add('Profile Notifications', () => (
    <React.Fragment>
      <Notifications
        type="profile-notification"
        img="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <Notifications
        type="profile-notification-lg"
        img="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
    </React.Fragment>
  ))
  .add('Thumbnail Status', () => <Notifications type="thumbnail-status" />);
