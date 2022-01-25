import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Flex,
  Text,
  Box,
  Heading,
  Avatar,
  Grid,
  Link,
  Icon
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const rotate = keyframes`
 0% {
    transform: rotate3d(1, 0.5, 0, 0deg);
    opacity: 0;
  }
 50% {
    transform: rotate3d(1, 0.5, 0, -180deg);
    opacity: 0.5;
  }
 100% {
    transform: rotate3d(1, 0.5, 0, -360deg);
    opacity: 1;
  }
`;

const rotateDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const RotateBox = styled(rotateDiv)`
  transform-style: preserve-3d;
  animation-name: ${rotate};
  animation-timing-function: linear;
  animation-duration: 0.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const TeamSection8 = ({
  majorText,
  description,
  socialLinks,
  members
}) => {
  return (
    <NavBarWidthWrapper py={24}>
      <Heading as="h1" mb={4} textAlign="center">
        {majorText}
      </Heading>
      <Text
        fontSize="lg"
        color="blue.600"
        letterSpacing="wide"
        lineHeight="short"
        textAlign="center"
        mb={{ _: 16, md: 20 }}
      >
        {description}
      </Text>
      <Grid
        templateColumns={{
          _: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr'
        }}
        columnGap={{ md: 8 }}
        rowGap={20}
        style={{ perspective: '1000px' }}
      >
        {members.map(({ id, author, authorImage, designation }) => {
          return (
            <RotateBox timeout={id * 400}>
              <Flex justifyContent="center">
                <Avatar
                  src={authorImage}
                  size={{ _: 48, lg: 56 }}
                  mb={{ _: 4, md: 6 }}
                />
              </Flex>
              <Text color="blue.900" textAlign="center" mb={2}>
                {author}
              </Text>
              <Text color="palette.primary.base" textAlign="center" mb={3}>
                {designation}
              </Text>
              <Flex justifyContent="center" alignItems="center">
                {socialLinks.map(({ id, href, icon }) => {
                  const last = socialLinks.length;
                  return (
                    <Link href={href} mr={last === id ? 0 : 6}>
                      <Icon name={icon} color="blue.600" />
                    </Link>
                  );
                })}
              </Flex>
            </RotateBox>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
