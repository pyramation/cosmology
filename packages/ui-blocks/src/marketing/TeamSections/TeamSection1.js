import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading, Avatar } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const slide = keyframes`
 from {
    transform: translateZ(-600px)  rotateX(-120deg);
    opacity: 0;
  }
 to {
    transform: translateZ(0px)  rotateX(0deg);
    opacity: 1;
  }
`;

const slideDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SlideBox = styled(slideDiv)`
  transform-style: preserve-3d;
  animation-name: ${slide};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const TeamSection1 = ({ majorText, description, members }) => {
  return (
    <NavBarWidthWrapper>
      <Flex
        py={24}
        justifyContent="center"
        flexDirection={{
          _: 'column',
          md: 'row'
        }}
        flexWrap="wrap"
      >
        <Box maxWidth="xl" pr={{ lg: 12 }} mb={{ _: 6, md: 8 }}>
          <Heading as="h1" mb={4}>
            {majorText}
          </Heading>
          <Text
            fontSize="lg"
            color="blue.600"
            lineHeight="short"
            letterSpacing="wide"
          >
            {description}
          </Text>
        </Box>
        <Flex
          maxWidth="xl"
          flexWrap="wrap"
          justifyContent="space-between"
          style={{ perspective: '1000px' }}
        >
          {members.map(({ id, author, authorImage, designation }) => {
            return (
              <SlideBox timeout={id * 600}>
                <Flex width={64} alignItems="center" mb={4}>
                  <Avatar size={20} minWidth={20} src={authorImage} mr={4} />
                  <Box>
                    <Text color="blue.900" mb={2}>
                      {author}
                    </Text>
                    <Text color="palette.primary.base">{designation}</Text>
                  </Box>
                </Flex>
              </SlideBox>
            );
          })}
        </Flex>
      </Flex>
    </NavBarWidthWrapper>
  );
};
