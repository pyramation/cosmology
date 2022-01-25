import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Textarea,
  Text,
  Avatar,
  Box,
  Button,
  Input,
  Flex,
  Divider
} from '@webql/core';
import {
  CreateProjectContainer,
  CreateProjectTop,
  CreateProjectMid,
  CreateProjectBot,
  DownloadButton,
  ItemsInfoBot
} from './styled';

export const ItemsInfo = () => {
  const [TopDownAnimate, setTopDownAnimate] = useState(false);
  return (
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
          ITEM INFO
        </Text>
      </CreateProjectTop>

      <CreateProjectMid>
        <Text fontSize="xs" color="#888888">
          File Name
        </Text>
        <Text mt={2} fontSize="md" color="#888888">
          Header Image 01
          <Text mt={4} fontSize="xs" color="#888888">
            Type / Size
          </Text>
        </Text>
        <Text mt={2} fontSize="md" color="#888888">
          JPG / 10.5 MB
        </Text>

        <Text mt={4} fontSize="xs" color="#888888">
          Uploaded on
        </Text>
        <Text mt={2} fontSize="md" color="#888888">
          3/26/18, 5:10 AM
        </Text>

        <Text mt={4} fontSize="xs" color="#888888">
          Last Modified on
        </Text>
        <Text mt={2} fontSize="md" color="#888888">
          3/27/19, 5:10 PM
        </Text>
      </CreateProjectMid>

      <ItemsInfoBot>
        <DownloadButton>
          <Icon color="#888888" size={4} name="download" />
          <span style={{ marginLeft: '65px' }}>Download Selected Files</span>
        </DownloadButton>

        <Icon ml={2} color="#888888" size={5} name="trashbin" />
      </ItemsInfoBot>
    </CreateProjectContainer>
  );
};
