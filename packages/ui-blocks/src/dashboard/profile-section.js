import React, { useState } from 'react';
import { Icon, Text } from '@webql/core';
import {
  MainSection,
  SettingsSectionNav,
  SettingsSectionNav1,
  SettingsSectionNav2,
  LeftNav_Button,
  ProfileTopSection,
  ProfileContent,
  ProfileIcon_Box,
  ProfileProjects,
  ProfileIcon,
  SettingsContainer,
  SettingsTitle,
  BelowTabHidden,
  AboveMobHidden
} from './styled';
import { ProjectsBlock, MembersBlock } from '../blocks';
import { MobileMenuTwo } from '../mobile';

export const ProfileSection = ({ projectData, membersData }) => {
  return (
    <MainSection>
      <BelowTabHidden>
        <SettingsSectionNav>
          <SettingsSectionNav1>
            <Text color="#4D4D4D">PROFILE</Text>
          </SettingsSectionNav1>
          <SettingsSectionNav2>
            <LeftNav_Button> Change Public Profile</LeftNav_Button>
          </SettingsSectionNav2>
        </SettingsSectionNav>
      </BelowTabHidden>

      <AboveMobHidden>
        <MobileMenuTwo page="profile" title="profile" />
      </AboveMobHidden>

      <ProfileTopSection>
        <SettingsContainer>
          <SettingsTitle>
            <Text color="#4D4D4D">About Us</Text>
          </SettingsTitle>
          <ProfileContent>
            <Text color="#4D4D4D">
              We are a team of lovely people who are working on one / many
              projects(s). Our headquater is in London, but the team members are
              everywhere of the world.
            </Text>
          </ProfileContent>
        </SettingsContainer>

        <SettingsContainer>
          <SettingsTitle>
            <Text color="#4D4D4D">Social Media</Text>
          </SettingsTitle>
          <ProfileIcon_Box>
            <ProfileIcon>
              <Icon color="#05A2FF" size={12} name="public-profile" />
              <Text mt={2} fontSize="md" color="#888888">
                Facebook
              </Text>
            </ProfileIcon>

            <ProfileIcon>
              <Icon color="#05A2FF" size={12} name="billings" />
              <Text mt={2} fontSize="md" color="#888888">
                Twitter
              </Text>
            </ProfileIcon>
            <ProfileIcon>
              <Icon color="#05A2FF" size={12} name="security" />
              <Text mt={2} fontSize="md" color="#888888">
                Dribble
              </Text>
            </ProfileIcon>
          </ProfileIcon_Box>
        </SettingsContainer>
      </ProfileTopSection>

      <SettingsContainer>
        <SettingsTitle>
          <Text color="#4D4D4D">Projects</Text>
        </SettingsTitle>
        <ProfileProjects>
          {projectData.map(el => (
            <ProjectsBlock
              key={el.id}
              title={el.title}
              status={el.status}
              imageURL={el.imageURL}
            />
          ))}
        </ProfileProjects>
      </SettingsContainer>

      <SettingsContainer>
        <SettingsTitle>
          <Text color="#4D4D4D">Members</Text>
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
    </MainSection>
  );
};
