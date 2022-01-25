import React, { useState } from 'react';
import styled from 'styled-components';
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

export const StackedLayout1 = ({
  navBackgroundColor,
  logoAttr,
  leftLinks,
  avatar,
  title,
  titleBackgroundColor,
  boxBackgroundColor,
  lists
}) => {
  const [selectList, setSelectList] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Box overflow="hidden" pb={4}>
      <Box backgroundColor={navBackgroundColor} py={4} px={{ _: 4, md: 8 }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="#" px={{ _: 3, md: 0 }}>
            <Box width={12} height={12} mr={8}>
              {logoAttr ? (
                <Image width="full" height="full" src={logoAttr.logo} />
              ) : (
                <LogoDefault width="full" height="full" fill="#FFFFFF" />
              )}
            </Box>
          </Link>

          {/* large navbar */}
          <Box flexGrow={1} display={{ _: 'none', md: 'block' }}>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex>
                {leftLinks.map(({ id, href, text, active }) => {
                  return (
                    <Box mr={{ _: 2, lg: 4 }}>
                      <Link href={href}>
                        <Button selected={active} variant="tertiary" py={6}>
                          <Text color="inherit">{text}</Text>
                        </Button>
                      </Link>
                    </Box>
                  );
                })}
              </Flex>
              <Flex position="relative" alignItems="center">
                <Box as="button" mr={{ _: 4, md: 5 }}>
                  <Icon name="bell" color="whiteAlpha.700" />
                </Box>
                <Box as="button" display={{ _: 'none', md: 'block' }}>
                  <Avatar
                    id="avatar"
                    src={avatar.avatarImage}
                    size={10}
                    minWidth={10}
                    mr={{ _: 2, md: 0 }}
                    onClick={() => {
                      setSelectList(!selectList);
                    }}
                  />
                </Box>

                {/* select list */}
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
                        <Text fontSize="inherit" py={1}>
                          {text}
                        </Text>
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
                <Box mb={3}>
                  <Link href={href}>
                    <Button
                      selected={active}
                      variant="tertiary"
                      style={{ width: '100%', justifyContent: 'start' }}
                      py={6}
                    >
                      <Box id={id} borderRadius="md">
                        <Text color="inherit">{text}</Text>
                      </Box>
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Divider my={0} mx={-4} borderColor="whiteAlpha.300" />
          <Box pb={2}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mt={6}
              mb={3}
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
                  <Text color="white" mb={2}>
                    {avatar.name}
                  </Text>
                  <Text color="whiteAlpha.500">{avatar.email}</Text>
                </Box>
              </Flex>
              <Box as="button" mr={{ _: 4, md: 5 }}>
                <Icon name="bell" color="whiteAlpha.700" />
              </Box>
            </Flex>
            {lists.map(({ id, text }) => {
              return (
                <Box mb={3}>
                  <Button
                    variant="tertiary"
                    style={{ width: '100%', justifyContent: 'start' }}
                    py={6}
                  >
                    <Text
                      id={id}
                      color="inherit"
                      onClick={() => {
                        console.log('list id', id);
                        setMenu(false);
                      }}
                    >
                      {text}
                    </Text>
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        position="relative"
        zIndex={5}
        backgroundColor={titleBackgroundColor}
        boxShadow="0 0 4px 0 rgba(0, 0, 0, 0.35)"
        py={6}
        px={8}
      >
        <Heading as="h1" color="blackAlpha.800">
          {title}
        </Heading>
      </Box>
      <Box backgroundColor={boxBackgroundColor} px={8} py={16}>
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
