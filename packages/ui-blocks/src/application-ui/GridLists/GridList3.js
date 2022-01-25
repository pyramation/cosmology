import React, { useState } from 'react';
import { Flex, Text, Box, Icon, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const GridList3 = ({ cards, title }) => {
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <NavBarWidthWrapper py={12}>
      <Text color="gray.500" mb={4}>
        {title}
      </Text>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {cards.map(({ id, abbreviation, background, title, desc, icon }) => {
          return (
            <Flex
              borderRadius="md"
              boxShadow="0 0 2px 0px rgba(0, 0, 0, 0.35)"
              overflow="hidden"
              style={{
                cursor: hover && hoverId === id ? 'pointer' : 'default'
              }}
              onMouseEnter={() => {
                setHover(true);
                setHoverId(id);
              }}
              onMouseLeave={() => {
                setHover(false);
                setHoverId(null);
              }}
            >
              <Flex
                alignItems="center"
                backgroundColor={`${background}.400`}
                px={{ _: 4, md: 6 }}
                py={6}
              >
                <Text color="white">{abbreviation}</Text>
              </Flex>
              <Flex
                flexGrow={1}
                justifyContent="space-between"
                alignItems="center"
                p={4}
                backgroundColor={hover && hoverId === id && `${background}.50`}
              >
                <Box>
                  <Text color="gray.600" mb={2}>
                    {title}
                  </Text>
                  <Text color="gray.400">{desc}</Text>
                </Box>
                <Icon name={icon} color="gray.500" />
              </Flex>
            </Flex>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
