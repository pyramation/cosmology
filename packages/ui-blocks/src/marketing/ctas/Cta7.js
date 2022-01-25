import React from 'react';
import { Flex, Text, Box, Button, Link } from '@webql/core';

export const Cta7 = ({ title, subtitle, desc, link, bgColor, img }) => {
  return (
    <Box px={{ md: 8, lg: 24 }}>
      <Box
        bg={bgColor}
        overflow="hidden"
        borderRadius={{ md: 'md' }}
        pt={{ md: 20 }}
      >
        <Flex
          position="relative"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            width={{ md: '50%' }}
            pt={{ _: 16, md: 8 }}
            pb={16}
            pl={{ _: 8, md: 12, lg: 16 }}
            pr={{ _: 8, md: 10, lg: 20 }}
          >
            <Text
              fontSize={{ _: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="white"
              mb={2}
            >
              {title}
            </Text>
            <Text
              fontSize={{ _: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="white"
              mb={6}
            >
              {subtitle}
            </Text>
            <Text
              fontSize={{ _: 'lg', md: 'xl' }}
              fontWeight="medium"
              lineHeight="shorter"
              color="whiteAlpha.600"
              mb={8}
            >
              {desc}
            </Text>
            <Box>
              <Link href={link.href}>
                <Button bg={link.bg} color={link.color} py={6}>
                  <Text color="inherit" mx={4}>
                    {link.text}
                  </Text>
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            display={{ _: 'none', md: 'block' }}
            position="relative"
            right={-8}
            bottom={0}
            alignSelf="end"
            minWidth={64}
            flexGrow={1}
            height={{ md: 'xl', lg: 'lg' }}
            borderRadius="8px 0 0 0"
            boxShadow="0 0 4px #cccccc"
            backgroundImage={`url(${img})`}
            backgroundSize="cover"
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
          ></Box>
        </Flex>
      </Box>
    </Box>
  );
};
