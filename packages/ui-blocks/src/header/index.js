import React from 'react';
import PropTypes from 'prop-types';
import { Link, Flex, Stack, Icon, Text } from '@webql/core';
import { MaxWidthWrapper } from '../max-width-wrapper';

const defaultLogo = <Icon color="black" size={8} name="home" />;

export const Header = ({ logo, navLinks }) => {
  return (
    <Flex as={MaxWidthWrapper} justifyContent="space-between" flexWrap="wrap">
      <Flex>{logo}</Flex>
      <Stack inline space={4} as="ul">
        {navLinks.map(link => (
          <Text
            as="li"
            key={link.href}
            px={2}
            fontSize={{ _: 'md', sm: 'lg' }}
            fontWeight="semibold"
          >
            <Link href={link.href}>{link.label}</Link>
          </Text>
        ))}
      </Stack>
    </Flex>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.any
    })
  )
};

Header.defaultProps = {
  logo: defaultLogo,
  navLinks: []
};
