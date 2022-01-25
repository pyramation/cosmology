import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const flip = keyframes`
 from {
    transform: rotateX(-180deg);
    opacity: 0;
  }
 to {
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
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const Faq3 = ({ majorText, questions }) => {
  return (
    <Box px={4} py={24}>
      <NavBarWidthWrapper>
        <Heading as="h1" textAlign={{ _: 'center', md: 'start' }} mb={6}>
          {majorText}
        </Heading>
        <Divider />
        {questions.map(({ id, question, answer }) => {
          return (
            <FlipBox timeout={id * 400}>
              <Flex
                alignItems="center"
                flexDirection={{ _: 'column', md: 'row' }}
                py={6}
              >
                <Box
                  minWidth={{ md: 'md', lg: 'xl' }}
                  mb={{ _: 4, md: 0 }}
                  pr={{ md: 4 }}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="medium"
                    letterSpacing="wide"
                    color="blue.900"
                    textAlign={{ _: 'center', md: 'start' }}
                  >
                    {question}
                  </Text>
                </Box>
                <Box maxWidth={{ md: '4xl' }}>
                  <Text
                    color="blue.600"
                    letterSpacing="wide"
                    lineHeight="short"
                    textAlign={{ _: 'center', md: 'start' }}
                  >
                    {answer}
                  </Text>
                </Box>
              </Flex>
              <Divider />
            </FlipBox>
          );
        })}
      </NavBarWidthWrapper>
    </Box>
  );
};
