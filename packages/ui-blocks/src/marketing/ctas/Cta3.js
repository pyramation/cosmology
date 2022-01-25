import React from 'react';
import { Box, Flex, Text, Link, Button } from '@webql/core';

export const Cta3 = ({ majorText, minorText, links }) => {
  return (
    <Flex py={24} px={16} justifyContent="center" alignItems="center">
      <Box>
        <Text color="palette.primary.base" fontSize="xl" textAlign="center">
          {minorText}
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mt={2}
          mb={10}
        >
          {majorText}
        </Text>
        <Flex
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent="center"
        >
          {links.map(({ id, href, text, variant, intent }) => {
            return (
              <Link href={href} width="full" mr={{ md: id === 1 ? 4 : 0 }}>
                <Button
                  variant={variant}
                  intent={intent}
                  style={{ width: '100%' }}
                  py={6}
                  mt={{ _: id === 2 ? 4 : 0, md: 0 }}
                >
                  <Text color="inherit" fontSize="lg" px={4}>
                    {text}
                  </Text>
                </Button>
              </Link>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
