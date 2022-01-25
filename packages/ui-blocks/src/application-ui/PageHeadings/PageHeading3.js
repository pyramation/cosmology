import React from 'react';
import { Flex, Box, Button, Heading, Text } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading3 = ({ title, background, buttons }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent="space-between"
        alignItems={{ _: 'start', md: 'center' }}
        flexDirection={{ _: 'column', md: 'row' }}
        backgroundColor={background}
        borderRadius="md"
        p={6}
      >
        <Heading as="h2" size="xl" color="white" mb={{ _: 3, md: 0 }}>
          {title}
        </Heading>
        <Flex>
          {buttons.map(({ id, text, variant, bg }) => {
            const last = buttons.length;
            return (
              <Box mr={id !== last && 4}>
                <Button variant={variant} bg={bg} py={6}>
                  <Text color="inherit" letterSpacing="wide" mx={4}>
                    {text}
                  </Text>
                </Button>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </NavBarWidthWrapper>
  );
};
