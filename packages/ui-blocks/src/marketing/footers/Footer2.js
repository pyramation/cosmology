import React, { useState } from 'react';
import { Flex, Text, Link, Box, Image, Grid } from '@webql/core';
import { LogoDefault } from '../svg';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Footer2 = ({ colCopyright, cols }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Box backgroundColor="blackAlpha.800" width="full" height="full">
      <Flex justifyContent="center" py={24}>
        <NavBarWidthWrapper>
          <Grid
            templateColumns={{
              _: 'repeat(auto-fit, minmax(170px, 1fr))',
              lg: 'repeat(4,1fr)'
            }}
            rowGap={{ _: 10, lg: 0 }}
            columnGap={{ _: 8, md: 12 }}
            px={{ _: 3, lg: 0 }}
          >
            <Box>
              <Box maxWidth={20} mt={2} mb={1}>
                <Link href="#">
                  <Box width={16} height={16} p={1}>
                    {colCopyright.logo.length > 0 ? (
                      <Image
                        width="full"
                        height="full"
                        src={colCopyright.logo}
                      />
                    ) : (
                      <LogoDefault width="full" height="full" fill="#01A1FF" />
                    )}
                  </Box>
                </Link>
              </Box>
              <Text color="white" fontSize="sm" lineHeight="base">
                {colCopyright.text}
              </Text>
            </Box>
            {cols.map(({ title, links }) => {
              return (
                <Box px={1}>
                  <Text color="white" fontSize="xl" fontWeight="bold" my={2}>
                    {title}
                  </Text>
                  {links.map(({ id, href, text }) => {
                    return (
                      <Box my={5}>
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
                            color={
                              hover && selectedData === id ? 'accent' : 'white'
                            }
                            style={{
                              transition: 'all 0.3s linear'
                            }}
                          >
                            {text}
                          </Text>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Grid>
        </NavBarWidthWrapper>
      </Flex>
    </Box>
  );
};
