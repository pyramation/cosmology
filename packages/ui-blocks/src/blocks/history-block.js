import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Notifications, Text, Grid } from '@webql/core';
import {
  ProfileProjectTextbox,
  Underline,
  HistoryBlockContainer
} from './styled';

export const HistoryBlock = ({ info, imageURL, time }) => {
  return (
    <HistoryBlockContainer>
      <Flex justifyContent="center" alignItems="center">
        <Notifications img={imageURL} type="profile-notification" />
      </Flex>
      <ProfileProjectTextbox>
        <Text fontSize="md" color="#888888">
          Username updated post <Underline>{info}</Underline>
        </Text>
        <Text fontSize="xs" color="#888888">
          {time}
        </Text>
      </ProfileProjectTextbox>
    </HistoryBlockContainer>
  );
};

HistoryBlock.propTypes = {
  info: PropTypes.any,
  time: PropTypes.any,
  imageURL: PropTypes.any
};

HistoryBlock.defaultProps = {
  info: 'How to live a decent life',
  time: '1 days ago',
  imageURL:
    'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1482861791-carrie-fisher.jpg?resize=480:*'
};
