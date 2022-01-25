import React from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Heading,
  Button,
  Grid,
  Stack
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PricingPlan2 = ({
  title,
  subText,
  description,
  packages,
  links
}) => {
  return (
    <Box pb={24}>
      <NavBarWidthWrapper>
        <Grid
          templateColumns={{
            _: '1fr',
            lg: '1fr 1fr'
          }}
          columnGap={8}
          flexWrap="wrap"
        >
          <Box maxWidth={{ _: 'full', lg: 'xl' }} px={5} mt={24}>
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              color="blackAlpha.600"
              mb={1}
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {subText}
            </Text>
            <Heading
              color="blackAlpha.800"
              fontSize="5xl"
              mb={2}
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {title}
            </Heading>
            <Text
              color="blackAlpha.700"
              lineHeight="base"
              textAlign={{ _: 'center', lg: 'start' }}
              mb={6}
            >
              {description}
            </Text>
            <Stack
              inline
              wrap
              justifyContent={{ _: 'center', lg: 'start' }}
              space={4}
            >
              {links.map(({ id, variant, text, href }) => {
                return (
                  <Link href={href}>
                    <Button variant={variant} py={6}>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="inherit"
                        px={6}
                      >
                        {text}
                      </Text>
                    </Button>
                  </Link>
                );
              })}
            </Stack>
          </Box>
          <Box mt={24}>
            <Grid
              templateColumns={{
                _: '1fr',
                md: '1fr 1fr'
              }}
              columnGap={8}
              flexWrap="wrap"
              justifyContent="center"
            >
              {packages.map(
                ({
                  id,
                  name,
                  expireCode,
                  currency,
                  price,
                  cardBackground,
                  modules,
                  button
                }) => {
                  return (
                    <Box
                      px={8}
                      py={12}
                      mb={{ _: 12, md: 0 }}
                      borderRadius="sm"
                      border="1px solid"
                      borderColor="blackAlpha.100"
                      minWidth={48}
                      backgroundColor={cardBackground}
                    >
                      <Text fontWeight="bold" color="accent" mt={4}>
                        {name}
                      </Text>
                      <Flex mt={4}>
                        <Text fontSize="3xl" fontWeight="bold" pr={2}>
                          {currency}
                        </Text>
                        <Text fontSize="3xl" fontWeight="bold" pr={2}>
                          {price}
                        </Text>
                        <Text fontSize="3xl" fontWeight="bold">
                          {expireCode}
                        </Text>
                      </Flex>
                      {modules.map(({ id, title, features }) => {
                        return (
                          <Box mt={6}>
                            <Text
                              fontSize="sm"
                              fontWeight="bold"
                              color="accent"
                            >
                              {title}
                            </Text>
                            <Box mt={2}>
                              {features.map(({ text }) => {
                                return (
                                  <Text
                                    fontSize="sm"
                                    py={2}
                                    color="blackAlpha.800"
                                  >
                                    {text}
                                  </Text>
                                );
                              })}
                            </Box>
                          </Box>
                        );
                      })}
                      <Flex
                        justifyContent={{
                          _: 'start',
                          lg: 'center'
                        }}
                      >
                        <Button mt={5} py={6} variant={button.variant}>
                          <Text
                            fontSize="sm"
                            fontSize="semibold"
                            color="inherit"
                            px={6}
                          >
                            {button.text}
                          </Text>
                        </Button>
                      </Flex>
                    </Box>
                  );
                }
              )}
            </Grid>
          </Box>
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
