import React from 'react';
import { Box, Link, Flex, Text, Button, Icon, Grid } from '@webql/core';

export const PricingPlan7 = ({
  majorText,
  minorText,
  list1,
  list2,
  price1,
  price2,
  button,
  link
}) => {
  return (
    <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }}>
      <Box
        py={{ _: 10, md: 16 }}
        pl={{ _: 4, md: 8, lg: 16 }}
        pr={{ _: 4, md: 10, lg: 24 }}
      >
        <Text fontSize="lg" color="palette.primary.base" mb={4}>
          {majorText}
        </Text>
        <Text
          fontSize={{ _: '3xl', lg: '4xl' }}
          fontWeight="bold"
          mb={{ _: 6, md: 8, lg: 12 }}
        >
          {minorText}
        </Text>
        <Box>
          {list1.map(({ id, icon, title, text }, i) => {
            const last = list1.length;
            return (
              <Flex mb={{ _: last !== i + 1 && 8, lg: 10 }}>
                <Flex
                  maxWidth={12}
                  width="full"
                  height={12}
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="palette.primary.base"
                  borderRadius="sm"
                  p={3}
                  mr={4}
                >
                  <Icon name={icon} size={5} color="white" />
                </Flex>
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    color="blackAlpha.800"
                    mb={{ _: 2, lg: 3 }}
                  >
                    {title}
                  </Text>
                  <Text
                    lineHeight={{ _: 'shorter', md: 'short' }}
                    color="blackAlpha.600"
                  >
                    {text}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor="palette.primary.base"
        py={{ _: 10, md: 16 }}
      >
        <Box pr={{ _: 4, md: 8, lg: 16 }} pl={{ _: 4, md: 10, lg: 24 }}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            px={8}
            mb={{ _: 8, md: 12, lg: 16 }}
          >
            <Box>
              <Text
                fontSize={{ _: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="extrabold"
                textAlign="center"
                color="white"
                mb={2}
              >
                {price1.price}
              </Text>
              <Text textAlign="center" color="whiteAlpha.600">
                {price1.text}
              </Text>
            </Box>
            <Flex justifyContent="center" pt={{ _: 2, md: 4, lg: 6 }}>
              <Icon name="plus" color="whiteAlpha.700" size={6} />
            </Flex>
            <Box>
              <Text
                fontSize={{ _: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="extrabold"
                textAlign="center"
                color="white"
                mb={2}
              >
                {price2.price}
              </Text>
              <Text textAlign="center" color="whiteAlpha.600">
                {price2.text}
              </Text>
            </Box>
          </Grid>
          <Grid
            templateColumns={{ _: '1fr', lg: '1fr 1fr' }}
            gap={1}
            backgroundColor="transparent"
            borderRadius="md"
            overflow="hidden"
            mb={{ _: 10, md: 12, lg: 16 }}
          >
            {list2.map(({ id, icon, text }) => {
              return (
                <Flex
                  id={id}
                  alignItems="center"
                  backgroundColor="blackAlpha.200"
                  maxWidth={{ lg: 'xs' }}
                  width="full"
                  px={5}
                  py={3}
                >
                  <Icon
                    name={icon}
                    color="whiteAlpha.700"
                    size={5}
                    mr={{ _: 3, md: 4 }}
                  />
                  <Text color="whiteAlpha.800">{text}</Text>
                </Flex>
              );
            })}
          </Grid>
          <Box>
            <Button
              bg={button.bg}
              style={{ width: '100%' }}
              py={{ _: 6, lg: 8 }}
              mb={{ _: 5, md: 6, lg: 10 }}
            >
              <Text color={button.color}>{button.text}</Text>
            </Button>
            <Link href={link.href}>
              <Text color="whiteAlpha.900" textAlign="center">
                {link.text}
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
};
