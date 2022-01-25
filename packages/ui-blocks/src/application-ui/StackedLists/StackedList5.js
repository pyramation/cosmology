import React from 'react';
import { Flex, Text, Box, Avatar, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const StackedList5 = ({ avatarA, avatarB }) => {
  return (
    <NavBarWidthWrapper>
      <Flex justifyContent="center">
        <Box minWidth={{ _: 56, md: 'lg' }}>
          <Box
            backgroundColor="blue.50"
            borderTop="2px solid"
            borderBottom="2px solid"
            borderColor="blue.100"
            px={8}
            py={2}
          >
            <Text color="blue.900" fontWeight="medium">
              A
            </Text>
          </Box>
          {avatarA.map(({ id, author, authorImage, email }) => {
            const last = avatarA.length;
            return (
              <>
                <Flex
                  alignItems="center"
                  flexWrap="wrap"
                  px={{ _: 6, md: 10 }}
                  py={4}
                >
                  <Avatar src={authorImage} size={16} minWidth={16} mr={4} />
                  <Box>
                    <Text color="blue.900" mb={2}>
                      {author}
                    </Text>
                    <Text color="blue.600" style={{ wordBreak: 'break-all' }}>
                      {email}
                    </Text>
                  </Box>
                </Flex>
                {last !== id && <Divider my={0} />}
              </>
            );
          })}
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box minWidth={{ _: 56, md: 'lg' }}>
          <Box
            backgroundColor="blue.50"
            borderTop="2px solid"
            borderBottom="2px solid"
            borderColor="blue.100"
            px={8}
            py={2}
          >
            <Text color="blue.900" fontWeight="medium">
              B
            </Text>
          </Box>
          {avatarB.map(({ id, author, authorImage, email }) => {
            const last = avatarB.length;
            return (
              <>
                <Flex
                  alignItems="center"
                  flexWrap="wrap"
                  px={{ _: 6, md: 10 }}
                  py={4}
                >
                  <Avatar src={authorImage} size={16} minWidth={16} mr={4} />
                  <Box>
                    <Text color="blue.900" mb={2}>
                      {author}
                    </Text>
                    <Text color="blue.600" style={{ wordBreak: 'break-all' }}>
                      {email}
                    </Text>
                  </Box>
                </Flex>
                {last !== id && <Divider my={0} />}
              </>
            );
          })}
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
