import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Grid, Image } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const scale = keyframes`
 from {
    transform: scale(0.3);
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
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const GridList6 = ({ images }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
        gap={8}
      >
        {images.map(({ id, imageUrl, title, size }) => {
          return (
            <ScaleBox timeout={id * 400}>
              <Flex
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                overflow="hidden"
                mb={2}
              >
                <Image src={imageUrl} width="full" />
              </Flex>
              <Text color="blue.900" mb={2}>
                {title}
              </Text>
              <Text color="blue.600">{size}</Text>
            </ScaleBox>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
