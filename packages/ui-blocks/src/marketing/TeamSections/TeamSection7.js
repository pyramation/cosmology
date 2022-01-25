import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading, Image, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const slide = keyframes`
 from {
    transform: translateZ(160px);
  }
 to {
    transform: translateZ(0);
  }
`;

const slideDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SlideBox = styled(slideDiv)`
  transform-style: preserve-3d;
  animation-name: ${slide};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const TeamSection7 = ({ displayValue, majorText, members }) => {
  return (
    <NavBarWidthWrapper py={{ _: 16, md: 24 }}>
      <Heading as="h1" mb={10}>
        {majorText}
      </Heading>
      <Grid
        templateColumns={{
          _: '1fr',
          md: '1fr 1fr'
        }}
        columnGap={{ md: 8, lg: 16 }}
        rowGap={12}
        style={{ perspective: '1000px' }}
      >
        {members.map(
          ({ id, author, authorImage, designation, description }) => {
            return (
              <SlideBox timeout={id * 400}>
                <Flex flexDirection={displayValue}>
                  <Box
                    mb={displayValue === 'column' ? 4 : 0}
                    mr={{ _: 4, md: 6, lg: 8 }}
                  >
                    <Flex
                      justifyContent="center"
                      width="full"
                      maxWidth={64}
                      minWidth={32}
                      borderRadius="md"
                      overflow="hidden"
                    >
                      <Image src={authorImage} width="full" />
                    </Flex>
                  </Box>
                  <Box maxWidth="md">
                    <Text color="blue.900" mb={2}>
                      {author}
                    </Text>
                    <Text color="palette.primary.base" mb={4}>
                      {designation}
                    </Text>
                    <Text
                      color="blue.600"
                      lineHeight="short"
                      letterSpacing="wide"
                    >
                      {description}
                    </Text>
                  </Box>
                </Flex>
              </SlideBox>
            );
          }
        )}
      </Grid>
    </NavBarWidthWrapper>
  );
};
