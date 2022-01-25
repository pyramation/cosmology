import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Icon, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const swing = keyframes`
 0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
 50% {
    transform: rotateX(-45deg);
    opacity: 0.5;
 }
 70% {
    transform: rotateX(15deg);
    opacity: 0.7;
 }
 90% {
    transform: rotateX(45deg);
    opacity: 0.9;
 }
 100% {
    transform: rotateX(0);
    opacity: 1;
  }
`;

const swingDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SwingBox = styled(swingDiv)`
  animation-name: ${swing};
  animation-timing-function: ease-in;
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const LogoCloud1 = ({ majorText, brands }) => {
  return (
    <NavBarWidthWrapper py={24}>
      <Text
        color="blue.900"
        textAlign="center"
        fontSize="xl"
        fontWeight="semibold"
        letterSpacing="wide"
        mb={12}
      >
        {majorText}
      </Text>
      <Grid
        templateColumns={{
          _: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr'
        }}
        columnGap={1}
        rowGap={1}
      >
        {brands.map(({ id, logo, name }) => {
          return (
            <SwingBox timeout={id * 400}>
              <Flex
                justifyContent="center"
                alignItems="center"
                backgroundColor="blue.100"
                py={12}
              >
                <Icon name={logo} size={16} color="blue.700" mr={4} />
                <Text fontSize="4xl" color="blue.700">
                  {name}
                </Text>
              </Flex>
            </SwingBox>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
