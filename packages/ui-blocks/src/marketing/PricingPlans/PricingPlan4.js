import React, { useState } from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Heading,
  Button,
  Stack,
  Icon,
  Grid,
  Tag
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PricingPlan4 = ({
  subtitle,
  majorText,
  minorText,
  packages,
  cta
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Box>
      <Box
        pt={32}
        pb={64}
        backgroundColor="blackAlpha.800"
        px={{ _: 6, lg: 8 }}
        mx="auto"
      >
        <Text fontSize="lg" textAlign="center" color="white">
          {subtitle}
        </Text>
        <Heading as="h1" fontSize="4xl" textAlign="center" color="white" mb={3}>
          {majorText}
        </Heading>
        <Text textAlign="center" color="white">
          {minorText}
        </Text>
      </Box>
      <NavBarWidthWrapper>
        <Grid
          position="relative"
          top="-11rem"
          templateColumns={{
            _: '1fr',
            md: '1fr 1fr'
          }}
          rowGap={16}
          columnGap={{ md: 8, lg: 12 }}
        >
          {packages.map(
            ({
              id,
              badgeText,
              badgeColor,
              currency,
              price,
              expireCode,
              description,
              features,
              button
            }) => {
              return (
                <Box
                  boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%)"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <Box backgroundColor="white" p={8}>
                    <Tag
                      borderRadius={20}
                      fontSize="sm"
                      fontWeight="semibold"
                      color={`palette.${badgeColor}.base`}
                      px={4}
                      py={2}
                    >
                      {badgeText}
                    </Tag>
                    <Flex alignItems="end" my={4}>
                      <Text fontSize="6xl" fontWeight="bold">
                        {currency}
                      </Text>
                      <Text fontSize="6xl" fontWeight="bold" mr={1}>
                        {price}
                      </Text>
                      <Text color="blackAlpha.700" fontSize="sm" pb={3}>
                        {expireCode}
                      </Text>
                    </Flex>
                    <Text
                      color="blackAlpha.700"
                      fontSize="sm"
                      lineHeight="base"
                    >
                      {description}
                    </Text>
                  </Box>
                  <Box p={8} backgroundColor="blackAlpha.100">
                    {features.map(({ id, text, icon }) => {
                      return (
                        <Flex alignItems="center" mb={6}>
                          <Icon name={icon} mr={3} color="green.500"></Icon>
                          <Text fontSize="sm" color="blackAlpha.700">
                            {text}
                          </Text>
                        </Flex>
                      );
                    })}
                    <Stack mb={8}>
                      <Button
                        style={{ width: '100%' }}
                        variant={button.variant}
                        bg={button.backgroundColor}
                      >
                        <Text fontSize="sm" color={button.textColor}>
                          {button.text}
                        </Text>
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              );
            }
          )}
        </Grid>
        <Flex
          position="relative"
          top="-7rem"
          borderRadius="md"
          backgroundColor="blackAlpha.50"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          p={8}
          mx={{ _: 4, md: 12, lg: 8 }}
        >
          <Box maxWidth="3xl">
            <Tag
              backgroundColor="white"
              borderRadius={20}
              fontSize="sm"
              fontWeight="medium"
              color="black"
              px={4}
              py={2}
            >
              {cta.badgeText}
            </Tag>
            <Text
              color="blackAlpha.700"
              fontSize="md"
              fontWeight="medium"
              lineHeight="base"
              my={4}
            >
              {cta.text}
            </Text>
          </Box>
          <Box>
            <Link href={cta.link.href}>
              <Box
                style={{
                  transition: 'all 0.5s linear'
                }}
                backgroundColor={hover ? 'blackAlpha.900' : 'white'}
                borderRadius="sm"
                boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%)"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                <Text
                  color={hover ? 'white' : 'blackAlpha.900'}
                  fontSize="sm"
                  fontWeight="medium"
                  textAlign="center"
                  lineHeight="base"
                  px={6}
                  py={3}
                >
                  {cta.link.text}
                </Text>
              </Box>
            </Link>
          </Box>
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
