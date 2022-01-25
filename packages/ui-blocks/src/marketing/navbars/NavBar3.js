import React, { useState, useEffect } from 'react';
import { LogoDefault } from '../svg';
import {
  Box,
  Link,
  Flex,
  Stack,
  Button,
  Icon,
  Image,
  Collapse
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const NavBar3 = ({
  backgroundColor,
  leftLinks,
  rightLinks,
  fixed,
  sticky,
  zIndex,
  logoAttr,
  duration
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);

  useEffect(() => {
    if (fixed === null) setPosition('static');
    if (fixed === 'top' || fixed === 'bottom') setPosition('fixed');
    if (sticky) setPosition('static');
  }, [fixed, sticky]);

  useEffect(() => {
    let leftCounter = leftCount;
    let rightCounter = rightCount;
    const leftInterval = setInterval(() => {
      if (leftCounter >= leftLinks.length) {
        clearInterval(leftInterval);
        if (!open) setLeftCount(0);
      } else {
        setLeftCount(count => count + 1);
        leftCounter++;
      }
    }, duration / 10);

    const rightInterval = setInterval(() => {
      if (rightCounter >= rightLinks.length) {
        clearInterval(rightInterval);
        if (!open) setRightCount(0);
      } else {
        setRightCount(count => count + 1);
        rightCounter++;
      }
    }, duration / 5);
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [open]);

  return (
    <Box
      backgroundColor={backgroundColor}
      position={position}
      top={fixed === 'top' && 0}
      bottom={fixed === 'bottom' && 0}
      left={0}
      right={0}
      zIndex={zIndex - 30}
    >
      <NavBarWidthWrapper>
        {/* full */}
        <Box
          display={{
            _: 'none',
            lg: 'block'
          }}
        >
          <Flex
            justifyContent="space-between"
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="blackAlpha.700"
            py={4}
          >
            <Flex py={3}>
              {leftLinks.map(({ id, href, text, active }) => {
                return (
                  <Box color="blackAlpha.700" mr={8}>
                    <Link
                      color={active && true}
                      href={href}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {text}
                    </Link>
                  </Box>
                );
              })}
            </Flex>
            <Flex py={3}>
              {rightLinks.map(({ id, href, text, active }, index) => {
                return (
                  <Box color="blackAlpha.700" mr={8}>
                    <Link
                      color={active && true}
                      href={href}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {text}
                    </Link>
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </Box>

        {/* hamburger */}
        <Box
          display={{
            _: 'block',
            lg: 'none'
          }}
        >
          <Flex justifyContent="space-between" align="center" px={4} py={6}>
            <Link href="#">
              <Box width={12} height={12}>
                {logoAttr ? (
                  <Image width="full" height="full" src={logoAttr.logo} />
                ) : (
                  <LogoDefault width="full" height="full" fill="#01A1FF" />
                )}
              </Box>
            </Link>
            <Button
              variant={open ? 'primary' : 'tertiary'}
              intent="primary"
              shape="none"
              px={8}
              py={6}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Icon
                name={open ? 'x' : 'justify'}
                fontWeight="hairline"
                size={4}
              ></Icon>
            </Button>
          </Flex>
        </Box>
        <Box
          display={{
            _: 'block',
            lg: 'none'
          }}
        >
          <Collapse in={open} duration={parseInt(duration)}>
            <Box
              width="full"
              maxHeight="full"
              px={4}
              display={open ? 'block' : 'none'}
            >
              <Stack pt={2} pb={8} pl={4} space={6}>
                {leftLinks
                  .slice(0, leftCount)
                  .map(({ id, href, text, active }) => {
                    return (
                      <Box color="blackAlpha.700">
                        <Link
                          color={active && true}
                          href={href}
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          {text}
                        </Link>
                      </Box>
                    );
                  })}
                {rightLinks
                  .slice(0, rightCount)
                  .map(({ id, href, text, active }) => {
                    return (
                      <Box color="blackAlpha.700">
                        <Link
                          color={active && true}
                          href={href}
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          {text}
                        </Link>
                      </Box>
                    );
                  })}
              </Stack>
            </Box>
          </Collapse>
        </Box>
      </NavBarWidthWrapper>
    </Box>
  );
};
