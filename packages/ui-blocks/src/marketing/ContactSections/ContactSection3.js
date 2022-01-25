import React from 'react';
import { Box, Flex, Text, Grid, Icon } from '@webql/core';

export const ContactSection3 = ({ contact }) => {
  return (
    <Flex justifyContent="center" px={{ _: 4, lg: 16 }} py={12}>
      <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }} gap={16}>
        {contact.map(({ title, desc, phone, businessHours, mail }) => {
          return (
            <Box>
              <Text fontSize="4xl" fontWeight="extrabold" mb={4}>
                {title}
              </Text>
              <Text
                fontSize="lg"
                lineHeight="short"
                color="blackAlpha.600"
                mb={8}
              >
                {desc}
              </Text>
              <Grid
                templateColumns="auto 1fr"
                alignItems="center"
                columnGap={3}
                rowGap={2}
              >
                <Icon name={phone.icon} color="blackAlpha.500" size={5} />
                <Text color="blackAlpha.500">{phone.number}</Text>
                <Box></Box>
                <Text color="blackAlpha.500" mb={6}>
                  {businessHours}
                </Text>
                <Icon name={mail.icon} color="blackAlpha.500" size={5} />
                <Text color="blackAlpha.500">{mail.email}</Text>
              </Grid>
            </Box>
          );
        })}
      </Grid>
    </Flex>
  );
};
