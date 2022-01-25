import React, { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Heading,
  Grid,
  Avatar,
  Link,
  Icon
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const TeamSection4 = ({
  majorText,
  description,
  socialLinks,
  members
}) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Box backgroundColor="blue.900">
      <NavBarWidthWrapper py={20}>
        <Heading as="h1" color="white" mb={4}>
          {majorText}
        </Heading>
        <Text
          fontSize="lg"
          letterSpacing="wide"
          lineHeight="short"
          color="whiteAlpha.700"
          mb={16}
        >
          {description}
        </Text>
        <Grid
          templateColumns={{
            _: '1fr',
            md: 'repeat(auto-fit, minmax(300px, 1fr))',
            lg: 'repeat(auto-fit, minmax(330px, 1fr))'
          }}
          columnGap={8}
          rowGap={8}
          style={{ perspective: '1000px' }}
        >
          {members.map(({ id, author, authorImage, designation }) => {
            return (
              <Box
                p={16}
                backgroundColor="blue.800"
                borderRadius="md"
                boxShadow={
                  hover && id === selectedData
                    ? 'inset 0 0 40px 10px rgba(0, 0, 0, 0.5)'
                    : 'none'
                }
                onMouseEnter={() => {
                  setHover(true);
                  setSelectedData(id);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setSelectedData(null);
                }}
                style={{
                  transition: 'all 0.5s linear'
                }}
              >
                <Flex justifyContent="center" mb={{ _: 6, md: 10 }}>
                  <Avatar size={{ _: 32, md: 56 }} src={authorImage} />
                </Flex>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  flexDirection={{ _: 'column', md: 'row' }}
                >
                  <Box pr={{ md: 4 }}>
                    <Text
                      mb={2}
                      color="whiteAlpha.700"
                      textAlign={{ _: 'center', md: 'start' }}
                    >
                      {author}
                    </Text>
                    <Text
                      mb={3}
                      color="white"
                      textAlign={{ _: 'center', md: 'start' }}
                    >
                      {designation}
                    </Text>
                  </Box>

                  <Flex alignItems="center">
                    {socialLinks.map(({ id, href, icon }) => {
                      return (
                        <Link href={href} mr={id === 2 ? 0 : 4}>
                          <Icon name={icon} color="whiteAlpha.700" />
                        </Link>
                      );
                    })}
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
