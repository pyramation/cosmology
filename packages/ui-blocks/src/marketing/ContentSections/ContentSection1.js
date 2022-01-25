import React from 'react';
import { Box, Link, Flex, Text } from '@webql/core';

export const ContentSection1 = ({
  majorText,
  minorText,
  content1,
  content2,
  unorderedLists,
  content3,
  header1,
  content4,
  quote,
  content5,
  image,
  header2,
  content6
}) => {
  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      px={{ _: 4, md: 8, lg: 16 }}
      py={12}
    >
      <Box
        display={{ _: 'none', lg: 'block' }}
        position="absolute"
        top={0}
        right={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 32, md: 48 }}
        height={{ _: '20vh', md: '50vh' }}
      ></Box>
      <Box
        display={{ _: 'none', lg: 'block' }}
        position="absolute"
        left={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 32, md: 48 }}
        height={{ _: '20vh', md: '50vh' }}
      ></Box>
      <Box
        display={{ _: 'none', lg: 'block' }}
        position="absolute"
        bottom={0}
        right={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 32, md: 48 }}
        height={{ _: '20vh', md: '50vh' }}
      ></Box>
      <Box maxWidth="4xl">
        <Text
          textAlign="center"
          color="palette.primary.base"
          letterSpacing="wide"
          mb={2}
        >
          {minorText}
        </Text>
        <Text
          fontSize={{ _: '4xl', md: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          {majorText}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={8}
        >
          {content1}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={8}
        >
          {content2.text1}&ensp;
          <Text as="span" fontSize="inherit" fontWeight="semibold">
            {content2.bold.boldWord1}&ensp;
          </Text>
          {content2.bold.text}&ensp;
          <Text as="span" fontSize="inherit" fontWeight="semibold">
            {content2.bold.boldWord2}.&ensp;
          </Text>
          {content2.text2}&ensp;
          <Box
            display="inline"
            borderBottom="1px solid"
            borderColor="palette.primary.base"
          >
            <Link href={content2.link.href} color>
              {content2.link.linkText}
            </Link>
          </Box>
          &ensp;{content2.link.text}
        </Text>
        {unorderedLists.map((text, i) => {
          const last = unorderedLists.length;
          return (
            <Flex alignItems="center" mb={last === i + 1 ? 8 : 4}>
              <Box
                width="6px"
                height="6px"
                minWidth="6px"
                backgroundColor="blackAlpha.400"
                borderRadius="round"
                mr={4}
              ></Box>
              <Text
                fontSize={{ _: 'lg', md: 'xl' }}
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
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={16}
        >
          {content3}
        </Text>

        <Text fontSize="3xl" fontWeight="bold" mb={8}>
          {header1}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={8}
        >
          {content4}
        </Text>
        <Box
          borderLeft="4px solid"
          borderColor="blackAlpha.300"
          py={1}
          px={4}
          mb={8}
        >
          <Text
            fontSize={{ _: 'lg', md: 'xl' }}
            fontStyle="italic"
            letterSpacing="wide"
            lineHeight="base"
            color="blackAlpha.800"
          >
            {quote}
          </Text>
        </Box>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={8}
        >
          {content5}
        </Text>
        <Box
          backgroundImage={`url(${image.imageUrl})`}
          backgroundSize="cover"
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
          borderRadius={{ _: 'md', md: 'lg' }}
          width="full"
          height={{ _: 48, md: 'md', lg: 'xl' }}
          mb={4}
        ></Box>
        <Text
          fontSize={{ md: 'lg' }}
          letterSpacing="wide"
          lineHeight="short"
          color="blackAlpha.600"
          mb={16}
        >
          {image.text}
        </Text>

        <Text fontSize="3xl" fontWeight="bold" mb={8}>
          {header2}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={8}
        >
          {content6.text1}&ensp;
          <Box
            display="inline"
            borderBottom="1px solid"
            borderColor="palette.primary.base"
          >
            <Link href={content6.link.href} fontSize="inherit" color>
              {content6.link.text}
            </Link>
          </Box>
          .&ensp;{content6.text2}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: 'xl' }}
          letterSpacing="wide"
          lineHeight="base"
          color="blackAlpha.600"
          mb={8}
        >
          {content6.text3}
        </Text>
      </Box>
    </Flex>
  );
};
