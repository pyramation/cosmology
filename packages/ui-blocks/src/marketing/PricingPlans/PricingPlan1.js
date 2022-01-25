import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Link, Flex, Text, Heading, Button, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const pricingMoveCircle = keyframes`
 from {
    transform: translateX(0);
  }
  to {
    transform: translateX(120px);
  }
`;

const slideDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SliderBox = styled(slideDiv)`
  animation: ${pricingMoveCircle} 3s linear infinite;
`;

export const PricingPlan1 = ({
  majorWords,
  minorWords,
  subTitle,
  packages,
  barShow,
  barAnimation,
  cta
}) => {
  return (
    <Box py={24}>
      <NavBarWidthWrapper>
        <Box px={2}>
          <Text textAlign="center" color="blackAlpha.700" fontWeight="medium">
            {subTitle}
          </Text>
          <Flex justifyContent="center" my={4}>
            <Heading as="h1" textAlign="center" mr={2} color="blackAlpha.800">
              {minorWords.toUpperCase()}
            </Heading>
            <Heading as="h1" textAlign="center" color="palette.primary.base">
              {majorWords.toUpperCase()}
            </Heading>
          </Flex>
          {barShow && (
            <Flex justifyContent="center">
              <Flex
                position="relative"
                top={1}
                width={32}
                height={2}
                borderRadius="lg"
                backgroundColor="blue.100"
                justifyContent={barAnimation ? 'start' : 'center'}
              >
                {barAnimation ? (
                  <SliderBox>
                    <Box
                      position="absolute"
                      top={-6}
                      width={5}
                      height={5}
                      borderRadius={20}
                      backgroundColor="palette.primary.base"
                    ></Box>
                  </SliderBox>
                ) : (
                  <Box
                    position="absolute"
                    top={-6}
                    width={5}
                    height={5}
                    borderRadius={20}
                    backgroundColor="palette.primary.base"
                  ></Box>
                )}
              </Flex>
            </Flex>
          )}
        </Box>

        <Grid
          templateColumns={{
            _: '1fr',
            lg: 'repeat(3, 1fr)'
          }}
          flexWrap={{ _: 'noWrap', lg: 'wrap' }}
          justifyContent="center"
          mt={20}
          mb={{ _: 6, lg: 32 }}
          px={{ _: 4, lg: 0 }}
        >
          {packages.map(
            ({
              id,
              name,
              expiration,
              currency,
              price,
              button,
              features,
              badgeText,
              cardStyle
            }) => {
              return (
                <Box
                  backgroundColor={cardStyle.background}
                  border={cardStyle.border}
                  borderColor={cardStyle.borderColor}
                  position="relative"
                  px={8}
                  py={12}
                  mb={{ _: 16, lg: 0 }}
                  borderRadius="md"
                  top={{ _: 0, lg: cardStyle.top }}
                  left={{ _: 0, lg: cardStyle.left }}
                  right={{ _: 0, lg: cardStyle.right }}
                  zIndex={cardStyle.zIndex}
                >
                  <Flex justifyContent="center">
                    {badgeText && (
                      <Box
                        position="absolute"
                        top={-12}
                        backgroundColor="blackAlpha.800"
                        color="white"
                        textAlign="center"
                        fontWeight="medium"
                        borderRadius={24}
                        py={2}
                        px={6}
                        fontSize="sm"
                      >
                        {badgeText}
                      </Box>
                    )}
                  </Flex>
                  <Text
                    textAlign="center"
                    fontWeight="medium"
                    color={
                      cardStyle.textColor
                        ? cardStyle.textColor
                        : 'blackAlpha.800'
                    }
                  >
                    {name}
                  </Text>
                  <Flex justifyContent="center" my={4}>
                    <Heading
                      as="h1"
                      fontSize="6xl"
                      mr={4}
                      color={
                        cardStyle.textColor
                          ? cardStyle.textColor
                          : 'blackAlpha.800'
                      }
                      fontWeight="bold"
                    >
                      {currency}
                    </Heading>
                    <Heading
                      as="h1"
                      fontSize="6xl"
                      mr={4}
                      color={
                        cardStyle.textColor
                          ? cardStyle.textColor
                          : 'blackAlpha.800'
                      }
                      fontWeight="bold"
                    >
                      {price}
                    </Heading>
                  </Flex>
                  <Text
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="semibold"
                    color={cardStyle.textColor}
                  >
                    {expiration}
                  </Text>
                  <Flex justifyContent="center" mt={5}>
                    <Button
                      variant={button.variant}
                      intent={button.intent}
                      bg={button.bg}
                      color={button.color}
                      py={6}
                    >
                      <Text
                        fontSize="sm"
                        color="inherit"
                        fontWeight="semibold"
                        px={5}
                      >
                        {button.text}
                      </Text>
                    </Button>
                  </Flex>

                  <Flex justifyContent="center">
                    <Box mt={8}>
                      {features.map(({ text }) => {
                        return (
                          <Text color={cardStyle.textColor} mb={6}>
                            {text}
                          </Text>
                        );
                      })}
                    </Box>
                  </Flex>
                </Box>
              );
            }
          )}
        </Grid>
        <Flex justifyContent="center" pt={{ lg: 4 }} px={{ _: 8, lg: 16 }}>
          <Flex
            flexGrow={1}
            borderRadius="sm"
            px={8}
            py={6}
            backgroundColor="palette.primary.base"
            justifyContent="space-between"
            alignItems="center"
            flexWrap={{ _: 'wrap', lg: 'noWrap' }}
          >
            <Text color="white" my={2} mr={4}>
              {cta.text}
            </Text>
            <Link href={cta.link.href} my={2}>
              <Button bg={cta.link.bg} color={cta.link.color}>
                <Text fontSize="sm" fontWeight="medium" color="inherit" px={3}>
                  {cta.link.text}
                </Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
