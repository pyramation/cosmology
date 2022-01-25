import React from 'react';
import { Flex, Text, Box, Avatar, Link, Divider, Button } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const StackedList6 = ({ avatars, link }) => {
  return (
    <NavBarWidthWrapper py={8}>
      <Flex justifyContent="center">
        <Box>
          {avatars.map(({ id, author, authorImage, at, button }) => {
            const last = avatars.length;
            return (
              <Box minWidth={{ md: 'lg', lg: 'xl' }}>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  py={4}
                  px={4}
                >
                  <Flex alignItems="center" mr={4}>
                    <Avatar src={authorImage} size={16} minWidth={16} mr={4} />
                    <Box>
                      <Text color="blue.900" mb={2}>
                        {author}
                      </Text>
                      <Text color="blue.500">{at}</Text>
                    </Box>
                  </Flex>
                  <Link href={button.href}>
                    <Button
                      size="sm"
                      shape="pill"
                      variant="tertiary"
                      boxShadow="0 0 2px 0px #a1a1a1"
                    >
                      <Text fontSize="inherit" color="inherit" mx={{ md: 2 }}>
                        {button.text}
                      </Text>
                    </Button>
                  </Link>
                </Flex>
                {last !== id && <Divider my={0} />}
              </Box>
            );
          })}
          <Box mt={2}>
            <Link href={link.href}>
              <Button
                style={{ width: '100%' }}
                variant="tertiary"
                boxShadow="0 0 2px 0px #a1a1a1"
              >
                {link.text}
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
