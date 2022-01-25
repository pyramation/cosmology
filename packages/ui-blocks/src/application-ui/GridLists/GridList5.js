import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Text, Box, Grid, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const styledDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const HoverBox = styled(styledDiv)`
  z-index: ${({ hover, hoverId, id }) => (hover && hoverId === id ? 20 : 0)};
  cursor: ${({ hover, hoverId, id }) =>
    hover && hoverId === id ? 'pointer' : 'default'};
  border: '1px solid';
  transform: ${({ hover, hoverId, id }) =>
    hover && hoverId === id
      ? 'translateY(-20px) translateX(20px)'
      : 'translateY(0) translateX(0)'};
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: linear;
`;

export const GridList5 = ({ items }) => {
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <NavBarWidthWrapper py={10}>
      <Box
        boxShadow="0 0 3px 0px rgba(0, 0, 0, 0.20)"
        borderRadius="md"
        backgroundColor="gray.100"
      >
        <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }} gap="2px">
          {items.map(({ id, icon, color, title, desc }) => {
            return (
              <HoverBox hover={hover} hoverId={hoverId} id={id}>
                <Flex
                  borderRadius="md"
                  backgroundColor="white"
                  height="full"
                  p={6}
                  onMouseEnter={() => {
                    setHover(true);
                    setHoverId(id);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                    setHoverId(null);
                  }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="md"
                      backgroundColor={`${color}.200`}
                      width={12}
                      height={12}
                      mb={8}
                    >
                      <Icon name={icon} color={`${color}.700`} />
                    </Flex>
                    <Text fontWeight="medium" color="blue.800" mb={2}>
                      {title}
                    </Text>
                    <Text
                      color="blue.600"
                      letterSpacing="wide"
                      lineHeight="shorter"
                    >
                      {desc}
                    </Text>
                  </Box>
                  <Icon name="arrow-up-right" color="gray.400" size={8} />
                </Flex>
              </HoverBox>
            );
          })}
        </Grid>
      </Box>
    </NavBarWidthWrapper>
  );
};
