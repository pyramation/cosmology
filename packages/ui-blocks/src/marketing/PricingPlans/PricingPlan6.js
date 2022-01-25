import React from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Button,
  Icon,
  Grid,
  Divider
} from '@webql/core';

export const PricingPlan6 = ({
  majorText,
  minorText,
  desc,
  link,
  subhead,
  header,
  headerSection,
  listLeft,
  listRight
}) => {
  return (
    <Box py={{ _: 10, md: 16 }} px={{ _: 4, md: 8, lg: 16 }}>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Box mr={4} py={2}>
          <Text fontSize={{ _: '4xl', md: '5xl' }} fontWeight="bold" mb={4}>
            {majorText}{' '}
            <Text as="span" fontSize="inherit" color="palette.primary.base">
              {minorText}
            </Text>
          </Text>
          <Text
            fontSize={{ _: 'lg', md: 'xl' }}
            letterSpacing="wide"
            color="blackAlpha.600"
            mb={2}
          >
            {desc}
          </Text>
        </Box>
        <Box py={2}>
          <Link href={link.href}>
            <Button py={6}>
              <Text color="inherit" mx={{ _: 2, md: 4 }}>
                {link.text}
              </Text>
            </Button>
          </Link>
        </Box>
      </Flex>
      <Divider mt={{ _: 6, md: 10, lg: 12 }} mb={{ _: 8, md: 10 }} />
      <Grid
        templateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}
        gap={{ md: 8, lg: 10 }}
      >
        <Box py={{ md: 4 }}>
          <Text
            fontSize="lg"
            fontWeight="medium"
            color="palette.primary.base"
            mb={4}
          >
            {subhead}
          </Text>
          <Text fontSize="3xl" fontWeight="bold" letterSpacing="wide" mb={5}>
            {header}
          </Text>
          <Text
            fontSize={{ _: 'md', md: 'lg' }}
            lineHeight={{ _: 'shorter', md: 'short' }}
            letterSpacing="wide"
            color="blackAlpha.600"
            mb={{ _: 4, md: 0 }}
          >
            {headerSection}
          </Text>
        </Box>
        <Box>
          {listLeft.map(({ id, icon, text }, i) => {
            const last = listLeft.length;
            return (
              <Flex
                id={id}
                borderBottom={{
                  _: '1px solid #E7E7ED',
                  md: last !== i + 1 ? '1px solid #E7E7ED' : 'none'
                }}
                alignItems={{ _: 'center', md: 'start' }}
                py={4}
              >
                <Icon
                  name={icon}
                  size={5}
                  color="palette.success.base"
                  mr={4}
                />
                <Text color="blackAlpha.700">{text}</Text>
              </Flex>
            );
          })}
        </Box>
        <Box>
          {listRight.map(({ id, icon, text }, i) => {
            const last = listLeft.length;
            return (
              <Flex
                id={id}
                borderBottom={last !== i + 1 && '1px solid #E7E7ED'}
                alignItems={{ _: 'center', md: 'start' }}
                py={4}
              >
                <Icon
                  name={icon}
                  size={5}
                  color="palette.success.base"
                  mr={4}
                />
                <Text color="blackAlpha.700">{text}</Text>
              </Flex>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
};
