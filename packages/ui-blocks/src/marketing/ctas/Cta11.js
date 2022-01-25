import React from 'react';
import { Flex, Text, Box, Button, Link, Grid } from '@webql/core';

export const Cta11 = ({ title, desc, link, bgColor, img }) => {
  return (
    <Grid
      templateColumns={{ md: '1fr 2fr' }}
      alignItems="center"
      py={{ md: 12 }}
      pr={{ md: 16, lg: 32 }}
    >
      <Box
        position="relative"
        left={{ md: 16, lg: 32 }}
        zIndex={50}
        width="full"
        minWidth={{ md: 'xs', lg: 'sm' }}
        height={{ _: 'xs', md: 'xs', lg: 'md' }}
        borderRadius={{ md: 'lg' }}
        backgroundImage={`url(${img})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        boxShadow={{ md: '-5px 8px 15px #6a6a6a4d' }}
      ></Box>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        borderRadius={{ md: 'lg' }}
        bg={bgColor}
        height={{ md: 'xl', lg: '2xl' }}
        pl={{ _: 6, md: 24, lg: 40 }}
        pr={{ _: 6, md: 8, lg: 10 }}
        py={{ _: 16, md: 4 }}
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          zIndex={5}
          backgroundImage="radial-gradient(rgba(255, 255, 255, 0.16) 15%, transparent 20%)"
          backgroundPosition="0 0"
          backgroundSize="30px 24px"
          width="full"
          maxWidth={{ _: 32, md: 40, lg: 48 }}
          height={{ _: '40%', md: '50%', lg: '60%' }}
        ></Box>
        <Box
          position="absolute"
          left={0}
          bottom={0}
          zIndex={5}
          backgroundImage="radial-gradient(rgba(255, 255, 255, 0.16) 15%, transparent 20%)"
          backgroundPosition="0 0"
          backgroundSize="30px 24px"
          width="full"
          maxWidth={{ _: 32, md: 40, lg: '30%' }}
          height={{ _: '30%', md: '40%', lg: '50%' }}
        ></Box>
        <Box maxWidth={{ md: 'sm', lg: 'xl' }}>
          <Text
            color="white"
            fontSize={{ _: '3xl', md: '4xl' }}
            fontWeight="bold"
            mb={4}
          >
            {title}
          </Text>
          <Text
            color="white"
            fontSize={{ _: 'md', md: 'lg' }}
            fontWeight="light"
            letterSpacing="wide"
            lineHeight="shorter"
            mb={6}
          >
            {desc}
          </Text>
          <Box>
            <Link href={link.href}>
              <Button bg={link.bg} color={link.color} py={6}>
                <Text color="inherit" mx={{ _: 2, md: 4 }}>
                  {link.text}
                </Text>
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
};
