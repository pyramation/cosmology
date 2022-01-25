import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Heading, Grid, Link, Image, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const flip = keyframes`
 from {
    transform: translateZ(50px) translateY(-12px);
    opacity: 0;
  }
 to {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

const flipDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const FlipBox = styled(flipDiv)`
  transform-style: preserve-3d;
  animation-name: ${flip};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const TeamSection2 = ({
  displayValue,
  majorText,
  description,
  socialLinks,
  members
}) => {
  return (
    <NavBarWidthWrapper>
      <Flex justifyContent="center">
        <Box py={24}>
          <Heading as="h1" mb={4}>
            {majorText}
          </Heading>
          <Text color="blue.600" fontSize="lg" letterSpacing="wide" mb={12}>
            {description}
          </Text>
          <Grid
            templateColumns={{
              _: '1fr',
              md: 'repeat(3, 1fr)'
            }}
            columnGap={{ md: 4, lg: 8 }}
            rowGap={12}
            style={{ perspective: '1000px' }}
          >
            {members.map(({ id, author, authorImage, designation }) => {
              return (
                <FlipBox timeout={id * 600}>
                  <Flex flexDirection={displayValue}>
                    <Flex
                      width="full"
                      maxWidth={64}
                      minWidth={32}
                      justifyContent="center"
                      borderRadius="md"
                      boxShadow="0 12px 20px -8px rgba(0, 0, 0, 0.35)"
                      overflow="hidden"
                      mb={displayValue === 'column' ? 5 : 0}
                      mr={{
                        _: displayValue === 'row' ? 3 : 0,
                        lg: displayValue === 'row' ? 5 : 0
                      }}
                    >
                      <Image src={authorImage} width="full" />
                    </Flex>
                    <Box width="full" minWidth={24}>
                      <Text mb={2} color="blue.900">
                        {author}
                      </Text>
                      <Text color="palette.primary.base" mb={3}>
                        {designation}
                      </Text>
                      <Flex>
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
                </FlipBox>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
