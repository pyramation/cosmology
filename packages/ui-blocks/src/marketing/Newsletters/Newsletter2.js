import React from 'react';
import { Box, Button, Flex, Text, Input, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Newsletter2 = ({
  majorText,
  description,
  policyText,
  input,
  button
}) => {
  return (
    <Box backgroundColor="blackAlpha.800">
      <NavBarWidthWrapper>
        <Grid
          templateColumns={{
            _: '1fr',
            lg: '1fr 1fr'
          }}
          rowGap={8}
          py={24}
          px={{ _: 4, lg: 0 }}
        >
          <Box pr={{ lg: 8 }}>
            <Text
              fontSize="sm"
              color="white"
              fontSize="3xl"
              fontWeight="bold"
              mb={3}
            >
              {majorText}
            </Text>
            <Text fontSize="sm" color="white" lineHeight="base">
              {description}
            </Text>
          </Box>
          <Box pl={{ lg: 8 }}>
            <Flex
              width="full"
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
              <Button size="lg" variant={button.variant}>
                <Text color="inherit" fontWeight="bold" fontSize="sm" px={2}>
                  {button.text}
                </Text>
              </Button>
            </Flex>
            <Text color="white" fontSize="sm">
              {policyText}
            </Text>
          </Box>
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
