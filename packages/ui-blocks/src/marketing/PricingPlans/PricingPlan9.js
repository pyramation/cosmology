import React from 'react';
import { Box, Flex, Text, Icon, Button, Grid, Tag } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PricingPlan9 = ({ majorWords, subTitle, packages }) => {
  return (
    <Box py={{ _: 12, md: 24 }}>
      <NavBarWidthWrapper>
        <Text
          fontSize={{ _: '4xl', md: '5xl', lg: '6xl' }}
          fontWeight="extrabold"
          letterSpacing="wide"
          mb={{ _: 5, md: 6, lg: 8 }}
        >
          {majorWords}
        </Text>
        <Box maxWidth="4xl" mb={{ _: 10, md: 16, lg: 24 }}>
          <Text
            fontSize={{ _: 'lg', md: 'xl', lg: '2xl' }}
            color="blackAlpha.600"
            letterSpacing="wide"
            lineHeight="shorter"
          >
            {subTitle}
          </Text>
        </Box>
        <Grid
          templateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}
          columnGap={8}
          rowGap={12}
        >
          {packages.map(
            ({ id, name, price, per, desc, button, features, badge }) => {
              return (
                <Grid
                  position="relative"
                  templateRows={{
                    md: 'auto auto minmax(max-content, 1fr) 5fr auto',
                    lg: 'auto auto minmax(max-content, 1fr) 4fr auto'
                  }}
                  borderRadius="md"
                  border="1px solid #ccc"
                  rowGap={4}
                  alignItems={{ _: 'center', md: 'start' }}
                  px={{ _: 6, md: 8 }}
                  pt={{ _: 10, md: 12 }}
                  pb={10}
                >
                  {badge && (
                    <Tag
                      position="absolute"
                      top={-12}
                      left={6}
                      px={5}
                      borderRadius="lg"
                      color="palette.primary.base"
                    >
                      <Text
                        color="inherit"
                        fontSize="inherit"
                        fontWeight="semibold"
                      >
                        {badge.text}
                      </Text>
                    </Tag>
                  )}
                  <Text fontSize="lg" fontWeight="bold">
                    {name}
                  </Text>
                  <Flex alignItems="end" pb={2}>
                    <Text fontSize="5xl" fontWeight="extrabold" mr={1}>
                      {price}
                    </Text>
                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      mb={2}
                    >
                      {per}
                    </Text>
                  </Flex>
                  <Text
                    letterSpacing="wide"
                    lineHeight="shorter"
                    color="blackAlpha.700"
                    mb={{ _: 4, md: 0 }}
                  >
                    {desc}
                  </Text>
                  <Box mb={6}>
                    {features.map(({ id, icon, text }) => {
                      const last = features.length;
                      return (
                        <Flex alignItems="center" pb={last !== id ? 5 : 0}>
                          <Icon
                            name={icon}
                            color="palette.success.light"
                            size={5}
                            mr={4}
                          />
                          <Text
                            color="blackAlpha.600"
                            lineHeight="shorter"
                            letterSpacing="wide"
                          >
                            {text}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Box>
                  <Button
                    variant={button.variant}
                    intent={button.intent}
                    py={6}
                  >
                    {button.text}
                  </Button>
                </Grid>
              );
            }
          )}
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
