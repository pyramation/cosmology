import React from 'react';
import { Box, Button, Flex, Text, Input, Grid, Link } from '@webql/core';

export const Newsletter3 = ({
  majorText,
  description,
  policyText,
  input,
  button,
  background
}) => {
  return (
    <Grid
      backgroundColor={background}
      templateColumns={{
        _: '1fr',
        lg: '1fr 1fr'
      }}
      columnGap={{ md: 12, lg: 16 }}
      rowGap={8}
      py={24}
      px={{ _: 8, md: 16, lg: 20 }}
    >
      <Box>
        <Text color="white" fontSize="3xl" fontWeight="bold" mb={3}>
          {majorText}
        </Text>
        <Text fontSize="lg" color="whiteAlpha.700" lineHeight="base">
          {description}
        </Text>
      </Box>
      <Box>
        <Flex width="full" flexDirection={{ _: 'column', md: 'row' }} mb={3}>
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
        <Text color="whiteAlpha.800" fontSize="sm">
          {policyText.text}&ensp;
          <Box display="inline" borderBottom="1px solid #ffffff">
            <Link href={policyText.link.href}>
              <Text as="span" fontSize="sm" color={policyText.link.color}>
                {policyText.link.text}
              </Text>
            </Link>
          </Box>
        </Text>
      </Box>
    </Grid>
  );
};
