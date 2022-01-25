import React from 'react';
import { Flex, Text, Box, Link, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';
import Button from '@webql/core/src/button';

export const StackedList7 = ({ button, lists }) => {
  return (
    <NavBarWidthWrapper py={16}>
      <Flex justifyContent="center">
        <Box>
          {lists.map(({ id, title, desc }) => {
            const last = lists.length;
            return (
              <>
                <Box maxWidth={{ _: '2xs', md: '2xl' }} px={4} py={6}>
                  <Text
                    color="blue.900"
                    fontWeight="medium"
                    truncate
                    overflow="hidden"
                    mb={2}
                  >
                    {title}
                  </Text>
                  <Text
                    color="blue.600"
                    truncate
                    truncateLines={3}
                    overflow="hidden"
                    lineHeight="shorter"
                  >
                    {desc}
                  </Text>
                </Box>
                {last !== id && <Divider my={0} />}
              </>
            );
          })}
          <Box px={2} mt={6}>
            <Link href={button.href}>
              <Button
                py={3}
                variant="tertiary"
                boxShadow="0 0 2px 0px #1a1a1a"
                style={{ width: '100%' }}
              >
                {button.text}
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
