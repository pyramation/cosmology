import React, { useState } from 'react';
import { Flex, Text, Box, Divider } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading8 = ({ title, links }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <NavBarWidthWrapper py={10}>
      <Flex flexDirection={{ _: 'column', md: 'row' }}>
        <Text fontSize="xl" fontWeight="medium" pt={2} mr={{ _: 4, md: 6 }}>
          {title}
        </Text>
        <Flex flexWrap="wrap">
          {links.map(({ id, text, active }) => {
            const last = links.length;
            if (!selectedItem && active) setSelectedItem(id);
            return (
              <Box
                borderBottom={selectedItem === id && '2px solid'}
                color="palette.primary.base"
                pt={3}
                pb={3}
                mr={{ _: last !== id && 4, md: last !== id && 5 }}
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
      </Flex>
      <Divider my={0} />
    </NavBarWidthWrapper>
  );
};
