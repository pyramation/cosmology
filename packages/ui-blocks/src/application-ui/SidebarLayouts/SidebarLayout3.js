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
  Grid,
  Input,
  Button
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const SidebarLayout3 = ({
  slideBackgroundColor,
  brand,
  logoAttr,
  slideLinks,
  search,
  avatar,
  title,
  boxBackgroundColor,
  lists
}) => {
  const [selectList, setSelectList] = useState(false);
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
        <Flex
          position="relative"
          zIndex={{ _: 10, md: 20 }}
          backgroundColor={slideBackgroundColor}
          boxShadow={{
            _: '0 3px 3px 0 #cccccc',
            md: '1px 0 1px 0 rgba(0, 0, 0, 0.1)'
          }}
          justifyContent="space-between"
          alignItems="center"
          pt={{ _: 4, md: 2 }}
          pb={{ _: 4, md: 0 }}
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
                color="rgba(0, 0, 0, 0.80)"
                size="lg"
                display={{ _: 'none', md: 'block' }}
              >
                {brand}
              </Heading>
            </Flex>
          </Link>
          {/* hamburger */}
          <Box display={{ _: 'block', md: 'none' }}>
            <Button
              variant="tertiary"
              py={6}
              mr={4}
              onClick={() => setMenu(!menu)}
            >
              <Icon name={menu ? 'x' : 'justify'} color="inherit" />
            </Button>
          </Box>
        </Flex>

        {/* search input */}
        <Flex
          position="relative"
          zIndex={10}
          display={{ _: menu ? 'flex' : 'none', md: 'flex' }}
          backgroundColor={{ _: slideBackgroundColor, md: 'transparent' }}
          boxShadow={{ md: '0 3px 3px 0 #cccccc' }}
          flexDirection={{ _: 'column', md: 'row' }}
          pr={4}
          pl={{ _: 4, md: 0 }}
        >
          <Box flexGrow={1} boxShadow={{ _: '0 0 2px 0 #cccccc', md: 'none' }}>
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

          <Flex alignItems="center" mt={{ _: 4, md: 0 }}>
            {/* large avatar */}
            <Box as="button" ml={{ _: 2, md: 5 }} mr={{ _: 4, md: 5 }}>
              <Icon name="bell" color="blackAlpha.700" />
            </Box>
            <Box
              as="button"
              display={{ _: 'none', md: 'block' }}
              onClick={() => {
                setSelectList(!selectList);
              }}
            >
              <Avatar
                id="avatar"
                src={avatar.avatarImage}
                size={10}
                minWidth={10}
                mr={{ _: 2, md: 0 }}
              />
            </Box>

            {/* small avatar */}
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
                mr={{ _: 2, md: 0 }}
                my={2}
              />
              <Box>
                <Text color="blackAlpha.800" mb={2}>
                  {avatar.name}
                </Text>
                <Text color="blackAlpha.600">{avatar.email}</Text>
              </Box>
            </Flex>
          </Flex>

          {/* large select list */}
          <List
            display={{ _: 'none', md: selectList ? 'block' : 'none' }}
            position="absolute"
            zIndex={20}
            top={16}
            right={4}
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

          {/* small select list */}
          <Box display={{ _: 'block', md: 'none' }} mt={3}>
            {lists.map(({ id, text }) => {
              return (
                <Box>
                  <Button
                    variant="tertiary"
                    style={{ width: '100%', justifyContent: 'start' }}
                    px={3}
                    py={6}
                    mb={2}
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
          <Divider mt={4} mb={4} />
        </Flex>
      </Grid>

      {/* large slide */}
      <Grid
        gridTemplateColumns={{ _: '1fr', md: '250px 1fr', lg: '300px 1fr' }}
      >
        <Box
          position="relative"
          zIndex={10}
          backgroundColor={slideBackgroundColor}
          display={{ _: menu ? 'block' : 'none', md: 'block' }}
          boxShadow={{ _: menu && '0 3px 3px 0 #cccccc', md: 'none' }}
          px={4}
          pt={2}
          pb={6}
        >
          {slideLinks.map(({ id, icon, href, text, active }) => {
            return (
              <Box mb={{ _: 2, md: 3 }}>
                <Link href={href}>
                  <Button
                    variant="tertiary"
                    selected={active}
                    style={{
                      width: '100%',
                      paddingLeft: 0,
                      paddingRight: 0,
                      justifyContent: 'start'
                    }}
                    py={6}
                  >
                    <Flex id={id} alignItems="center" p={3} mx={2}>
                      <Icon name={icon} color="inherit" size={5} mr={4} />
                      <Text color="inherit">{text}</Text>
                    </Flex>
                  </Button>
                </Link>
              </Box>
            );
          })}
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
            mb={20}
          ></Box>
        </Box>
      </Grid>
    </Box>
  );
};
