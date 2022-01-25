import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Link,
  Icon,
  Image,
  Slide,
  List,
  ListItem,
  Button
} from '@webql/core';

export const FlyoutMenu1 = ({ selectOptions, company, resources, blogs }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [showList, setShowList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <Flex flexDirection={{ _: 'column', md: 'row' }} mt={4} mb={4}>
      <Flex width={{ md: '50%' }} p={8}>
        <Box width="50%" mr={4}>
          <Text color="blue.600" fontWeight="semibold" mb={6}>
            {company.title}
          </Text>
          {company.lists.map(({ id, icon, name, href }) => {
            return (
              <Link href={href} my={2}>
                <Flex mb={5} alignItems="center">
                  <Icon name={icon} color="blue.600" mr={4} />
                  <Text color="blue.900">{name}</Text>
                </Flex>
              </Link>
            );
          })}
        </Box>
        <Box>
          <Text color="blue.600" fontWeight="semibold" mb={6}>
            {resources.title}
          </Text>
          {resources.lists.map(({ id, icon, name, href }) => {
            return (
              <Link href={href}>
                <Flex mb={5} alignItems="center">
                  <Icon name={icon} color="blue.600" mr={4} />
                  <Text color="blue.900">{name}</Text>
                </Flex>
              </Link>
            );
          })}
        </Box>
      </Flex>
      <Box width={{ md: '50%' }} p={12} backgroundColor="blue.50">
        <Text color="blue.600" fontWeight="semibold" mb={6}>
          {blogs.title}
        </Text>
        {blogs.list.map(({ id, image, title, desc, href }) => {
          return (
            <Link href={href}>
              <Flex flexWrap={{ _: 'wrap', md: 'nowrap' }} mb={8}>
                <Box mr={4}>
                  <Flex
                    justifyContent="center"
                    width={40}
                    height="full"
                    borderRadius="md"
                    overflow="hidden"
                  >
                    <Image src={image} />
                  </Flex>
                </Box>
                <Box overflow="hidden" py={2}>
                  <Text color="blue.900" truncate mb={2}>
                    {title}
                  </Text>
                  <Text color="blue.600" truncate truncateLines={3}>
                    {desc}
                  </Text>
                </Box>
              </Flex>
            </Link>
          );
        })}
        <Link href={blogs.link.href}>
          <Flex alignItems="center">
            <Text as="span" color="palette.primary.base" pr={2}>
              {blogs.link.text}
            </Text>
            <Icon name="arrow-right" size={4} color="palette.primary.base" />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );

  return (
    <Box>
      <Box position="relative" zIndex={20} px={{ _: 2, md: 4 }}>
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
