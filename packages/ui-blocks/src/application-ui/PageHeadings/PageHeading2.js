import React from 'react';
import { Flex, Box, Button, Heading, Text } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading2 = ({ title, buttons }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent="space-between"
        alignItems={{ _: 'start', md: 'center' }}
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <Heading as="h2" size="xl" mb={{ _: 3, md: 0 }}>
          {title}
        </Heading>
        <Flex>
          {buttons.map(({ id, text, variant }) => {
            const last = buttons.length;
            return (
              <Box mr={id !== last && 4}>
                <Button variant={variant} py={6}>
                  <Text
                    color="inherit"
                    letterSpacing="wide"
                    mx={{ _: 4, md: 6 }}
                  >
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
