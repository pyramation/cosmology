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

export const StackedLayout6 = ({
  navBackgroundColor,
  logoAttr,
  leftLinks,
  avatar,
  title,
  backgroundColor,
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
                    <Box mr={{ md: 2, lg: 4 }}>
                      <Link href={href}>
                        <Button disabled={active} id={id}>
                          {text}
                        </Button>
                      </Link>
                    </Box>
                  );
                })}
              </Flex>
              <Flex position="relative" alignItems="center">
                <Box as="button" mr={4}>
                  <Icon name="bell" color="whiteAlpha.600" />
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
                  top={10}
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
            <Button py={6} onClick={() => setMenu(!menu)}>
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
                      disabled={active}
                      style={{ width: '100%', justifyContent: 'start' }}
                    >
                      {text}
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Divider my={0} borderColor="whiteAlpha.400" />
          <Box pb={2}>
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
                  <Text color="white" mb={2}>
                    {avatar.name}
                  </Text>
                  <Text color="whiteAlpha.500">{avatar.email}</Text>
                </Box>
              </Flex>
              <Box as="button">
                <Icon name="bell" color="whiteAlpha.600" />
              </Box>
            </Flex>
            {lists.map(({ id, text }) => {
              return (
                <Box mb={2}>
                  <Button
                    id={id}
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
        <Divider
          mt={3}
          mb={10}
          mx={{ _: menu && -4, md: 0 }}
          borderColor={{
            _: menu ? 'whiteAlpha.800' : 'whiteAlpha.500',
            md: 'whiteAlpha.500'
          }}
        />
        <Heading as="h1" color="white" pb={48} px={{ _: 4, md: 2 }}>
          {title}
        </Heading>
      </Box>
      <Box position="relative" backgroundColor={backgroundColor} px={8} py={16}>
        <Box
          backgroundColor="white"
          borderRadius="md"
          boxShadow="0 1px 4px 0 #cccccc"
          mt={-56}
          p={8}
        >
          <Box
            height="60vh"
            border="4px dashed"
            borderColor="blackAlpha.400"
            borderRadius="md"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
