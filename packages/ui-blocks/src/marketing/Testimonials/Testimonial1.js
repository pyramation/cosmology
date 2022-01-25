import React from 'react';
import { Box, Flex, Text, Avatar } from '@webql/core';
import { Caravan, QuoteRight1 } from '../svg';

export const Testimonial1 = ({
  brand,
  quote,
  author,
  authorImage,
  designation,
  company
}) => {
  return (
    <Flex justifyContent="center" py={24} px={8}>
      <Box maxWidth="3xl">
        <Flex justifyContent="center" alignItems="center" mb={5}>
          <Flex alignItems="center" width={10} mr={1} pr={1}>
            {brand.logo.length > 0 ? (
              brand.logo
            ) : (
              <Caravan width="full" color="rgba(0, 0, 0, 0.80)" />
            )}
          </Flex>
          <Text fontWeight="bold" color="blackAlpha.800">
            {brand.text}
          </Text>
        </Flex>
        <Flex
          position="relative"
          justifyContent="center"
          px={{ _: 2, md: 0, lg: 8 }}
        >
          <Flex
            position="absolute"
            justifyContent="center"
            alignItems="center"
            width={16}
            height="full"
          >
            <QuoteRight1 fill="rgba(0, 0, 0, 0.04)" width="full" />
          </Flex>
          <Text
            fontSize="xl"
            color="blackAlpha.800"
            lineHeight="base"
            textAlign="center"
          >
            {`“${quote}”`}
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt={6}>
          <Avatar src={authorImage} size={12} mr={4} minWidth={12}></Avatar>
          <Flex flexDirection={{ _: 'column', md: 'row' }}>
            <Text fontSize="sm" fontWeight="bold" mr={2} mb={{ _: 1, md: 0 }}>
              {author}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="palette.primary.base"
              mr={2}
              display={{ _: 'none', md: 'block' }}
            >
              /
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              {designation},&ensp;{company}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
