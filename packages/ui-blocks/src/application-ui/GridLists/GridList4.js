import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Grid, Avatar } from '@webql/core';
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
  transform-style: preserve-3d;
  animation-name: ${flip};
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const GridList4 = ({ avatars }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }} gap={6}>
        {avatars.map(({ id, author, authorImage, desc }) => {
          return (
            <FlipBox timeout={id * 400}>
              <Flex
                border="1px solid"
                borderColor="gray.100"
                borderRadius="md"
                alignItems="center"
                p={4}
              >
                <Avatar src={authorImage} size={12} minWidth={12} mr={4} />
                <Box>
                  <Text color="blue.900" mb={2}>
                    {author}
                  </Text>
                  <Text color="blue.600">{desc}</Text>
                </Box>
              </Flex>
            </FlipBox>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
