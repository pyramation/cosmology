import React from 'react';
import { Box, Link, Flex, Button, Image, Text } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Hero1 = ({
  src,
  shift,
  majorWords,
  minorWords,
  description,
  links
}) => {
  return (
    <NavBarWidthWrapper>
      <Flex
        py={24}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        flexDirection={shift ? 'row-reverse' : 'row'}
      >
        <Box
          maxWidth={{ _: '2xs', sm: 'xl', lg: 'lg', xl: 'xl' }}
          ml={{ _: 0, lg: shift ? 6 : 0, xl: shift ? 24 : 0 }}
          mr={{ _: 0, lg: shift ? 0 : 6, xl: shift ? 0 : 24 }}
        >
          <Box mb={5}>
            <Text
              as="h1"
              fontSize={{ _: '4xl', lg: '5xl' }}
              textAlign={{ _: 'center', lg: 'start' }}
              style={{
                textDecoration: 'underline solid rgba(122, 220, 255) 0.75rem',
                textUnderlineOffset: '-0.75rem',
                textDecorationSkipInk: 'none'
              }}
            >
              {majorWords}
            </Text>
            <Text
              as="h1"
              fontSize={{ _: '4xl', lg: '5xl' }}
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {minorWords}
            </Text>
          </Box>
          <Box>
            <Text
              lineHeight="base"
              color="blackAlpha.700"
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {description}
            </Text>

            <Flex
              mt={6}
              maxWidth={{ md: 'sm' }}
              flexDirection={{ _: 'column', md: 'row' }}
              justifyContent="center"
              mx={{ _: 0, md: 'auto', lg: 0 }}
            >
              {links.map(({ id, href, text, variant }) => {
                return (
                  <Link
                    href={href}
                    width="full"
                    mr={{ md: id === 1 ? 4 : 0 }}
                    mt={{ _: id === 2 ? 4 : 0, md: 0 }}
                  >
                    <Button
                      variant={variant}
                      style={{
                        boxShadow: variant === 'primary' && 'none',
                        width: '100%'
                      }}
                      py={8}
                    >
                      <Text
                        as="h1"
                        color={variant === 'primary' && 'white'}
                        px={12}
                      >
                        {text}
                      </Text>
                    </Button>
                  </Link>
                );
              })}
            </Flex>
          </Box>
        </Box>
        <Box minWidth="md" display={{ _: 'none', lg: 'block' }} px={6}>
          <Image src={src} width="full"></Image>
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
