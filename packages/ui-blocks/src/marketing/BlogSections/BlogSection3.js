import React from 'react';
import { Box, Tag, Flex, Text, Grid, Avatar } from '@webql/core';

export const BlogSection3 = ({ majorText, minorText, blogs }) => {
  return (
    <Box px={{ _: 4, lg: 16 }} py={12}>
      <Text
        fontSize={{ _: '4xl', md: '5xl' }}
        fontWeight="bold"
        px={{ _: 4, lg: 0 }}
        mb={{ _: 4, md: 6 }}
      >
        {majorText}
      </Text>
      <Box
        borderBottom="2px solid"
        borderColor="blackAlpha.400"
        pb={{ _: 8, md: 12 }}
        px={{ _: 4, lg: 0 }}
        mb={{ _: 8, md: 12 }}
      >
        <Text fontSize="xl" color="blackAlpha.600" lineHeight={{ md: 'short' }}>
          {minorText}
        </Text>
      </Box>
      <Grid
        templateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}
        columnGap={8}
        rowGap={16}
        px={{ _: 4, lg: 0 }}
        py={2}
      >
        {blogs.map(({ id, tag, title, desc, user }) => {
          return (
            <Box>
              <Tag color={tag.color} borderRadius="lg" mb={{ _: 5, md: 6 }}>
                <Text
                  fontSize="inherit"
                  fontWeight="semibold"
                  lineHeight="shorter"
                  color="inherit"
                  px={2}
                >
                  {tag.text}
                </Text>
              </Tag>
              <Text
                fontSize={{ _: 'lg', md: 'xl' }}
                fontWeight="semibold"
                mb={{ _: 4, md: 6 }}
              >
                {title}
              </Text>
              <Text
                fontSize={{ md: 'lg' }}
                lineHeight="shorter"
                color="blackAlpha.600"
                mb={{ _: 6, md: 8 }}
              >
                {desc}
              </Text>
              <Flex alignItems="center">
                <Avatar src={user.userImage} size={12} minWidth={12} mr={3} />
                <Box>
                  <Text fontWeight="semibold" mb={1}>
                    {user.name}
                  </Text>
                  <Flex flexWrap="wrap">
                    <Text fontSize="sm" color="blackAlpha.600" py={1}>
                      {user.data}・
                    </Text>
                    <Text fontSize="sm" color="blackAlpha.600" py={1}>
                      {user.edit}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
