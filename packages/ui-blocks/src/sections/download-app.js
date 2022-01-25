import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Grid, Flex, Stack, Text } from '@webql/core';
import { IOSBadge } from '../badges/ios-badge';
import { GooglePlayBadge } from '../badges/google-play-badge';
import { MaxWidthWrapper } from '../max-width-wrapper';

export const DownloadApp = ({
  bg,
  title,
  titleColor,
  description,
  descriptionColor,
  appImageUrl,
  androidAppUrl,
  iOSAppUrl,
  androidWaitListText,
  IOSWaitListText
}) => {
  return (
    <MaxWidthWrapper bg={bg}>
      <Grid
        templateColumns="repeat(auto-fit, minmax(186px, 1fr))"
        gap={{ _: 8, sm: 18, md: 20 }}
        py={{ _: 8, sm: 12, lg: 16 }}
      >
        <Flex flexDirection="column">
          {title && (
            <Text
              as="h1"
              color={titleColor}
              fontSize={{ _: '2xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="extrabold"
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              as="h2"
              color={descriptionColor}
              fontSize={{ _: 'lg', sm: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="light"
              mt={{ _: 6, sm: 12, lg: 12, xl: 16 }}
            >
              {description}
            </Text>
          )}

          <Stack inline space={4} mt={{ _: 6, sm: 12, lg: 12, xl: 16 }}>
            {iOSAppUrl && (
              <Link href={iOSAppUrl}>
                <IOSBadge height={{ _: '32px' }} />
              </Link>
            )}
            {androidAppUrl && (
              <Link href={androidAppUrl}>
                <GooglePlayBadge height={{ _: '32px' }} />
              </Link>
            )}
          </Stack>

          <Stack mt={{ _: 8, lg: 10 }}>
            {!iOSAppUrl && IOSWaitListText ? IOSWaitListText : null}
            {!androidAppUrl && androidWaitListText ? androidWaitListText : null}
          </Stack>
        </Flex>
        <Box
          display={{
            _: 'none',
            md: 'block'
          }}
        >
          <Box
            as="img"
            maxWidth={{ _: '220px', lg: '320px' }}
            src={appImageUrl}
            alt="app image"
          />
        </Box>
      </Grid>
    </MaxWidthWrapper>
  );
};

DownloadApp.propTypes = {
  bg: PropTypes.string,
  logo: PropTypes.node,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.any
    })
  ),
  title: PropTypes.string,
  description: PropTypes.string,
  appImageUrl: PropTypes.string,
  androidAppUrl: PropTypes.string,
  iOSAppUrl: PropTypes.string,
  androidWaitListText: PropTypes.node,
  IOSWaitListText: PropTypes.node
};

DownloadApp.defaultProps = {
  appImageUrl: ''
};
