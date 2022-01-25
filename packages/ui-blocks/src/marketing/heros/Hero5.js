import React from 'react';
import { Box, Flex, Button, Text, Link, Grid } from '@webql/core';

export const Hero5 = ({
  height,
  src,
  simple,
  majorWords,
  minorWords,
  description,
  links
}) => {
  return (
    <Grid
      height={{ lg: height }}
      templateColumns={{ _: '1fr', lg: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      rowGap={12}
      justifyContent="center"
    >
      <Flex
        position="relative"
        zIndex={10}
        height="full"
        justifyContent={{ _: 'center', lg: 'end' }}
        alignItems={{ _: 'start', lg: 'center' }}
        backgroundColor="transparent"
        mt={{ _: 4, lg: 0 }}
        px={{ _: 8, lg: 0 }}
      >
        <Box pl={{ lg: 8 }} pr={{ lg: 5 }}>
          <Box maxWidth={{ _: 'xl', lg: '2xl' }}>
            <Text
              as="h1"
              fontSize={{ _: '5xl', lg: '6xl' }}
              textAlign={{ _: 'left', md: 'center', lg: 'left' }}
              verticalAlign="middle"
            >
              {majorWords} &nbsp;
              <Text
                as="span"
                fontSize={{ _: '5xl', lg: '6xl' }}
                color="palette.primary.base"
                mb={2}
              >
                {minorWords}
              </Text>
            </Text>
          </Box>

          <Box maxWidth={{ _: 'sm', md: 'xl' }} mt={4} mb={8}>
            <Text
              lineHeight="base"
              color="blackAlpha.700"
              textAlign={{ _: 'start', md: 'center', lg: 'start' }}
              fontSize="lg"
            >
              {description}
            </Text>
          </Box>
          <Flex
            maxWidth={{ md: 'xs' }}
            flexDirection={{ _: 'column', md: 'row' }}
            justifyContent={{ _: 'center', lg: 'start' }}
            mx={{ _: 0, md: 'auto', lg: 0 }}
          >
            {links.map(({ id, href, text, variant, intent }) => {
              return (
                <Link href={href} width="full" mr={{ md: id === 1 ? 4 : 0 }}>
                  <Button
                    intent={intent}
                    variant={variant}
                    style={{
                      width: '100%'
                    }}
                    py={{ _: 6, md: 8 }}
                    mt={{ _: id === 2 ? 4 : 0, md: 0 }}
                  >
                    <Text
                      fontSize="lg"
                      fontWeight="medium"
                      color="inherit"
                      px={8}
                    >
                      {text}
                    </Text>
                  </Button>
                </Link>
              );
            })}
          </Flex>
        </Box>
      </Flex>
      <Box
        position="relative"
        zIndex={-10}
        height={{ _: 'xs', lg: 'full' }}
        backgroundImage={`url(${src})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        mx={{ _: 8, lg: 0 }}
      >
        {!simple && (
          <Box
            display={{ _: 'none', lg: 'block' }}
            width="full"
            height="full"
            position="absolute"
            zIndex={5}
            backgroundColor="#ffffff"
            style={{ clipPath: 'polygon(0 0, 12% 0, 0 100%, 0 100%)' }}
          ></Box>
        )}
      </Box>
    </Grid>
  );
};
