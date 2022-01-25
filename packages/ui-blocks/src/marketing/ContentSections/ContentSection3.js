import React from 'react';
import { Box, Flex, Text, Icon } from '@webql/core';

export const ContentSection3 = ({
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
  image
}) => {
  return (
    <Flex position="relative" py={{ _: 8, lg: 0 }}>
      <Box
        position="relative"
        zIndex={20}
        width="full"
        p={{ _: 6, md: 8, lg: 16 }}
      >
        <Text color="palette.primary.base" letterSpacing="wide" mb={4}>
          {minorText}
        </Text>
        <Text fontSize={{ _: '4xl', md: '5xl' }} fontWeight="bold" mb={8}>
          {majorText}
        </Text>
        <Flex flexDirection={{ _: 'column', lg: 'row' }}>
          <Box width="full" maxWidth="3xl" pr={{ lg: 8 }}>
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
          <Box
            position="relative"
            width="full"
            height={{ _: 56, md: 'md', lg: '3xl' }}
            right={{ lg: -16 }}
            zIndex={5}
          >
            <Box
              backgroundImage={`url(${image.url})`}
              backgroundSize="cover"
              backgroundPosition="center center"
              backgroundRepeat="no-repeat"
              borderRadius="lg"
              boxShadow="0 5px 10px #b9b9b9"
              width="full"
              height="full"
              mb={4}
            ></Box>
            <Flex alignItems="center">
              <Icon name={image.icon} color="blackAlpha.600" size={4} mr={2} />
              <Text color="blackAlpha.600">{image.text}</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        display={{ _: 'none', md: 'block' }}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        backgroundColor="blackAlpha.50"
        width="full"
        maxWidth={{ md: '50%', lg: 48 }}
      ></Box>
      <Box
        display={{ _: 'none', lg: 'block' }}
        position="absolute"
        top={12}
        right={0}
        zIndex={5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 32, md: 64 }}
        height={{ _: '20vh', md: '35%' }}
      ></Box>
    </Flex>
  );
};
