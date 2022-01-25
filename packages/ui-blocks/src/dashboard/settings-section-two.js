import React, { useState } from 'react';
import { Icon, Text, Input, Flex, Checkbox, Box, Switch } from '@webql/core';
import { MobileMenuTwo } from '../mobile';

import {
  MainSection,
  SettingsSectionNav,
  SettingsSectionNav1,
  SettingsSectionNav2,
  SettingsMainSection,
  BelowTabHidden,
  SettingsTwoMain,
  SettingsContainer,
  SettingsTitle,
  SettingsContent,
  SettingsContentL,
  SettingsContentTwo,
  FaviconTop,
  FaviconTopbox,
  FaviconTextbox1,
  FaviconTextbox2,
  FaviconContent,
  FaviconBottomrBot,
  FaviconImgbox,
  FaviconImg,
  ShareContainer,
  LargeTile,
  LargeTileImg,
  LargeTileText,
  LeftNav_Button,
  AboveMobHidden
} from './styled';

export const SettingsSectionTwo = () => {
  return (
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
              placeholder="Text"
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
        <SettingsTwoMain>
          <div className="settingsTwo-mainl">
            <SettingsContainer>
              <SettingsTitle>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text color="#4D4D4D">API Keys and Secrets</Text>
                  <Icon color="#888888" size={4} mr={3} name="edit" />
                </Flex>
              </SettingsTitle>
              <SettingsContent>
                <SettingsContentL>
                  <Icon color="#888888" size={6} mr={3} name="api-keys" />
                  <div>
                    <Text fontSize="sm" color="#888888">
                      Name
                    </Text>
                    <Text
                      style={{ letterSpacing: '-1px' }}
                      fontSize="lg"
                      color="#888888"
                    >
                      &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                      &#8226; &#8226; &#8226;
                    </Text>
                  </div>
                </SettingsContentL>
                <Icon color="#888888" size={4} mr={3} name="trashbin" />
              </SettingsContent>
              <SettingsContent>
                <SettingsContentL>
                  <Icon color="#888888" size={6} mr={3} name="api-keys" />
                  <div>
                    <Text fontSize="sm" color="#888888">
                      CF_USERS
                    </Text>
                    <Text
                      style={{ letterSpacing: '-1px' }}
                      fontSize="lg"
                      color="#888888"
                    >
                      &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                      &#8226; &#8226; &#8226;
                    </Text>
                  </div>
                </SettingsContentL>
                <Icon color="#888888" size={4} mr={3} name="trashbin" />
              </SettingsContent>
              <SettingsContent>
                <SettingsContentL>
                  <Icon color="#888888" size={6} mr={3} name="api-keys" />
                  <div>
                    <Text fontSize="sm" color="#888888">
                      CF_PASS
                    </Text>
                    <Text
                      style={{ letterSpacing: '-1px' }}
                      fontSize="lg"
                      color="#888888"
                    >
                      &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                      &#8226; &#8226; &#8226;
                    </Text>
                  </div>
                </SettingsContentL>
                <Icon color="#888888" size={4} mr={3} name="trashbin" />
              </SettingsContent>
            </SettingsContainer>
            <SettingsContainer>
              <SettingsTitle>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize="sm" color="#4D4D4D">
                    Favicon
                  </Text>
                  <Icon
                    color="#888888"
                    size={4}
                    mr={3}
                    name="circle-exclamation"
                  />
                </Flex>
              </SettingsTitle>

              <FaviconContent>
                <Flex flexDirection="row">
                  <Checkbox size="lg" />
                  <Text pl={4} fontSize="md" color="#888888">
                    Use Favicon
                  </Text>
                </Flex>
                <FaviconTop>
                  <FaviconTopbox>
                    <div>
                      <FaviconImgbox>
                        <FaviconImg
                          className="favicon-img"
                          src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
                        />
                      </FaviconImgbox>

                      <LeftNav_Button
                        style={{ maxWidth: '123px', marginTop: '10px' }}
                      >
                        Update
                      </LeftNav_Button>
                    </div>
                    <FaviconTextbox1>
                      <Text fontSize="xs" color="#888888">
                        The format for the image you have chosen must be PNG and
                        above 228 x 228 px
                      </Text>
                    </FaviconTextbox1>
                  </FaviconTopbox>
                  <div className="favicon-bottomr">
                    <FaviconTextbox2>
                      <Text fontSize="xs" color="#888888">
                        The format for the image you have chosen must be PNG and
                        above 228 x 228 px
                      </Text>
                    </FaviconTextbox2>
                    <FaviconBottomrBot>
                      <div>
                        <Text fontSize="xs" color="#888888">
                          File Name
                        </Text>
                        <Text pt={2} fontSize="sm" color="#4D4D4D">
                          Favicon_Final_12.png
                        </Text>
                      </div>

                      <div>
                        <Text fontSize="xs" color="#888888">
                          File Format
                        </Text>
                        <Text pt={2} fontSize="sm" color="#4D4D4D">
                          PNG
                        </Text>
                      </div>

                      <div>
                        <Text fontSize="xs" color="#888888">
                          File Size
                        </Text>
                        <Text pt={2} fontSize="sm" color="#4D4D4D">
                          2 MB
                        </Text>
                      </div>

                      <div>
                        <Text fontSize="xs" color="#888888">
                          Original Dimensionm
                        </Text>
                        <Text pt={2} fontSize="sm" color="#4D4D4D">
                          240 x 240px | 24-bit
                        </Text>
                      </div>
                    </FaviconBottomrBot>
                  </div>
                </FaviconTop>
              </FaviconContent>
            </SettingsContainer>

            <SettingsContainer>
              <SettingsTitle>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text color="#4D4D4D">Public Settings</Text>
                  <Icon color="#888888" size={4} mr={3} name="edit" />
                </Flex>
              </SettingsTitle>
              <Box pl={4} pb={4} pt={4}>
                <Flex flexDirection="column">
                  <Text color="#888888">https://blue-shark-studio.com.vn</Text>
                  <Flex pt={4} flexDirection="row" alignItems="center">
                    <Switch size="lg" />
                    <Text ml={4} color="#4D4D4D">
                      Published
                    </Text>
                    <Icon
                      ml={2}
                      color="#19E6C3"
                      size={4}
                      mr={3}
                      name="circle-check"
                    />
                  </Flex>
                </Flex>
              </Box>
            </SettingsContainer>
          </div>
          <div className="settingsTwo-mainr">
            <SettingsContainer>
              <SettingsTitle>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text color="#4D4D4D">Domain Settings</Text>
                  <Icon color="#888888" size={4} mr={3} name="edit" />
                </Flex>
              </SettingsTitle>
              <SettingsContentTwo>
                <Text fontSize="xs" color="#888888">
                  Website Name
                </Text>
                <Text mt={2} color="#4D4D4D">
                  Blue Shark Studio Online Portfolio
                </Text>
              </SettingsContentTwo>
              <SettingsContentTwo>
                <Text fontSize="xs" color="#888888">
                  Subdomain Name
                </Text>
                <Text mt={2} color="#4D4D4D">
                  blue-shark-studio.airpage.io
                </Text>
              </SettingsContentTwo>
              <SettingsContentTwo>
                <Text fontSize="xs" color="#888888">
                  Custom Domain Name
                </Text>
                <Text mt={2} color="#4D4D4D">
                  blue-shark-studio.com.vn
                </Text>
              </SettingsContentTwo>
            </SettingsContainer>

            <SettingsContainer>
              <SettingsTitle>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text color="#4D4D4D">Social Share</Text>
                  <Icon color="#888888" size={4} mr={3} name="edit" />
                </Flex>
              </SettingsTitle>

              <ShareContainer>
                <Text pb={2} fontSize="xs" color="#888888">
                  Sharing URL
                </Text>
                <Input
                  width="100%"
                  size="sm"
                  placeholder="https://blue-shark-studio.com.vn"
                  endElement={<Icon name="copy" color="#808080" />}
                />
                <LargeTile>
                  <LargeTileImg
                    className="large-tile-img"
                    src="https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  />
                  <LargeTileText>
                    <Text fontSize="lg" color="#4D4D4D">
                      BLUE SHARK STUDIO
                    </Text>
                    <Text pt={2} color="#4D4D4D">
                      Blue Shark Studio is a pellentesque elit urna, aliquam sit
                      amet consequat id, pretium at dui. Pellentesque elit urna,
                      aliquam sit
                    </Text>
                    <Text pt={2} fontSize="xs" color="#888888">
                      blue-shark-studio.com.vn
                    </Text>
                  </LargeTileText>
                </LargeTile>
              </ShareContainer>
            </SettingsContainer>
          </div>
        </SettingsTwoMain>
      </SettingsMainSection>
    </MainSection>
  );
};
