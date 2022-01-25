import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text, Box, Heading, Grid, Flex } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const scale = keyframes`
 from {
    transform: scaleX(0.4);
    transform-origin: 0% 0%;
    opacity: 0;
  }
 to {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
`;

const scaleDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const ScaleBox = styled(scaleDiv)`
  animation-name: ${scale};
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const Faq8 = ({ majorText, minorText, brandColor, questions }) => {
  return (
    <Box px={4} py={24} backgroundColor={brandColor}>
      <NavBarWidthWrapper>
        <Heading textAlign="center" color="white">
          {majorText}
        </Heading>
        <Flex justifyContent="center" mt={6}>
          <Box maxWidth="4xl">
            <Text
              textAlign="center"
              color="whiteAlpha.800"
              letterSpacing="wide"
              lineHeight="shorter"
            >
              {minorText}
            </Text>
          </Box>
        </Flex>
        <Grid
          templateColumns={{ _: 'none', md: '1fr 1fr' }}
          rowGap={6}
          columnGap={{ md: 8, lg: 12 }}
          mt={16}
        >
          {questions.map(({ id, question, answer }) => {
            return (
              <ScaleBox timeout={id * 400}>
                <Box mb={4}>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    letterSpacing="wide"
                    lineHeight="shorter"
                    mb={2}
                  >
                    {question}
                  </Text>
                  <Text
                    color="whiteAlpha.800"
                    letterSpacing="wide"
                    lineHeight="shorter"
                  >
                    {answer}
                  </Text>
                </Box>
              </ScaleBox>
            );
          })}
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
