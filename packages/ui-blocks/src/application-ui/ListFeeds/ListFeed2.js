import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Divider, Avatar } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const swing = keyframes`
 from {
    transform: rotateX(-180deg);
    transform-origin: top;
    opacity: 0;
  }
 to {
    transform: rotateX(0);
    transform-origin: top;
    opacity: 1;
  }
`;

const swingDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SwingBox = styled(swingDiv)`
  transform-style: preserve-3d;
  animation-name: ${swing};
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const ListFeed2 = ({ avatars }) => {
  return (
    <NavBarWidthWrapper py={8}>
      <Flex justifyContent="center">
        <Box>
          {avatars.map(({ id, author, authorImage, desc, time }) => {
            const last = avatars.length;
            return (
              <SwingBox timeout={id * 400}>
                <Flex p={4} justifyContent="space-between">
                  <Flex>
                    <Avatar src={authorImage} size={8} minWidth={8} mr={4} />
                    <Box pr={6}>
                      <Text color="blue.900" mb={2}>
                        {author}
                      </Text>
                      <Text color="blue.600">{desc}</Text>
                    </Box>
                  </Flex>
                  <Text color="blue.500">{time}</Text>
                </Flex>
                {last !== id && <Divider my={0} />}
              </SwingBox>
            );
          })}
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
