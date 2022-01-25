import React from 'react';
import { Text, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading9 = ({ title, subtitle }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Text as="span" fontSize="xl" fontWeight="semibold" color="blue.900">
        {title}&nbsp;
        <Text as="span" color="blue.300" fontWeight="normal">
          {subtitle}
        </Text>
      </Text>
      <Divider my={6} />
    </NavBarWidthWrapper>
  );
};
