import React, { useState } from 'react';
import { Flex, Text, Box, Icon, Avatar, Divider, Grid } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const StackedList2 = ({ avatars }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <NavBarWidthWrapper py={16}>
      <Box borderRadius="md" boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.35)">
        {avatars.map(
          ({ id, author, authorImage, email, date, status, listIcon }) => {
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
                  px={{ _: 5, md: 10 }}
                  py={6}
                  justifyContent="space-between"
                >
                  <Grid
                    templateColumns={{ _: '1fr', md: '1fr 1fr' }}
                    gridColumnGap={8}
                    gridRowGap={4}
                    flexGrow={1}
                    mr={2}
                  >
                    <Flex alignItems="center">
                      <Avatar
                        src={authorImage}
                        size={16}
                        minWidth={16}
                        mr={4}
                      />
                      <Box>
                        <Text color="palette.primary.base" mb={2}>
                          {author}
                        </Text>
                        <Flex alignItems="center" maxWidth="md">
                          <Icon
                            name={email.icon}
                            color="blue.700"
                            size={5}
                            mr={2}
                          />
                          <Text
                            color="blue.700"
                            style={{ wordBreak: 'break-all' }}
                          >
                            {email.text}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                    <Flex alignItems="center">
                      <Box>
                        <Text color="blue.900" mb={2}>
                          {date}
                        </Text>
                        <Flex alignItems="center">
                          <Icon
                            size={5}
                            name={status.icon}
                            color={status.iconColor}
                            mr={2}
                          />
                          <Text color={status.iconColor}>{status.text}</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Grid>
                  <Flex justifyContent="end" alignItems="center">
                    <Icon name={listIcon} />
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
