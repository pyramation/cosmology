import React from 'react';
import { Flex, Box, Button, Heading, Icon, Link, Text } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading4 = ({ title, breadcrumbs, buttons }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Flex flexWrap="wrap" mb={2}>
        {breadcrumbs.map(({ id, text, href }) => {
          const last = breadcrumbs.length;
          return (
            <Flex alignItems="center" mb={1}>
              <Link href={href} color mr={last !== id && 4}>
                {text}
              </Link>
              {last !== id && (
                <Icon name="chevron-right" color="blue.300" mr={4} />
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
        <Heading as="h2" size="xl" mb={{ _: 4, md: 0 }}>
          {title}
        </Heading>
        <Flex>
          {buttons.map(({ id, text, variant }) => {
            const last = buttons.length;
            return (
              <Box mr={id !== last && 4}>
                <Button variant={variant} py={6}>
                  <Text color="inherit" mx={4}>
                    {text}
                  </Text>
                </Button>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </NavBarWidthWrapper>
  );
};
