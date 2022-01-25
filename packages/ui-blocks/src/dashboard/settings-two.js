import React from 'react';
import { SettingsSectionTwo } from './settings-section-two';
import { LeftnavOne, TopnavOne, TabNavigation } from '../navigations';
import { Box } from '@webql/core';
import {
  Main,
  DashboardContainer,
  AboveMobHidden,
  TabContentHidden,
  OnlyDesktop,
  OnlyTab
} from './styled';
import { MobileBottomNav } from '../mobile';

export const SettingsTwo = ({
  topNavLogo1,
  profileImg,
  dashboardImg,
  profileName,
  page
}) => {
  return (
    <DashboardContainer>
      <TopnavOne topNavLogo1={topNavLogo1} profileImg={profileImg} />
      <Main>
        <div>
          <OnlyDesktop style={{ height: '100%' }}>
            <LeftnavOne
              profileName={profileName}
              dashboardImg={dashboardImg}
              page={page}
            />
          </OnlyDesktop>

          <OnlyTab style={{ height: '100%' }}>
            <TabContentHidden style={{ height: '100%' }}>
              <TabNavigation page={page} />
            </TabContentHidden>
          </OnlyTab>
        </div>
        <Box>
          <SettingsSectionTwo
            profileName={profileName}
            dashboardImg={dashboardImg}
            page={page}
          />
        </Box>
      </Main>
      <AboveMobHidden>
        <MobileBottomNav type="bot-nav2" />
      </AboveMobHidden>
    </DashboardContainer>
  );
};
