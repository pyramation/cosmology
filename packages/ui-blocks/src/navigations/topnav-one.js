import React from 'react';
import { Icon, Dropdown, Notifications, Box } from '@webql/core';
import PropTypes from 'prop-types';
import {
  TopNav,
  TopNavLeft,
  TopNavRight,
  Border,
  MobTopNav,
  MobTopNavLeft,
  MobTopNavRight
} from './styled';

export const TopnavOne = ({
  topNavLogo1,
  notNum,
  proImg,
  topNavPlaceholder
}) => {
  return (
    <React.Fragment>
      <TopNav>
        <TopNavLeft>
          <Icon ml={2} mt={1} color="#05A2FF" size={3} name={topNavLogo1} />
          <Border />
          <Dropdown
            text={topNavPlaceholder}
            width="225px"
            img={proImg}
            type="dropdown-1"
          />
        </TopNavLeft>
        <TopNavRight>
          <Border />
          <Box mt={1}>
            <Notifications number={notNum} type="bell-notification" />
          </Box>
          <Notifications img={proImg} type="profile-notification" />
        </TopNavRight>
      </TopNav>
      <MobTopNav>
        <MobTopNavLeft>
          <Icon
            ml={1}
            mt={1}
            pr={1}
            color="#05A2FF"
            size={3}
            name={topNavLogo1}
          />
          <Border />
          <Dropdown
            height="36px"
            width="186px"
            img={proImg}
            type="dropdown-1"
          />
        </MobTopNavLeft>
        <MobTopNavRight>
          <Border />
          <Box mt={1}>
            <Notifications number={notNum} type="bell-notification" />
          </Box>
          <Notifications img={proImg} type="profile-notification" />
        </MobTopNavRight>
      </MobTopNav>
    </React.Fragment>
  );
};

TopnavOne.propTypes = {
  topNavLogo1: PropTypes.string,
  notNum: PropTypes.string,
  proImg: PropTypes.any
};

TopnavOne.defaultProps = {
  topNavLogo1: 'mainlogo',
  notNum: '7',
  proImg:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
};
