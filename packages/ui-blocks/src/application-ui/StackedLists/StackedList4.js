import React, { useState } from 'react';
import { Flex, Text, Box, Icon, Tag, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const StackedList4 = ({ avatarGroups }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <NavBarWidthWrapper py={16}>
      <Box
        borderRadius="md"
        boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.35)"
        overflow="hidden"
      >
        {avatarGroups.map(({ id, title, status, date, tag }) => {
          const last = avatarGroups.length;
          return (
            <Box
              backgroundColor={
                hover && selectedData === id ? 'blue.50' : 'transparent'
              }
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
                justifyContent={{ md: 'space-between' }}
                alignItems="center"
                flexDirection={{ _: 'column', md: 'row' }}
              >
                <Box mb={{ _: 4, md: 0 }}>
                  <Text
                    color="palette.primary.base"
                    fontSize="lg"
                    textAlign={{ _: 'center', md: 'start' }}
                  >
                    {title}
                  </Text>
                  <Flex
                    justifyContent={{ _: 'center', md: 'start' }}
                    flexWrap="wrap"
                    mt={4}
                  >
                    {status.map(({ id, icon, text }) => {
                      const last = status.length;
                      return (
                        <Flex
                          alignItems="center"
                          pr={id !== last && 6}
                          mb={{ _: 2, md: 0 }}
                        >
                          <Icon name={icon} size={4} color="blue.700" mr={2} />
                          <Text color="blue.700">{text}</Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={{ _: 'center', md: 'end' }}>
                    <Tag color={tag.color} borderRadius="lg">
                      {tag.text}
                    </Tag>
                  </Flex>
                  <Flex justifyContent="end" alignItems="center" mt={2}>
                    <Icon name={date.icon} size={4} color="blue.700" mr={2} />
                    <Text color="blue.700">{date.text}</Text>
                  </Flex>
                </Box>
              </Flex>
              {last !== id && <Divider my={0} />}
            </Box>
          );
        })}
      </Box>
    </NavBarWidthWrapper>
  );
};
