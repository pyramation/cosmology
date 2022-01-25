import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text, Box, Heading, Grid, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const scale = keyframes`
 from {
    transform: scaleX(0.4);
    opacity: 0;
  }
 to {
    transform: scaleX(1);
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

export const Faq5 = ({ majorText, questions, brandColor }) => {
  return (
    <Box px={4} py={24} backgroundColor={brandColor}>
      <NavBarWidthWrapper>
        <Heading as="h1" color="white" mb={6}>
          {majorText}
        </Heading>
        <Divider />
        <Grid
          templateColumns={{ _: 'none', md: '1fr 1fr' }}
          rowGap={4}
          columnGap={{ md: 8 }}
          mt={8}
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
