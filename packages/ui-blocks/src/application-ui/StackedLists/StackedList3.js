import React, { useState } from 'react';
import { Flex, Text, Box, Icon, Avatar, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const StackedList3 = ({ avatarGroups }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <NavBarWidthWrapper py={16}>
      <Box borderRadius="md" boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.35)">
        {avatarGroups.map(
          ({ id, occupation, desc, date, avatars, listIcon }) => {
            const last = avatars.length;
            return (
              <Box
                backgroundColor={
                  hover && selectedData === id ? 'blue.50' : 'transparent'
                }
                style={{
                  cursor: hover && selectedData === id ? 'pointer' : 'default'
                }}
                onMouseEnter={() => {
                  setHover(true);
                  setSelectedData(id);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setSelectedData(null);
                }}
              >
                <Flex
                  position="relative"
                  px={{ _: 6, md: 10 }}
                  py={6}
                  justifyContent="space-between"
                  flexDirection={{ _: 'column', md: 'row' }}
                >
                  <Box pr={{ _: 12, md: 0 }}>
                    <Text as="span" color="blue.900">
                      <Text as="span" color="palette.primary.base">
                        {occupation}{' '}
                      </Text>
                      {desc}
                    </Text>
                    <Flex alignItems="center" mt={2}>
                      <Icon name={date.icon} size={4} color="blue.500" mr={2} />
                      <Text color="blue.500">{date.text}</Text>
                    </Flex>
                  </Box>
                  <Flex
                    alignItems="center"
                    flexWrap="wrap"
                    pr={12}
                    pl={{ _: 4, md: 0 }}
                    mt={{ _: 4, md: 0 }}
                  >
                    {avatars.map(({ id, authorImage }) => {
                      return (
                        <Box
                          position="relative"
                          zIndex={id * 2}
                          mr={-2}
                          right={2}
                        >
                          <Avatar src={authorImage} size={10} minWidth={10} />
                        </Box>
                      );
                    })}
                  </Flex>

                  <Flex
                    position="absolute"
                    top={3}
                    bottom={3}
                    right={{ _: 5, md: 10 }}
                    alignItems="center"
                  >
                    <Icon name={listIcon} color="blue.900" />
                  </Flex>
                </Flex>
                {last !== id && <Divider my={0} />}
              </Box>
            );
          }
        )}
      </Box>
    </NavBarWidthWrapper>
  );
};
