import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text, Box, Heading, Grid, Link } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const scale = keyframes`
 from {
  transform: translateY(-100px);
    opacity: 0;
  }
 to {
  transform: translateY(0);
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

export const Faq9 = ({ majorText, desc1, desc2, questions, link }) => {
  return (
    <Box px={4} py={16}>
      <NavBarWidthWrapper>
        <Heading color="blackAlpha.800" mb={3}>
          {majorText}
        </Heading>
        <Box maxWidth="4xl">
          <Text color="blackAlpha.700" letterSpacing="wide" lineHeight="short">
            {desc1}{' '}
            <Link href={link.href} color>
              {link.text}
            </Link>{' '}
            {desc2}
          </Text>
        </Box>
        <Grid
          templateColumns={{ _: 'none', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
          gap={{ _: 6, md: 8, lg: 12 }}
          mt={16}
        >
          {questions.map(({ id, question, answer }) => {
            return (
              <ScaleBox timeout={id * 400}>
                <Box mb={4}>
                  <Text
                    fontWeight="semibold"
                    color="blackAlpha.900"
                    letterSpacing="wide"
                    lineHeight="shorter"
                    mb={4}
                  >
                    {question}
                  </Text>
                  <Text
                    color="blackAlpha.700"
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
