import React from 'react';
import { Flex, Text, Box, Divider, Avatar } from '@webql/core';

export const StackedList1 = ({ avatars }) => {
  return (
    <Flex justifyContent="center" py={20} px={4}>
      <Box minWidth={{ md: 'sm' }}>
        {avatars.map(({ id, author, authorImage, email }) => {
          const last = avatars.length;
          return (
            <Box>
              <Flex alignItems="center" px={{ _: 4, md: 0 }}>
                <Avatar src={authorImage} size={12} minWidth={12} />
                <Box pl={4}>
                  <Text color="blue.900" lineHeight="base">
                    {author}
                  </Text>
                  <Text color="blue.600" lineHeight="base">
                    {email}
                  </Text>
                </Box>
              </Flex>
              {last !== id && <Divider />}
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};
