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

export const MultiColumnLayout2 = ({
  slideBackgroundColor,
  brand,
  logoAttr,
  slideLinks,
  avatar
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <Box overflow="hidden">
      <Grid
        gridTemplateColumns={{
          _: '1fr',
          md: '220px 1fr',
          lg: '330px 1fr'
        }}
      >
        {/* brand */}
        <Box
          position="relative"
          zIndex={10}
          backgroundColor={slideBackgroundColor}
          boxShadow={{
            _: '0 3px 3px 0 #cccccc',
            md: '1px 0 1px 0 rgba(0, 0, 0, 0.1)'
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            pt={5}
            pb={4}
          >
            <Link href="#">
              <Flex alignItems="center" px={6}>
                <Box width={12} height={12} mr={4}>
                  {logoAttr ? (
                    <Image width="full" height="full" src={logoAttr.logo} />
                  ) : (
                    <LogoDefault width="full" height="full" fill="#01A1FF" />
                  )}
                </Box>
                <Heading
                  as="h2"
                  color="blackAlpha.800"
                  size="lg"
                  display={{ _: 'none', md: 'block' }}
                >
                  {brand}
                </Heading>
              </Flex>
            </Link>
            <Box display={{ _: 'block', md: 'none' }}>
              <Button
                variant="tertiary"
                py={6}
                mr={4}
                mt={-1}
                onClick={() => setMenu(!menu)}
              >
                <Icon size={5} name={menu ? 'x' : 'justify'} />
              </Button>
            </Box>
          </Flex>

          <Box
            display={{ _: menu ? 'block' : 'none', md: 'block' }}
            px={4}
            pt={2}
            pb={3}
          >
            {slideLinks.map(({ id, icon, href, text, active }) => {
              return (
                <Link href={href}>
                  <Button
                    style={{ width: '100%', justifyContent: 'start' }}
                    variant="tertiary"
                    bg={active && 'blackAlpha.700'}
                    px={3}
                    py={6}
                    mb={2}
                  >
                    <Flex id={id} borderRadius="md" alignItems="center">
                      <Icon name={icon} color="inherit" mr={4} />
                      <Text color="inherit">{text}</Text>
                    </Flex>
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box
            display={{ _: menu ? 'block' : 'none', md: 'block' }}
            position={{ md: 'absolute' }}
            bottom={0}
            left={0}
            right={0}
            borderTop="2px solid rgba(0, 0, 0, 0.06)"
            py={2}
            px={6}
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
                  <Text fontSize="lg" color="blackAlpha.800" mb={1}>
                    {avatar.name}
                  </Text>
                  <Text color="blackAlpha.600">{avatar.text}</Text>
                </Box>
              </Flex>
            </Link>
          </Box>
        </Box>

        {/* content */}
        <Grid
          gridTemplateColumns={{ _: '1fr', md: '3fr 2fr', lg: '2fr 1fr' }}
          backgroundColor="white"
        >
          <Box borderRight={{ md: '1px solid rgba(0, 0, 0, 0.06)' }} p={8}>
            <Box
              border="4px dashed"
              borderColor="blackAlpha.300"
              borderRadius="md"
              height={{ _: '80vh', md: '100vh' }}
            ></Box>
          </Box>
          <Box p={8}>
            <Box
              border="4px dashed"
              borderColor="blackAlpha.300"
              borderRadius="md"
              height={{ _: '60vh', md: '100vh' }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
