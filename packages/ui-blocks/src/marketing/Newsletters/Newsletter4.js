import React from 'react';
import { Box, Button, Flex, Text, Input, Grid, Link } from '@webql/core';

export const Newsletter4 = ({
  majorText,
  description,
  input,
  button,
  background
}) => {
  return (
    <Box position="relative" py={24} px={{ _: 6, lg: 12 }}>
      <Flex position="absolute" width="full" height="full" top={0} left={0}>
        <Box
          zIndex={-10}
          backgroundColor="blackAlpha.50"
          borderRadius="lg"
          width="full"
          maxWidth="50%"
          height="full"
        ></Box>
        <Box
          mt={8}
          ml={-8}
          backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
          backgroundPosition="0 0"
          backgroundSize="25px 20px"
          width="full"
          maxWidth="30vw"
          height="40vh"
        ></Box>
      </Flex>
      <Flex
        position="relative"
        zIndex={20}
        justifyContent="center"
        backgroundColor={background}
        boxShadow="0 4px 10px #cccccc"
        borderRadius="lg"
        px={4}
        py={20}
      >
        <Box maxWidth="3xl">
          <Text
            color="white"
            textAlign="center"
            fontSize="4xl"
            fontWeight="bold"
            mb={6}
          >
            {majorText}
          </Text>
          <Text
            fontSize="lg"
            textAlign="center"
            color="whiteAlpha.700"
            lineHeight="base"
            mb={10}
          >
            {description}
          </Text>

          <Flex
            width="full"
            justifyContent="center"
            flexDirection={{ _: 'column', md: 'row' }}
            mb={3}
          >
            <Input
              size="lg"
              type="text"
              placeholder={input.placeholder}
              bg="whiteAlpha.600"
              color="white"
              mr={4}
              mb={{ _: 3, md: 0 }}
            />
            <Button size="lg" bg={button.bg} color={button.color}>
              <Text color="inherit" fontWeight="bold" fontSize="sm" px={2}>
                {button.text}
              </Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
