import React from 'react';
import { Flex, Text, Box, Avatar, Button } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading8 = ({ name, avatar, desc, buttons }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent="space-between"
        alignItems={{ md: 'center' }}
        flexWrap="wrap"
      >
        <Flex alignItems="center" my={2}>
          <Avatar src={avatar} size={20} minWidth={20} mr={4} />
          <Box>
            <Text fontWeight="extrabold" fontSize="2xl" mb={2}>
              {name}
            </Text>
            <Text as="span" color="blue.300">
              {desc.text1}{' '}
              <Text as="span" color="blue.800">
                {desc.text2}{' '}
              </Text>
              {desc.text3}
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap="wrap">
          {buttons.map(({ id, text, variant }) => {
            const last = buttons.length;
            return (
              <Box mr={last !== id && 3} my={2}>
                <Button variant={variant}>
                  <Text color="inherit" mx={2}>
                    {text}
                  </Text>
                </Button>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </NavBarWidthWrapper>
  );
};
