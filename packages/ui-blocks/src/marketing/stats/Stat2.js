import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const flip = keyframes`
 0% {
    transform: rotateX(135deg);
    opacity: 0;
  }
 50% {
    transform: rotateX(90deg);
    opacity: 0.5;
 }
 70% {
    transform: rotateX(-90deg);
    opacity: 0.7;
 }
 90% {
    transform: rotateX(45deg);
    opacity: 0.9;
 }
 100% {
    transform: rotateX(0);
    opacity: 1;
  }
`;

const flipDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const FlipBox = styled(flipDiv)`
  animation-name: ${flip};
  animation-timing-function: ease-in;
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const Stat2 = ({ majorText, minorText, stats }) => {
  return (
    <Box backgroundColor="palette.primary.base">
      <Box py={24}>
        <NavBarWidthWrapper>
          <Heading as="h1" fontSize="4xl" textAlign="center" color="white">
            {majorText}
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="whiteAlpha.800"
            letterSpacing="wide"
            mt={3}
          >
            {minorText}
          </Text>

          <Flex
            flexDirection={{ _: 'column', md: 'row' }}
            justifyContent="center"
          >
            {stats.map(({ id, title, desc }) => {
              return (
                <FlipBox timeout={id * 400}>
                  <Box py={{ _: 10, md: 12 }} px={{ _: 6, md: 24 }}>
                    <Heading as="h1" textAlign="center" color="white">
                      {title}
                    </Heading>
                    <Text
                      fontSize="lg"
                      color="whiteAlpha.800"
                      textAlign="center"
                      mt={4}
                    >
                      {desc}
                    </Text>
                  </Box>
                </FlipBox>
              );
            })}
          </Flex>
        </NavBarWidthWrapper>
      </Box>
    </Box>
  );
};
