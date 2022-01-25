import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Flex,
  Text,
  Box,
  Icon,
  Grid,
  Heading,
  Link,
  Button
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const swing = keyframes`
  from {
    transform: translateX(-30px) translateY(-50px) rotate3d(-1, 1, 0, -180deg);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(0) rotate3d(-1, 1, 0, 0deg);
    transform-origin: 0% 0%;
    opacity: 1;
 }
`;

const swingDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SwingBox = styled(swingDiv)`
  transform-style: preserve-3d;
  animation-name: ${swing};
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const LogoCloud5 = ({ majorText, description, links, brands }) => {
  return (
    <NavBarWidthWrapper py={24}>
      <Flex flexDirection={{ _: 'column', lg: 'row' }}>
        <Box maxWidth={{ lg: 'xl' }} mr={{ lg: 12 }} mb={{ _: 10, lg: 0 }}>
          <Heading as="h1" mb={4}>
            {majorText}
          </Heading>
          <Text fontSize="lg" letterSpacing="wide" color="blue.600" mb={6}>
            {description}
          </Text>
          <Flex>
            {links.map(({ id, text, href, variant, intent }) => {
              const last = links.length;
              return (
                <Link href={href} pr={last === id ? 0 : 6}>
                  <Button
                    size="lg"
                    variant={variant}
                    intent={intent}
                    style={{
                      boxShadow: variant === 'primary' ? 'none' : 'inherit'
                    }}
                  >
                    {text}
                  </Button>
                </Link>
              );
            })}
          </Flex>
        </Box>
        <Grid
          templateColumns={{
            _: '1fr',
            md: '1fr 1fr'
          }}
          columnGap={1}
          rowGap={1}
          flexGrow={1}
          style={{ perspective: '1000px' }}
        >
          {brands.map(({ id, logo, name }) => {
            return (
              <SwingBox timeout={id * 400}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="blue.100"
                  py={12}
                  px={4}
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
      </Flex>
    </NavBarWidthWrapper>
  );
};
