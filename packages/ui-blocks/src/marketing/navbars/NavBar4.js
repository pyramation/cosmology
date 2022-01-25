import React, { useState, useEffect } from 'react';
import { LogoDefault } from '../svg';
import { Box, Link, Flex, Button, Icon, Image, Fade } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const NavBar4 = ({
  backgroundColor,
  links,
  fixed,
  menuFixed,
  sticky,
  logoAttr
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('relative');
  const [navX, setNavX] = useState(0);
  const [navTop, setNavTop] = useState(0);
  const [navBottom, setNavBottom] = useState(0);
  const [menuX, setMenuX] = useState(0);
  const [menuTop, setMenuTop] = useState(0);
  const [menuBottom, setMenuBottom] = useState(0);

  useEffect(() => {
    if (!sticky) {
      setPosition('fixed');
      setMenuTop(8);
    }
    if (sticky) setPosition('static');

    if (fixed === null) {
      setNavBottom(null);
      setNavTop(4);
      setNavX(4);
      setMenuTop(8);
      setMenuBottom(null);
      setMenuX(8);
    }
    if (fixed === 'top') {
      setNavTop(0);
      setNavBottom(null);
      setNavX(0);
    }
    if (fixed === 'bottom') {
      setNavBottom(0);
      setNavTop(null);
      setNavX(0);
    }

    if (!sticky && menuFixed === 'top') {
      setMenuTop(8);
      setMenuX(12);
    }
    if (menuFixed === 'bottom') {
      setMenuTop(null);
      setMenuBottom(4);
      setMenuX(8);
    }
    if (fixed === 'top' && menuFixed === 'top') {
      setMenuTop(4);
      setMenuBottom(null);
      setMenuX(8);
    }

    if (fixed === 'bottom' && menuFixed === 'top') {
      setMenuTop(4);
      setMenuBottom(null);
      setMenuX(8);
    }
  }, [fixed, sticky, menuFixed]);

  return (
    <>
      <Box
        backgroundColor={backgroundColor}
        position={position}
        top={navTop}
        bottom={navBottom}
        left={navX}
        right={navX}
      >
        <NavBarWidthWrapper>
          {/* full */}
          <Flex
            justifyContent="space-between"
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="blackAlpha.700"
            px={4}
            py={6}
          >
            <Flex align="center">
              <Link href="#">
                <Box width={12} height={12} mr={12}>
                  {logoAttr ? (
                    <Image width="full" height="full" src={logoAttr.logo} />
                  ) : (
                    <LogoDefault width="full" height="full" fill="#01A1FF" />
                  )}
                </Box>
              </Link>
              <Box
                display={{
                  _: 'none',
                  lg: 'block'
                }}
              >
                <Flex align="center" ml={2}>
                  {links.map(({ id, href, text, active }) => {
                    return (
                      <Box>
                        <Link
                          height={12}
                          color={active && 'color'}
                          href={href}
                          px={4}
                        >
                          {text}
                        </Link>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>

            {/* hamburger */}
            <Box
              display={{
                _: 'block',
                lg: 'none'
              }}
            >
              <Button
                variant="primary"
                shape="none"
                px={8}
                py={6}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <Icon name={open ? 'x' : 'justify'} size={4}></Icon>
              </Button>
            </Box>
          </Flex>
        </NavBarWidthWrapper>
      </Box>
      <Box
        display={{
          _: 'block',
          lg: 'none'
        }}
      >
        <NavBarWidthWrapper>
          <Fade
            in={open}
            mt={sticky && 4}
            mx={sticky && 4}
            position="absolute"
            top={menuTop}
            left={menuX}
            right={menuX}
            bottom={menuBottom}
            boxShadow="md"
            bg="white"
          >
            <Flex justifyContent="space-between" mb={4} px={4} pt={6}>
              <Link href="#">
                <Box width={12} height={12} mr={12}>
                  {logoAttr ? (
                    <Image width="full" height="full" src={logoAttr.logo} />
                  ) : (
                    <LogoDefault width="full" height="full" />
                  )}
                </Box>
              </Link>
              <Button
                shape="round"
                variant="tertiary"
                onClick={() => setOpen(false)}
              >
                <Icon name="x" size={5}></Icon>
              </Button>
            </Flex>
            <Box width="full">
              {links.map(({ id, href, text, active, type }) => {
                if (type === 'link')
                  return (
                    <Box
                      px={4}
                      py={2}
                      fontSize="sm"
                      fontWeight="medium"
                      color={active ? 'palette.primary.base' : 'blackAlpha.700'}
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      width="full"
                      height="full"
                    >
                      <Link width="full" lineHeight="taller" href={href}>
                        {text}
                      </Link>
                    </Box>
                  );
                if (type === 'button')
                  return (
                    <Box
                      mt={3}
                      py={2}
                      fontSize="sm"
                      fontWeight="medium"
                      bg="blackAlpha.50"
                      color="blackAlpha.700"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="full"
                      height="full"
                    >
                      <Link
                        width="full"
                        lineHeight="taller"
                        href={href}
                        textAlign="center"
                      >
                        {text}
                      </Link>
                    </Box>
                  );
              })}
            </Box>
          </Fade>
        </NavBarWidthWrapper>
      </Box>
    </>
  );
};
