import React from 'react';
import { Flex, Box, Button, Heading, Icon, Link, Text } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading5 = ({ title, background, breadcrumbs, buttons }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Box borderRadius="md" backgroundColor={background} p={6}>
        <Flex flexWrap="wrap" mb={2}>
          {breadcrumbs.map(({ id, text, href }) => {
            const last = breadcrumbs.length;
            return (
              <Flex alignItems="center" mb={1}>
                <Link href={href} mr={last !== id && 4}>
                  <Text color="whiteAlpha.500">{text}</Text>
                </Link>
                {last !== id && (
                  <Icon name="chevron-right" color="whiteAlpha.600" mr={4} />
                )}
              </Flex>
            );
          })}
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems={{ _: 'start', md: 'center' }}
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Heading as="h2" size="xl" color="white" mb={{ _: 4, md: 0 }}>
            {title}
          </Heading>
          <Flex>
            {buttons.map(({ id, text, variant, bg }) => {
              const last = buttons.length;
              return (
                <Box mr={id !== last && 4}>
                  <Button variant={variant} bg={bg} py={6}>
                    <Text color="inherit" letterSpacing="wide" mx={4}>
                      {text}
                    </Text>
                  </Button>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    </NavBarWidthWrapper>
  );
};
