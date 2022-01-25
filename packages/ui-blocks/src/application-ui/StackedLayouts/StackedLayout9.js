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
  Grid,
  Input,
  Button
} from '@webql/core';
import { LogoDefault } from '../../marketing/svg';

export const StackedLayout9 = ({
  navBackgroundColor,
  logoAttr,
  leftLinks,
  avatar,
  search,
  backgroundColor,
  boxBackgroundColor,
  copyRight,
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

            {/* hamburger */}
            <Box display={{ _: 'block', md: 'none' }} ml={2}>
              <Button py={6} onClick={() => setMenu(!menu)}>
                <Icon name={menu ? 'x' : 'justify'} color="inherit" />
              </Button>
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
                    {text}
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </Flex>
        <Divider
          mt={3}
          mb={{ _: menu ? 6 : 2, md: 6 }}
          borderColor="whiteAlpha.500"
          display={{ _: 'none', md: 'block' }}
        />
        <Grid
          gridTemplateColumns={{ _: '1fr', md: '2fr 1fr' }}
          gridGap={6}
          alignItems="center"
          pt={{ _: 8, md: 0 }}
          pb={56}
          mb={{ _: menu && 8, md: 0 }}
        >
          <Box display={{ _: menu ? 'block' : 'none', md: 'block' }}>
            <Flex
              alignItems={{ md: 'center' }}
              flexDirection={{ _: 'column', md: 'row' }}
            >
              {leftLinks.map(({ id, href, text, active }) => {
                const last = leftLinks.length;
                return (
                  <Box
                    mr={{ _: 0, md: last !== id && 2, lg: last !== id && 4 }}
                    mb={{ _: last !== id && 4, md: 0 }}
                  >
                    <Link href={href}>
                      <Button
                        id={id}
                        disabled={active}
                        style={{ width: '100%', justifyContent: 'start' }}
                      >
                        {text}
                      </Button>
                    </Link>
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <Box
            bg="whiteAlpha.800"
            borderRadius="sm"
            display={{ _: menu ? 'block' : 'none', md: 'block' }}
          >
            <Input
              type="text"
              placeholder={search.text}
              startElement={
                <Icon name={search.icon} color="gray.500" mx={-4} />
              }
              fluidWidth
            />
          </Box>
          <Divider
            mt={4}
            mb={{ _: menu && 8, md: 6 }}
            mx={{ _: menu && -4 }}
            borderColor={{
              _: menu && 'whiteAlpha.800',
              md: 'whiteAlpha.500'
            }}
            display={{ _: menu ? 'block' : 'none', md: 'none' }}
          />
        </Grid>
      </Box>
      <Box backgroundColor={backgroundColor} px={{ _: 4, md: 8 }} pb={12}>
        <Grid
          gridTemplateColumns={{ _: '1fr', md: '2fr 1fr' }}
          gridGap={6}
          alignItems="center"
        >
          <Box
            boxShadow="0 3px 3px 0 rgba(0, 0, 0, 0.06)"
            backgroundColor={boxBackgroundColor}
            borderRadius="md"
            p={8}
            mt={{ _: -64, md: '-13rem' }}
          >
            <Box
              height="70vh"
              border="4px dashed"
              borderColor="blackAlpha.400"
              borderRadius="md"
            ></Box>
          </Box>
          <Box
            boxShadow="0 3px 3px 0 rgba(0, 0, 0, 0.06)"
            backgroundColor={boxBackgroundColor}
            borderRadius="md"
            p={8}
            mt={{ md: '-13rem' }}
          >
            <Box
              height={{ _: '50vh', md: '70vh' }}
              border="4px dashed"
              borderColor="blackAlpha.400"
              borderRadius="md"
            ></Box>
          </Box>
        </Grid>
        <Divider my={8} />
        <Text color="blackAlpha.700">{copyRight}</Text>
      </Box>
    </Box>
  );
};
