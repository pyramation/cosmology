import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Icon, Heading } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const slide = keyframes`
 from {
    transform: translateX(150px) translateZ(-230px) rotateY(-90deg);
    transform-origin: center right;
    opacity: 0;
  }
 to {
    transform: translateX(0) translateZ(0) rotateY(0);
    transform-origin: center right;
    opacity: 1;
  }
`;

const slideDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SlideBox = styled(slideDiv)`
  transform-style: preserve-3d;
  animation-name: ${slide};
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const LogoCloud3 = ({ majorText, brands }) => {
  return (
    <Box backgroundColor="blue.100">
      <NavBarWidthWrapper py={24}>
        <Flex
          justifyContent={{ _: 'center', lg: 'space-between' }}
          alignItems="center"
          flexDirection={{ _: 'column', lg: 'row' }}
          style={{ perspective: '1000px' }}
          overflow="hidden"
        >
          <Box maxWidth="xl" mb={{ _: 10, lg: 0 }} mr={{ lg: 8 }}>
            <Heading as="h1" textAlign={{ _: 'center', lg: 'start' }}>
              {majorText}
            </Heading>
          </Box>
          {brands.map(({ id, logo, name }) => {
            const last = brands.length;
            return (
              <SlideBox timeout={id * 400}>
                <Flex
                  alignItems="center"
                  pr={last === id ? 0 : 6}
                  mb={{ _: 8, lg: 0 }}
                >
                  <Icon name={logo} size={10} color="blue.800" mr={4} />
                  <Text fontSize="2xl" fontWeight="semibold" color="blue.800">
                    {name}
                  </Text>
                </Flex>
              </SlideBox>
            );
          })}
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
