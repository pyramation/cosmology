import React from 'react';
import { Flex, Text, Box, Icon, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const DataDisplayStat3 = ({ title, stats }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Text fontSize="xl" fontWeight="semibold" color="blue.700" mb={8}>
        {title}
      </Text>
      <Grid
        gridTemplateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}
        borderRadius="md"
        boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.25)"
      >
        {stats.map(({ id, headline, data, text, tag }) => {
          const last = stats.length;
          return (
            <Flex
              justifyContent="space-between"
              alignItems="end"
              flexWrap="wrap"
              borderRight={{ md: last !== id && '1px solid #E2E8F0' }}
              borderBottom={{
                _: last !== id && '1px solid #E2E8F0',
                md: 'none'
              }}
              p={6}
            >
              <Box>
                <Text fontSize="sm" fontWeight="medium" color="blue.400" mt={2}>
                  {headline}
                </Text>
                <Flex alignItems="end" flexWrap="wrap" my={2}>
                  <Text
                    fontSize="3xl"
                    fontWeight="semibold"
                    color="blue.900"
                    mr={2}
                  >
                    {data}
                  </Text>
                  <Text fontSize="sm" color="blue.200">
                    {text}
                  </Text>
                </Flex>
              </Box>
              <Flex
                backgroundColor={`${tag.color}.100`}
                borderRadius="2rem"
                alignItems="center"
                p={2}
                my={2}
              >
                <Icon
                  name={tag.icon}
                  color={`palette.${tag.color}.base`}
                  size={4}
                  mr={1}
                />
                <Text color={`palette.${tag.color}.base`} fontSize="sm">
                  {tag.text}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
