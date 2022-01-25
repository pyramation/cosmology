import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Center, Box, Heading } from '@webql/core';
import styled from 'styled-components';

const SideLayoutContainer = styled(Box)`
  @media screen and (min-width: 30em) {
    display: flex;
    flex-direction: column;

    & #side-layout-column-main {
      flex: 1 0 auto;
    }

    & #side-layout-column-background {
      flex: 1 0 100%;
    }
  }

  @media screen and (min-width: 48em) {
    flex-direction: row;

    & #side-layout-column-main {
      flex: 1 1 auto;
    }

    & #side-layout-column-background {
      flex: 2 0 auto;
    }
  }
`;

const Background = styled(Box)`
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url('${props => props.backgroundImageUrl}');
`;

export const SideLayout = ({
  backgroundImageUrl,
  backgroundPosition,
  backgroundContent,
  logo,
  logoSize,
  header,
  children,
  ...otherProps
}) => {
  const mainColumn = (
    <Box id="side-layout-column-main" maxWidth="md" mx="auto">
      <Stack space={6} mb={24} mt={12}>
        {logo && (
          <Center>
            <Box as="img" src={logo} size={logoSize} />
          </Center>
        )}
        {header && (
          <Center>
            <Heading fontSize="3xl" textAlign="center">
              {header}
            </Heading>
          </Center>
        )}

        <Box minWidth={{ _: '0', sm: 'sm', md: '0' }}>{children}</Box>
      </Stack>
    </Box>
  );

  const backgroundColumn = (
    <Background
      id="side-layout-column-background"
      backgroundImageUrl={backgroundImageUrl}
      display={{ _: 'none', md: 'flex' }}
    >
      {backgroundContent}
    </Background>
  );

  return (
    <SideLayoutContainer
      id="side-layout-container"
      height={{ _: '100vh' }}
      {...otherProps}
    >
      {backgroundPosition === 'right'
        ? [mainColumn, backgroundColumn]
        : [backgroundColumn, mainColumn]}
    </SideLayoutContainer>
  );
};

export default SideLayout;

SideLayout.propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundPosition: PropTypes.oneOf(['left', 'right']),
  logo: PropTypes.string
};

SideLayout.defaultProps = {
  logo: '',
  backgroundImageUrl: '',
  backgroundPosition: 'right'
};
