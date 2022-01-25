import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Icon,
  Divider,
  Input,
  Box,
  List,
  ListItem,
  Button
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading5 = ({ title, search }) => {
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (!selectedListItem) setSelectedListItem(search.list[0]);
  }, [selectedListItem]);

  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <Text fontSize="xl" fontWeight="semibold" letterSpacing="wide" mb={2}>
          {title}
        </Text>

        <Flex position="relative" alignItems="center" mb={4}>
          <Icon
            position="absolute"
            top={3}
            left={3}
            zIndex={20}
            name={search.iconLeft}
            color="blackAlpha.700"
            size={4}
          />
          <Input
            placeholder={search.text}
            size="md"
            pl={10}
            pr={{ _: 32, md: 48 }}
          />

          <Flex
            alignItems="center"
            maxWidth={{ _: 32, md: 40 }}
            position="absolute"
            top={2}
            right={0}
            zIndex={20}
            my={-2}
            borderLeft="1px solid #cccccc"
          >
            <Button
              variant="tertiary"
              style={{ borderRadius: '0 0.25rem 0.25rem 0' }}
              onClick={() => setShowList(!showList)}
            >
              <Flex alignItems="center" mx={{ md: 4 }}>
                <Icon
                  name={selectedListItem && selectedListItem.icon}
                  size={4}
                  color="inherit"
                  mr={{ _: 2, md: 3 }}
                />
                <Box maxWidth={{ _: 12, md: 20 }}>
                  <Text
                    color="inherit"
                    fontSize={{ _: 'sm', md: 'md' }}
                    truncate
                    mr={{ _: 2, md: 3 }}
                  >
                    {selectedListItem && selectedListItem.text}
                  </Text>
                </Box>
                <Icon
                  size={4}
                  name={showList ? 'chevron-up' : 'chevron-down'}
                  color="inherit"
                />
              </Flex>
            </Button>
          </Flex>

          <List
            position="absolute"
            top={8}
            right={0}
            maxWidth="xl"
            py={6}
            mt={4}
            zIndex={100}
            borderRadius="sm"
            backgroundColor="white"
            boxShadow="0 0 6px 0px rgba(0, 0, 0, 0.5)"
            display={showList ? 'block' : 'none'}
          >
            {search.list.map(({ id, icon, text }) => {
              return (
                <ListItem
                  id={id}
                  onClick={() => {
                    setSelectedListItem({ id, icon, text });
                    setShowList(false);
                  }}
                >
                  <Flex maxWidth={48} alignItems="center" py={2}>
                    <Icon name={icon} mr={4} />
                    <Text color="blackAlpha.800">{text}</Text>
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </Flex>
      <Divider my={0} />
    </NavBarWidthWrapper>
  );
};
