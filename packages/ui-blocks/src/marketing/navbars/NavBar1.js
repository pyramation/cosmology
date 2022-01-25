import React, { useState, useEffect } from 'react';
import { LogoDefault } from '../svg';
import {
  Box,
  Link,
  Flex,
  Stack,
  Button,
  Icon,
  Heading,
  Divider,
  Slide,
  Fade,
  Image,
  Text
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const NavBar1 = ({
  backgroundColor,
  links,
  fixed,
  sticky,
  width,
  title,
  closable,
  placement,
  zIndex,
  mask,
  maskClosable,
  logoAttr
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (fixed === null) setPosition('static');
    if (fixed === 'top' || fixed === 'bottom') setPosition('fixed');
    if (sticky) setPosition('static');
  }, [fixed, sticky]);

  return (
    <>
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
          <Flex
            justifyContent="space-between"
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="blackAlpha.700"
            px={4}
            py={6}
          >
            <Link href="#">
              <Box width={12} height={12}>
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
              <Flex alignItems="center">
                {links.map(
                  ({ id, type, href, text, active, variant, intent }) => {
                    if (type === 'link')
                      return (
                        <Box>
                          <Link
                            height={12}
                            color={active && true}
                            href={href}
                            px={4}
                          >
                            {text}
                          </Link>
                        </Box>
                      );
                    if (type === 'button')
                      return (
                        <Link href={href} ml={2}>
                          <Button variant={variant} intent={intent} py={5}>
                            <Text fontSize="sm" color="inherit" px={4}>
                              {text}
                            </Text>
                          </Button>
                        </Link>
                      );
                  }
                )}
              </Flex>
            </Box>

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
                <Icon
                  name={open ? 'x' : 'justify'}
                  fontWeight="hairline"
                  size={4}
                ></Icon>
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
        <Fade
          in={open}
          duration={1000}
          position="fixed"
          top={0}
          bottom={0}
          left={0}
          right={0}
          zIndex={zIndex - 20}
          display={mask ? 'block' : 'none'}
        >
          <Box
            as="button"
            width="full"
            height="100vh"
            bg="blackAlpha.700"
            onClick={() => maskClosable && setOpen(false)}
            style={{ cursor: maskClosable ? 'pointer' : 'default' }}
          ></Box>
        </Fade>
        <Slide
          in={open}
          top={0}
          zIndex={zIndex}
          height="full"
          width={width + 'px'}
          anchor={placement}
        >
          <Box bg="white" height="full" px={4} boxShadow="lg">
            <Flex
              pt={closable ? 3 : 5}
              pb={closable ? 1 : 3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading as="h5" size="sm" color="black">
                {title}
              </Heading>
              {closable && (
                <Button
                  variant="tertiary"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Icon name="x" size={4} color="inherit" />
                </Button>
              )}
            </Flex>
            <Divider mx={-4}></Divider>
            {links.map(({ id, type, href, text, active, variant, intent }) => {
              if (type === 'link')
                return (
                  <Box px={4} pt={4} color="blackAlpha.700">
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
              if (type === 'button')
                return (
                  <Stack mt={6} mx={3}>
                    <Button intent={intent} variant={variant}>
                      <Text fontWeight="semibold" color="inherit" fontSize="sm">
                        {text}
                      </Text>
                    </Button>
                  </Stack>
                );
            })}
          </Box>
        </Slide>
      </Box>
    </>
  );
};
