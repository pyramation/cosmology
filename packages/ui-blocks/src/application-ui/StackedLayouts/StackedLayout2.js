import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Icon,
  Link,
  Avatar,
  List,
  ListItem,
  Divider,
  Heading,
  Button
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const StackedLayout2 = ({
  brand,
  logoAttr,
  leftLinks,
  avatar,
  title,
  lists
}) => {
  const [hoverId, setHoverId] = useState(null);
  const [hover, setHover] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Box overflow="hidden" pb={4}>
      <Box
        px={{ _: 4, md: 8 }}
        py={{ _: 4, md: 0 }}
        boxShadow="0 0 3px 0 rgba(0,0,0,0.35)"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="#" mb={{ md: 1 }}>
            <Flex alignItems="center" mr={10}>
              <Box width={10} height={10} mr={4}>
                {logoAttr ? (
                  <Image width="full" height="full" src={logoAttr.logo} />
                ) : (
                  <LogoDefault width="full" height="full" fill="#01A1FF" />
                )}
              </Box>
              <Heading as="h2" color="palette.primary.base" fontSize="2xl">
                {brand}
              </Heading>
            </Flex>
          </Link>

          {/* large navbar */}
          <Box flexGrow={1} display={{ _: 'none', md: 'block' }}>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex>
                {leftLinks.map(({ id, href, text, active }) => {
                  return (
                    <Link href={href} mr={6}>
                      <Box
                        as="button"
                        id={id}
                        borderBottom={active && '1px solid'}
                        borderColor="palette.primary.base"
                        py={8}
                        px={1}
                        onMouseEnter={() => {
                          setHover(true);
                          setHoverId(id);
                        }}
                        onMouseLeave={() => {
                          setHover(false);
                          setHoverId(null);
                        }}
                      >
                        <Text
                          color={
                            active
                              ? 'palette.primary.base'
                              : hover && hoverId === id
                              ? 'blackAlpha.500'
                              : 'blackAlpha.700'
                          }
                        >
                          {text}
                        </Text>
                      </Box>
                    </Link>
                  );
                })}
              </Flex>
              <Flex position="relative" alignItems="center">
                <Box as="button" mr={5}>
                  <Icon name="bell" color="blackAlpha.700" />
                </Box>
                <Box
                  as="button"
                  onClick={() => {
                    setSelectList(!selectList);
                  }}
                >
                  <Avatar
                    id="avatar"
                    src={avatar.avatarImage}
                    size={10}
                    minWidth={10}
                  />
                </Box>

                {/* large select list */}
                <List
                  display={selectList ? 'block' : 'none'}
                  position="absolute"
                  zIndex={20}
                  top={12}
                  right={0}
                  mt={2}
                >
                  {lists.map(({ id, text }) => {
                    return (
                      <ListItem
                        id={id}
                        onClick={() => {
                          console.log('list id', id);
                          setSelectList(false);
                        }}
                      >
                        {text}
                      </ListItem>
                    );
                  })}
                </List>
              </Flex>
            </Flex>
          </Box>

          {/* hamburger */}
          <Box display={{ _: 'block', md: 'none' }}>
            <Button variant="tertiary" py={6} onClick={() => setMenu(!menu)}>
              <Icon name={menu ? 'x' : 'justify'} color="inherit" />
            </Button>
          </Box>
        </Flex>

        {/* small menu */}
        <Box display={{ _: menu ? 'block' : 'none', md: 'none' }}>
          <Box my={6}>
            {leftLinks.map(({ id, href, text, active }) => {
              return (
                <Box mb={2}>
                  <Link href={href}>
                    <Button
                      id={id}
                      py={6}
                      variant={active ? 'primary' : 'tertiary'}
                      style={{ width: '100%', justifyContent: 'start' }}
                    >
                      {text}
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Divider my={0} mx={-4} />
          <Box>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mt={6}
              mb={2}
              px={2}
            >
              <Flex alignItems="center" flexWrap="wrap" mr={4}>
                <Avatar
                  src={avatar.avatarImage}
                  size={12}
                  minWidth={12}
                  mr={4}
                  py={2}
                />
                <Box py={2}>
                  <Text color="palette.primary.base" mb={2}>
                    {avatar.name}
                  </Text>
                  <Text color="blue.500">{avatar.email}</Text>
                </Box>
              </Flex>
              <Box as="button">
                <Icon name="bell" color="blackAlpha.700" />
              </Box>
            </Flex>
            {lists.map(({ id, text }) => {
              return (
                <Box mb={2}>
                  <Button
                    id={id}
                    variant="tertiary"
                    style={{ width: '100%', justifyContent: 'start' }}
                    onClick={() => {
                      console.log('list id', id);
                      setMenu(false);
                    }}
                    py={6}
                  >
                    {text}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box px={8} py={10}>
        <Heading as="h1" color="blackAlpha.800">
          {title}
        </Heading>
      </Box>
      <Box px={8} pb={4}>
        <Box
          height="50vh"
          border="4px dashed"
          borderColor="blackAlpha.400"
          borderRadius="md"
        ></Box>
      </Box>
    </Box>
  );
};
