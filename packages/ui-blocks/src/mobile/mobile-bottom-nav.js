import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Text,
  Avatar,
  Box,
  Button,
  Input,
  Flex,
  Divider
} from '@webql/core';
import { MobBotNav1, MobBotNav2 } from './styled';

export const MobileBottomNav = ({ type }) => {
  if (type === 'bot-nav1') {
    return (
      <MobBotNav1>
        <Button variant="primary" size="md" midIcon="plus"></Button>
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
  } else if (type === 'bot-nav2') {
    return (
      <MobBotNav2>
        <Input
          width="100%"
          color="#888888"
          size="md"
          type="text"
          placeholder="Search"
          endElement={<Icon color="#888888" size={6} name="search" />}
        />
      </MobBotNav2>
    );
  }
};
