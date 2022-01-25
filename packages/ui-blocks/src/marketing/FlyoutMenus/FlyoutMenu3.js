import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Link,
  Slide,
  List,
  ListItem,
  Button
} from '@webql/core';

export const FlyoutMenu3 = ({ selectOptions, resources }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [showList, setShowList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <Flex alignItems="center" pt={20} px={2} mb={4}>
      <Box
        borderRadius="md"
        backgroundColor="white"
        border="1px solid #ebebeb"
        boxShadow="-12px 15px 20px -20px rgba(0, 0, 0, 0.35), 12px 15px 20px -20px rgba(0, 0, 0, 0.35)"
        maxWidth="md"
        overflow="hidden"
        p={8}
      >
        {resources.map(({ id, name, desc, href }) => {
          const last = resources.length;
          return (
            <Link href={href}>
              <Text color="blue.900" fontWeight="medium" mb={2}>
                {name}
              </Text>
              <Text
                color="blue.600"
                fontSize="sm"
                letterSpacing="wide"
                lineHeight="shorter"
                mb={last === id ? 0 : 8}
              >
                {desc}
              </Text>
            </Link>
          );
        })}
      </Box>
    </Flex>
  );

  return (
    <Box>
      <Box px={{ _: 2, md: 4 }}>
        {/* select input */}
        <Flex position="relative" zIndex={20} justifyContent="center">
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
        </Flex>

        {/* options */}
        <Flex justifyContent="center" position="relative" zIndex={20}>
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
        </Flex>
      </Box>

      {/* menu */}
      <Flex justifyContent="center">
        <Slide
          in={showMenu}
          anchor="top"
          position="absolute"
          zIndex={10}
          onClick={() => {
            if (showList) setShowList(false);
          }}
          overflow={!showMenu && 'hidden'}
        >
          {selectedMenuId === 'Suspendisse' ? (
            menu
          ) : (
            <Box pt={20}>
              <Box
                borderRadius="md"
                backgroundColor="white"
                border="1px solid #ebebeb"
                boxShadow="-12px 15px 20px -20px rgba(0, 0, 0, 0.35), 12px 15px 20px -20px rgba(0, 0, 0, 0.35)"
                maxWidth="md"
                p={8}
              >
                <Text>{selectedMenuId}</Text>
              </Box>
            </Box>
          )}
        </Slide>
      </Flex>

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
