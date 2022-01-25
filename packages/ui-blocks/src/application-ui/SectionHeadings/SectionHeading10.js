import React from 'react';
import { Flex, Text, Box, Icon, Divider, Tag } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading10 = ({ title, desc, icon, tag }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex alignItems="center">
        <Flex
          justifyContent="space-between"
          alignItems={{ md: 'center' }}
          flexDirection={{ _: 'column', md: 'row' }}
          flexGrow={1}
        >
          <Box mb={{ _: 4, md: 0 }}>
            <Text fontSize="xl" fontWeight="semibold" color="blue.900" mb={2}>
              {title}
            </Text>
            <Text color="blue.300" fontWeight="normal">
              {desc}
            </Text>
          </Box>
          <Tag
            color={tag.color}
            width={16}
            height={6}
            borderRadius="lg"
            truncate
          >
            {tag.text}
          </Tag>
        </Flex>
        <Box px={4}>
          <Icon name={icon} color="blue.500" />
        </Box>
      </Flex>
      <Divider my={6} />
    </NavBarWidthWrapper>
  );
};
