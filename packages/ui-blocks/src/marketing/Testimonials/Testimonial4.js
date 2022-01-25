import React from 'react';
import { Box, Flex, Text } from '@webql/core';
import { QuoteRight1 } from '../svg';

export const Testimonial4 = ({ desc, author, background }) => {
  return (
    <Box backgroundColor={background} my={24}>
      <Flex
        flexDirection={{ _: 'column', md: 'row' }}
        px={{ _: 6, md: 12 }}
        py={{ _: 8, lg: 16 }}
      >
        <Box
          backgroundImage={`url(${author.authorImage})`}
          backgroundPosition={{ _: 'center center', md: 'top center' }}
          backgroundRepeat="no-repeat"
          borderRadius="md"
          boxShadow="0 5px 21px 0px #939393"
          width="full"
          maxWidth="xl"
          height={{ _: 'md', md: 'initial' }}
          mr={{ md: 8, lg: 12 }}
          mt={{ _: -24, md: -16, lg: -24 }}
          mb={{ md: -16, lg: -24 }}
        />
        <Box maxWidth={{ md: 'sm', lg: 'initial' }} py={8}>
          <Box width={{ _: 12, lg: 16 }} mb={{ _: 4, md: 8 }}>
            <QuoteRight1 width="full" fill="rgba(255, 255, 255, 0.36)" />
          </Box>
          <Text
            fontSize={{ _: 'xl', md: '2xl' }}
            lineHeight={{ _: 'shorter', md: 'short' }}
            color="whiteAlpha.900"
            mb={{ _: 6, md: 8 }}
          >
            {desc}
          </Text>
          <Text fontSize={{ _: 'sm', md: 'md' }} color="whiteAlpha.900" mb={1}>
            {author.name}
          </Text>
          <Text fontSize={{ _: 'sm', md: 'md' }} color="whiteAlpha.700">
            {author.designation}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
