import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading, Grid, Avatar } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const scale = keyframes`
 from {
    transform: scale(0.5);
    opacity: 0;
  }
 to {
    transform: scale(1);
    opacity: 1;
  }
`;

const scaleDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const ScaleBox = styled(scaleDiv)`
  transform-style: preserve-3d;
  animation-name: ${scale};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const TeamSection3 = ({ majorText, description, members }) => {
  return (
    <Box py={20}>
      <NavBarWidthWrapper>
        <Heading as="h1" textAlign="center" mb={4}>
          {majorText}
        </Heading>
        <Text
          fontSize="lg"
          textAlign="center"
          letterSpacing="wide"
          lineHeight="short"
          color="blue.600"
          mb={12}
        >
          {description}
        </Text>
        <Grid
          templateColumns={{
            _: 'repeat(auto-fit, minmax(150px, 1fr))',
            md: 'repeat(auto-fit, minmax(190px, 1fr))'
          }}
          columnGap={8}
          rowGap={12}
          style={{ perspective: '1000px' }}
        >
          {members.map(({ id, author, authorImage, designation }) => {
            return (
              <ScaleBox timeout={id * 200}>
                <Flex justifyContent="center" mb={3}>
                  <Avatar size={24} src={authorImage} />
                </Flex>
                <Text color="blue.900" fontSize="sm" textAlign="center" mb={1}>
                  {author}
                </Text>
                <Text
                  color="palette.primary.base"
                  fontSize="sm"
                  textAlign="center"
                >
                  {designation}
                </Text>
              </ScaleBox>
            );
          })}
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
