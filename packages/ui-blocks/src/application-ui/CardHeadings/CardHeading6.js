import React from 'react';
import { Flex, Text, Box, Icon, Avatar } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const CardHeading6 = ({ avatar, desc }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Box
        borderRadius="md"
        boxShadow="0 2px 3px 0 rgba(0, 0, 0, 0.35)"
        px={6}
        py={4}
      >
        <Flex justifyContent="space-between" alignItems="center" mb={1}>
          <Flex alignItems="center" flexWrap="wrap" mr={4}>
            <Avatar src={avatar.image} size={16} minWidth={16} my={2} mr={4} />
            <Box my={2}>
              <Text fontWeight="semibold" mb={2}>
                {avatar.name}
              </Text>
              <Text color="gray.500">{avatar.date}</Text>
            </Box>
          </Flex>
          <Box>
            <Icon name={avatar.icon} color="gray.500" />
          </Box>
        </Flex>
        <Box py={3}>
          <Text
            letterSpacing="wide"
            lineHeight="shorter"
            color="blackAlpha.400"
          >
            {desc}
          </Text>
        </Box>
      </Box>
    </NavBarWidthWrapper>
  );
};
