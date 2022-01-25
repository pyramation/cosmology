import React from 'react';
import { Box, Flex, Text, Grid, Avatar } from '@webql/core';

export const BlogSection2 = ({ majorText, minorText, blogs }) => {
  return (
    <Box px={{ _: 4, md: 8, lg: 20 }} py={12}>
      <Text
        fontSize={{ _: '3xl', md: '5xl' }}
        fontWeight="bold"
        textAlign="center"
        px={4}
        mb={6}
      >
        {majorText}
      </Text>
      <Flex justifyContent="center" mb={12}>
        <Box maxWidth="2xl">
          <Text
            fontSize={{ md: '2xl' }}
            textAlign="center"
            lineHeight="shorter"
            color="blackAlpha.600"
          >
            {minorText}
          </Text>
        </Box>
      </Flex>
      <Grid templateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
        {blogs.map(({ id, type, title, desc, blogImage, user }) => {
          return (
            <Box
              borderRadius="md"
              boxShadow="0 12px 20px -12px rgba(0, 0, 0, 0.35)"
              overflow="hidden"
            >
              <Box
                backgroundImage={`url(${blogImage})`}
                backgroundPosition="center center"
                backgroundRepeat="no-repeat"
                width="full"
                height={56}
              ></Box>
              <Box position="relative" p={8}>
                <Text color="palette.primary.base" mb={4}>
                  {type}
                </Text>
                <Text
                  fontSize={{ _: 'lg', md: 'xl' }}
                  fontWeight="semibold"
                  lineHeight="shorter"
                  truncate
                  truncateLines={2}
                  mb={4}
                >
                  {title}
                </Text>
                <Box width="full" height={40}>
                  <Text
                    fontSize={{ md: 'lg' }}
                    color="blackAlpha.700"
                    lineHeight="shorter"
                    truncate
                    truncateLines={6}
                  >
                    {desc}
                  </Text>
                </Box>
                <Flex alignItems="center">
                  <Avatar src={user.userImage} size={12} minWidth={12} mr={4} />
                  <Box>
                    <Text fontWeight="semibold" mb={1}>
                      {user.name}
                    </Text>
                    <Flex flexWrap="wrap">
                      <Text color="blackAlpha.600" py={1}>
                        {user.data}・
                      </Text>
                      <Text color="blackAlpha.600" py={1}>
                        {user.edit}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
