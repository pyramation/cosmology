import React, { useState } from 'react';
import {
  Icon,
  Divider,
  Avatar,
  Flex,
  Textarea,
  Input,
  Button,
  Grid,
  Box,
  Text
} from '@webql/core';
import { MobileMenuOne } from '../mobile';
import { HistoryBlock, MembersBlock, TeamsBlock } from '../blocks';
import { Card } from './card';
import {
  MainSection,
  MainSectionNav,
  MainSectionNav1,
  MainSectionNav3,
  RightIcon,
  PulicProfileBox1,
  PublicProfileBox2,
  PublicProfileBox3,
  PublicProfileBox4,
  PublicProfileBox5,
  PublicProfileBox6,
  PublicProfileContainer,
  PublicProfileBoxl,
  PublicProfileBoxr,
  MemberTag,
  ProfileProjectTextbox,
  ProfileImgbox,
  TabMainSectionNav,
  TabMainSectionNav1,
  TabMainSectionNav3,
  SettingsMainSection,
  SettingsContainer,
  SettingsTitle,
  SettingsIcon,
  SettingsIcon_Box,
  MainContainer,
  PlusButton,
  ProfileProjects,
  CollaboratorContainer,
  AboveMobHidden
} from './styled';

export const ProjectInformationSection = ({
  membersData,
  teamsData,
  historyData
}) => {
  const [LeftAnimate1, setLeftAnimate1] = useState('');
  const [LeftAnimate2, setLeftAnimate2] = useState('');
  const [LeftAnimate3, setLeftAnimate3] = useState('');
  const [LeftAnimate4, setLeftAnimate4] = useState('');
  const [LeftAnimate5, setLeftAnimate5] = useState('');
  const [LeftAnimate6, setLeftAnimate6] = useState('');
  const [LeftAnimate7, setLeftAnimate7] = useState('');
  const [LeftAnimate8, setLeftAnimate8] = useState('');
  const [LeftAnimate9, setLeftAnimate9] = useState('');
  const [active, setactive] = useState('');

  const links = [
    {
      id: 1,
      title: 'public profile',
      data: publicprofile(),
      left: LeftAnimate2,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate2,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 2,
      title: 'password',
      data: publicprofile,
      left: LeftAnimate3,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate3,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 3,
      title: 'contact info',
      data: publicprofile,
      left: LeftAnimate4,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate4,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 4,
      title: 'notifications',
      data: publicprofile,
      left: LeftAnimate5,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate5,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 5,
      title: 'billing',
      data: publicprofile,
      left: LeftAnimate6,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate6,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 6,
      title: 'security',
      data: publicprofile,
      left: LeftAnimate7,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate7,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 7,
      title: 'session',
      data: publicprofile,
      left: LeftAnimate8,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate8,
      setLeftAnimateMain: setLeftAnimate1
    },
    {
      id: 8,
      title: 'blocked users',
      data: publicprofile,
      left: LeftAnimate9,
      setactive: setactive,
      setLeftAnimate: setLeftAnimate9,
      setLeftAnimateMain: setLeftAnimate1
    }
  ];

  function publicprofile() {
    return (
      <>
        <PublicProfileBox2>
          <Grid templateColumns="1fr 1fr" gridColumnGap="15px">
            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                First Name
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Patricia"
              />
            </div>

            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                Last Name
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Baskerville"
              />
            </div>
            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                Username
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Patricia2018"
              />
            </div>
            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                Public Email
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Patricia.Baskerville@gmail.com"
              />
            </div>
          </Grid>
          <Text mt={2} pb={2} fontSize="xs" color="#888888">
            Location
          </Text>
          <Input
            color="#808080"
            width="100%"
            size="sm"
            placeholder="Bharat, BH"
            endElement={<Icon color="#808080" name="down" />}
          />
        </PublicProfileBox2>
        <PublicProfileBox3>
          <Text mt={2} pb={2} fontSize="xs" color="#888888">
            About Me
          </Text>
          <Textarea
            color="#808080"
            width="100%"
            height="300px"
            size="sm"
            placeholder="I'm a front end developer based in Bharat. Currently, I'm in fulltime mode for Basement Laboratory, and looking for freelance job."
          />
        </PublicProfileBox3>
        <PublicProfileBox4>
          <Text mt={2} pb={3} fontSize="xs" color="#888888">
            Social Media
          </Text>
          <Input
            color="#808080"
            width="100%"
            size="sm"
            placeholder="Patricia.Baskerville@gmail.com"
            startElement={<Icon color="#808080" name="plus" />}
          />

          <Grid
            pb={3}
            mt={3}
            templateColumns="93% 5%"
            gridColumnGap="15px"
            alignItems="center"
          >
            <Input
              color="#808080"
              width="100%"
              size="sm"
              placeholder="https://facebook.com/PatriciaBaskerville"
              startElement={<Icon color="#808080" name="plus" />}
            />
            <Icon color="#808080" size={4} name="trashbin" />
          </Grid>
          <Grid
            pb={3}
            templateColumns="93% 5%"
            gridColumnGap="15px"
            alignItems="center"
          >
            <Input
              color="#808080"
              width="100%"
              size="sm"
              placeholder="https://twitter.com/PatriciaB.1994"
              startElement={<Icon color="#808080" name="plus" />}
            />
            <Icon color="#808080" size={4} name="trashbin" />
          </Grid>
          <Grid
            pb={3}
            templateColumns="93% 5%"
            gridColumnGap="15px"
            alignItems="center"
          >
            <Input
              color="#808080"
              width="100%"
              size="sm"
              placeholder="https://dribble.com/PatriciaBaskerville"
              startElement={<Icon color="#808080" name="plus" />}
            />
            <Icon color="#808080" size={4} name="trashbin" />
          </Grid>
        </PublicProfileBox4>
        <PublicProfileBox5>
          <Grid templateColumns="1fr 1fr" gridColumnGap="15px">
            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                Organization Name / Email
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Teal Cabin Agency"
              />
            </div>

            <div>
              <Text mt={2} pb={2} fontSize="xs" color="#888888">
                My Role
              </Text>
              <Input
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Author"
                endElement={<Icon color="#808080" name="down" />}
              />
            </div>
            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                I work from
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="2013"
              />
            </div>
            <div>
              <Text mt={2} fontSize="xs" color="#888888">
                Until
              </Text>
              <Input
                mt={2}
                color="#808080"
                width="100%"
                size="sm"
                placeholder="Now"
              />
            </div>
          </Grid>
          <div className="public-profile-button">
            <Button
              variant="secondary"
              size="md"
              color="#808080"
              bg="#fcfcfc"
              startIcon="plus"
            >
              Add to the list
            </Button>
          </div>
        </PublicProfileBox5>
        <PublicProfileBox6>
          <PublicProfileContainer>
            <PublicProfileBoxl>
              <ProfileImgbox>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
                  size={12}
                />
              </ProfileImgbox>
              <ProfileProjectTextbox>
                <Text fontSize="md" color="#888888">
                  Patricia Lee
                </Text>
                <Text fontSize="xs" color="#888888">
                  patricialee@studio.com
                </Text>
              </ProfileProjectTextbox>
            </PublicProfileBoxl>

            <PublicProfileBoxr>
              <MemberTag>
                <Text fontSize="xs" color="#ffffff">
                  Front-end
                </Text>
              </MemberTag>
              <Icon color="#888888" size={4} name="more-horizontal" />
            </PublicProfileBoxr>
          </PublicProfileContainer>
          <PublicProfileContainer>
            <PublicProfileBoxl>
              <ProfileImgbox>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
                  size={12}
                />
              </ProfileImgbox>
              <ProfileProjectTextbox>
                <Text fontSize="md" color="#888888">
                  Patricia Lee
                </Text>
                <Text fontSize="xs" color="#888888">
                  patricialee@studio.com
                </Text>
              </ProfileProjectTextbox>
            </PublicProfileBoxl>

            <PublicProfileBoxr>
              <MemberTag>
                <Text fontSize="xs" color="#ffffff">
                  UX designer
                </Text>
              </MemberTag>
              <Icon color="#888888" size={4} name="more-horizontal" />
            </PublicProfileBoxr>
          </PublicProfileContainer>
          <PublicProfileContainer>
            <PublicProfileBoxl>
              <ProfileImgbox>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
                  size={12}
                />
              </ProfileImgbox>
              <ProfileProjectTextbox>
                <Text fontSize="md" color="#888888">
                  Patricia Lee
                </Text>
                <Text fontSize="xs" color="#888888">
                  patricialee@studio.com
                </Text>
              </ProfileProjectTextbox>
            </PublicProfileBoxl>

            <PublicProfileBoxr>
              <MemberTag>
                <Text fontSize="xs" color="#ffffff">
                  Front-end
                </Text>
              </MemberTag>
              <Icon color="#888888" size={4} name="more-horizontal" />
            </PublicProfileBoxr>
          </PublicProfileContainer>
        </PublicProfileBox6>
      </>
    );
  }

  return (
    <>
      <MainSection>
        <MainSectionNav>
          <MainSectionNav1>
            <Text color="#4D4D4D">PROJECT INFORMATION</Text>
          </MainSectionNav1>
          <MainSectionNav3>
            <Button
              mr={1}
              variant="secondary"
              size="md"
              color="#808080"
              bg="#fcfcfc"
              onClick={() => setLeftAnimate1('translate(0px,0px)')}
            >
              Project Setting
            </Button>
            <Divider orientation="vertical" />
            <Button size="md" startIcon="plus">
              New Branch
            </Button>
          </MainSectionNav3>
        </MainSectionNav>

        <TabMainSectionNav>
          <TabMainSectionNav1>
            <Text color="#4D4D4D">PROJECT INFORMATION</Text>
          </TabMainSectionNav1>
          <TabMainSectionNav3>
            <Button
              mr={1}
              variant="secondary"
              size="sm"
              color="#808080"
              bg="#fcfcfc"
              onClick={() => setLeftAnimate1('translate(0px,0px)')}
            >
              Project Setting
            </Button>
            <Divider orientation="vertical" />
            <Button mr={1} size="sm" startIcon="plus">
              New Branch
            </Button>
          </TabMainSectionNav3>
        </TabMainSectionNav>

        <AboveMobHidden>
          <MobileMenuOne page="project" title="projects" />
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

      <MainContainer firstcont={LeftAnimate1}>
        <PulicProfileBox1>
          <Flex>
            <Avatar
              src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
              size={8}
            />
            <Text mt={1} pl={2} color="#4D4D4D">
              ACCOUNT SETTINGS
            </Text>
          </Flex>
          <RightIcon
            onClick={() => {
              setLeftAnimate1('translate(480px,10px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
              setactive('');
            }}
          >
            <Icon color="#808080" size={6} name="chevron-right" />
          </RightIcon>
        </PulicProfileBox1>

        <SettingsIcon_Box>
          <SettingsIcon
            onClick={() => {
              setactive('publicprofile');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(0px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'publicprofile'}
          >
            <Icon
              mt={2}
              color={active === 'publicprofile' ? '#05A2FF' : '#888888'}
              size={10}
              name="public-profile"
            />
            <Text
              fontSize="sm"
              color={active === 'publicprofile' ? '#05A2FF' : '#888888'}
            >
              Public Profile
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('password');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(0px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'password'}
          >
            <Icon
              mt={2}
              color={active === 'password' ? '#05A2FF' : '#888888'}
              size={10}
              name="password"
            />
            <Text
              fontSize="sm"
              color={active === 'password' ? '#05A2FF' : '#888888'}
            >
              Password
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('contact');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(0px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'contact'}
          >
            <Icon
              mt={2}
              color={active === 'contact' ? '#05A2FF' : '#888888'}
              size={10}
              name="contact-info"
            />
            <Text
              fontSize="sm"
              color={active === 'contact' ? '#05A2FF' : '#888888'}
            >
              Contact Info
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('notifications');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(0px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'notifications'}
          >
            <Icon
              mt={2}
              color={active === 'notifications' ? '#05A2FF' : '#888888'}
              size={10}
              name="notifications"
            />
            <Text
              fontSize="sm"
              color={active === 'notifications' ? '#05A2FF' : '#888888'}
            >
              Notifications
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('billings');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(0px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'billings'}
          >
            <Icon
              mt={2}
              color={active === 'billings' ? '#05A2FF' : '#888888'}
              size={10}
              name="billings"
            />
            <Text
              fontSize="sm"
              color={active === 'billings' ? '#05A2FF' : '#888888'}
            >
              Billing
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('security');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(0px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'security'}
          >
            <Icon
              mt={2}
              color={active === 'security' ? '#05A2FF' : '#888888'}
              size={10}
              name="security"
            />
            <Text
              fontSize="sm"
              color={active === 'security' ? '#05A2FF' : '#888888'}
            >
              Security
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('session');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(0px)');
              setLeftAnimate9('translateX(480px)');
            }}
            active={active === 'session'}
          >
            <Icon
              mt={2}
              color={active === 'session' ? '#05A2FF' : '#888888'}
              size={10}
              name="session"
            />
            <Text
              fontSize="sm"
              color={active === 'session' ? '#05A2FF' : '#888888'}
            >
              Session
            </Text>
          </SettingsIcon>

          <SettingsIcon
            onClick={() => {
              setactive('blocked');
              setLeftAnimate1('translateX(-460px)');
              setLeftAnimate2('translateX(480px)');
              setLeftAnimate3('translateX(480px)');
              setLeftAnimate4('translateX(480px)');
              setLeftAnimate5('translateX(480px)');
              setLeftAnimate6('translateX(480px)');
              setLeftAnimate7('translateX(480px)');
              setLeftAnimate8('translateX(480px)');
              setLeftAnimate9('translateX(0px)');
            }}
            active={active === 'blocked'}
          >
            <Icon
              mt={2}
              color={active === 'blocked' ? '#05A2FF' : '#888888'}
              size={10}
              name="blocked-users"
            />
            <Text
              fontSize="sm"
              color={active === 'blocked' ? '#05A2FF' : '#888888'}
            >
              Blocked Users
            </Text>
          </SettingsIcon>
        </SettingsIcon_Box>
      </MainContainer>

      {links.map(link => {
        const {
          button,
          title,
          data,
          left,
          setactive,
          setLeftAnimate,
          setLeftAnimateMain
        } = link;

        return (
          <Card
            button={button}
            title={title}
            data={data}
            left={left}
            setactive={setactive}
            setLeftAnimate={setLeftAnimate}
            setLeftAnimateMain={setLeftAnimateMain}
          />
        );
      })}
    </>
  );
};
