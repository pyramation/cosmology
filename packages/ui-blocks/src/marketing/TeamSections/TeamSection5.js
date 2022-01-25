import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading, Link, Image, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const rotate = keyframes`
 from {
    transform: rotateY(-180deg);
    opacity: 0;
  }
 to {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;

const rotateDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const RotateBox = styled(rotateDiv)`
  transform-style: preserve-3d;
  animation-name: ${rotate};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const TeamSection5 = ({
  majorText,
  description,
  socialLinks,
  members
}) => {
  return (
    <NavBarWidthWrapper>
      <Flex
        py={24}
        justifyContent="center"
        flexDirection={{
          _: 'column',
          md: 'row'
        }}
        flexWrap="wrap"
      >
        <Box maxWidth="xl" pr={{ lg: 12 }} mb={{ _: 6, md: 8 }}>
          <Heading as="h1" mb={4}>
            {majorText}
          </Heading>
          <Text
            fontSize="lg"
            color="blue.600"
            lineHeight="short"
            letterSpacing="wide"
          >
            {description}
          </Text>
        </Box>
        <Flex maxWidth="xl" flexWrap="wrap" justifyContent="space-between">
          {members.map(
            ({ id, author, authorImage, designation, description }) => {
              return (
                <RotateBox timeout={id * 400}>
                  <Box maxWidth={64} mb={12} pr={8}>
                    <Flex
                      justifyContent="center"
                      width="full"
                      overflow="hidden"
                      borderRadius="md"
                      boxShadow="-12px 12px 15px -8px rgba(0, 0, 0, 0.45)"
                      mb={6}
                    >
                      <Image src={authorImage} />
                    </Flex>
                    <Text color="blue.900" mb={2}>
                      {author}
                    </Text>
                    <Text color="palette.primary.base" mb={4}>
                      {designation}
                    </Text>
                    <Text color="blue.600" letterSpacing="wide" mb={4}>
                      {description}
                    </Text>
                    <Flex alignItems="center">
                      {socialLinks.map(({ id, href, icon }) => {
                        return (
                          <Link href={href} mr={4}>
                            <Icon name={icon} color="blue.900" />
                          </Link>
                        );
                      })}
                    </Flex>
                  </Box>
                </RotateBox>
              );
            }
          )}
        </Flex>
      </Flex>
    </NavBarWidthWrapper>
  );
};
