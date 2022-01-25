import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Link,
  Icon,
  Slide,
  List,
  ListItem,
  Button
} from '@webql/core';

export const FlyoutMenu2 = ({ selectOptions, resources, contacts }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [showList, setShowList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <Box mb={4}>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        px={8}
        pt={12}
        pb={6}
      >
        {resources.map(({ id, icon, name, desc, link }) => {
          return (
            <Box maxWidth={{ md: 'xs', lg: 'sm' }} pr={4} mb={8}>
              <Flex
                justifyContent="center"
                alignItems="center"
                p={1}
                mb={4}
                width={16}
                height={16}
                borderRadius="md"
                backgroundColor="palette.primary.base"
              >
                <Icon name={icon} color="white" />
              </Flex>
              <Text color="blue.900" fontWeight="medium" mb={2}>
                {name}
              </Text>
              <Text
                color="blue.600"
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wide"
                lineHeight="short"
                mb={4}
              >
                {desc}
              </Text>
              <Link href={link.href}>
                <Flex alignItems="center">
                  <Text color="palette.primary.base" pr={1}>
                    {link.text}
                  </Text>
                  <Icon
                    name={link.icon}
                    color="palette.primary.base"
                    size={4}
                  />
                </Flex>
              </Link>
            </Box>
          );
        })}
      </Flex>
      <Box backgroundColor="blue.50">
        <Flex flexWrap="wrap" px={8} py={{ _: 4, md: 0 }}>
          {contacts.map(({ id, icon, title, href }) => {
            const last = contacts.length;
            return (
              <Link href={href}>
                <Flex pr={last === id ? 0 : 8} py={4} alignItems="center">
                  <Box pr={2}>
                    <Icon name={icon} color="blue.600" />
                  </Box>
                  <Text color="blue.900">{title}</Text>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box position="relative" zIndex={20} px={{ _: 2, md: 4 }}>
        {/* select input */}
        <Button
          size="lg"
          variant="tertiary"
          endIcon={showList ? 'chevron-up' : 'chevron-down'}
          onClick={() => setShowList(!showList)}
        >
          {selectedMenuId
            ? selectedMenuId
            : selectOptions.map(({ id }) => id)[0]}
        </Button>

        {/* options */}
        <List
          position="absolute"
          maxWidth="xl"
          py={6}
          mt={4}
          zIndex={100}
          borderRadius="sm"
          backgroundColor="white"
          boxShadow="0 0 6px 0px rgba(0, 0, 0, 0.5)"
          display={showList ? 'block' : 'none'}
        >
          {selectOptions.map(({ id }) => {
            return (
              <ListItem
                id={id}
                onClick={() => {
                  setSelectedMenuId(id);
                  setShowMenu(true);
                  setShowList(false);
                }}
              >
                <Text py={4}>{id}</Text>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* menu */}
      <Slide
        in={showMenu}
        anchor="top"
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        onClick={() => {
          if (showList) setShowList(false);
        }}
        overflow={!showMenu && 'hidden'}
      >
        <Box
          pt={20}
          backgroundColor="white"
          boxShadow="0 12px 20px -12px rgba(0, 0, 0, 0.5)"
        >
          {selectedMenuId === 'Suspendisse' ? (
            menu
          ) : (
            <Text>{selectedMenuId}</Text>
          )}
        </Box>
      </Slide>

      {/* click background */}
      <Box
        display={showMenu || showList ? 'block' : 'none'}
        style={{
          transition: 'all 1s linear'
        }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-10}
        backgroundColor="blackAlpha.100"
        onClick={() => {
          if (showMenu) setShowMenu(false);
          if (showList) setShowList(false);
        }}
      ></Box>
    </Box>
  );
};
