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

export const MultiColumnLayout4 = ({
  navBackgroundColor,
  logoAttr,
  search,
  avatar,
  button,
  contentColor
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <Box overflow="hidden">
      <Grid
        position="relative"
        zIndex={15}
        gridTemplateColumns={{ _: '1fr 1fr', md: '2fr 5fr 3fr' }}
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={navBackgroundColor}
        boxShadow={{
          _: menu ? 'none' : '0 1px 3px 0 #cccccc',
          md: '0 1px 3px 0 #cccccc'
        }}
        py={4}
        px={{ _: 4, md: 8, lg: 12 }}
      >
        <Box width={12}>
          <Link href="#">
            <Box width={12} height={12}>
              {logoAttr ? (
                <Image width="full" height="full" src={logoAttr.logo} />
              ) : (
                <LogoDefault width="full" height="full" fill="#01A1FF" />
              )}
            </Box>
          </Link>
        </Box>

        {/* large nav */}
        <Box display={{ _: 'none', md: 'block' }} mr={6}>
          <Input
            type="text"
            placeholder={search.text}
            startElement={<Icon name={search.icon} color="gray.500" />}
            py={6}
            fluidWidth
          />
        </Box>
        <Flex
          display={{ _: 'none', md: 'flex' }}
          justifyContent="end"
          alignItems="center"
        >
          <Box as="button" ml={{ _: 2, md: 5 }} mr={{ _: 4, md: 5 }}>
            <Icon name="bell" color="blackAlpha.700" />
          </Box>
          <Link href={avatar.href} mr={5}>
            <Avatar src={avatar.avatarImage} size={12} minWidth={12} />
          </Link>
          <Button>{button}</Button>
        </Flex>

        {/* hamburger */}
        <Flex display={{ _: 'flex', md: 'none' }} justifyContent="end">
          <Button variant="tertiary" py={6} onClick={() => setMenu(!menu)}>
            <Icon size={5} name={menu ? 'x' : 'justify'} />
          </Button>
        </Flex>
      </Grid>
      {/* small nav */}
      <Collapse in={menu}>
        <Box
          position="relative"
          zIndex={10}
          display={{ md: 'none' }}
          backgroundColor={navBackgroundColor}
          boxShadow={{
            _: menu ? 'inset 0 -3px 5px -4px #cccccc' : 'none',
            md: 'none'
          }}
          px={{ _: 4, md: 8 }}
          pt={2}
          pb={8}
        >
          <Box mb={2}>
            <Input
              type="text"
              placeholder={search.text}
              startElement={<Icon name={search.icon} color="gray.500" />}
              py={6}
              fluidWidth
            />
          </Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            py={4}
            px={2}
          >
            <Link href={avatar.href}>
              <Flex alignItems="center" flexWrap="wrap">
                <Avatar
                  src={avatar.avatarImage}
                  size={12}
                  minWidth={12}
                  my={2}
                  mr={4}
                />
                <Box>
                  <Text color="blackAlpha.800" mb={2}>
                    {avatar.name}
                  </Text>
                  <Text color="blackAlpha.500">{avatar.text}</Text>
                </Box>
              </Flex>
            </Link>
            <Box as="button" ml={{ _: 2, md: 5 }} mr={{ _: 4, md: 5 }}>
              <Icon name="bell" color="blackAlpha.700" />
            </Box>
          </Flex>
          <Button ml={2}>{button}</Button>
        </Box>
      </Collapse>

      {/* content */}
      <Grid
        gridTemplateColumns={{ _: '1fr', md: '2fr 4fr 3fr', lg: '2fr 5fr 3fr' }}
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
            height={{ _: '50vh', md: '70vh' }}
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
            height={{ _: '80vh', md: '100vh' }}
          ></Box>
        </Box>
        <Box p={8}>
          <Box
            border="4px dashed rgba(0, 0, 0, 0.06)"
            borderRadius="md"
            height={{ _: '50vh', md: '70vh' }}
          ></Box>
        </Box>
      </Grid>
    </Box>
  );
};
