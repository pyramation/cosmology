import React from 'react';
import { Box, Flex, Text, Button, Grid, Link } from '@webql/core';

export const ContentSection5 = ({
  majorText,
  minorText,
  content1,
  content2,
  unorderedLists,
  content3,
  content4,
  content5,
  content6,
  button
}) => {
  return (
    <Box position="relative" px={{ _: 6, md: 8, lg: 10 }} py={{ _: 8, lg: 10 }}>
      <Box px={8}>
        <Text color="palette.primary.base" letterSpacing="wide" mb={4}>
          {minorText}
        </Text>
        <Text fontSize={{ _: '3xl', md: '4xl' }} fontWeight="bold">
          {majorText}
        </Text>
      </Box>
      <Box borderRadius="lg" backgroundColor="white" px={8}>
        <Grid
          templateColumns={{ _: '1fr', md: '1fr 1fr' }}
          columnGap={8}
          py={8}
        >
          <Box>
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              color="blackAlpha.600"
              lineHeight="base"
              letterSpacing="wide"
              mb={6}
            >
              {content1}
            </Text>
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              color="blackAlpha.600"
              lineHeight="base"
              letterSpacing="wide"
              mb={8}
            >
              {content2.text1}&ensp;
              <Box
                display="inline"
                borderBottom="1px solid"
                borderColor="palette.primary.base"
              >
                <Link href={content2.link.href} fontSize="inherit" color>
                  {content2.link.text}
                </Link>
              </Box>
              &ensp;{content2.text2}
            </Text>
            {unorderedLists.map((text, i) => {
              const last = unorderedLists.length;
              return (
                <Flex alignItems="center" mb={last === i + 1 ? 6 : 3}>
                  <Box
                    width="6px"
                    height="6px"
                    minWidth="6px"
                    backgroundColor="blackAlpha.400"
                    borderRadius="round"
                    mr={4}
                  ></Box>
                  <Text
                    fontSize={{ _: 'lg', md: 'xl' }}
                    letterSpacing="wide"
                    lineHeight="short"
                    color="blackAlpha.600"
                  >
                    {text}
                  </Text>
                </Flex>
              );
            })}
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              color="blackAlpha.600"
              lineHeight="base"
              letterSpacing="wide"
            >
              {content3}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              color="blackAlpha.600"
              lineHeight="base"
              letterSpacing="wide"
              mb={6}
            >
              {content4}
            </Text>
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              color="blackAlpha.600"
              lineHeight="base"
              letterSpacing="wide"
              mb={6}
            >
              {content5}
            </Text>
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              color="blackAlpha.600"
              lineHeight="base"
              letterSpacing="wide"
            >
              {content6}
            </Text>
          </Box>
        </Grid>
        <Button mb={8}>{button}</Button>
      </Box>

      <Box
        display={{ _: 'none', lg: 'block' }}
        position="absolute"
        top={8}
        right={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="20px 20px"
        width="full"
        maxWidth="25%"
        height="45%"
      ></Box>
      <Box
        display={{ _: 'none', lg: 'block' }}
        position="absolute"
        bottom={0}
        left={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="20px 20px"
        width="full"
        maxWidth="25%"
        height="45%"
      ></Box>
    </Box>
  );
};
