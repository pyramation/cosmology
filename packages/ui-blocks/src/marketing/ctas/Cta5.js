import React from 'react';
import { Box, Flex, Text, Link, Button } from '@webql/core';

export const Cta5 = ({ title, subtitle, links }) => {
  return (
    <Flex py={12} px={8} justifyContent="center" alignItems="center">
      <Box maxWidth="lg">
        <Box px={{ _: 8, md: 0 }}>
          <Text color="palette.primary.base" fontSize="xl" textAlign="center">
            {title}
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
            mt={2}
            mb={10}
          >
            {subtitle}
          </Text>
        </Box>
        <Flex
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent="center"
        >
          {links.map(({ id, href, text, variant, intent }) => {
            const last = links.length;
            return (
              <Link
                href={href}
                minWidth={{ _: 'full', md: 40 }}
                mr={{ md: id === 1 ? 4 : 0 }}
              >
                <Button
                  variant={variant}
                  intent={intent}
                  style={{ width: '100%' }}
                  py={8}
                  mb={{ _: id !== last ? 4 : 0, md: 0 }}
                >
                  <Text color="inherit" fontSize="xl" px={4}>
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
