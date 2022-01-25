import React from 'react';
import { Flex, Text, Box, Icon, Divider, Grid, Link } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const DescriptionList3 = ({ title, subTitle, list }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Box p={6}>
        <Text
          fontSize="lg"
          fontWeight="medium"
          letterSpacing="wide"
          color="blue.900"
          mb={2}
        >
          {title}
        </Text>
        <Text letterSpacing="wide" color="blue.600">
          {subTitle}
        </Text>
      </Box>
      <Divider my={0} />
      {list.map(({ id, headline, data, link, file }) => {
        const last = list.length;
        return (
          <Grid
            templateColumns={{ _: '1fr', md: 'minmax(250px, 1fr) 2fr auto' }}
            borderBottom={last !== id && '1px solid'}
            borderColor="gray.200"
          >
            <Box px={6} pt={6} pb={{ _: 2, md: 6 }}>
              <Text color="blue.700">{headline}</Text>
            </Box>
            <Box
              pl={{ _: 6, md: data ? 6 : 0 }}
              pr={6}
              pt={{ _: 0, md: 6 }}
              pb={{ _: 4, md: 6 }}
            >
              {data && (
                <Text color="blue.900" lineHeight="short">
                  {data}
                </Text>
              )}
              {file && (
                <Box
                  ml={{ md: -2 }}
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  {file.map(({ id, icon, fileName, link1, link2 }) => {
                    const last = file.length;
                    return (
                      <>
                        <Flex
                          flexDirection={{ _: 'column', md: 'row' }}
                          justifyContent={{ md: 'space-between' }}
                          alignItems={{ md: 'center' }}
                          p={4}
                        >
                          <Flex alignItems="center" mr={2} mb={{ _: 2, md: 0 }}>
                            <Flex
                              justifyContent="center"
                              alignItems="center"
                              mr={3}
                            >
                              <Icon size={4} name={icon} color="blue.400" />
                            </Flex>
                            <Text color="blue.900">{fileName}</Text>
                          </Flex>
                          <Flex justifyContent="center">
                            <Box
                              borderRight="3px solid"
                              borderColor="gray.100"
                              pr={3}
                            >
                              <Link href={link1.href} color>
                                {link1.text}
                              </Link>
                            </Box>
                            <Box pl={3}>
                              <Link href={link2.href} color>
                                {link2.text}
                              </Link>
                            </Box>
                          </Flex>
                        </Flex>
                        {last !== id && <Divider my={0} />}
                      </>
                    );
                  })}
                </Box>
              )}
            </Box>
            {data && (
              <Box px={6} pt={{ _: 0, md: 6 }} pb={6}>
                <Link href={link.href} color>
                  {link.text}
                </Link>
              </Box>
            )}
          </Grid>
        );
      })}
    </NavBarWidthWrapper>
  );
};
