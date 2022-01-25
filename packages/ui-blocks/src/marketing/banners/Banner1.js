import React, { useState } from 'react';
import { Box, Link, Flex, Text, Icon, Button, Fade } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Banner1 = ({ fixed, timeout, icon, link, text }) => {
  const [inProp, setIn] = useState(true);

  return (
    <Fade
      in={inProp}
      duration={timeout}
      width="full"
      position="fixed"
      top={fixed === 'top' ? 6 : null}
      bottom={fixed === 'bottom' ? 6 : null}
      right={0}
      left={0}
      px={{ _: 4, lg: 0 }}
    >
      <NavBarWidthWrapper>
        <Flex
          borderRadius="sm"
          backgroundColor="palette.primary.base"
          py={{ _: 4, lg: 5 }}
          px={6}
          justifyContent={{ _: 'start', md: 'center', lg: 'space-between' }}
          alignItems={{ _: 'start', md: 'center' }}
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          <Flex mb={{ _: 4, lg: 0 }} alignItems="center">
            <Box borderRadius="sm" backgroundColor="blue.500" p={3} mr={4}>
              <Icon name={icon} size={4} color="white" />
            </Box>
            <Text color="white" fontWeight="semiBold" lineHeight="base">
              {text}
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={{
              _: 'start',
              md: 'center',
              lg: 'space-between'
            }}
          >
            <Link id="button" href={link.href}>
              <Button bg={link.backgroundColor} mr={4}>
                <Text color={link.textColor} fontSize="sm">
                  {link.text}
                </Text>
              </Button>
            </Link>
            <Button
              shape="round"
              midIcon="x"
              onClick={() => {
                setIn(false);
              }}
            ></Button>
          </Flex>
        </Flex>
      </NavBarWidthWrapper>
    </Fade>
  );
};
