import React, { useState } from 'react';
import { Flex, Text, Box, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading6 = ({ title, links }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <NavBarWidthWrapper py={10}>
      <Text fontSize="xl" fontWeight="medium" mb={4}>
        {title}
      </Text>
      <Flex
        justifyContent={{ md: 'space-between' }}
        flexWrap="wrap"
        maxWidth="lg"
      >
        {links.map(({ id, text, active }) => {
          const last = links.length;
          if (!selectedItem && active) setSelectedItem(id);
          return (
            <Box
              borderBottom={selectedItem === id && '2px solid'}
              borderColor="palette.primary.base"
              pt={3}
              pb={3}
              mr={last !== id && 5}
              onClick={() => setSelectedItem(id)}
              onMouseEnter={() => {
                setHover(true);
                setHoverId(id);
              }}
              onMouseLeave={() => {
                setHover(false);
                setHoverId(null);
              }}
              style={{
                cursor: hover && hoverId === id ? 'pointer' : 'default'
              }}
            >
              <Text
                color={
                  selectedItem === id
                    ? 'palette.primary.base'
                    : 'blackAlpha.600'
                }
              >
                {text}
              </Text>
            </Box>
          );
        })}
      </Flex>
      <Divider my={0} />
    </NavBarWidthWrapper>
  );
};
