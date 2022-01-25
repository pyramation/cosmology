import React, { useState } from 'react';
import { Flex, Text, Box, Tag, Avatar, Grid, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const GridList1 = ({ avatars }) => {
  const [hover, setHover] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(null);
  return (
    <NavBarWidthWrapper py={8}>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
        gridRowGap={8}
        gridColumnGap={8}
      >
        {avatars.map(({ id, author, authorImage, desc, tag, button }) => {
          return (
            <Grid
              gridAutoRows="1fr 60px"
              boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.35)"
              borderRadius="md"
            >
              <Flex justifyContent="space-between" alignItems="center" p={8}>
                <Box pr={4}>
                  <Flex alignItems="center" flexWrap="wrap" mb={2}>
                    <Text color="blue.900" mr={4}>
                      {author}
                    </Text>
                    <Tag
                      color={tag.color && `palette.${tag.color}.base`}
                      borderRadius="lg"
                    >
                      {tag.text}
                    </Tag>
                  </Flex>
                  <Text
                    color="blue.600"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 5
                    }}
                    overflow="hidden"
                  >
                    {desc}
                  </Text>
                </Box>
                <Avatar src={authorImage} size={16} minWidth={16} />
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                {button.map(({ btnId, icon, text }) => {
                  return (
                    <Box
                      width="50%"
                      borderTop="1px solid"
                      borderRight={btnId === 'left' && '1px solid'}
                      borderColor="gray.100"
                      backgroundColor={
                        hover && selectId === id && hoverBtn === btnId
                          ? 'blue.50'
                          : 'transparent'
                      }
                      style={{
                        cursor:
                          hover && selectId === id && hoverBtn === btnId
                            ? 'pointer'
                            : 'default'
                      }}
                      onMouseEnter={() => {
                        setHover(true);
                        setSelectId(id);
                        setHoverBtn(btnId);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                        setSelectId(null);
                        setHoverBtn(null);
                      }}
                      py={4}
                    >
                      <Flex justifyContent="center" alignItems="center">
                        <Icon name={icon} color="gray.500" mr={2} />
                        <Text color="gray.500">{text}</Text>
                      </Flex>
                    </Box>
                  );
                })}
              </Flex>
            </Grid>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
