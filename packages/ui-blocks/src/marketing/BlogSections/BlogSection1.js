import React from 'react';
import { Box, Link, Flex, Text, Grid, Button, Input } from '@webql/core';

export const BlogSection1 = ({
  majorText,
  minorText,
  placeholder,
  button,
  blogs
}) => {
  return (
    <Box px={{ lg: 16 }} py={12}>
      <Text fontSize="5xl" fontWeight="bold" px={{ _: 4, lg: 0 }} mb={6}>
        {majorText}
      </Text>
      <Flex
        borderBottom="2px solid"
        borderColor="blackAlpha.400"
        justifyContent="space-between"
        alignItems={{ _: 'start', lg: 'center' }}
        flexDirection={{ _: 'column', lg: 'row' }}
        pb={8}
        px={{ _: 4, lg: 0 }}
        mb={12}
      >
        <Box maxWidth="2xl" mb={{ _: 6, lg: 0 }} mr={{ lg: 6 }}>
          <Text fontSize="xl" color="blackAlpha.600" lineHeight="short">
            {minorText}
          </Text>
        </Box>
        <Flex
          width="full"
          maxWidth={{ md: 'lg' }}
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Box width="full" mb={{ _: 2, md: 0 }} mr={{ md: 4 }}>
            <Input placeholder={placeholder} />
          </Box>
          <Button width="full">
            <Text fontSize="sm" color="inherit" px={2}>
              {button}
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{ _: '1fr', md: '1fr 1fr' }}
        columnGap={10}
        rowGap={12}
        px={{ _: 4, lg: 0 }}
      >
        {blogs.map(({ id, data, title, desc, link }) => {
          return (
            <Box>
              <Text fontSize="sm" color="blackAlpha.500" mb={4}>
                {data}
              </Text>
              <Text
                fontSize="xl"
                fontWeight="semibold"
                lineHeight="shorter"
                truncate
                truncateLines={2}
                mb={4}
              >
                {title}
              </Text>
              <Box maxWidth="3xl" mb={4}>
                <Text
                  lineHeight="short"
                  color="blackAlpha.600"
                  truncate
                  truncateLines={3}
                >
                  {desc}
                </Text>
              </Box>
              <Link href={link.href} color>
                {link.text}
              </Link>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
