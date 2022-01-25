import React from 'react';
import { Flex, Text, Box, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const StackedList8 = ({ lists }) => {
  return (
    <NavBarWidthWrapper py={12}>
      <Flex justifyContent="center">
        <Box>
          {lists.map(({ id, title, subTitle, desc, date }) => {
            const last = lists.length;
            return (
              <>
                <Box maxWidth={{ _: '2xs', md: '2xl' }} px={4} py={6}>
                  <Flex justifyContent="space-between" flexWrap="wrap" mb={3}>
                    <Box maxWidth={{ _: 56, md: 'xl' }} pr={4}>
                      <Text
                        color="blue.900"
                        fontWeight="medium"
                        fontSize="lg"
                        mb={2}
                      >
                        {title}
                      </Text>
                      <Text color="blue.300" truncate overflow="hidden">
                        {subTitle}
                      </Text>
                    </Box>
                    <Text color="blue.400" mt={{ _: 3, md: 0 }}>
                      {date}
                    </Text>
                  </Flex>

                  <Text
                    color="blue.600"
                    truncate
                    truncateLines={3}
                    lineHeight="short"
                  >
                    {desc}
                  </Text>
                </Box>
                {last !== id && <Divider my={0} />}
              </>
            );
          })}
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
