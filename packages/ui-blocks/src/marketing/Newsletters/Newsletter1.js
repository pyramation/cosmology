import React from 'react';
import { Box, Button, Flex, Text, Input, Heading } from '@webql/core';

export const Newsletter1 = ({ majorText, minorText, input, button }) => {
  return (
    <Box py={24} px={{ _: 8, md: 16 }}>
      <Heading as="h1" color="blackAlpha.800" fontSize="5xl">
        {majorText}
      </Heading>
      <Heading as="h1" color="palette.primary.base" fontSize="5xl" mb={6}>
        {minorText}
      </Heading>
      <Flex
        maxWidth={{ _: 'full', md: 'xl' }}
        flexDirection={{ _: 'column', md: 'row' }}
        pr={{ lg: 8 }}
      >
        <Input
          size="lg"
          type="text"
          placeholder={input.placeholder}
          mr={4}
          mb={{ _: 3, md: 0 }}
        ></Input>
        <Button size="lg" variant={button.variant}>
          <Text color="inherit" fontWeight="bold" fontSize="sm" px={4}>
            {button.text}
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};
