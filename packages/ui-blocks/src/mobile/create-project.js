import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Textarea, Text, Button, Input, Divider } from '@webql/core';
import {
  CreateProjectContainer,
  CreateProjectTop,
  CreateProjectMid,
  CreateProjectBot,
  MobBotNav1
} from './styled';

export const CreateProject = () => {
  const [TopDownAnimate, setTopDownAnimate] = useState(false);
  return (
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
  );
};
