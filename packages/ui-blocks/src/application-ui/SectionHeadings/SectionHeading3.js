import React from 'react';
import { Text, Divider, Box, Button, Flex } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading3 = ({ title, buttons }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <Text fontSize="xl" fontWeight="semibold" letterSpacing="wide" mb={2}>
          {title}
        </Text>
        <Flex alignItems="center">
          {buttons.map(({ id, text, variant }) => {
            const last = buttons.length;
            return (
              <Box mr={last !== id && 4} mt={2} mb={4}>
                <Button variant={variant}>
                  <Text color="inherit" letterSpacing="wide" mx={2}>
                    {text}
                  </Text>
                </Button>
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Divider my={0} />
    </NavBarWidthWrapper>
  );
};
