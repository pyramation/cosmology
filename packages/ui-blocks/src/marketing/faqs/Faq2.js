import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Link, Heading, Box, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const fadeIn = keyframes`
 from {
    transform: translateY(-50%);
    opacity: 0;
  }
 to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const FadeBox = styled(fadeDiv)`
  animation-name: ${fadeIn};
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const Faq2 = ({ majorText, desc1, desc2, link, icon, questions }) => {
  return (
    <Box py={24}>
      <NavBarWidthWrapper>
        <Flex
          px={{ _: 4 }}
          justifyContent="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Box maxWidth="4xl" mr={{ md: 8 }} mb={{ _: 8, md: 0 }}>
            <FadeBox timeout={600}>
              <Heading
                as="h1"
                mb={{ _: 4, md: 6 }}
                textAlign={{ _: 'center', md: 'start' }}
              >
                {majorText}
              </Heading>
              <Text
                color="gray.600"
                lineHeight="base"
                textAlign={{ _: 'center', md: 'start' }}
              >
                {desc1}{' '}
                <Link href={link.href} color>
                  {link.text}
                </Link>{' '}
                {desc2}
              </Text>
            </FadeBox>
          </Box>
          <Box>
            {questions.map(({ id, question, answer }) => {
              return (
                <FadeBox timeout={id * 600}>
                  <Box pb={6}>
                    <Flex alignItems="center" pb={2}>
                      <Icon name={icon} size={5} mr={3} />
                      <Text
                        fontSize="lg"
                        fontWeight="medium"
                        letterSpacing="wide"
                        color="blue.900"
                      >
                        {question}
                      </Text>
                    </Flex>
                    <Text
                      color="blue.600"
                      letterSpacing="wide"
                      lineHeight="base"
                      px={8}
                    >
                      {answer}
                    </Text>
                  </Box>
                </FadeBox>
              );
            })}
          </Box>
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
