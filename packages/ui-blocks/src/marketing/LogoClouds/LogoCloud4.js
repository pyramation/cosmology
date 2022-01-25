import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Grid, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const pop = keyframes`
 from {
    border-radius: 10px;
    box-shadow: -1px 1px 3px #3182ce, -2px 2px 3px #3182ce, -3px 3px 3px #3182ce, -4px 4px 3px #3182ce, -5px 5px 3px #3182ce, -6px 6px 3px #3182ce, -7px 7px 3px #3182ce, -8px 8px 3px #3182ce;
    transform: translateX(0) translateY(0);
  }
 to {
    border-radius: 50px;
    box-shadow: 0 0 #3182ce, 0 0 #3182ce, 0 0 #3182ce, 0 0 #3182ce, 0 0 #3182ce, 0 0 #3182ce, 0 0 #3182ce, 0 0 #3182ce;
    transform: translateX(8px) translateY(-8px);
  }
`;

const popDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const PopBox = styled(popDiv)`
  animation-name: ${pop};
  animation-timing-function: ease-in;
  animation-duration: 1.5s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const LogoCloud4 = ({ brands }) => {
  return (
    <NavBarWidthWrapper py={24}>
      <Grid
        templateColumns={{
          _: '1fr',
          md: '1fr 1fr 1fr',
          lg: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}
        columnGap={4}
        rowGap={6}
      >
        {brands.map(({ id, logo, name }) => {
          return (
            <PopBox timeout={id * 400}>
              <Flex
                minWidth={56}
                justifyContent="center"
                alignItems="center"
                py={4}
              >
                <Icon
                  name={logo}
                  size={12}
                  color="palette.primary.base"
                  mr={4}
                />
                <Text fontSize="3xl" color="palette.primary.base">
                  {name}
                </Text>
              </Flex>
            </PopBox>
          );
        })}
      </Grid>
    </NavBarWidthWrapper>
  );
};
