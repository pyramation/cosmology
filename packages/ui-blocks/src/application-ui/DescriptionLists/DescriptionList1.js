import React from 'react';
import { Flex, Text, Box, Icon, Divider, Grid, Link } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const DescriptionList1 = ({ title, subTitle, list }) => {
  return (
    <NavBarWidthWrapper py={10}>
      <Box borderRadius="md" boxShadow="0 0 3px 0px rgba(0, 0, 0, 0.35)">
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
        {list.map(({ id, headline, data, file }) => {
          return (
            <Grid templateColumns={{ _: '1fr', md: 'minmax(250px, 1fr) 2fr' }}>
              <Box
                backgroundColor={id % 2 !== 0 ? 'blue.50' : 'white'}
                px={6}
                pt={6}
                pb={{ _: 2, md: 6 }}
              >
                <Text color="blue.700">{headline}</Text>
              </Box>
              <Box
                backgroundColor={id % 2 !== 0 ? 'blue.50' : 'white'}
                px={6}
                pt={{ _: 0, md: 6 }}
                pb={6}
              >
                {data && (
                  <Text color="blue.900" lineHeight="short">
                    {data}
                  </Text>
                )}
                {file && (
                  <Box
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    {file.map(({ id, icon, fileName, link }) => {
                      const last = file.length;
                      return (
                        <>
                          <Flex
                            flexDirection={{ _: 'column', md: 'row' }}
                            justifyContent={{ md: 'space-between' }}
                            alignItems={{ md: 'center' }}
                            p={4}
                          >
                            <Flex
                              alignItems="center"
                              mr={2}
                              mb={{ _: 2, md: 0 }}
                            >
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
                              <Link href={link.href} color>
                                {link.text}
                              </Link>
                            </Flex>
                          </Flex>
                          {last !== id && <Divider my={0} />}
                        </>
                      );
                    })}
                  </Box>
                )}
              </Box>
            </Grid>
          );
        })}
      </Box>
    </NavBarWidthWrapper>
  );
};
