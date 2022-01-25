import React from 'react';
import { ProfileSection } from './profile-section';
import { Box } from '@webql/core';
import {
  Main,
  DashboardContainer,
  TabContentHidden,
  OnlyDesktop,
  OnlyTab
} from './styled';
import { LeftnavTwo, TopnavTwo, TabNavigation } from '../navigations';
import { MobileBottomNav } from '../mobile';

export const Profile = ({
  topNavLogo1,
  profileImg,
  dashboardImg,
  profileName,
  logoutLogo,
  page,
  projectData,
  membersData
}) => {
  return (
    <DashboardContainer>
      <TopnavTwo topNavLogo1={topNavLogo1} profileImg={profileImg} />

      <Main>
        <Box>
          <OnlyDesktop style={{ height: '100%' }}>
            <LeftnavTwo
              page={page}
              logoutLogo={logoutLogo}
              profileName={profileName}
              dashboardImg={dashboardImg}
            />
          </OnlyDesktop>
          <OnlyTab style={{ height: '100%' }}>
            <TabContentHidden style={{ height: '100%' }}>
              <TabNavigation page={page} />
            </TabContentHidden>
          </OnlyTab>
        </Box>
        <Box>
          <ProfileSection
            page={page}
            logoutLogo={logoutLogo}
            profileName={profileName}
            dashboardImg={dashboardImg}
            projectData={projectData}
            membersData={membersData}
          />
        </Box>
      </Main>
      <MobileBottomNav type="bot-nav1" />
    </DashboardContainer>
  );
};
