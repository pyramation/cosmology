import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { GlobalStyles } from '../src/theme';
import ThemeProvider from '../src/theme-provider';

const req = require.context('../src', true, /\.stories.js$/);

function requireStories() {
  req.keys().forEach(filename => req(filename));
}

function withThemeAndStyles(storyFn) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <GlobalStyles />
        {storyFn()}
      </ThemeProvider>
    </React.Fragment>
  );
}

addDecorator(withKnobs);
addDecorator(withThemeAndStyles);

configure(requireStories, module);
