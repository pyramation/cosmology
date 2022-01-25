import React from 'react';
import { Box } from '@webql/core';
import { CollaboratorsSection } from './collaborators-section';
import { LeftnavThree, TopnavOne, TabNavigation } from '../navigations';
import {
  Main,
  DashboardContainer,
  AboveMobHidden,
  TabContentHidden,
  OnlyDesktop,
  OnlyTab
} from './styled';
import { MobileBottomNav } from '../mobile';

export const Collaborators = ({
  topNavLogo1,
  topNavPlaceholder,
  profileImg,
  dashboardImg,
  profileName,
  page,
  membersData,
  teamsData,
  historyData
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
          <CollaboratorsSection
            profileName={profileName}
            dashboardImg={dashboardImg}
            page={page}
            membersData={membersData}
            teamsData={teamsData}
            historyData={historyData}
          />
        </Box>
      </Main>
      <AboveMobHidden>
        <MobileBottomNav type="bot-nav2" />
      </AboveMobHidden>
    </DashboardContainer>
  );
};
