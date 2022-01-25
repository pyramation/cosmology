import React from 'react';
import { Box, Flex, Text, Avatar } from '@webql/core';
import { QuoteRight1 } from '../svg';

export const Testimonial3 = ({ desc, author }) => {
  return (
    <Box position="relative" py={24} px={{ _: 8, md: 16 }}>
      <Box
        position="absolute"
        top={0}
        left={0}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 'full', md: '20vw' }}
        height={{ _: '20vh', md: 'full' }}
      ></Box>
      <Flex
        position="relative"
        justifyContent="center"
        flexDirection={{ _: 'column', md: 'row' }}
        alignItems="center"
      >
        <Avatar
          src={author.authorImage}
          size={{ _: 48, md: 56, lg: 64 }}
          minWidth={{ _: 48, md: 56, lg: 64 }}
          mr={{ md: 12, lg: 16 }}
          mb={{ _: 10, md: 0 }}
        />
        <Flex position="relative" justifyContent={{ _: 'center', md: 'start' }}>
          <Box maxWidth="4xl">
            <Box
              position="absolute"
              zIndex={-10}
              width={{ _: 20, md: 32 }}
              top={-48}
              left={{ _: -16, md: -42 }}
            >
              <QuoteRight1 width="full" fill="rgba(0, 0, 0, 0.04)" />
            </Box>
            <Text
              fontSize={{ _: 'xl', lg: '2xl' }}
              fontWeight="semibold"
              lineHeight={{ _: 'shorter', lg: 'base' }}
              mb={{ _: 6, lg: 8 }}
            >
              {desc}
            </Text>
            <Text fontSize={{ _: 'sm', lg: 'md' }} mb={2}>
              {author.name}
            </Text>
            <Text fontSize={{ _: 'sm', lg: 'md' }} color="palette.primary.base">
              {author.designation}, {author.company}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
