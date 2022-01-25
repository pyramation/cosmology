import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Icon,
  Link,
  Avatar,
  Grid,
  Button,
  Collapse
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const MultiColumnLayout7 = ({
  logoBackgroundColor,
  logoAttr,
  slideBackgroundColor,
  slideLinks,
  avatar,
  contentRightColor
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <Box overflow="hidden">
      <Grid
        gridTemplateColumns={{ _: '1fr', md: 'auto 1fr' }}
        backgroundColor={slideBackgroundColor}
      >
        <Flex
          position="relative"
          zIndex={15}
          justifyContent={{ _: 'space-between', md: 'start' }}
          flexDirection={{ md: 'column' }}
          boxShadow={{ _: menu ? 'none' : '0 2px 3px 0 #cccccc', md: 'none' }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            backgroundColor={logoBackgroundColor}
            py={4}
            px={{ _: 4, md: 6 }}
          >
            <Link href="#">
              <Box width={12} height={12}>
                {logoAttr ? (
                  <Image width="full" height="full" src={logoAttr.logo} />
                ) : (
                  <LogoDefault width="full" height="full" fill="#FFFFFF" />
                )}
              </Box>
            </Link>
          </Flex>

          {/* large left slide */}
          <Box
            display={{ _: 'none', md: 'block' }}
            backgroundColor={slideBackgroundColor}
            py={4}
            px={3}
          >
            {slideLinks.map(({ id, href, icon }) => {
              return (
                <Flex justifyContent="center" mb={5}>
                  <Link href={href}>
                    <Button
                      style={{ backgroundImage: 'none' }}
                      bg={slideBackgroundColor}
                      id={id}
                      py={8}
                    >
                      <Icon name={icon} color="inherit" size="1.75rem" mx={1} />
                    </Button>
                  </Link>
                </Flex>
              );
            })}
          </Box>
          <Flex
            display={{ _: 'none', md: 'flex' }}
            justifyContent="center"
            position="absolute"
            bottom={6}
            left={2}
            right={2}
          >
            <Link href={avatar.href}>
              <Avatar src={avatar.avatarImage} size={12} minWidth={12} />
            </Link>
          </Flex>

          {/* hamburger */}
          <Flex display={{ _: 'flex', md: 'none' }} alignItems="center" px={6}>
            <Button
              style={{ backgroundImage: 'none' }}
              bg={slideBackgroundColor}
              py={6}
              onClick={() => setMenu(!menu)}
            >
              <Icon size={5} color="inherit" name={menu ? 'x' : 'justify'} />
            </Button>
          </Flex>
        </Flex>

        {/* small menu */}
        <Box
          position="relative"
          zIndex={12}
          display={{ md: 'none' }}
          boxShadow={menu ? '0 6px 5px -2px #cccccc' : 'none'}
        >
          <Collapse in={menu}>
            <Box backgroundColor={slideBackgroundColor} px={6} pt={4} pb={6}>
              <Link href={avatar.href}>
                <Flex
                  display={{ _: 'flex', md: 'none' }}
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                  mb={4}
                >
                  <Avatar
                    id="avatar"
                    src={avatar.avatarImage}
                    size={10}
                    minWidth={10}
                    mr={4}
                    my={2}
                  />
                  <Box>
                    <Text color="white" mb={2}>
                      {avatar.name}
                    </Text>
                    <Text color="whiteAlpha.500">{avatar.text}</Text>
                  </Box>
                </Flex>
              </Link>
              <Grid
                gridTemplateColumns="repeat(auto-fit, minmax(70px, 1fr))"
                gap={4}
              >
                {slideLinks.map(({ id, href, icon, text }) => {
                  return (
                    <Link href={href}>
                      <Button
                        style={{ width: '100%', backgroundImage: 'none' }}
                        id={id}
                        bg={slideBackgroundColor}
                        py={10}
                      >
                        <Box>
                          <Icon name={icon} color="inherit" mb={2} />
                          <Text
                            color="inherit"
                            textAlign="center"
                            fontSize="xs"
                          >
                            {text}
                          </Text>
                        </Box>
                      </Button>
                    </Link>
                  );
                })}
              </Grid>
            </Box>
          </Collapse>
        </Box>

        {/* content */}
        <Grid flexGrow={1} gridTemplateColumns={{ _: '1fr', md: '1fr 2fr' }}>
          <Box
            borderRight={{ _: 'none', md: '1px solid rgba(0, 0, 0, 0.08)' }}
            borderBottom={{ _: '1px solid rgba(0, 0, 0, 0.08)', md: 'none' }}
            backgroundColor="white"
            p={8}
          >
            <Box
              border="4px dashed rgba(0, 0, 0, 0.06)"
              borderRadius="md"
              height={{ _: '50vh', md: '100vh' }}
            ></Box>
          </Box>
          <Box backgroundColor={contentRightColor} p={8}>
            <Box
              border="4px dashed rgba(0, 0, 0, 0.06)"
              borderRadius="md"
              height={{ _: '70vh', md: '100vh' }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
