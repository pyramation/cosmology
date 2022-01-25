import React from 'react';
import { Box, List, ListItem, Icon, Text } from '@webql/core';
import styled from 'styled-components';

const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 80vh;
  justify-content: flex-start;
  overflow: hidden;
`;

const FullLengthList = styled(List)`
  padding-bottom: 600px;
  overflow-y: hidden;
`;

const defaultLogo = <Icon mr={6} size={12} name="github" />;

export const SidebarSimple = ({
  links = [],
  title = 'Title',
  logo = defaultLogo
} = {}) => {
  return (
    <ContainerBox backgroundColor="gray.100">
      <FullLengthList>
        <ListItem color="purple.600" fontWeight="medium" heading>
          {logo}
          <a>
            <Text fontSize="2xl">{title}</Text>
          </a>
        </ListItem>
        {links.map(link => (
          <ListItem
            selected={link.selected}
            color="gray.600"
            fontWeight="medium"
          >
            <a href={link.href}>
              <Icon mr={3} size={4} name={link.icon} />
            </a>
            {link.text}
          </ListItem>
        ))}
      </FullLengthList>
    </ContainerBox>
  );
};
