import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Flex,
  Text,
  Box,
  Heading,
  Link,
  Image,
  Icon,
  Divider
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const rotate = keyframes`
 from {
    transform: rotateX(-180deg);
    opacity: 0;
  }
 to {
    transform: rotateX(0deg);
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

export const TeamSection6 = ({
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
        <Box mt={{ _: 4, md: 0 }}>
          {members.map(
            ({ id, author, authorImage, designation, description }) => {
              const last = members.length;
              return (
                <RotateBox timeout={id * 400}>
                  <Flex
                    maxWidth={{ md: 'xl', lg: '2xl' }}
                    mb={6}
                    flexDirection={{
                      _: 'column',
                      md: 'row'
                    }}
                  >
                    <Box pr={8}>
                      <Flex
                        justifyContent="center"
                        width={{ _: 'full', md: 64 }}
                        borderRadius="md"
                        overflow="hidden"
                        mb={{ _: 4, md: 0 }}
                      >
                        <Image src={authorImage} width="full" />
                      </Flex>
                    </Box>
                    <Box>
                      <Text color="blue.900" mb={2}>
                        {author}
                      </Text>
                      <Text color="palette.primary.base" mb={4}>
                        {designation}
                      </Text>
                      <Text color="blue.600" mb={4}>
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
                  </Flex>
                  {id !== last && <Divider mb={6} />}
                </RotateBox>
              );
            }
          )}
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
