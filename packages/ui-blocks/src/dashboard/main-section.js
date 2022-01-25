import React, { useState } from 'react';
import {
  Icon,
  Divider,
  Textarea,
  Input,
  Button,
  Tile,
  Dropdown,
  Notifications,
  Box,
  Pagination,
  Text
} from '@webql/core';
import { MobileMenuOne } from '../mobile';
import {
  MainSection as MainSectionComponent,
  MainSectionNav,
  MainSectionNav1,
  MainSectionNav3,
  MainSectionMain,
  PaginationComp,
  MobBotNav1,
  CreateProjectContainer,
  CreateProjectTop,
  CreateProjectMid,
  CreateProjectBot,
  TabMainSectionNav,
  TabMainSectionNav1,
  TabMainSectionNav3,
  AboveMobHidden
} from './styled';

export const MainSection = ({ tileData }) => {
  const [TopDownAnimate, setTopDownAnimate] = useState(true);
  return (
    <>
      <MainSectionComponent>
        <MainSectionNav>
          <MainSectionNav1>
            <Text color="#4D4D4D">PROJECTS</Text>
          </MainSectionNav1>
          <MainSectionNav3>
            <Icon mt={2} color="#888888" size={6} name="align-justify" />
            <Box ml={1} mt={2}>
              <Notifications type="thumbnail-status" />
            </Box>
            <Divider ml={10} mr={3} orientation="vertical" />
            <Dropdown text="Alphabet A-Z" type="dropdown-2" />
            <Divider orientation="vertical" />
            <Input
              color="#888888"
              type="text"
              placeholder="Search"
              endElement={<Icon color="#888888" size={6} name="search" />}
            />
            <Divider orientation="vertical" />
            <Button size="md" startIcon="plus">
              New Project
            </Button>
          </MainSectionNav3>
        </MainSectionNav>

        <TabMainSectionNav>
          <TabMainSectionNav1>
            <Text color="#4D4D4D">PROJECTS</Text>
          </TabMainSectionNav1>
          <TabMainSectionNav3>
            <Icon mt={1} color="#888888" size={6} name="align-justify" />
            <Box ml={1} mt={1}>
              <Notifications type="thumbnail-status" />
            </Box>
            <Divider ml={10} mr={3} orientation="vertical" />

            <Box mr={1}>
              <Dropdown
                width="130px"
                height="32px"
                text="Alphabet A-Z"
                type="dropdown-2"
              />
            </Box>
            <Input
              mr={1}
              color="#888888"
              type="text"
              placeholder="Search"
              size="sm"
              endElement={<Icon color="#888888" size={4} name="search" />}
            />

            <Button mr={1} size="sm" startIcon="plus">
              New Project
            </Button>
          </TabMainSectionNav3>
        </TabMainSectionNav>
        <AboveMobHidden>
          <MobileMenuOne page="project" title="projects" />
        </AboveMobHidden>

        <MainSectionMain>
          {tileData.map(el => (
            <Tile
              id={el.id}
              title={el.title}
              time={el.time}
              image={el.imageURL}
            />
          ))}
        </MainSectionMain>

        <PaginationComp>
          <Pagination />
        </PaginationComp>
      </MainSectionComponent>

      <MobBotNav1>
        <CreateProjectContainer down={TopDownAnimate}>
          <CreateProjectTop>
            <Icon
              style={{ cursor: 'pointer' }}
              onClick={() => setTopDownAnimate(!TopDownAnimate)}
              mt={1}
              color="#888888"
              size={3}
              name="close"
            />
            <Divider orientation="vertical" />
            <Text fontSize="md" color="#888888">
              CREATE NEW PROJECT
            </Text>
          </CreateProjectTop>

          <CreateProjectMid>
            <Text fontSize="xs" color="#888888">
              Project Name
            </Text>
            <Input
              mt={2}
              color="#888888"
              type="text"
              placeholder="Untitled Project"
            />

            <Text mt={4} fontSize="xs" color="#888888">
              Description
            </Text>
            <Textarea
              mt={2}
              color="#888888"
              type="text"
              placeholder="This project is all about us"
            />
          </CreateProjectMid>

          <CreateProjectBot>
            <Button
              mr={2}
              variant="secondary"
              size="md"
              color="#808080"
              bg="#fcfcfc"
            >
              Cancel
            </Button>
            <Button variant="primary" size="md">
              Create
            </Button>
          </CreateProjectBot>
        </CreateProjectContainer>

        <Button
          onClick={() => setTopDownAnimate(!TopDownAnimate)}
          variant="primary"
          size="md"
          midIcon="plus"
        ></Button>
        <Divider orientation="vertical" />
        <Input
          color="#888888"
          size="md"
          type="text"
          placeholder="Search"
          endElement={<Icon color="#888888" size={6} name="search" />}
        />
      </MobBotNav1>
    </>
  );
};
