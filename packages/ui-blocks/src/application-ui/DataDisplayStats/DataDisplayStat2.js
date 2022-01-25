import React from 'react';
import { Flex, Text, Box, Icon, Grid, Link } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const DataDisplayStat2 = ({ title, stats }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Text fontSize="xl" fontWeight="semibold" color="blue.700" mb={8}>
        {title}
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        {stats.map(({ id, icon, headline, data, status, link }) => {
          return (
            <Grid
              borderRadius="md"
              gridTemplateRows="1fr auto"
              boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.25)"
            >
              <Flex alignItems="center" flexWrap="wrap" p={6}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="md"
                  backgroundColor="palette.primary.base"
                  p={4}
                  mr={4}
                  my={2}
                >
                  <Icon name={icon} color="white" size={5} />
                </Flex>
                <Box my={2}>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="blue.400"
                    mb={2}
                  >
                    {headline}
                  </Text>
                  <Flex alignItems="end" flexWrap="wrap">
                    <Text
                      fontSize="3xl"
                      fontWeight="semibold"
                      color="blue.900"
                      mr={2}
                    >
                      {data}
                    </Text>
                    <Flex alignItems="end">
                      <Icon
                        name={status.icon}
                        color={`palette.${status.color}.base`}
                        size={4}
                      />
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color={`palette.${status.color}.base`}
                      >
                        {status.text}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Box backgroundColor="blue.50" borderRadius="0 0 8px 8px" p={6}>
                <Link href={link.href} color>
                  {link.text}
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
