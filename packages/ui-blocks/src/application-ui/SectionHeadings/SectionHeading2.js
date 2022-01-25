import React from 'react';
import { Text, Divider, Box } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading2 = ({ title, desc }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Text fontSize="xl" fontWeight="semibold" letterSpacing="wide" mb={2}>
        {title}
      </Text>
      <Box maxWidth="5xl">
        <Text lineHeight="shorter" color="blackAlpha.500" mb={5}>
          {desc}
        </Text>
      </Box>
      <Divider my={0} />
    </NavBarWidthWrapper>
  );
};
