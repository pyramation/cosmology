import React from 'react';
import { Flex, Text, Box, Button, Link } from '@webql/core';

export const Cta10 = ({ title, subtitle, links, justify }) => {
  return (
    <Box py={{ _: 12, md: 16 }} px={{ _: 8, md: 10, lg: 16 }}>
      <Box my={4}>
        <Text
          fontSize={{ _: '3xl', md: '4xl' }}
          fontWeight="bold"
          color="blackAlpha.900"
          textAlign={justify}
          mb={1}
        >
          {title}
        </Text>
        <Text
          fontSize={{ _: '3xl', md: '4xl' }}
          fontWeight="bold"
          color="palette.primary.base"
          textAlign={justify}
        >
          {subtitle}
        </Text>
      </Box>
      <Flex justifyContent={justify} flexWrap="wrap" py={2}>
        {links.map(({ id, href, text, variant, intent }) => {
          const last = links.length;
          return (
            <Box
              mr={justify === 'start' && last !== id ? 4 : 0}
              ml={justify === 'end' && last === id ? 4 : 0}
              py={2}
            >
              <Link href={href}>
                <Button variant={variant} intent={intent} py={6}>
                  <Text color="inherit" mx={{ _: 2, md: 4 }}>
                    {text}
                  </Text>
                </Button>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
