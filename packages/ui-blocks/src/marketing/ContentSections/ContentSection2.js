import React from 'react';
import { Box, Link, Flex, Text } from '@webql/core';

export const ContentSection2 = ({
  majorText,
  minorText,
  content1,
  content2,
  content3,
  content4,
  unorderedLists,
  content5,
  header1,
  content6,
  content7,
  image,
  contentReverse
}) => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection={{
        _: contentReverse ? 'column-reverse' : 'column',
        md: contentReverse ? 'row-reverse' : 'row'
      }}
    >
      <Box
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        flexGrow={1}
        width="full"
        height={{ _: 56, md: 'initial' }}
        my={{ _: 4, md: 0 }}
      ></Box>
      <Box width="full" maxWidth="4xl" p={{ _: 6, md: 8, lg: 16 }}>
        <Text color="palette.primary.base" letterSpacing="wide" mb={4}>
          {minorText}
        </Text>
        <Text fontSize={{ _: '4xl', md: '5xl' }} fontWeight="bold" mb={8}>
          {majorText}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={6}
        >
          {content1}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={6}
        >
          {content2}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={6}
        >
          {content3}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={6}
        >
          {content4}
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
                fontSize={{ md: 'lg' }}
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
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={12}
        >
          {content5}
        </Text>
        <Text fontSize="2xl" fontWeight="semibold" mb={8}>
          {header1}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={6}
        >
          {content6}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={6}
        >
          {content7}
        </Text>
      </Box>
    </Flex>
  );
};
