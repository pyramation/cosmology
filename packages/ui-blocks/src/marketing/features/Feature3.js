import React, { useState } from 'react';
import { Box, Flex, Text, Icon, Heading, Grid } from '@webql/core';

export const Feature3 = ({ title, subtitle, features, separator }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Box py={{ _: 12, md: 24 }}>
      <Box px={{ _: 16, md: 0 }}>
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
          mb={{ _: 8, md: 4, lg: 2 }}
          wordWrap="break-word"
        >
          {subtitle}
        </Text>
        <Flex justifyContent="center" mt={1} mb={{ _: 12, md: 16 }}>
          {separator && (
            <>
              <Box width={20} height={1} backgroundColor="blue.50" mr={2}></Box>
              <Box
                width={8}
                height={1}
                backgroundColor="palette.primary.base"
              ></Box>
            </>
          )}
        </Flex>
      </Box>
      <Grid
        px={{ _: 4, md: 16, lg: 40 }}
        templateRows={{ _: 'none', lg: 'repeat(2, 1fr)' }}
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        rowGap={{ _: 12, md: 16 }}
        columnGap={{ _: 56, lg: 20 }}
        justifyContent="center"
      >
        {features.map(({ id, icon, title, description }) => {
          return (
            <Flex
              px={{ _: 12, md: 0 }}
              onMouseEnter={() => {
                setHover(true);
                setSelectedData(id);
              }}
              onMouseLeave={() => {
                setHover(false);
                setSelectedData(null);
              }}
            >
              <Box
                position="relative"
                borderRadius="sm"
                backgroundColor="blue.50"
                px={5}
                py={5}
                maxHeight={16}
                mr={4}
              >
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  bottom="0"
                  left="0"
                  borderRadius="sm"
                  backgroundColor={
                    hover && selectedData === id
                      ? 'palette.primary.base'
                      : 'blue.50'
                  }
                  opacity={hover && selectedData === id ? '1' : '0'}
                  style={{
                    transition: 'all 1s linear'
                  }}
                ></Box>
                <Flex alignItems="center" position="relative">
                  <Icon
                    name={icon}
                    size={6}
                    color={
                      hover && selectedData === id
                        ? 'white'
                        : 'palette.primary.base'
                    }
                  ></Icon>
                </Flex>
              </Box>
              <Box>
                <Heading as="h1" fontSize="lg" color="black">
                  {title}
                </Heading>
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
