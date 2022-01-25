import React from 'react';
import { Box, Link, Flex, Button, Text, Heading } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Hero3 = ({
  backgroundImageSource,
  links,
  majorWords,
  minorWords,
  description,
  height
}) => {
  return (
    <Box
      position="relative"
      width="full"
      height={height}
      backgroundImage={`url(${backgroundImageSource})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
    >
      <Box
        backgroundImage="linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
          )"
        position="absolute"
        top={0}
        right={0}
        left={0}
        height="full"
      ></Box>
      <Flex height="full" justifyContent="center" alignItems="center">
        <Box position="relative" zIndex={10}>
          <NavBarWidthWrapper>
            <Box px={4}>
              <Heading
                as="h1"
                fontSize={{ _: '5xl', md: '6xl' }}
                textAlign="center"
                verticalAlign="middle"
                color="white"
              >
                {majorWords}
              </Heading>
              <Heading
                as="h1"
                fontSize={{ _: '5xl', md: '6xl' }}
                textAlign="center"
                verticalAlign="middle"
                color="palette.primary.base"
              >
                {minorWords}
              </Heading>
              <Box maxWidth={{ md: '2xl' }} my={5}>
                <Text
                  fontSize="xl"
                  letterSpacing="wide"
                  lineHeight="base"
                  textAlign="center"
                  verticalAlign="middle"
                  color="white"
                >
                  {description}
                </Text>
              </Box>
              <Flex
                maxWidth={{ md: 'xs' }}
                flexDirection={{ _: 'column', md: 'row' }}
                mx={{ _: 0, md: 'auto' }}
                px={{ _: 4, md: 0 }}
              >
                {links.map(({ id, href, text, variant, bg, color }) => {
                  return (
                    <Link
                      href={href}
                      width="full"
                      mr={{ md: id === 1 ? 4 : 0 }}
                    >
                      <Button
                        variant={variant}
                        bg={bg}
                        style={{ width: '100%' }}
                        mt={{ _: id === 2 ? 4 : 0, md: 0 }}
                        py={8}
                      >
                        <Text
                          color={color ? color : 'inherit'}
                          fontSize="sm"
                          fontWeight="semibold"
                        >
                          {text}
                        </Text>
                      </Button>
                    </Link>
                  );
                })}
              </Flex>
            </Box>
          </NavBarWidthWrapper>
        </Box>
      </Flex>
    </Box>
  );
};
