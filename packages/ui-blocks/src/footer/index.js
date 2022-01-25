import React from 'react';
import { Link, Flex } from '@webql/core';
import { MaxWidthWrapper } from '../max-width-wrapper';

export const Copyright = ({ companyName }) => (
  <small>© {companyName} All rights reserved</small>
);

export const Footer = ({ companyName, siteUrl, links = [] }) => {
  if (!links || !links.length) {
    return (
      <MaxWidthWrapper width="100%" textAlign="center">
        <Link href={siteUrl} lineHeight="tall">
          <Copyright companyName={companyName} />
        </Link>
      </MaxWidthWrapper>
    );
  }
  return (
    <Flex
      maxWidth={{
        _: 'lg',
        lg: '600px'
      }}
      wrap="wrap"
      justifyContent={{
        _: 'space-between',
        md: 'center'
      }}
      alignItems={{
        _: 'center',
        md: 'flex-start'
      }}
      textAlign={{
        _: 'center',
        md: 'left'
      }}
      m="0 auto"
      flexDirection={{ _: 'column', md: 'row' }}
    >
      <Link href={siteUrl} lineHeight="tall">
        <Copyright companyName={companyName} />
      </Link>
      <Flex
        flexShrink="0"
        justifyContent="space-between"
        flexDirection={{ _: 'column', md: 'row' }}
        ml={{
          _: 0,
          md: 6
        }}
      >
        {links.map(link => {
          return (
            <Link
              key={link.href}
              href={link.href}
              mt={{ _: 3, sm: 0 }}
              ml={{ _: 0, sm: 2, lg: 4 }}
              rel="noopener noreferrer"
              lineHeight="tall"
            >
              {link.label}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
