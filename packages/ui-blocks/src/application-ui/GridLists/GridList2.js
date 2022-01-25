import React, { useState } from 'react';
import { Flex, Text, Box, Tag, Avatar, Grid, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const GridList2 = ({ avatars }) => {
  const [hover, setHover] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(null);
  return (
    <NavBarWidthWrapper py={12}>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
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
              <Flex justifyContent="center" alignItems="center" py={8} px={4}>
                <Box>
                  <Flex justifyContent="center" mb={4}>
                    <Avatar src={authorImage} size={32} minWidth={32} />
                  </Flex>
                  <Text color="blue.900" textAlign="center" mb={2}>
                    {author}
                  </Text>
                  <Text color="blue.600" textAlign="center" mb={4}>
                    {desc}
                  </Text>
                  <Flex justifyContent="center">
                    <Tag
                      color={tag.color && `palette.${tag.color}.base`}
                      borderRadius="lg"
                    >
                      {tag.text}
                    </Tag>
                  </Flex>
                </Box>
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
