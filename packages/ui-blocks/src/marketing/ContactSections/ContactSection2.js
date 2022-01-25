import React from 'react';
import { Box, Text, Grid } from '@webql/core';

export const ContactSection2 = ({
  contactHeader,
  contact,
  companyHeader,
  company
}) => {
  return (
    <Box px={{ _: 4, lg: 16 }} py={12}>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 2fr' }}
        columnGap={16}
        rowGap={10}
        borderBottom="2px solid #cccccc"
        pb={16}
      >
        <Box>
          <Text fontSize="4xl" fontWeight="extrabold">
            {contactHeader}
          </Text>
        </Box>
        <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }} gap={10}>
          {contact.map(({ title, email, phone }) => {
            return (
              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                  {title}
                </Text>
                <Text color="blackAlpha.500" mb={2}>
                  {email}
                </Text>
                <Text color="blackAlpha.500">{phone}</Text>
              </Box>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 2fr' }}
        columnGap={16}
        rowGap={10}
        pt={16}
      >
        <Box>
          <Text fontSize="4xl" fontWeight="extrabold">
            {companyHeader}
          </Text>
        </Box>
        <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }} gap={10}>
          {company.map(({ city, address, stateShort, stateLong, zipCode }) => {
            return (
              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                  {city}
                </Text>
                <Text lineHeight="short" color="blackAlpha.500" mb={2}>
                  {address},&ensp;{city}
                </Text>
                <Text color="blackAlpha.500">
                  {stateLong},&ensp;{stateShort}&ensp;{zipCode}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
