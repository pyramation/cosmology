import React from 'react';
import { Flex, Text, Box, Heading, Grid } from '@webql/core';

export const Stat4 = ({
  majorText,
  minorText,
  description,
  stats,
  backgroundImage,
  shift
}) => {
  return (
    <Flex
      position="relative"
      flexDirection={{
        _: shift ? 'column-reverse' : 'column',
        lg: shift ? 'row-reverse' : 'row'
      }}
      overflow="hidden"
    >
      <Box
        backgroundColor="blue.900"
        boxShadow={{
          _: shift ? '0px 0px 60px 75px #1a365d' : '0px 0px 60px 75px #1a365d',
          lg: shift ? '-55px -35px 40px 0 #1a365d' : '55px -35px 40px 0 #1a365d'
        }}
        maxWidth={{ lg: '50%' }}
        px={8}
        pt={{ _: 16, mb: 16 }}
        pb={{ _: 12, lg: 16 }}
      >
        <Box position="relative" zIndex={20}>
          <Text
            color="palette.primary.base"
            fontSize="sm"
            fontWeight="semibold"
          >
            {minorText}
          </Text>
          <Heading as="h3" color="white" my={4}>
            {majorText}
          </Heading>
          <Text
            color="whiteAlpha.800"
            letterSpacing="wide"
            lineHeight="base"
            mb={10}
          >
            {description}
          </Text>
          <Grid
            templateColumns={{
              _: '1fr',
              md: 'repeat(auto-fit, minmax(300px, 1fr))'
            }}
            columnGap={8}
            rowGap={8}
          >
            {stats.map(({ id, majorWords, hightLightWords, text }) => {
              return (
                <Box>
                  <Heading as="h1" color="white" mb={2}>
                    {majorWords}
                  </Heading>
                  <Text color="whiteAlpha.600" letterSpacing="wide">
                    <Text as="span" color="white">
                      {hightLightWords}{' '}
                    </Text>
                    {text}
                  </Text>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Box
        width="full"
        height={{ _: 'md', lg: 'auto' }}
        position="relative"
        zIndex={-10}
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
      ></Box>

      <Box
        position="absolute"
        width="full"
        height="full"
        top={0}
        zIndex={10}
        background={{
          _: shift
            ? 'linear-gradient(0deg, rgba(0,1,36,1) 0%, rgba(0,28,74,0.75) 50%, rgba(1,161,255,0.16) 100%);'
            : 'linear-gradient(0deg, rgba(1,161,255,0.16) 0%, rgba(0,28,74,0.75) 50%, rgba(0,1,36,1) 100%)',
          lg:
            'linear-gradient(0deg, rgba(0,1,36,1) 0%, rgba(0,28,74,0.75) 50%, rgba(1,161,255,0.16) 100%);'
        }}
      ></Box>
    </Flex>
  );
};
