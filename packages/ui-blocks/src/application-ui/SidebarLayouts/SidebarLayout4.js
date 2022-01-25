import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Icon,
  Link,
  Avatar,
  Heading,
  Grid,
  Button
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const SidebarLayout4 = ({
  slideBackgroundColor,
  brand,
  logoAttr,
  slideLinks,
  title,
  boxBackgroundColor,
  avatar
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <Box overflow="hidden">
      <Grid
        gridTemplateColumns={{
          _: '1fr',
          md: '250px 1fr',
          lg: '300px 1fr'
        }}
      >
        {/* brand */}
        <Box
          position="relative"
          zIndex={10}
          backgroundColor={slideBackgroundColor}
          boxShadow={{ _: '0 3px 3px 0 #cccccc', md: 'none' }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            pt={{ _: 4, md: 6 }}
            pb={4}
          >
            <Link href="#">
              <Flex alignItems="center" px={6}>
                <Box width={12} height={12} mr={4}>
                  {logoAttr ? (
                    <Image width="full" height="full" src={logoAttr.logo} />
                  ) : (
                    <LogoDefault width="full" height="full" fill="#FFFFFF" />
                  )}
                </Box>
                <Heading
                  as="h2"
                  color="white"
                  size="lg"
                  display={{ _: 'none', md: 'block' }}
                >
                  {brand}
                </Heading>
              </Flex>
            </Link>

            {/* hamburger */}
            <Box display={{ _: 'block', md: 'none' }}>
              <Button py={6} mr={4} onClick={() => setMenu(!menu)}>
                <Icon name={menu ? 'x' : 'justify'} color="inherit" />
              </Button>
            </Box>
          </Flex>

          {/* small menu */}
          <Box
            display={{ _: menu ? 'block' : 'none', md: 'block' }}
            px={4}
            pt={2}
            pb={3}
          >
            {slideLinks.map(({ id, icon, href, text, active }) => {
              return (
                <Box mb={3}>
                  <Link href={href}>
                    <Button
                      disabled={active}
                      style={{ width: '100%', justifyContent: 'start' }}
                      py={6}
                    >
                      <Flex id={id} alignItems="center">
                        <Icon name={icon} color="inherit" size={5} mr={4} />
                        <Text color="inherit">{text}</Text>
                      </Flex>
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Box>

          {/* avatar */}
          <Box
            display={{ _: menu ? 'block' : 'none', md: 'block' }}
            position={{ md: 'absolute' }}
            bottom={0}
            left={0}
            right={0}
            boxShadow="-2px 0 3px 0 rgba(0, 0, 0, 0.24)"
            py={4}
            px={{ _: 6, md: 4, lg: 6 }}
          >
            <Link href={avatar.href}>
              <Flex flexWrap="wrap" alignItems="center">
                <Avatar
                  id="avatar"
                  src={avatar.avatarImage}
                  size={12}
                  minWidth={12}
                  mr={4}
                  my={2}
                />
                <Box>
                  <Text fontSize="lg" color="white" mb={1}>
                    {avatar.name}
                  </Text>
                  <Text color="whiteAlpha.800">{avatar.text}</Text>
                </Box>
              </Flex>
            </Link>
          </Box>
        </Box>

        {/* content */}
        <Box backgroundColor={boxBackgroundColor} p={8}>
          <Text
            fontSize="3xl"
            fontWeight="semibold"
            color="blackAlpha.800"
            mb={8}
          >
            {title}
          </Text>
          <Box
            border="4px dashed"
            borderColor="blackAlpha.300"
            borderRadius="md"
            height="70vh"
            mb={24}
          ></Box>
        </Box>
      </Grid>
    </Box>
  );
};
