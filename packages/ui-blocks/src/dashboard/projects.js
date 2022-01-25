import React from 'react';
import { MainSection } from './main-section';
import { LeftnavOne, TopnavOne, TabNavigation } from '../navigations';
import { Box } from '@webql/core';
import {
  Main,
  DashboardContainer,
  TabContentHidden,
  OnlyDesktop,
  OnlyTab
} from './styled';

export const Dashboard = ({
  topNavLogo1,
  topNavPlaceholder,
  profileImg,
  dashboardImg,
  profileName,
  tileData,
  page
}) => {
  return (
    <DashboardContainer>
      <TopnavOne
        topNavLogo1={topNavLogo1}
        topNavPlaceholder={topNavPlaceholder}
        profileImg={profileImg}
        page={page}
      />

      <Main>
        <div>
          <OnlyDesktop>
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
          <MainSection
            tileData={tileData}
            profileName={profileName}
            dashboardImg={dashboardImg}
            page={page}
          />
        </Box>
      </Main>
    </DashboardContainer>
  );
};
