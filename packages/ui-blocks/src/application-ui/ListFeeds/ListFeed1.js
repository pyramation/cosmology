import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const flip = keyframes`
 from {
    transform: translateY(100%) rotateX(-180deg);
    transform-origin: 50% 0%;
    opacity: 0;
  }
 to {
    transform: translateY(0) rotateX(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
`;

const flipDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const FlipBox = styled(flipDiv)`
  transform-style: preserve-3d;
  animation-name: ${flip};
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const ListFeed1 = ({ lists }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex justifyContent="center">
        <Box maxWidth={{ md: '2xl' }}>
          {lists.map(({ id, status, textA, textB, date }) => {
            const last = lists.length;
            return (
              <FlipBox timeout={id * 400}>
                <Flex mb={3} justifyContent="space-between" alignItems="center">
                  <Flex alignItems="center" pr={6} flexGrow={1}>
                    <Flex
                      minWidth={16}
                      minHeight={16}
                      justifyContent="center"
                      alignItems="center"
                      backgroundColor={`palette.${status.color}.base`}
                      borderRadius="50%"
                      mr={4}
                    >
                      <Icon name={status.icon} color="white" />
                    </Flex>
                    <Text as="span" color="blue.600">
                      {textA}{' '}
                      <Text as="span" color="blue.900">
                        {textB}
                      </Text>
                    </Text>
                  </Flex>
                  <Text color="blue.600">{date}</Text>
                </Flex>
                {last !== id && (
                  <Box
                    borderRight="2px solid"
                    borderColor="gray.400"
                    mb={3}
                    ml={4}
                    width={4}
                    height={8}
                  ></Box>
                )}
              </FlipBox>
            );
          })}
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
