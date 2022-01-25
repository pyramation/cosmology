import React from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Heading,
  Button,
  Stack,
  Divider,
  Icon
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PricingPlan3 = ({ title, subText, plan }) => {
  return (
    <Box>
      <Box
        pt={32}
        pb={56}
        backgroundColor="gray.50"
        px={{ _: 6, lg: 8 }}
        mx="auto"
      >
        <Heading
          as="h1"
          fontSize="4xl"
          textAlign="center"
          color="blackAlpha.800"
        >
          {title}
        </Heading>
        <Text textAlign="center" color="blackAlpha.700" mt={3}>
          {subText}
        </Text>
      </Box>
      <NavBarWidthWrapper>
        <Flex position="relative" justifyContent="center" top="-11rem" mx={4}>
          <Box boxShadow="0 10px 15px -3px rgb(0 0 0 / 10%)" width="full">
            <Flex flexDirection={{ _: 'column', lg: 'row' }}>
              <Box
                py={8}
                pl={8}
                pr={{ _: 8, lg: 16 }}
                backgroundColor="white"
                borderRadius={{ _: '8px 8px 0 0', lg: '8px 0 0 8px' }}
                flexGrow={1}
              >
                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                  {plan.name}
                </Text>
                <Text
                  fontSize="sm"
                  color="blackAlpha.700"
                  lineHeight="base"
                  mb={6}
                >
                  {plan.description}
                </Text>
                <Flex mb={6}>
                  <Text
                    fontSize="sm"
                    color="palette.primary.base"
                    fontWeight="medium"
                  >
                    {plan.separatorText}
                  </Text>
                  <Box ml={2} flexGrow={1}>
                    <Divider />
                  </Box>
                </Flex>
                <Flex
                  justifyContent="space-between"
                  flexDirection={{ _: 'column', lg: 'row' }}
                  mt={8}
                >
                  {plan.sets.map(({ id, features }) => {
                    return (
                      <Box key={id}>
                        {features.map(({ id, icon, text }) => {
                          return (
                            <Flex key={id} alignItems="center" mb={8}>
                              <Icon name={icon} mr={3} color="green.300"></Icon>
                              <Text fontSize="sm" color="blackAlpha.700">
                                {text}
                              </Text>
                            </Flex>
                          );
                        })}
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
              <Flex
                py={{ _: 12, lg: 0 }}
                px={12}
                justifyContent="center"
                alignItems="center"
                backgroundColor="gray.100"
                borderRadius={{ _: '0 0 8px 8px', lg: '0 8px 8px 0' }}
              >
                <Box minWidth={{ _: 'full', lg: '2xs' }}>
                  <Text fontSize="lg" fontWeight="bold" textAlign="center">
                    {plan.planTitle}
                  </Text>
                  <Flex justifyContent="center" alignItems="center" my={5}>
                    <Text fontSize="5xl" fontWeight="bold">
                      {plan.currencySymbol}
                    </Text>
                    <Text fontSize="5xl" fontWeight="bold" pr={2}>
                      {plan.price}
                    </Text>
                    <Text color="blackAlpha.700">{plan.currency}</Text>
                  </Flex>
                  <Link
                    href={plan.policyLink.href}
                    textAlign="center"
                    underline
                  >
                    <Text fontSize="sm" color="blackAlpha.700">
                      {plan.policyLink.text}
                    </Text>
                  </Link>
                  <Stack
                    inline
                    boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%)"
                    my={5}
                    mx={-4}
                  >
                    <Button
                      style={{ width: '100%' }}
                      variant={plan.button.variant}
                      bg={plan.button.backgroundColor}
                    >
                      <Text fontSize="sm" color={plan.button.textColor}>
                        {plan.button.text}
                      </Text>
                    </Button>
                  </Stack>
                  <Text fontSize="sm" textAlign="center" fontWeight="medium">
                    {plan.extra}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
