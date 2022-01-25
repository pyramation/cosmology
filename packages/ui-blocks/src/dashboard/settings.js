import React from 'react';
import { SettingsSection } from './settings-section';
import { LeftnavOne, TopnavOne, TabNavigation } from '../navigations';
import { Box } from '@webql/core';
import {
  Main,
  DashboardContainer,
  TabContentHidden,
  OnlyDesktop,
  OnlyTab
} from './styled';

export const Settings = ({
  topNavLogo1,
  topNavPlaceholder,
  profileImg,
  dashboardImg,
  profileName,
  page,
  logo
}) => {
  return (
    <DashboardContainer>
      <TopnavOne
        topNavLogo1={topNavLogo1}
        topNavPlaceholder={topNavPlaceholder}
        profileImg={profileImg}
      />
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
          <SettingsSection
            profileName={profileName}
            dashboardImg={dashboardImg}
            page={page}
            logo={logo}
          />
        </Box>
      </Main>
    </DashboardContainer>
  );
};
