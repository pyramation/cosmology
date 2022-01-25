import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext
} from 'styled-components';
import merge from 'lodash/merge';
import { theme as defaultTheme } from '../theme';

export function useTheme() {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. It seems you forgot to wrap your app in `<ThemeProvider />`'
    );
  }

  return theme;
}

const ThemeProvider = ({ theme, children }) => {
  const outerTheme = useContext(ThemeContext);
  const mergedTheme = merge({}, outerTheme, theme);

  return (
    <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: defaultTheme
};

ThemeProvider.propTypes = {
  theme: PropTypes.object
};

export default ThemeProvider;
