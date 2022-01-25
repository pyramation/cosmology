import React from 'react';
import {
  Avatar,
  Icon,
  Flex,
  Grid,
  Text,
  Input,
  Textarea,
  Button
} from '@webql/core';
import {
  PublicProfileFormContainer,
  RightIcon,
  PulicProfileBox1,
  PublicProfileBox2,
  PublicProfileBox3,
  PublicProfileBox4,
  PublicProfileBox5,
  PublicProfileButton,
  PublicProfileBox6,
  PublicProfileContainer,
  PublicProfileBoxl,
  PublicProfileBoxr,
  ProfileProjectTextbox,
  MemberTag,
  ProfileImgbox
} from './styled';

export const PublicProfileForm = () => {
  return (
    <PublicProfileFormContainer>
      <PulicProfileBox1>
        <Flex>
          <Avatar
            src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
            size={8}
          />
          <Text mt={1} pl={2} color="#4D4D4D">
            PUBLIC PROFILE
          </Text>
        </Flex>
        <RightIcon>
          <Icon color="#808080" size={6} name="chevron-right" />
        </RightIcon>
      </PulicProfileBox1>
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
        <PublicProfileButton>
          <Button
            variant="secondary"
            size="md"
            color="#808080"
            bg="#fcfcfc"
            startIcon="plus"
          >
            Add to the list
          </Button>
        </PublicProfileButton>
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
    </PublicProfileFormContainer>
  );
};
