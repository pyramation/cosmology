import React from 'react';
import { Box, Text, Grid } from '@webql/core';

export const ContactSection6 = ({ majorText, minorText, company }) => {
  return (
    <Box px={{ _: 4, lg: 20 }} py={12}>
      <Text
        fontSize={{ _: '3xl', md: '5xl' }}
        fontWeight="extrabold"
        mb={{ _: 6, md: 8 }}
      >
        {majorText}
      </Text>
      <Box maxWidth="3xl" mb={{ _: 10, md: 16 }}>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          lineHeight={{ _: 'shorter', md: 'base' }}
          color="blackAlpha.700"
        >
          {minorText}
        </Text>
      </Box>

      <Grid
        templateColumns={{ _: '1fr', md: 'repeat(4, 1fr)' }}
        gap={{ _: 10, md: 16 }}
      >
        {company.map(({ city, address, stateShort, stateLong, zipCode }) => {
          return (
            <Box>
              <Text fontSize="lg" fontWeight="semibold" mb={3}>
                {city}
              </Text>
              <Text color="blackAlpha.600" lineHeight="shorter" mb={2}>
                {address}
              </Text>
              <Text color="blackAlpha.600" lineHeight="shorter">
                {stateLong},&ensp;{stateShort}&ensp;{zipCode}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
