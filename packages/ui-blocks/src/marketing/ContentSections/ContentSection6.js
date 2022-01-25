import React from 'react';
import { Box, Flex, Text, Link, Icon, Grid } from '@webql/core';
import { LogoDefault, QuoteRight1 } from '../svg';

export const ContentSection6 = ({
  majorText,
  content1,
  content2,
  content3,
  statistics,
  link,
  logoAttr,
  card
}) => {
  return (
    <Box px={4} py={{ _: 8, lg: 12 }}>
      <Grid templateColumns={{ lg: '1fr 1fr' }} columnGap={12} rowGap={10}>
        <Flex
          justifyContent="center"
          position="relative"
          px={{ lg: 10 }}
          py={{ lg: 20 }}
        >
          <Box
            display={{ _: 'none', lg: 'block' }}
            position="absolute"
            top={0}
            left={0}
            zIndex={-5}
            backgroundColor="blackAlpha.50"
            borderRadius="0 16px 16px 0"
            height="full"
            width="40%"
          ></Box>
          <Box
            display={{ _: 'none', lg: 'block' }}
            position="absolute"
            top={8}
            right={0}
            zIndex={-5}
            backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
            backgroundPosition="0 0"
            backgroundSize="20px 20px"
            width="70%"
            height="full"
            maxHeight="sm"
          ></Box>

          <Flex
            alignItems="end"
            position="relative"
            backgroundImage={`url(${card.backgroundImage})`}
            backgroundSize="cover"
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
            borderRadius="lg"
            overflow="hidden"
            height="full"
            maxHeight={{ lg: 'lg' }}
            p={6}
          >
            <Box
              position="absolute"
              background="linear-gradient(rgba(1,161,255,0.30) 0%, rgba(1,161,255,1) 100%)"
              top={0}
              left={0}
              width="full"
              height="full"
            ></Box>
            <Box position="relative" zIndex={5}>
              <Flex alignItems="center" p={4} pb={6}>
                <Box width={10} height={10} mr={2}>
                  {logoAttr ? (
                    <Image width="full" height="full" src={logoAttr.logo} />
                  ) : (
                    <LogoDefault width="full" height="full" fill="#FFFFFF" />
                  )}
                </Box>
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    letterSpacing="wide"
                    color="white"
                  >
                    {card.brand}
                  </Text>
                </Box>
              </Flex>
              <Box position="relative" p={4}>
                <Box position="absolute" mt={-2} ml={-3} width={8}>
                  <QuoteRight1 fill="rgba(255, 255, 255, 0.16)" width="full" />
                </Box>
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  lineHeight="short"
                  color="whiteAlpha.800"
                >
                  {card.content}
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Box py={{ lg: 20 }}>
          <Text fontSize={{ _: '3xl', md: '4xl' }} fontWeight="bold" mb={6}>
            {majorText}
          </Text>
          <Text
            fontSize={{ _: 'lg', md: 'xl' }}
            letterSpacing="wide"
            lineHeight={{ _: 'short', md: 'base' }}
            color="blackAlpha.600"
            mb={6}
          >
            {content1}
          </Text>
          <Text
            fontSize={{ md: 'lg' }}
            letterSpacing="wide"
            lineHeight={{ _: 'short', md: 'base' }}
            color="blackAlpha.600"
            mb={6}
          >
            {content2}
          </Text>
          <Text
            fontSize={{ md: 'lg' }}
            letterSpacing="wide"
            lineHeight={{ _: 'short', md: 'base' }}
            color="blackAlpha.600"
            mb={12}
          >
            {content3}
          </Text>
          <Grid
            templateColumns={{ _: '1fr', md: '1fr 1fr' }}
            columnGap={8}
            mb={2}
          >
            {statistics.map(({ header, text }) => {
              return (
                <Box borderTop="2px solid" borderColor="blackAlpha.400" py={8}>
                  <Text fontSize="lg" mb={2}>
                    {header}
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold">
                    {text}
                  </Text>
                </Box>
              );
            })}
          </Grid>
          <Link href={link.href} color>
            <Flex alignItems="center">
              <Text color="inherit" mr={1}>
                {link.text}
              </Text>
              <Icon name={link.icon} size={5} />
            </Flex>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};
