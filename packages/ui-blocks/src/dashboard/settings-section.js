import React, { useState } from 'react';
import { Avatar, Icon, Text, Input, Box } from '@webql/core';
import { MobileMenuTwo } from '../mobile';
import {
  MainSection,
  SettingsSectionNav,
  SettingsSectionNav1,
  SettingsSectionNav2,
  SettingsMainSection,
  SettingsIcon,
  SettingsContainer,
  SettingsTitle,
  SettingsIcon_Box,
  BelowTabHidden,
  AboveMobHidden
} from './styled';
import { MobileBottomNav } from '../mobile';

export const SettingsSection = ({ logo }) => {
  return (
    <>
      <MainSection>
        <BelowTabHidden>
          <SettingsSectionNav>
            <SettingsSectionNav1>
              <Text color="#4D4D4D">SETTINGS</Text>
            </SettingsSectionNav1>
            <SettingsSectionNav2>
              <Input
                color="#888888"
                type="text"
                placeholder="Search"
                size="sm"
                endElement={<Icon color="#888888" size={6} name="search" />}
              />
            </SettingsSectionNav2>
          </SettingsSectionNav>
        </BelowTabHidden>

        <AboveMobHidden>
          <MobileMenuTwo page="settings" title="settings" />
        </AboveMobHidden>

        <SettingsMainSection>
          <SettingsContainer>
            <SettingsTitle>
              <Text color="#4D4D4D">Account Settings</Text>
            </SettingsTitle>
            <SettingsIcon_Box>
              <SettingsIcon active={logo.includes('profile') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('profile') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="public-profile"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('profile') ? '#05A2FF' : '#888888'}
                >
                  Public Profile
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('password') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('password') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="password"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('password') ? '#05A2FF' : '#888888'}
                >
                  Password
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('contact') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('contact') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="contact-info"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('contact') ? '#05A2FF' : '#888888'}
                >
                  Contact Info
                </Text>
              </SettingsIcon>

              <SettingsIcon
                active={logo.includes('notification') ? true : null}
              >
                <Icon
                  mt={2}
                  color={logo.includes('notification') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="notifications"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('notification') ? '#05A2FF' : '#888888'}
                >
                  Notifications
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('billing') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('billing') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="billings"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('billing') ? '#05A2FF' : '#888888'}
                >
                  Billing
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('security') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('security') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="security"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('security') ? '#05A2FF' : '#888888'}
                >
                  Security
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('session') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('session') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="session"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('session') ? '#05A2FF' : '#888888'}
                >
                  Session
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('blocked') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('blocked') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="blocked-users"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('blocked') ? '#05A2FF' : '#888888'}
                >
                  Blocked Users
                </Text>
              </SettingsIcon>
            </SettingsIcon_Box>
          </SettingsContainer>

          <SettingsContainer>
            <SettingsTitle>
              <Text color="#4D4D4D">Organization Settings</Text>
            </SettingsTitle>
            <SettingsIcon_Box>
              <SettingsIcon active={logo === 'org' ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('org') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="organization-profile"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('org') ? '#05A2FF' : '#888888'}
                >
                  Org Profile
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo === 'billing' ? true : null}>
                <Icon
                  mt={2}
                  color={logo === 'billing' ? '#05A2FF' : '#888888'}
                  size={10}
                  name="billings"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('billing') ? '#05A2FF' : '#888888'}
                >
                  Billing
                </Text>
              </SettingsIcon>
            </SettingsIcon_Box>
          </SettingsContainer>

          <SettingsContainer>
            <SettingsTitle>
              <Text color="#4D4D4D">App Settings</Text>
            </SettingsTitle>
            <SettingsIcon_Box>
              <SettingsIcon active={logo.includes('keybinding') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('keybinding') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="keybinding"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('keybinding') ? '#05A2FF' : '#888888'}
                >
                  Keybinding
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('theme') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('theme') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="themes"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('theme') ? '#05A2FF' : '#888888'}
                >
                  Theme
                </Text>
              </SettingsIcon>

              <SettingsIcon active={logo.includes('workspace') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('workspace') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="workspace"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('workspace') ? '#05A2FF' : '#888888'}
                >
                  Workspace
                </Text>
              </SettingsIcon>
              <SettingsIcon active={logo.includes('custom-list') ? true : null}>
                <Icon
                  mt={2}
                  color={logo.includes('custom-list') ? '#05A2FF' : '#888888'}
                  size={10}
                  name="custom-list"
                />
                <Text
                  fontSize="sm"
                  color={logo.includes('custom-list') ? '#05A2FF' : '#888888'}
                >
                  Custom List
                </Text>
              </SettingsIcon>
            </SettingsIcon_Box>
          </SettingsContainer>
        </SettingsMainSection>
      </MainSection>
      <MobileBottomNav type="bot-nav1" />
    </>
  );
};
