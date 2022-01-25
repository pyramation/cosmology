import React from 'react';
import { Box, Flex, Text, Button, Avatar } from '@webql/core';
import { LogoDefault, QuoteRight1 } from '../svg';

export const ContentSection4 = ({
  majorText,
  minorText,
  content1,
  content2,
  unorderedLists,
  content3,
  header1,
  content4,
  buttons,
  logoAttr,
  card
}) => {
  return (
    <Box
      position="relative"
      backgroundColor="blackAlpha.50"
      px={{ _: 6, md: 8, lg: 10 }}
      py={{ _: 8, lg: 10 }}
    >
      <Box width="full" maxWidth="4xl">
        <Text color="palette.primary.base" letterSpacing="wide" mb={4}>
          {minorText}
        </Text>
        <Text fontSize={{ _: '4xl', md: '5xl' }} fontWeight="bold" mb={8}>
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
      </Box>
      <Flex position="relative" flexDirection={{ _: 'column', md: 'row' }}>
        <Box maxWidth="3xl" pr={{ md: 8 }}>
          <Text
            fontSize={{ md: 'lg' }}
            letterSpacing="wide"
            lineHeight={{ _: 'short', md: 'base' }}
            color="blackAlpha.600"
            mb={6}
          >
            {content2}
          </Text>
          {unorderedLists.map((text, i) => {
            const last = unorderedLists.length;
            return (
              <Flex alignItems="center" mb={last === i + 1 ? 6 : 3}>
                <Box
                  width="6px"
                  height="6px"
                  minWidth="6px"
                  backgroundColor="blackAlpha.400"
                  borderRadius="round"
                  mr={4}
                ></Box>
                <Text
                  fontSize={{ md: 'lg' }}
                  letterSpacing="wide"
                  lineHeight="short"
                  color="blackAlpha.600"
                >
                  {text}
                </Text>
              </Flex>
            );
          })}
          <Text
            fontSize={{ md: 'lg' }}
            letterSpacing="wide"
            lineHeight={{ _: 'short', md: 'base' }}
            color="blackAlpha.600"
            mb={12}
          >
            {content3}
          </Text>
        </Box>
        <Box
          flexGrow={1}
          height="fit-content"
          borderRadius="lg"
          boxShadow="0 5px 10px #b9b9b9"
          overflow="hidden"
          mb={12}
        >
          <Box
            backgroundColor={card.backgroundTop}
            px={{ _: 6, md: 10 }}
            pt={8}
            pb={{ _: 8, md: 16 }}
          >
            <Flex alignItems="center" mb={8}>
              <Box width={10} height={10} mr={2}>
                {logoAttr ? (
                  <Image width="full" height="full" src={logoAttr.logo} />
                ) : (
                  <LogoDefault width="full" height="full" fill="#01A1FF" />
                )}
              </Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                letterSpacing="wide"
                color="palette.primary.base"
              >
                {card.brand}
              </Text>
            </Flex>
            <Box position="relative">
              <Box position="absolute" mt={-2} ml={-3} width={8}>
                <QuoteRight1 fill="rgba(0, 0, 0, 0.04)" width="full" />
              </Box>
              <Text
                fontSize="lg"
                fontWeight="semibold"
                lineHeight="short"
                color="blackAlpha.700"
              >
                {card.content}
              </Text>
            </Box>
          </Box>
          <Flex
            backgroundColor={card.backgroundBottom}
            alignItems="center"
            px={{ _: 6, md: 10 }}
            py={3}
          >
            <Avatar
              alignSelf="end"
              src={card.author.avatar}
              minWidth={{ _: 16, md: 20 }}
              size={{ _: 16, md: 20 }}
              mt={{ md: '-2.75rem' }}
              mr={4}
            />
            <Text color="white">
              {card.author.name}&ensp;
              <Text as="span" color="whiteAlpha.600">
                {card.author.designation}&ensp;{card.author.text}
              </Text>
            </Text>
          </Flex>
        </Box>
        <Box
          display={{ _: 'none', lg: 'block' }}
          position="absolute"
          right={0}
          mt={-12}
          mr={-10}
          zIndex={-5}
          backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
          backgroundPosition="0 0"
          backgroundSize="25px 20px"
          width="full"
          maxWidth="30%"
          height="45%"
        ></Box>
      </Flex>
      <Box>
        <Text fontSize="2xl" fontWeight="semibold" mb={6}>
          {header1}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight={{ _: 'short', md: 'base' }}
          color="blackAlpha.600"
          mb={8}
        >
          {content4}
        </Text>
        <Flex flexDirection={{ _: 'column', md: 'row' }}>
          {buttons.map(({ text, variant, bg, color }, i) => {
            const last = buttons.length;
            return (
              <Box
                width={{ _: 'full', md: 'auto' }}
                mr={{ md: last === i + 1 ? 0 : 4 }}
                mb={{ _: last === i + 1 ? 0 : 4, md: 0 }}
              >
                <Button
                  style={{ width: '100%' }}
                  variant={variant}
                  bg={bg}
                  color={color}
                  py={6}
                >
                  {text}
                </Button>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
