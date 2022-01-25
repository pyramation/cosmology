import React from 'react';
import { Flex, Text, Box, Image, Icon, Heading } from '@webql/core';

export const Stat3 = ({
  majorText,
  description,
  icon,
  stats,
  backgroundImage,
  shift
}) => {
  return (
    <Flex
      py={8}
      alignItems="center"
      flexDirection={{
        _: shift ? 'column-reverse' : 'column',
        lg: shift ? 'row-reverse' : 'row'
      }}
    >
      <Box flexGrow={1} mt={{ _: shift ? 12 : 0, lg: 0 }}>
        <Image src={backgroundImage} />
      </Box>
      <Box
        maxWidth={{ _: 'full', lg: '50%' }}
        px={8}
        mt={{ _: shift ? 0 : 12, lg: 0 }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          backgroundColor="palette.primary.base"
          width={12}
          height={12}
        >
          <Icon name={icon} color="white" size={5} />
        </Flex>
        <Heading as="h1" py={6}>
          {majorText}
        </Heading>
        <Text color="blue.600" letterSpacing="wide" lineHeight="base">
          {description}
        </Text>
        <Flex flexDirection={{ _: 'column', md: 'row' }}>
          {stats.map(({ id, title, desc }) => {
            return (
              <Box pt={6} mr={{ md: 16 }}>
                <Heading as="h1" textAlign="center">
                  {title}
                </Heading>
                <Text fontSize="lg" color="blue.600" textAlign="center" mt={3}>
                  {desc}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
