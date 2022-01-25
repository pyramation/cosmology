import React, { useState } from 'react';
import { Box, Flex, Text, Icon, Heading, Grid } from '@webql/core';

export const Feature2 = ({ title, subTitle, features, separator }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  function encodeSvg(str) {
    return (
      'data:image/svg+xml;utf8,' +
      str
        .replace(/"/g, "'")
        .replace(/%/g, '%25')
        .replace(/#/g, '%23')
        .replace(/{/g, '%7B')
        .replace(/}/g, '%7D')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')
    );
  }

  return (
    <Box py={24}>
      <Box>
        <Heading
          as="h1"
          fontSize="5xl"
          color="blackAlpha.800"
          textAlign="center"
          mb={5}
        >
          {title}
        </Heading>
        <Text fontSize="lg" color="blackAlpha.600" textAlign="center">
          {subTitle}
        </Text>
      </Box>
      <Flex justifyContent="center" mt={1} mb={{ _: 12, lg: 16 }}>
        <Box
          backgroundImage={`url("${encodeSvg(separator)}")`}
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
          width={48}
          height={16}
        ></Box>
      </Flex>
      <Flex width="full" alignItems="center" justifyContent="center">
        <Box width="full" px={{ _: 0, md: 8, lg: 40 }}>
          <Grid
            templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
            rowGap={8}
            columnGap={{ _: 8, md: 16, lg: 20 }}
          >
            {features.map(({ id, icon, title, description, active }) => {
              return (
                <Box
                  id={id}
                  height="full"
                  position="relative"
                  p={8}
                  borderRadius={
                    active || (hover && selectedData === id) ? 'none' : 'sm'
                  }
                  boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  background={
                    active
                      ? 'linear-gradient(160deg, #01a1ff -1.24%, #0082d9 86.22%)'
                      : 'transparent'
                  }
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
                    position="absolute"
                    top="0"
                    right="0"
                    bottom="0"
                    left="0"
                    background={
                      active || (hover && selectedData === id)
                        ? 'linear-gradient(160deg, #01a1ff -1.24%, #0082d9 86.22%)'
                        : 'linear-gradient(160deg, #30B3FF -1.24%, #3E9BD8 86.22%)'
                    }
                    opacity={
                      active || (hover && selectedData === id) ? '1' : '0'
                    }
                    style={{
                      transition: 'all 1s linear'
                    }}
                  ></Box>
                  <Box position="relative">
                    <Flex mb={4} justifyContent="center">
                      <Icon
                        name={icon}
                        size={16}
                        color={
                          active || (hover && selectedData === id)
                            ? 'white'
                            : 'palette.primary.base'
                        }
                      ></Icon>
                    </Flex>
                    <Text
                      as="h2"
                      textAlign="center"
                      fontSize="2xl"
                      mb={2}
                      color={
                        active || (hover && selectedData === id)
                          ? 'white'
                          : 'black'
                      }
                    >
                      {title}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      lineHeight="base"
                      color={
                        active || (hover && selectedData === id)
                          ? 'white'
                          : 'blackAlpha.700'
                      }
                    >
                      {description}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};
