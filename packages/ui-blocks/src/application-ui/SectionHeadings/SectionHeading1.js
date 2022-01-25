import React from 'react';
import { Text, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading1 = ({ title }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Text fontSize="xl" fontWeight="semibold" letterSpacing="wide" mb={3}>
        {title}
      </Text>
      <Divider />
    </NavBarWidthWrapper>
  );
};
