import React from 'react';
import { Box, Flex, Text, Icon, Grid } from '@webql/core';

export const Feature4 = ({ title, subtitle, description, features }) => {
  return (
    <Box py={{ _: 12, md: 24 }}>
      <Box px={{ _: 16, lg: 48 }}>
        <Text color="palette.primary.base" textAlign="center" fontSize="xl">
          {title}
        </Text>
        <Text
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          color="black"
          lineHeight={{ _: 'normal', lg: 'taller' }}
          mt={{ _: 4, lg: 0 }}
          mb={{ _: 4, md: 4, lg: 2 }}
        >
          {subtitle}
        </Text>
        <Box maxWidth="2xl" m="0 auto">
          <Text
            textAlign="center"
            mb={{ _: 12, md: 16 }}
            lineHeight={{ _: 'base', lg: 'normal' }}
            color="blackAlpha.700"
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Grid
        px={{ _: 0, md: 6, lg: 24 }}
        templateColumns={{ _: 'none', lg: '1fr 1fr' }}
        rowGap={4}
        columnGap={{ _: 16, lg: 0 }}
        justifyContent="space-between"
      >
        {features.map(({ id, icon, title, description }) => {
          return (
            <Flex
              px={{ _: 12, md: 10 }}
              maxWidth={{ _: '4xl', xl: '3xl' }}
              mr={{ _: 0, lg: -6 }}
              mb={16}
            >
              <Box
                borderRadius="sm"
                backgroundColor="palette.primary.base"
                px={5}
                py={5}
                maxHeight={16}
                mr={4}
              >
                <Icon name={icon} size={6} color="white"></Icon>
              </Box>
              <Box>
                <Text fontWeight="semibold" fontSize="lg" color="black">
                  {title}
                </Text>
                <Text fontSize="sm" lineHeight="base" color="blackAlpha.700">
                  {description}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};
