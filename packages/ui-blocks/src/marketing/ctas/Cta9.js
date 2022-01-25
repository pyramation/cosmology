import React from 'react';
import { Flex, Text, Box, Button, Link } from '@webql/core';

export const Cta9 = ({ title, subtitle, link, bgColor }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      bg={bgColor}
      py={16}
      px={{ _: 8, md: 10, lg: 16 }}
    >
      <Box mr={8} my={4}>
        <Text
          fontSize={{ _: '3xl', md: '4xl' }}
          fontWeight="bold"
          color="blackAlpha.900"
          mb={1}
        >
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
      <Box py={2}>
        <Link href={link.href}>
          <Button py={6}>
            <Text color="inherit" mx={{ md: 4 }}>
              {link.text}
            </Text>
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
