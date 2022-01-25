import React from 'react';
import { Flex, Text, Box, Icon, Divider, Tag } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const CardHeading1 = ({ title, lists }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Box borderRadius="md" boxShadow="0 2px 3px 0 rgba(0, 0, 0, 0.35)">
        <Box p={6}>
          <Text fontWeight="medium" fontSize="xl" letterSpacing="wide">
            {title}
          </Text>
        </Box>
        <Divider my={0} />
        <Box position="relative">
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={10}
            backgroundColor="whiteAlpha.700"
            borderRadius="0 0 8px 8px"
          ></Box>
          {lists.map(({ id, title, tag, stats }) => {
            const last = lists.length;
            return (
              <>
                <Box px={6} py={2}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ _: 'column', md: 'row' }}
                  >
                    <Text color="palette.primary.base" my={2}>
                      {title}
                    </Text>
                    <Tag
                      borderRadius="lg"
                      color={`palette.${tag.color}.base`}
                      my={2}
                    >
                      {tag.text}
                    </Tag>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ _: 'column', md: 'row' }}
                  >
                    {stats.map(({ id, icon, name }) => {
                      return (
                        <Flex alignItems="center" my={2}>
                          <Icon name={icon} color="gray.500" size={4} mr={2} />
                          <Text color="gray.500">{name}</Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Box>
                {last !== id && <Divider my={0} />}
              </>
            );
          })}
        </Box>
      </Box>
    </NavBarWidthWrapper>
  );
};
