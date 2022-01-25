import React from 'react';
import { Box } from '@webql/core';
import { Footer } from '../footer';
import { Header } from '../header';

export const BasicSiteLayout = ({
  bg,
  children,
  topLinks,
  bottomLinks,
  companyName
}) => {
  return (
    <Box bg={bg} p={{ _: 8, md: 10, lg: 16, xl: 20 }}>
      <Header navLinks={topLinks} />
      {children}
      <Box p={6}>
        <Footer companyName={companyName} links={bottomLinks} />
      </Box>
    </Box>
  );
};
