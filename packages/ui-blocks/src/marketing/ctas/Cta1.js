import React from 'react';
import { Flex, Text, Tag } from '@webql/core';

export const Cta1 = ({ ctaText, badgeText, badgeIntent }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      py={6}
      px={12}
    >
      <Tag
        color={`palette.${badgeIntent}.base`}
        borderRadius={20}
        fontSize="sm"
        px={5}
        py={2}
        mr={{ _: 0, md: 2 }}
      >
        {badgeText}
      </Tag>
      <Text
        color="blackAlpha.700"
        textAlign={{ _: 'center', md: 'start' }}
        mt={{ _: 2, md: 0 }}
        lineHeight="base"
      >
        {ctaText}
      </Text>
    </Flex>
  );
};
