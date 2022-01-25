import colors from './colors';
import sizes from './sizes';
import typography from './typography';
import shadows from './shadows';
export { systemFontStack } from './typography';

const breakpoints = ['30em', '48em', '62em', '80em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const zIndices = {
  hidden: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700
};

const radii = {
  none: '0',
  round: '50%',
  full: '9999px',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem'
};

const opacity = {
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1'
};

const borders = {
  none: 0,
  '1px': `1px solid ${colors.divider}`,
  '2px': `2px solid ${colors.divider}`,
  '4px': `4px solid ${colors.divider}`
};

export const theme = {
  ...typography,
  breakpoints,
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  sizes,
  shadows,
  space: sizes
};
