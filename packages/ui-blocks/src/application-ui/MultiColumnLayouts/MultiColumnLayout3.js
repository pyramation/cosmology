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
  Divider,
  Button,
  Collapse
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const MultiColumnLayout3 = ({
  navBackgroundColor,
  navLinks,
  logoAttr,
  search,
  avatar,
  rightBoxColor
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <Box>
      <Grid
        gridTemplateColumns={{ _: '1fr 1fr', md: '2fr 5fr 3fr' }}
        justifyContent={{ md: 'space-between' }}
        alignItems="center"
        backgroundColor={navBackgroundColor}
        py={4}
        px={{ _: 4, md: 8, lg: 12 }}
      >
        <Box width={12}>
          <Link href="#">
            <Box width={12} height={12}>
              {logoAttr ? (
                <Image width="full" height="full" src={logoAttr.logo} />
              ) : (
                <LogoDefault width="full" height="full" fill="#FFFFFF" />
              )}
            </Box>
          </Link>
        </Box>

        {/* large nav */}
        <Box
          display={{ _: 'none', md: 'block' }}
          borderRadius="sm"
          bg="whiteAlpha.800"
          mr={4}
        >
          <Input
            type="text"
            placeholder={search.text}
            startElement={<Icon name={search.icon} color="gray.500" />}
            style={{ boxShadow: 'none' }}
            py={6}
            fluidWidth
          />
        </Box>
        <Flex
          display={{ _: 'none', md: 'flex' }}
          justifyContent="end"
          alignItems="center"
        >
          {navLinks.map(({ id, href, text }) => {
            return (
              <Link href={href} mr={6}>
                <Text color="whiteAlpha.700">{text}</Text>
              </Link>
            );
          })}
          <Link href={avatar.href}>
            <Avatar src={avatar.avatarImage} size={12} minWidth={12} />
          </Link>
        </Flex>

        {/* hamburger */}
        <Flex display={{ _: 'flex', md: 'none' }} justifyContent="end">
          <Button py={6} onClick={() => setMenu(!menu)}>
            <Icon size={5} name={menu ? 'x' : 'justify'} />
          </Button>
        </Flex>
      </Grid>
      {/* small nav */}
      <Collapse in={menu}>
        <Box
          display={{ md: 'none' }}
          backgroundColor={navBackgroundColor}
          px={{ _: 4, md: 8 }}
          pt={2}
          pb={6}
        >
          <Box borderRadius="sm" bg="whiteAlpha.800" mb={6}>
            <Input
              type="text"
              placeholder={search.text}
              startElement={<Icon name={search.icon} color="gray.500" />}
              style={{ boxShadow: 'none' }}
              py={6}
              fluidWidth
            />
          </Box>
          {navLinks.map(({ id, href, text }) => {
            return (
              <Box pb={6} px={2}>
                <Link href={href}>
                  <Text color="whiteAlpha.800">{text}</Text>
                </Link>
              </Box>
            );
          })}
          <Divider my={0} borderColor="whiteAlpha.600" />
          <Link href={avatar.href}>
            <Flex alignItems="center" pt={4} px={2}>
              <Avatar src={avatar.avatarImage} size={12} minWidth={12} mr={4} />
              <Box>
                <Text color="white" mb={2}>
                  {avatar.name}
                </Text>
                <Text color="whiteAlpha.700">{avatar.text}</Text>
              </Box>
            </Flex>
          </Link>
        </Box>
      </Collapse>

      {/* content */}
      <Grid
        gridTemplateColumns={{ _: '1fr', md: '2fr 4fr 3fr', lg: '2fr 5fr 3fr' }}
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
        <Box
          borderRight={{ _: 'none', md: '1px solid rgba(0, 0, 0, 0.08)' }}
          borderBottom={{ _: '1px solid rgba(0, 0, 0, 0.08)', md: 'none' }}
          p={8}
        >
          <Box
            border="4px dashed rgba(0, 0, 0, 0.06)"
            borderRadius="md"
            height={{ _: '90vh', md: '100vh' }}
          ></Box>
        </Box>
        <Box backgroundColor={rightBoxColor} p={8}>
          <Box
            border="4px dashed rgba(0, 0, 0, 0.06)"
            borderRadius="md"
            height={{ _: '70vh', md: '100vh' }}
          ></Box>
        </Box>
      </Grid>
    </Box>
  );
};
