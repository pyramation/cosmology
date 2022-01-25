import { lighten, darken } from '../../utils/colors';
import colors from './colors';

export default {
  xs:
    '0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: `0 0 0 1.5px ${colors.accent}, 0 0 0 2px rgba(19,124,189,.1)`,
  border:
    '0 0 0 1px rgb(216, 216, 227), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  divider: 'rgb(216, 216, 227) 0px -1px 0px inset',
  none: 'none',

  // Shadow by states, usually should be used to replace border
  initial:
    'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  hover: `inset 0 0 0 1.5px ${lighten(
    colors.accent,
    0.1
  )}, inset 0 -1px 0 ${lighten(colors.accent, 0.2)}`,
  active: `inset 0 0 0 1.5px ${darken(
    colors.accent,
    0.1
  )}, inset 0 -1px 0 ${darken(colors.accent, 0.2)}`,
  focus: `0 0 0 1.5px ${colors.accent}, 0 0 0 3px rgba(19,124,189,.3), inset 0 1px 1px rgba(16,22,26,.2)`,
  errorInitial: `
    0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0),
    inset 0 0 0 1.5px ${colors.intent.danger},
    inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2)
  `,
  error: `0 0 0 1px ${colors.intent.danger}, 0 0 0 3px rgba(219,55,55,.3), inset 0 1px 1px rgba(16,22,26,.2)`
};
