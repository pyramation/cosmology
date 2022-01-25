import React from 'react';
import { Box, Flex, Text, Link, Button } from '@webql/core';

export const Cta2 = ({ text, description, links }) => {
  return (
    <Box backgroundColor="blue.300">
      <Flex justifyContent="center" alignItems="center" py={12} px={16}>
        <Box maxWidth="md">
          <Text
            color="white"
            fontSize="2xl"
            fontWeight="normal"
            textAlign="center"
            my={5}
          >
            {text}
          </Text>
          <Text color="white" textAlign="center" lineHeight="base">
            {description}
          </Text>
          <Flex
            flexDirection={{ _: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
            mt={6}
          >
            {links.map(
              ({
                id,
                href,
                text,
                textColor,
                backgroundColor,
                intent,
                variant
              }) => {
                const last = links.length;
                return (
                  <Link
                    id={id}
                    href={href}
                    width="full"
                    mb={{ _: 4, md: 0 }}
                    mr={{ md: id !== last && 4 }}
                  >
                    <Button
                      style={{ width: '100%' }}
                      variant={variant}
                      intent={intent}
                      bg={backgroundColor}
                      size="lg"
                    >
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        textAlign="center"
                        color={textColor ? textColor : 'inherit'}
                        px={8}
                      >
                        {text}
                      </Text>
                    </Button>
                  </Link>
                );
              }
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
