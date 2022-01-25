import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Icon,
  Link,
  Avatar,
  Grid,
  Input,
  Button,
  Collapse
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const MultiColumnLayout5 = ({
  logoBackgroundColor,
  logoAttr,
  search,
  slideLinks,
  navLinks,
  avatar,
  contentColor
}) => {
  const [menu, setMenu] = useState(false);
  const [slideBar, setSlideBar] = useState(false);

  return (
    <Box overflow="hidden">
      <Flex
        position="relative"
        zIndex={15}
        justifyContent="space-between"
        backgroundColor={{ _: logoBackgroundColor, md: 'transparent' }}
        boxShadow={{ _: !menu && '0 2px 3px 0 #cccccc', md: 'none' }}
      >
        <Flex
          backgroundColor={logoBackgroundColor}
          justifyContent="center"
          alignItems="center"
          py={4}
          px={6}
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
        {/* large nav */}
        <Flex
          position="relative"
          zIndex={20}
          flexGrow={1}
          boxShadow={{ md: '0 1px 3px 0 #cccccc' }}
        >
          <Box
            display={{ _: 'none', md: 'block' }}
            flexGrow={1}
            pt={{ _: 2, md: 0 }}
          >
            <Input
              type="text"
              placeholder={search.text}
              startElement={<Icon name={search.icon} color="gray.500" />}
              style={{
                boxShadow: 'none'
              }}
              py={{ _: 6, md: 10 }}
              fluidWidth
            />
          </Box>
          <Flex
            display={{ _: 'none', md: 'flex' }}
            alignItems="center"
            mt={{ _: 4, md: 0 }}
            px={4}
          >
            <Flex alignItems="center">
              {navLinks.map(({ id, href, text }) => {
                return (
                  <Link href={href} mx={3}>
                    {text}
                  </Link>
                );
              })}
            </Flex>
            <Box as="button" ml={6} mr={6}>
              <Icon
                name="bell"
                color={{
                  _: 'whiteAlpha.700',
                  md: 'blackAlpha.700'
                }}
              />
            </Box>
            <Link href={avatar.href} mr={2}>
              <Avatar src={avatar.avatarImage} size={10} minWidth={10} />
            </Link>
          </Flex>
        </Flex>

        {/* hamburger */}
        <Flex
          display={{ _: 'flex', md: 'none' }}
          justifyContent="end"
          py={4}
          px={6}
        >
          <Button py={6} onClick={() => setMenu(!menu)}>
            <Icon size={5} name={menu ? 'x' : 'justify'} />
          </Button>
        </Flex>
      </Flex>

      {/* small menu */}
      <Collapse in={menu}>
        <Box
          position="relative"
          zIndex={15}
          display={{ md: 'none' }}
          boxShadow={menu ? 'inset 0 -9px 10px -12px #222328' : 'none'}
          backgroundColor={logoBackgroundColor}
          px={6}
          pt={1}
          pb={6}
        >
          <Box mb={{ _: 4, md: 0 }} borderRadius="sm" bg="whiteAlpha.800">
            <Input
              type="text"
              placeholder={search.text}
              startElement={<Icon name={search.icon} color="gray.500" />}
              style={{
                boxShadow: 'none'
              }}
              py={{ _: 6, md: 10 }}
              fluidWidth
            />
          </Box>
          <Flex alignItems="center" justifyContent="space-between" mb={2}>
            <Link href={avatar.href}>
              <Flex
                display={{ _: 'flex', md: 'none' }}
                flexWrap="wrap"
                alignItems="center"
              >
                <Avatar
                  id="avatar"
                  src={avatar.avatarImage}
                  size={10}
                  minWidth={10}
                  mr={3}
                  my={2}
                />
                <Box>
                  <Text color="white" mb={2}>
                    {avatar.name}
                  </Text>
                  <Text color="whiteAlpha.600">{avatar.text}</Text>
                </Box>
              </Flex>
            </Link>
            <Box as="button" mr={3}>
              <Icon
                name="bell"
                color={{
                  _: 'whiteAlpha.700',
                  md: 'blackAlpha.700'
                }}
              />
            </Box>
          </Flex>
          {navLinks.map(({ id, href, text }) => {
            return (
              <Box>
                <Link href={href}>
                  <Button
                    id={id}
                    p={4}
                    mb={2}
                    style={{ width: '100%', justifyContent: 'start' }}
                  >
                    {text}
                  </Button>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Collapse>

      <Flex>
        {/* large left slide */}
        <Box
          display={{ _: 'none', md: 'block' }}
          backgroundColor="blackAlpha.800"
          p={5}
        >
          {slideLinks.map(({ id, href, icon, active }) => {
            return (
              <Box>
                <Link href={href}>
                  <Button
                    id={id}
                    variant="tertiary"
                    selected={active}
                    py={6}
                    mb={5}
                  >
                    <Icon name={icon} color="inherit" />
                  </Button>
                </Link>
              </Box>
            );
          })}
        </Box>

        {/* content */}
        <Grid
          flexGrow={1}
          gridTemplateColumns={{ _: '1fr', md: '1fr 2fr' }}
          backgroundColor={contentColor}
        >
          <Box
            borderRight={{ _: 'none', md: '1px solid rgba(0, 0, 0, 0.08)' }}
            borderBottom={{ _: '1px solid rgba(0, 0, 0, 0.08)', md: 'none' }}
            p={8}
          >
            <Box
              border="4px dashed rgba(0, 0, 0, 0.06)"
              borderRadius="md"
              height={{ _: '50vh', md: '100vh' }}
            ></Box>
          </Box>
          <Box p={8}>
            <Box
              border="4px dashed rgba(0, 0, 0, 0.06)"
              borderRadius="md"
              height={{ _: '70vh', md: '100vh' }}
            ></Box>
          </Box>
        </Grid>
      </Flex>

      {/* small fixed button */}
      <Box
        position="fixed"
        bottom={0}
        right={4}
        display={{ _: 'block', md: 'none' }}
        backgroundColor="blackAlpha.800"
        borderRadius="sm"
        px={2}
        py={slideBar ? 5 : 3}
      >
        <Collapse in={slideBar}>
          {slideLinks.map(({ id, href, icon, active }) => {
            return (
              <Box>
                <Link href={href}>
                  <Button
                    id={id}
                    variant="tertiary"
                    selected={active}
                    py={6}
                    mb={4}
                  >
                    <Icon name={icon} color="inherit" size={6} />
                  </Button>
                </Link>
              </Box>
            );
          })}
        </Collapse>
        <Button
          variant="tertiary"
          py={6}
          onClick={() => setSlideBar(!slideBar)}
        >
          <Icon
            name={slideBar ? 'chevrons-down' : 'tile-view'}
            color="inherit"
          />
        </Button>
      </Box>
    </Box>
  );
};
