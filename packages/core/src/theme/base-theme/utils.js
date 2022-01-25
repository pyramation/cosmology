import { lighten, darken } from 'polished';

export const createPalette = ({
  primary = '#01A1FF',
  secondary = '#C1C5CC',
  tertiary = '#5E5E5E',
  success = '#46A738',
  info = '#2C9C99',
  warning = '#FAAD14',
  danger = '#F5222D',
  text = 'rgba(0, 0, 0, 0.80)',
  white = '#FFFFFF',
  background = '#FFFFFF'
} = {}) => ({
  primary: {
    // Primary shades
    lightest: lighten(0.4, primary),
    light: lighten(0.2, primary),
    base: primary,
    dark: darken(0.2, primary),
    darkest: darken(0.4, secondary)
  },
  secondary: {
    // secondary shades
    lightest: lighten(0.2, secondary),
    light: lighten(0.1, secondary),
    base: secondary,
    dark: darken(0.2, secondary),
    darkest: darken(0.4, secondary)
  },
  tertiary: {
    // tertiary shades
    lightest: lighten(0.6, tertiary),
    light: lighten(0.2, tertiary),
    base: tertiary,
    dark: darken(0.1, tertiary),
    darkest: darken(0.4, tertiary)
  },
  text: {
    // text shades
    lightest: white,
    light: white,
    base: text,
    dark: darken(0.2, text)
  },
  background: {
    // background shades
    lightest: lighten(0.2, background),
    light: lighten(0.1, background),
    base: background,
    dark: darken(0.2, background)
  },
  accents: {
    1: '#fcfcfc',
    2: '#f5f5f5',
    3: '#c8c8c8',
    4: '#888888',
    5: '#808080',
    6: '#4d4d4d'
  },
  success: {
    // Success shades
    lightest: lighten(0.5, success),
    light: lighten(0.2, success),
    base: success,
    dark: darken(0.1, success),
    darkest: darken(0.3, success)
  },
  info: {
    // Info shades
    lightest: lighten(0.3, info),
    light: lighten(0.2, info),
    base: info,
    dark: darken(0.2, info),
    darkest: darken(0.4, info)
  },
  warning: {
    // Warning shades
    lightest: lighten(0.4, warning),
    light: lighten(0.2, warning),
    base: warning,
    dark: darken(0.1, warning),
    darkest: darken(0.3, warning)
  },
  danger: {
    // Danger shades
    lightest: lighten(0.4, danger),
    light: lighten(0.1, danger),
    base: danger,
    dark: darken(0.1, danger),
    darkest: darken(0.3, danger)
  }
});
