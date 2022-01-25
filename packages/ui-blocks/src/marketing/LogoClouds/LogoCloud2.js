import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Icon, Grid, Heading } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const rotate = keyframes`
 from {
    transform: rotate(-90deg);
    transform-origin: top;
  }
 to {
    transform: rotate(0);
    transform-origin: top;
  }
`;

const rotateDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const RotateBox = styled(rotateDiv)`
  animation-name: ${rotate};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const LogoCloud2 = ({ majorText, brands }) => {
  return (
    <Box backgroundColor="palette.primary.base">
      <NavBarWidthWrapper py={24}>
        <Heading as="h1" color="white" mb={8}>
          {majorText}
        </Heading>
        <Grid
          templateColumns={{
            _: '1fr',
            md: '1fr 1fr 1fr',
            lg: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}
          columnGap={4}
          rowGap={6}
        >
          {brands.map(({ id, logo, name }) => {
            return (
              <RotateBox timeout={id * 400}>
                <Flex minWidth={56} alignItems="center" py={4}>
                  <Icon name={logo} size={12} color="whiteAlpha.700" mr={4} />
                  <Text fontSize="3xl" color="whiteAlpha.700">
                    {name}
                  </Text>
                </Flex>
              </RotateBox>
            );
          })}
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
