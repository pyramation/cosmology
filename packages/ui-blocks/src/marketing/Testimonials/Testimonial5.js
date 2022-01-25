import React from 'react';
import { Box, Flex, Text } from '@webql/core';
import { Caravan } from '../svg';

export const Testimonial5 = ({
  brand,
  desc,
  author,
  designation,
  company,
  backgroundImage
}) => {
  return (
    <Box py={{ _: 10, md: 16 }} px={{ _: 4, md: 8 }}>
      <Box
        position="relative"
        backgroundImage={`url(${backgroundImage})`}
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        borderRadius="lg"
        px={{ _: 8, md: 16 }}
        py={{ _: 16, md: 24 }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="full"
          height="full"
          borderRadius="lg"
          backgroundImage="linear-gradient(0deg, rgba(42,34,195,0.7287289915966386) 0%, rgba(45,213,253,0.5186449579831933) 100%)"
        ></Box>
        <Box position="relative" zIndex={10} maxWidth="3xl">
          <Flex alignItems="center" mb={6}>
            <Flex alignItems="center" width={10} mr={3}>
              {brand.logo.length > 0 ? (
                brand.logo
              ) : (
                <Caravan width="full" fill="rgba(255, 255, 255, 0.80)" />
              )}
            </Flex>
            <Text fontSize={{ _: 'lg', md: 'xl' }} color="whiteAlpha.800">
              {brand.text}
            </Text>
          </Flex>
          <Text
            fontSize={{ _: 'xl', md: '2xl' }}
            lineHeight="short"
            color="whiteAlpha.900"
            mb={8}
          >
            {desc}
          </Text>
          <Text color="whiteAlpha.800" letterSpacing="wide" mb={2}>
            {author}
          </Text>
          <Text color="whiteAlpha.800">
            {designation},&ensp;{company}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
