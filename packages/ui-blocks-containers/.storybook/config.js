import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider, GlobalStyles } from '@webql/core';
import { ApolloProvider } from '@apollo/client';
import { getClient } from './apollo';
const req = require.context('../src', true, /\.stories.js$/);

function requireStories() {
  req.keys().forEach(filename => req(filename));
}

function withThemeAndStyles(storyFn) {
  return (
    <>
     <ApolloProvider client={getClient()}>
       <ThemeProvider>
         <GlobalStyles />
         {storyFn()}
       </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

addDecorator(withKnobs);
addDecorator(withThemeAndStyles);

configure(requireStories, module);
