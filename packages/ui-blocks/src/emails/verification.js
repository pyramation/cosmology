import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Button, Text } from '@webql/core';
import { MaxWidthWrapper } from '../max-width-wrapper';

export const Verification = ({
  bg,
  logoSrc,
  title,
  description,
  confirmUrl,
  confirmText,
  contactText,
  buttonBgColor,
  buttonTextColor,
  footer,
  titleColor,
  descriptionColor
}) => {
  return (
    <Box id="verification-wrap" p={{ _: 4, sm: 8, lg: 16 }} bg={bg}>
      <Box
        as={MaxWidthWrapper}
        bg="white"
        px={{ _: 4 }}
        py={{ _: 8, sm: 16 }}
        textAlign="center"
      >
        <Box as="img" src={logoSrc} alt="logo" width={{ _: '220px' }} />

        {title && (
          <Text
            fontSize={{ _: '2xl', sm: '4xl' }}
            fontWeight="bold"
            color={titleColor}
          >
            {title}
          </Text>
        )}

        {description && (
          <Text
            fontSize={{ _: 'md', sm: 'xl' }}
            color={descriptionColor}
            mt={{ _: 4, sm: 8 }}
            mx="auto"
            maxWidth="lg"
          >
            {description}
          </Text>
        )}

        <Button
          as={Link}
          href={confirmUrl}
          mt={{ _: 4, sm: 8 }}
          target="_blank"
          bg={buttonBgColor}
          color={buttonTextColor}
        >
          {confirmText}
        </Button>

        <Text
          fontWeight="light"
          fontSize={{ _: 'sm', sm: 'md' }}
          mt={{ _: 4, sm: 8 }}
        >
          or copy and paste this link into your browser:
        </Text>

        <Text
          fontSize={{ _: 'sm', sm: 'md' }}
          mt={{ _: 2 }}
          style={{
            userSelect: 'all'
          }}
        >
          {confirmUrl}
        </Text>

        {contactText && <Box mt={{ _: 8 }}>{contactText}</Box>}
      </Box>

      {footer && (
        <Box p={{ _: 2 }} textAlign="center" mt={{ _: 8 }}>
          {footer}
        </Box>
      )}
    </Box>
  );
};

Verification.propTypes = {
  bg: PropTypes.string,
  logoSrc: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
  confirmText: PropTypes.node,
  confirmUrl: PropTypes.string,
  contactText: PropTypes.node,
  footer: PropTypes.node
};

Verification.defaultProps = {
  bg: '#D6DDE6',
  logoSrc: 'https://logoipsum.com/logo/logo-12.svg',
  confirmUrl: 'https://google.com',
  confirmText: 'Confirm Email'
};
