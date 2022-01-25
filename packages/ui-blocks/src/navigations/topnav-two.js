import React from 'react';
import { Icon, Notifications, Box } from '@webql/core';
import PropTypes from 'prop-types';
import { TopNavTwo, TopNavLeft_Box, TopNavRight, Border } from './styled';

export const TopnavTwo = ({ topNavLogo1, notNum, proImg }) => {
  return (
    <TopNavTwo>
      <TopNavLeft_Box>
        <Icon color="#05A2FF" size={6} name={topNavLogo1} />
      </TopNavLeft_Box>
      <TopNavRight>
        <Border />
        <Box mt={1}>
          <Notifications number={notNum} type="bell-notification" />
        </Box>
        <Notifications img={proImg} type="profile-notification" />
      </TopNavRight>
    </TopNavTwo>
  );
};

TopnavTwo.propTypes = {
  topNavLogo1: PropTypes.string,
  notNum: PropTypes.string,
  proImg: PropTypes.any
};

TopnavTwo.defaultProps = {
  topNavLogo1: 'mainlogo',
  notNum: '7',
  proImg:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
};
