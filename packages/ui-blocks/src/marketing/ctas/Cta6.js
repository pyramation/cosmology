import React from 'react';
import { Flex, Text, Box, Button, Link } from '@webql/core';

export const Cta6 = ({ title, subtitle, links }) => {
  return (
    <Flex justifyContent="center" py={20} px={4}>
      <Flex
        justifyContent="space-between"
        width="full"
        maxWidth="6xl"
        flexWrap="wrap"
      >
        <Box mr={4}>
          <Text fontSize={{ _: '3xl', md: '4xl' }} fontWeight="bold" mb={2}>
            {title}
          </Text>
          <Text
            fontSize={{ _: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="palette.primary.base"
          >
            {subtitle}
          </Text>
        </Box>
        <Flex alignItems="center" py={4} flexWrap="wrap">
          {links.map(({ id, href, text, variant }) => {
            return (
              <Box my={2} mr={4}>
                <Link href={href}>
                  <Button variant={variant} boxShadow="0 0 3px #cccccc" py={6}>
                    <Text color="inherit" mx={{ _: 2, md: 4 }}>
                      {text}
                    </Text>
                  </Button>
                </Link>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
