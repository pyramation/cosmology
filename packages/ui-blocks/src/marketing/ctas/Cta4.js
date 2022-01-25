import React from 'react';
import { Box, Flex, Text, Link, Button, Heading, Icon } from '@webql/core';

export const Cta4 = ({
  majorText,
  minorText,
  description,
  link,
  backgroundImage,
  shift,
  mode
}) => {
  return (
    <Flex
      flexDirection={{
        _: shift ? 'column-reverse' : 'column',
        lg: shift ? 'row-reverse' : 'row'
      }}
    >
      <Box
        flexGrow={1}
        minHeight="xs"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
      ></Box>
      <Flex
        maxWidth={{ lg: '50%' }}
        backgroundColor={mode ? 'blackAlpha.800' : 'whiteAlpha.900'}
        alignItems="center"
      >
        <Box py={{ _: 24, lg: 32 }} px={8}>
          <Text color={mode ? 'white' : 'blue.800'} fontWeight="semibold">
            {minorText}
          </Text>
          <Heading
            as="h1"
            fontSize="5xl"
            color={mode ? 'white' : 'blue.700'}
            my={2}
          >
            {majorText}
          </Heading>
          <Text color={mode ? 'white' : 'blue.600'} lineHeight="base" mb={5}>
            {description}
          </Text>
          <Link href={link.href}>
            <Button variant={link.variant} intent={link.intent} size="lg">
              <Text fontSize="sm" fontWeight="medium" color="inherit" mr={2}>
                {link.text}
                <Icon name={link.icon} color="inherit" size={4} ml={3} />
              </Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
