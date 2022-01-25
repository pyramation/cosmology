import React, { useState } from 'react';
import { Icon, Text, Input, Dropdown, Divider, Flex, Box } from '@webql/core';
import {
  MainSection,
  SettingsSectionNav,
  SettingsSectionNav1,
  SettingsMainSection,
  ProfileProjects,
  SettingsContainer,
  SettingsTitle,
  PlusButton,
  CollaboratorContainer,
  OnlyDesktop,
  OnlyTab,
  BelowTabHidden,
  AboveMobHidden
} from './styled';
import { HistoryBlock, MembersBlock, TeamsBlock } from '../blocks';
import { MobileMenuTwo } from '../mobile';

export const CollaboratorsSection = ({
  membersData,
  historyData,
  teamsData,
  page = { page }
}) => {
  const [LeftAnimate, setLeftAnimate] = useState(true);
  return (
    <MainSection>
      <BelowTabHidden>
        <SettingsSectionNav>
          <SettingsSectionNav1>
            <Text color="#4D4D4D">COLLABORATORS</Text>
          </SettingsSectionNav1>
          <OnlyDesktop>
            <Flex flexDirection="row">
              <Dropdown text="Alphabet A-Z" type="dropdown-2" />
              <Divider orientation="vertical" />
              <Input
                color="#888888"
                type="text"
                placeholder="Text"
                size="md"
                endElement={<Icon color="#888888" size={6} name="search" />}
              />
            </Flex>
          </OnlyDesktop>
          <OnlyTab>
            <Flex flexDirection="row">
              <Dropdown
                width="130px"
                height="32px"
                text="Alphabet A-Z"
                type="dropdown-2"
              />
              <Divider orientation="vertical" />
              <Input
                color="#888888"
                type="text"
                placeholder="Text"
                size="sm"
                endElement={<Icon color="#888888" size={4} name="search" />}
              />
            </Flex>
          </OnlyTab>
        </SettingsSectionNav>
      </BelowTabHidden>

      <AboveMobHidden>
        <MobileMenuTwo page="team" title="collaborators" />
      </AboveMobHidden>

      <SettingsMainSection>
        <SettingsContainer>
          <SettingsTitle style={{ padding: '10px 20px' }}>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="#4D4D4D">All Members</Text>
              <PlusButton>+</PlusButton>
            </Flex>
          </SettingsTitle>

          <ProfileProjects>
            {membersData.map(el => (
              <MembersBlock
                key={el.id}
                name={el.name}
                email={el.email}
                position={el.position}
                imageURL={el.imageURL}
              />
            ))}
          </ProfileProjects>
        </SettingsContainer>
        <SettingsContainer>
          <SettingsTitle style={{ padding: '10px 20px' }}>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="#4D4D4D">Teams</Text>
              <PlusButton>+</PlusButton>
            </Flex>
          </SettingsTitle>
          <ProfileProjects>
            {teamsData.map(el => (
              <TeamsBlock key={el.id} title={el.title} members={el.members} />
            ))}
          </ProfileProjects>
        </SettingsContainer>

        <SettingsContainer>
          <CollaboratorContainer>
            <Box>
              <Text fontSize="xs" color="#888888">
                Yesterday | Monday, March 4, 2019
              </Text>
            </Box>
            {historyData.map(el => (
              <HistoryBlock
                key={el.id}
                info={el.info}
                imageURL={el.imageURL}
                time={el.time}
              />
            ))}
          </CollaboratorContainer>
        </SettingsContainer>
      </SettingsMainSection>
    </MainSection>
  );
};
