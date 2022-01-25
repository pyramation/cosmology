import React from 'react';
import { Flex, Text, Box, Button, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading4 = ({ title, button }) => {
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

        <Box mt={2} mb={4}>
          <Button py={6}>
            <Text color="inherit" letterSpacing="wide" mx={5}>
              {button}
            </Text>
          </Button>
        </Box>
      </Flex>
      <Divider my={0} />
    </NavBarWidthWrapper>
  );
};
