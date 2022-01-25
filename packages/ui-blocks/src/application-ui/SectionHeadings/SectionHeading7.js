import React, { useState } from 'react';
import { Flex, Text, Box, Divider, Button } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const SectionHeading7 = ({ title, links, buttons }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent="space-between"
        alignItems={{ _: 'center', md: 'start' }}
        flexWrap="wrap"
      >
        <Text fontSize="xl" fontWeight="medium" mb={4} mr={2}>
          {title}
        </Text>
        <Flex position="relative" right={0} top={{ md: 4 }}>
          {buttons.map(({ id, text, variant }) => {
            const last = buttons.length;
            return (
              <Button
                variant={variant}
                mr={last !== id && 4}
                mb={{ _: 2, md: 0 }}
              >
                <Text color="inherit" mx={3}>
                  {text}
                </Text>
              </Button>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        justifyContent={{ md: 'space-between' }}
        flexWrap="wrap"
        maxWidth={{ md: 'md', lg: 'lg' }}
      >
        {links.map(({ id, text, active }) => {
          const last = links.length;
          if (!selectedItem && active) setSelectedItem(id);
          return (
            <Box
              borderBottom={selectedItem === id && '2px solid'}
              color="palette.primary.base"
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
