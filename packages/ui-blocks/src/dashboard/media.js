import React from 'react';
import { MediaSection } from './media-section';
import { LeftnavThree, TopnavOne, TabNavigation } from '../navigations';
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

export const Media = ({
  topNavLogo1,
  topNavPlaceholder,
  profileImg,
  dashboardImg,
  profileName,
  page
}) => {
  return (
    <DashboardContainer>
      <TopnavOne
        topNavLogo1={topNavLogo1}
        topNavPlaceholder={topNavPlaceholder}
        profileImg={profileImg}
      />
      <Main>
        <Box>
          <OnlyDesktop style={{ height: '100%' }}>
            <LeftnavThree
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
        </Box>

        <Box>
          <MediaSection
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
