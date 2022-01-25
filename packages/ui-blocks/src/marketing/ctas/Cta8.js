import React from 'react';
import { Flex, Text, Box, Button, Link } from '@webql/core';

export const Cta8 = ({ title, subtitle, desc, link, bgColor }) => {
  return (
    <Flex justifyContent="center" bg={bgColor} py={16} px={6}>
      <Box maxWidth="4xl">
        <Text
          fontSize={{ _: '3xl', md: '4xl' }}
          fontWeight="bold"
          textAlign="center"
          color="white"
          mb={2}
        >
          {title}
        </Text>
        <Text
          fontSize={{ _: '3xl', md: '4xl' }}
          fontWeight="bold"
          textAlign="center"
          color="white"
          mb={6}
        >
          {subtitle}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          fontWeight="normal"
          lineHeight="shorter"
          letterSpacing="wide"
          color="whiteAlpha.600"
          textAlign="center"
          mb={8}
        >
          {desc}
        </Text>
        <Flex justifyContent="center">
          <Link href={link.href}>
            <Button bg={link.bg} color={link.color} py={6}>
              <Text color="inherit" mx={4}>
                {link.text}
              </Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
