import React from 'react';
import { Box, Button, Flex, Text, Input, Grid, Link } from '@webql/core';

export const Newsletter5 = ({
  majorText,
  description,
  policyText,
  input,
  button
}) => {
  return (
    <Flex justifyContent="center" borderRadius="lg" mx={{ _: 4, lg: 12 }}>
      <Grid
        templateColumns={{
          _: '1fr',
          lg: '1fr 1fr'
        }}
        columnGap={{ md: 12, lg: 16 }}
        rowGap={8}
        py={24}
        px={{ _: 6, lg: 8 }}
      >
        <Box mr={{ lg: 4 }}>
          <Text color="blackAlpha.900" fontSize="4xl" fontWeight="bold" mb={3}>
            {majorText}
          </Text>
          <Text fontSize="lg" color="blackAlpha.700" lineHeight="base">
            {description}
          </Text>
        </Box>
        <Box>
          <Flex width="full" flexDirection={{ _: 'column', md: 'row' }} mb={3}>
            <Input
              size="lg"
              type="text"
              placeholder={input.placeholder}
              mr={4}
              mb={{ _: 3, md: 0 }}
            />
            <Button size="lg">
              <Text color="inherit" fontWeight="bold" fontSize="sm" px={2}>
                {button}
              </Text>
            </Button>
          </Flex>
          <Text color="blackAlpha.700" fontSize="sm">
            {policyText.text}&ensp;
            <Box display="inline" borderBottom="1px solid #666666d6">
              <Link href={policyText.link.href}>
                <Text as="span" fontSize="sm" color="inherit">
                  {policyText.link.text}
                </Text>
              </Link>
            </Box>
          </Text>
        </Box>
      </Grid>
    </Flex>
  );
};
