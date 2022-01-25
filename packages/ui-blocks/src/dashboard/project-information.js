import React from 'react';
import { ProjectInformationSection } from './project-information-section';
import { Box } from '@webql/core';
import {
  Main,
  DashboardContainer,
  TabContentHidden,
  OnlyDesktop,
  OnlyTab
} from './styled';
import { LeftnavOne, TopnavOne, TabNavigation } from '../navigations';
import { MobileBottomNav } from '../mobile';

export const ProjectInformation = ({
  topNavLogo1,
  topNavPlaceholder,
  profileImg,
  dashboardImg,
  profileName,
  page,
  logo,
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
        page={page}
      />

      <Main>
        <Box>
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
        </Box>
        <Box>
          <ProjectInformationSection
            profileName={profileName}
            dashboardImg={dashboardImg}
            page={page}
            logo={logo}
            membersData={membersData}
            teamsData={teamsData}
            historyData={historyData}
          />
        </Box>
      </Main>
      <MobileBottomNav type="bot-nav1" />
    </DashboardContainer>
  );
};
