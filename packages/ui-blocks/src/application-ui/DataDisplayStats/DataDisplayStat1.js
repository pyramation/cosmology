import React from 'react';
import { Text, Box, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const DataDisplayStat1 = ({ title, stats }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Text fontSize="xl" fontWeight="semibold" color="blue.700" mb={8}>
        {title}
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        {stats.map(({ id, headline, data }) => {
          return (
            <Box
              borderRadius="md"
              boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.25)"
              p={6}
            >
              <Text fontSize="sm" fontWeight="medium" color="blue.500" mb={2}>
                {headline}
              </Text>
              <Text fontSize="3xl" fontWeight="semibold" color="blue.900">
                {data}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
