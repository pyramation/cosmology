import React, { useState } from 'react';
import {
  Icon,
  Text,
  Input,
  Dropdown,
  Divider,
  Box,
  Notifications,
  Checkbox,
  Tile
} from '@webql/core';
import {
  MainSection,
  MediaMainSectionNav,
  MainSectionNav1,
  MainSectionNav3,
  MediaSectionContainer,
  MediaSectionLeft,
  MediaSectionLeftTop,
  MediaButtonContainer,
  MediaSectionRight,
  MediaSectionRightTop,
  CheckboxContainer,
  TextContainer,
  MediaSectionLeftMid,
  MediaSectionLeftBot,
  LeftNav_Button,
  DownloadButton,
  MediaSectionRightBot,
  BelowTabHidden,
  AboveMobHidden,
  MobileMediaSectionLeftBot,
  MobileMediaLeftBox,
  MobileMediaTileImgbox,
  MobileMediaTileImg,
  MobileMediaTileVideo,
  MobileMediaTileTextbox,
  MobileMediaTileVidbox
} from './styled';
import { MobileMenuOne } from '../mobile';

export const MediaSection = ({ active }) => {
  return (
    <MainSection>
      <MediaMainSectionNav>
        <MainSectionNav1>
          <Text color="#4D4D4D">MEDIA</Text>
        </MainSectionNav1>
        <MainSectionNav3>
          <Icon mt={2} color="#888888" size={6} name="align-justify" />
          <Box ml={1} mt={2}>
            <Notifications type="thumbnail-status" />
          </Box>
          <Divider ml={10} mr={3} orientation="vertical" />
          <Dropdown text="Date Modified" type="dropdown-2" />
          <Divider orientation="vertical" />
          <Input
            color="#888888"
            type="text"
            placeholder="Search"
            endElement={<Icon color="#888888" size={6} name="search" />}
          />
        </MainSectionNav3>
      </MediaMainSectionNav>
      <AboveMobHidden>
        <MobileMenuOne page="media" title="media" />
      </AboveMobHidden>

      <MediaSectionContainer>
        <MediaSectionLeft>
          <MediaSectionLeftTop>
            <Icon mt={2} color="#888888" size={10} name="upload-cloud" />
            <Text mt={2} fontSize="md" color="#888888">
              Drag and Drop Your File!
            </Text>
            <MediaButtonContainer>
              <LeftNav_Button>Browse Computer</LeftNav_Button>
              <LeftNav_Button>Use External Link</LeftNav_Button>
            </MediaButtonContainer>
          </MediaSectionLeftTop>
          <MediaSectionLeftMid>
            <BelowTabHidden>
              <DownloadButton>
                <Icon color="#888888" size={4} name="download" /> &nbsp;
                Download Selected Files
              </DownloadButton>
            </BelowTabHidden>
            <AboveMobHidden>
              <Icon mr={2} color="#888888" size={5} name="download" />
            </AboveMobHidden>
            <Icon ml={2} color="#888888" size={5} name="trashbin" />
          </MediaSectionLeftMid>
          <MediaSectionLeftBot>
            <Tile type="smi" />
            <Tile type="smv" active="active" />
            <Tile type="smi" />
            <Tile type="smi" />
            <Tile type="smi" />
            <Tile type="smi" />
            <Tile type="smi" />
            <Tile type="smi" />
            <Tile type="smi" />
            <Tile type="smi" />
          </MediaSectionLeftBot>

          <MobileMediaSectionLeftBot>
            <MobileMediaLeftBox>
              <MobileMediaTileImgbox>
                <MobileMediaTileImg
                  className="media-tile-img"
                  src="https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </MobileMediaTileImgbox>
              <MobileMediaTileTextbox
                bgcolor={active === 'active' ? '#EBF7FF' : null}
              >
                <Box>
                  <Text
                    fontSize="sm"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Item Name
                  </Text>
                  <Text
                    pt={2}
                    fontSize="xs"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Meta Data
                  </Text>
                </Box>
                <Box className="media-tile-textbox-r">
                  <Icon
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                    size={4}
                    name="more-horizontal"
                  />
                </Box>
              </MobileMediaTileTextbox>
            </MobileMediaLeftBox>
            <MobileMediaLeftBox>
              <MobileMediaTileVidbox>
                <MobileMediaTileVideo
                  className="media-tile-video"
                  src=""
                  controls
                ></MobileMediaTileVideo>
              </MobileMediaTileVidbox>
              <MobileMediaTileTextbox
                bgcolor={active === 'active' ? '#EBF7FF' : null}
              >
                <Box>
                  <Text
                    fontSize="sm"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Item Name
                  </Text>
                  <Text
                    pt={2}
                    fontSize="xs"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Meta Data
                  </Text>
                </Box>
                <Box>
                  <Icon
                    mb={2}
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                    size={4}
                    name="more-horizontal"
                  />
                </Box>
              </MobileMediaTileTextbox>
            </MobileMediaLeftBox>
            <MobileMediaLeftBox>
              <MobileMediaTileImgbox>
                <MobileMediaTileImg
                  className="media-tile-img"
                  src="https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </MobileMediaTileImgbox>
              <MobileMediaTileTextbox
                bgcolor={active === 'active' ? '#EBF7FF' : null}
              >
                <Box>
                  <Text
                    fontSize="sm"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Item Name
                  </Text>
                  <Text
                    pt={2}
                    fontSize="xs"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Meta Data
                  </Text>
                </Box>
                <Box className="media-tile-textbox-r">
                  <Icon
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                    size={4}
                    name="more-horizontal"
                  />
                </Box>
              </MobileMediaTileTextbox>
            </MobileMediaLeftBox>
            <MobileMediaLeftBox>
              <MobileMediaTileImgbox>
                <MobileMediaTileImg
                  className="media-tile-img"
                  src="https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </MobileMediaTileImgbox>
              <MobileMediaTileTextbox
                bgcolor={active === 'active' ? '#EBF7FF' : null}
              >
                <Box>
                  <Text
                    fontSize="sm"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Item Name
                  </Text>
                  <Text
                    pt={2}
                    fontSize="xs"
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                  >
                    Meta Data
                  </Text>
                </Box>
                <Box className="media-tile-textbox-r">
                  <Icon
                    color={active === 'active' ? '#01A1FF' : '#888888'}
                    size={4}
                    name="more-horizontal"
                  />
                </Box>
              </MobileMediaTileTextbox>
            </MobileMediaLeftBox>
          </MobileMediaSectionLeftBot>
        </MediaSectionLeft>

        <MediaSectionRight>
          <MediaSectionRightTop>
            <CheckboxContainer>
              <Checkbox size="lg" />
              <Text pl={4} fontSize="md" color="#4D4D4D">
                Images (png, jpg, tiff...)
              </Text>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox size="lg" />
              <Text pl={4} fontSize="md" color="#4D4D4D">
                Vector files (svg, esp)
              </Text>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox disabled size="lg" />
              <Text pl={4} fontSize="md" color="#888888">
                Document
              </Text>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox size="lg" />
              <Text pl={4} fontSize="md" color="#4D4D4D">
                Video (mov, mp4...)
              </Text>
            </CheckboxContainer>
          </MediaSectionRightTop>
          <MediaSectionRightBot>
            <TextContainer>
              <Text fontSize="xs" color="#888888">
                File Name
              </Text>
              <Text mt={2} fontSize="md" color="#4D4D4D">
                ShortIntro.mp4
              </Text>
            </TextContainer>
            <TextContainer>
              <Text fontSize="xs" color="#888888">
                Dimension / Size
              </Text>
              <Text mt={2} fontSize="md" color="#4D4D4D">
                1440 x 1024 / 10.5 MB
              </Text>
            </TextContainer>
            <TextContainer>
              <Text fontSize="xs" color="#888888">
                Uploaded on
              </Text>
              <Text mt={2} fontSize="md" color="#4D4D4D">
                3/26/18, 5:10
              </Text>
            </TextContainer>
            <TextContainer>
              <Text fontSize="xs" color="#888888">
                Last Modified on
              </Text>
              <Text mt={2} fontSize="md" color="#4D4D4D">
                6/27/19, 10:05
              </Text>
            </TextContainer>
          </MediaSectionRightBot>
        </MediaSectionRight>
      </MediaSectionContainer>
    </MainSection>
  );
};
