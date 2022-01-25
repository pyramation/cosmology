import React, { useState } from 'react';
import { Flex, Text, Link, Box, Icon } from '@webql/core';

export const Footer4 = ({ copyrightText, links, socialLinks }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Box py={16} px={{ _: 8, lg: 0 }}>
      <Flex
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent={{ _: 'start', md: 'center' }}
        mb={{ _: 5, md: 6 }}
      >
        {links.map(({ id, href, text }) => {
          return (
            <Box px={{ _: 3, md: 4 }} pt={{ _: 3, md: 2 }} pb={{ _: 2, md: 2 }}>
              <Link
                id={id}
                href={href}
                onMouseEnter={() => {
                  setHover(true);
                  setSelectedData(id);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setSelectedData(null);
                }}
              >
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  textAlign={{ _: 'start', md: 'center' }}
                  color={
                    hover && selectedData === id
                      ? 'palette.primary.base'
                      : 'blackAlpha.600'
                  }
                >
                  {text}
                </Text>
              </Link>
            </Box>
          );
        })}
      </Flex>
      <Flex
        justifyContent={{ _: 'start', md: 'center' }}
        mb={{ _: 6, md: 8 }}
        flexWrap="wrap"
      >
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <Box
              pl={{ _: 3, md: 4 }}
              pr={{ _: 4, md: 4 }}
              py={{ _: 3, md: 2 }}
              mr={{ _: 1, md: 0 }}
            >
              <Link
                id={id}
                href={href}
                onMouseEnter={() => {
                  setHover(true);
                  setSelectedData(id);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setSelectedData(null);
                }}
              >
                <Icon
                  name={icon}
                  color={
                    hover && selectedData === id
                      ? 'palette.primary.base'
                      : 'blackAlpha.600'
                  }
                  size={5}
                />
              </Link>
            </Box>
          );
        })}
      </Flex>
      <Text
        fontSize="sm"
        fontWeight="semibold"
        textAlign={{ _: 'start', md: 'center' }}
        color="blackAlpha.600"
        lineHeight="base"
      >
        {copyrightText}
      </Text>
    </Box>
  );
};
