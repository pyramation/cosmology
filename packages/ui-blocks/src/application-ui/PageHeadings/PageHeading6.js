import React, { useState, useRef, useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  Icon,
  Heading,
  Grid,
  Button,
  List,
  ListItem
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading6 = ({ title, stats, background, buttons }) => {
  const [openList, setOpenList] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const showBtnId = useRef([]);

  useEffect(() => {
    setOptions(buttons.filter(({ variant }) => variant !== 'primary'));
  }, []);

  useEffect(() => {
    if (selectedId) {
      setOptions(options.filter(({ id }) => id !== selectedId));
      showBtnId.current.push(options.filter(({ id }) => id === selectedId)[0]);
    }
  }, [selectedId]);

  return (
    <NavBarWidthWrapper py={10}>
      <Flex
        justifyContent={{ _: 'center', md: 'space-between' }}
        alignItems={{ md: 'center' }}
        flexDirection={{ _: 'column', md: 'row' }}
        flexWrap="wrap"
        backgroundColor={background}
        borderRadius="md"
        p={6}
      >
        <Box mr={4} my={2}>
          <Heading as="h2" size="xl" color="white" mb={{ _: 3, md: 0 }}>
            {title}
          </Heading>
          <Flex flexDirection={{ _: 'column', md: 'row' }} mt={2}>
            {stats.map(({ id, icon, text }) => {
              return (
                <Flex alignItems="center" mr={6} mb={{ _: 3, md: 0 }}>
                  <Icon name={icon} color="whiteAlpha.600" size={5} mr={2} />
                  <Text color="whiteAlpha.600">{text}</Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Grid
          gridTemplateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}
          gridColumnGap={4}
          gridRowGap={6}
          my={2}
        >
          {/* large size */}
          {buttons.map(({ id, icon, text, variant, bg }) => {
            return (
              <Box
                display={{
                  _: id !== 'submit' && 'none',
                  md: 'block'
                }}
              >
                <Button
                  style={{ width: '100%' }}
                  variant={variant}
                  bg={bg}
                  py={6}
                >
                  <Flex alignItems="center" mx={2}>
                    <Icon name={icon} size={4} color="inherit" mr={3} />
                    <Text color="inherit">{text}</Text>
                  </Flex>
                </Button>
              </Box>
            );
          })}
          {/* small size */}
          {showBtnId.current.map(({ id, icon, text, variant, bg }) => {
            return (
              <Box display={{ md: 'none' }}>
                <Button style={{ width: '100%' }} variant={variant} bg={bg}>
                  <Flex alignItems="center">
                    <Icon name={icon} size={4} color="inherit" mr={3} />
                    <Text color="inherit">{text}</Text>
                  </Flex>
                </Button>
              </Box>
            );
          })}

          {options.length !== 0 && (
            <Box position="relative" display={{ md: 'none' }}>
              <Button
                variant="secondary"
                style={{ width: '100%' }}
                onClick={() => setOpenList(!openList)}
              >
                <Flex alignItems="center">
                  <Text color="whiteAlpha.700" mr={3}>
                    More
                  </Text>
                  <Icon
                    color="whiteAlpha.700"
                    name={openList ? 'chevron-up' : 'chevron-down'}
                    size={4}
                  />
                </Flex>
              </Button>
              {openList && (
                <List position="absolute" top={12} width="full" zIndex={20}>
                  {options.map(({ id, text }) => {
                    return (
                      <ListItem
                        id={id}
                        onClick={() => {
                          setSelectedId(id);
                          setOpenList(false);
                        }}
                      >
                        <Text py={1}>{text}</Text>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Box>
          )}
        </Grid>
      </Flex>
    </NavBarWidthWrapper>
  );
};
