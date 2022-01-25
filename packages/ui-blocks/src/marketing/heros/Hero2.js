import React from 'react';
import { Box, Flex, Button, Image, Text, Input } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Hero2 = ({
  illustration,
  shift,
  majorWords,
  minorWords,
  description,
  newsletterText,
  input,
  button,
  policyText
}) => {
  return (
    <NavBarWidthWrapper>
      <Flex
        py={24}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        flexDirection={shift ? 'row-reverse' : 'row'}
      >
        <Box
          maxWidth={{ _: '2xs', md: '2xl' }}
          ml={{ _: 0, lg: shift ? 8 : 0 }}
          mr={{ _: 0, lg: shift ? 0 : 6 }}
        >
          <Flex justifyContent={{ _: 'center', lg: 'flex-start' }}>
            <Text
              fontWeight={{ _: 'bold', lg: 'semibold' }}
              fontSize={{ _: '3xl', lg: '4xl' }}
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {majorWords}
              <Text
                as="span"
                fontWeight={{ _: 'bold', lg: 'semibold' }}
                fontSize={{ _: '3xl', lg: '4xl' }}
                textAlign={{ _: 'center', lg: 'start' }}
                color="palette.primary.base"
              >
                &nbsp;{minorWords}
              </Text>
            </Text>
          </Flex>
          <Box mt={3}>
            <Text lineHeight="base" textAlign={{ _: 'center', lg: 'start' }}>
              {description}
            </Text>
          </Box>
          <Box mt={4}>
            <Text
              fontWeight="semibold"
              fontSize="lg"
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {newsletterText}
            </Text>
          </Box>
          <Box display={{ _: 'block', md: 'flex' }} mt={3}>
            <Input
              size="lg"
              type="text"
              placeholder={input}
              mr={4}
              border="none"
            />
            <Flex>
              <Button
                flexGrow={1}
                size="lg"
                width="full"
                variant={button.variant}
                bg={button.bgColor}
                style={{ boxShadow: button.variant === 'primary' && 'none' }}
                mt={{ _: 2, md: 0 }}
              >
                <Text fontSize="sm" fontWeight="bold" color={button.color}>
                  {button.text}
                </Text>
              </Button>
            </Flex>
          </Box>
          <Box mt={3}>
            <Text
              color="blackAlpha.700"
              textAlign={{ _: 'center', lg: 'start' }}
            >
              {policyText}
            </Text>
          </Box>
        </Box>
        <Box minWidth="md" display={{ _: 'none', lg: 'block' }} px={6}>
          <Image src={illustration} width="full"></Image>
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
