import React from 'react';
import { Box, Flex, Text, Avatar, Grid } from '@webql/core';
import { Caravan, QuoteRight2 } from '../svg';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Testimonial2 = ({ testimonials }) => {
  return (
    <NavBarWidthWrapper>
      <Grid
        templateColumns={{
          _: '1fr',
          lg: '1fr 1fr'
        }}
        mx={{ lg: -8 }}
        px={{ _: 4, lg: 0 }}
      >
        {testimonials.map(
          ({ id, brand, quote, author, authorImage, designation, company }) => {
            return (
              <Box
                position="relative"
                py={24}
                px={8}
                backgroundColor="blue.600"
                borderRight={{ lg: id === 1 ? '2px solid #1e4e8c' : 'none' }}
                borderBottom={{
                  _: id === 1 ? '2px solid #1e4e8c' : 'none',
                  lg: 'none'
                }}
              >
                <Flex alignItems="center" mb={5}>
                  <Flex alignItems="center" width={10} mr={1} pr={1}>
                    {brand.logo.length > 0 ? (
                      brand.logo
                    ) : (
                      <Caravan width="full" fill="#01A1FF" />
                    )}
                  </Flex>
                  <Text fontWeight="bold" color="palette.primary.base">
                    {brand.text}
                  </Text>
                </Flex>
                <Box maxWidth="xl" pr={{ lg: 12 }} mb={6}>
                  <Text fontSize="xl" color="white" lineHeight="base">
                    {`“${quote}”`}
                  </Text>
                </Box>
                <Flex alignItems="center">
                  <Avatar src={authorImage} size={12} minWidth={12}></Avatar>
                  <Box ml={4}>
                    <Text fontSize="sm" color="white" mb={1}>
                      {author}
                    </Text>
                    <Text fontSize="sm" color="palette.primary.base">
                      {designation},&ensp;{company}
                    </Text>
                  </Box>
                </Flex>
                <Box
                  position="absolute"
                  bottom={4}
                  right={12}
                  width={16}
                  height={16}
                >
                  <QuoteRight2 fill="#1e4e8c" width="full" height="full" />
                </Box>
              </Box>
            );
          }
        )}
      </Grid>
    </NavBarWidthWrapper>
  );
};
