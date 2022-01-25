import React, { useState } from 'react';
import { Flex, Text, Link, Box, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Footer5 = ({ copyrightText, socialLinks }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Box py={16}>
      <NavBarWidthWrapper>
        <Flex
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent={{ _: 'start', md: 'space-between' }}
          alignItems={{ _: 'start', md: 'center' }}
          px={{ _: 4, lg: 0 }}
        >
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="blackAlpha.600"
            lineHeight="base"
            mb={{ _: 2, md: 0 }}
          >
            {copyrightText}
          </Text>
          <Flex flexWrap="wrap">
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
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
