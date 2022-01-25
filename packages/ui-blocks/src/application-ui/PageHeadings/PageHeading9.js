import React from 'react';
import { Flex, Text, Box, Button, Avatar, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading9 = ({ name, avatar, desc, button, lists }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Box
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.35)"
        borderRadius="md"
        overflow="hidden"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          p={6}
        >
          <Flex alignItems="center" mr={4}>
            <Avatar src={avatar} size={20} minWidth={20} mr={4} />
            <Box>
              <Text color="gray.600" mb={1}>
                {desc.text1}
              </Text>
              <Text fontSize="xl" fontWeight="bold" mb={1}>
                {name}
              </Text>
              <Text color="gray.600">{desc.text2}</Text>
            </Box>
          </Flex>
          <Box py={4} px={2}>
            <Button variant={button.variant} py={{ md: 6 }}>
              <Text color="inherit" mx={{ md: 4 }}>
                {button.text}
              </Text>
            </Button>
          </Box>
        </Flex>
        <Grid gridTemplateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}>
          {lists.map(({ id, number, text }) => {
            const last = lists.length;
            return (
              <Flex
                justifyContent="center"
                alignItems="center"
                backgroundColor="blackAlpha.50"
                borderTop="1px solid #E2E8F0"
                borderRight={{ md: last !== id && '1px solid #E2E8F0' }}
                p={6}
              >
                <Text as="span">
                  {number}&emsp;
                  <Text as="span" color="gray.500">
                    {text}
                  </Text>
                </Text>
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </NavBarWidthWrapper>
  );
};
