import React from 'react';
import { Box, Link, Flex, Button, Text, Heading } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Hero4 = ({
  video,
  links,
  majorWords,
  minorWords,
  description,
  height,
  invertedText
}) => {
  return (
    <Flex
      height="full"
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="full"
      height={height}
    >
      <Box overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          width="full"
          height="full"
          backgroundColor="gray.800"
        ></Box>
        {video.map(({ src, autoPlay, loop, muted, controls }) => {
          return (
            <Box
              display="block"
              position="absolute"
              top={0}
              left={0}
              width="full"
              height="full"
              style={{ objectFit: 'cover' }}
              as="video"
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              src={src}
              controls={controls}
            ></Box>
          );
        })}
      </Box>
      <Box position="relative" zIndex={10}>
        <NavBarWidthWrapper>
          <Box px={4}>
            <Heading
              as="h1"
              fontSize={{ _: '5xl', md: '6xl' }}
              textAlign="center"
              verticalAlign="middle"
              color={invertedText ? 'white' : 'black'}
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
                color={invertedText ? 'white' : 'black'}
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
                  <Link href={href} width="full" mr={{ md: id === 1 ? 4 : 0 }}>
                    <Button
                      bg={bg}
                      variant={variant}
                      style={{ width: '100%' }}
                      mt={{ _: id === 2 ? 4 : 0, md: 0 }}
                      py={6}
                    >
                      <Text
                        color={color ? color : 'inherit'}
                        fontSize="xs"
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
  );
};
