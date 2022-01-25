import React from 'react';
import { Flex, Text, Box, Icon, Divider, Grid, Link } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const DescriptionList5 = ({ title, subTitle, list1, list2 }) => {
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
        <Grid templateColumns={{ _: '1fr', md: '1fr 1fr' }}>
          {list1.map(({ id, headline, data }) => {
            return (
              <Box px={6} pt={6} pb={{ _: 2, md: 6 }}>
                <Text color="blue.700" mb={2}>
                  {headline}
                </Text>
                <Text color="blue.900" lineHeight="short">
                  {data}
                </Text>
              </Box>
            );
          })}
        </Grid>
        {list2.map(({ id, headline, data, file }) => {
          return (
            <Box p={6}>
              {data && (
                <>
                  <Text color="blue.700" mb={2}>
                    {headline}
                  </Text>
                  <Text color="blue.900" lineHeight="short">
                    {data}
                  </Text>
                </>
              )}
              {file && (
                <>
                  <Text color="blue.700" mb={2}>
                    {headline}
                  </Text>
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
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </NavBarWidthWrapper>
  );
};
