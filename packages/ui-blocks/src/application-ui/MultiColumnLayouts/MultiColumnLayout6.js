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
  List,
  ListItem,
  Button,
  Collapse
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const MultiColumnLayout6 = ({
  slideBackgroundColor,
  logoAttr,
  search,
  slideLinks,
  avatar,
  lists,
  contentLeftColor
}) => {
  const [menu, setMenu] = useState(false);
  const [selectList, setSelectList] = useState(false);

  return (
    <Box overflow="hidden">
      <Flex
        position="relative"
        zIndex={15}
        justifyContent="space-between"
        backgroundColor={slideBackgroundColor}
        boxShadow={{ _: !menu && '0 2px 3px 0 #cccccc', md: 'none' }}
      >
        <Flex justifyContent="center" alignItems="center" py={4} px={6}>
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
          backgroundColor={{ md: 'white' }}
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
            position="relative"
            display={{ _: 'none', md: 'flex' }}
            alignItems="center"
            mt={{ _: 4, md: 0 }}
            px={4}
          >
            <Link href={avatar.href} mr={2}>
              <Avatar src={avatar.avatarImage} size={12} minWidth={12} />
            </Link>
            <Box
              as="button"
              mx={6}
              p={3}
              borderRadius="round"
              border="2px solid"
              borderColor={slideBackgroundColor}
              backgroundColor={slideBackgroundColor}
              onClick={() => setSelectList(!selectList)}
            >
              <Icon name={selectList ? 'min' : 'max'} color="white" size={5} />
            </Box>

            {/* large select list */}
            <List
              display={{ _: 'none', md: selectList ? 'block' : 'none' }}
              position="absolute"
              zIndex={20}
              top={16}
              right={6}
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
                    <Text color="inherit" fontSize="sm" py={1}>
                      {text}
                    </Text>
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </Flex>

        {/* hamburger */}
        <Flex display={{ _: 'flex', md: 'none' }} alignItems="center" px={6}>
          <Button py={6} onClick={() => setMenu(!menu)}>
            <Icon size={5} color="inherit" name={menu ? 'x' : 'justify'} />
          </Button>
        </Flex>
      </Flex>

      {/* small menu */}
      <Collapse in={menu}>
        <Box
          position="relative"
          zIndex={15}
          display={{ md: 'none' }}
          boxShadow={menu ? 'inset 0 -5px 6px -4px #606bbd' : 'none'}
          backgroundColor={slideBackgroundColor}
          px={6}
          pt={2}
          pb={6}
        >
          <Box borderRadius="sm" bg="whiteAlpha.800" mb={4}>
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
          <Link href={avatar.href}>
            <Flex
              display={{ _: 'flex', md: 'none' }}
              flexWrap="wrap"
              alignItems="center"
              mb={2}
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
                <Text color="whiteAlpha.500">{avatar.text}</Text>
              </Box>
            </Flex>
          </Link>
          <Box mb={2}>
            {lists.map(({ id, text }) => {
              return (
                <Box>
                  <Button
                    style={{ width: '100%', justifyContent: 'start' }}
                    onClick={() => {
                      console.log('list id', id);
                      setMenu(!menu);
                    }}
                    px={4}
                    py={6}
                    mb={2}
                  >
                    <Text color="inherit">{text}</Text>
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box borderTop="1px dashed" borderColor="whiteAlpha.400" pt={5}>
            {slideLinks.map(({ id, href, icon, text, active }) => {
              return (
                <Box>
                  <Link href={href}>
                    <Button
                      style={{ width: '100%', justifyContent: 'start' }}
                      disabled={active}
                      px={4}
                      py={6}
                      mb={2}
                    >
                      <Flex alignItems="center">
                        <Icon name={icon} color="inherit" mr={3} />
                        <Text color="inherit">{text}</Text>
                      </Flex>
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Collapse>

      <Flex>
        {/* large left slide */}
        <Box
          display={{ _: 'none', md: 'block' }}
          backgroundColor={slideBackgroundColor}
          py={2}
          px={4}
        >
          {slideLinks.map(({ id, href, icon, text, active }) => {
            return (
              <Flex justifyContent="center" alignItems="center" mb={4}>
                <Link href={href}>
                  <Button
                    style={{ width: '4rem' }}
                    id={id}
                    disabled={active}
                    py={8}
                  >
                    <Box>
                      <Icon name={icon} color="inherit" mb={1} />
                      <Text color="inherit" fontSize="xs">
                        {text}
                      </Text>
                    </Box>
                  </Button>
                </Link>
              </Flex>
            );
          })}
        </Box>

        {/* content */}
        <Grid flexGrow={1} gridTemplateColumns={{ _: '1fr', md: '2fr 1fr' }}>
          <Box
            borderRight={{ _: 'none', md: '1px solid rgba(0, 0, 0, 0.08)' }}
            borderBottom={{ _: '1px solid rgba(0, 0, 0, 0.08)', md: 'none' }}
            backgroundColor={contentLeftColor}
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
    </Box>
  );
};
