import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const flip = keyframes`
 from {
    transform: rotateY(-180deg);
    opacity: 0;
  }
 to {
    transform: rotateY(0deg);
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

export const Stat1 = ({ majorText, minorText, stats }) => {
  return (
    <Box>
      <Box pt={32} pb={32} backgroundColor="gray.50" px={6}>
        <Heading as="h1" fontSize="4xl" textAlign="center">
          {majorText}
        </Heading>
        <Text
          fontSize="lg"
          textAlign="center"
          color="blue.600"
          letterSpacing="wide"
          mt={3}
        >
          {minorText}
        </Text>
      </Box>
      <NavBarWidthWrapper>
        <FlipBox timeout={400}>
          <Box px={{ _: 8, lg: 0 }}>
            <Flex
              flexDirection={{ _: 'column', md: 'row' }}
              position="relative"
              backgroundColor="white"
              boxShadow="0 10px 15px -3px rgb(0 0 0 / 10%)"
              borderRadius="md"
              top="-5rem"
            >
              {stats.map(({ id, title, desc }) => {
                return (
                  <Flex
                    flexGrow={1}
                    justifyContent="center"
                    borderRight={{ md: id === 2 && '1px solid #EDF2F7' }}
                    borderLeft={{ md: id === 2 && '1px solid #EDF2F7' }}
                    borderTop={{
                      _: id === 2 && '1px solid #EDF2F7',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: id === 2 && '1px solid #EDF2F7',
                      md: 'none'
                    }}
                    py={{ _: 10, md: 12 }}
                    px={{ _: 6, lg: 0 }}
                  >
                    <Box px={4}>
                      <Heading as="h1" textAlign="center">
                        {title}
                      </Heading>
                      <Text
                        fontSize="lg"
                        color="blue.600"
                        textAlign="center"
                        mt={4}
                      >
                        {desc}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </FlipBox>
      </NavBarWidthWrapper>
    </Box>
  );
};
