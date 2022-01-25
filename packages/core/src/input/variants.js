import css from '@styled-system/css';
import get from '@styled-system/theme-get';

import { lighten, darken } from '../utils/colors';
import { VARIANT } from './shared';

export const variantsMap = {
  [VARIANT.filled]: filledVariant
};

export default function variantProp(props) {
  if (props.bare) {
    return {};
  }
  switch (props.variant) {
    case VARIANT.filled:
      return filledVariant(props);
    default:
      return filledVariant(props);
  }
}
export const readOnlyProps = props => {
  return (
    props.readOnly && {
      opacity: 0.5,
      userSelect: 'all',
      boxShadow: 'initial',
      '&:hover': {
        boxShadow: 'initial'
      },
      '&:focus': {
        boxShadow: 'initial'
      }
    }
  );
};

export const disabledProps = props => {
  const bg = props.bg || 'gray.200';
  return (
    props.disabled && {
      bg: bg,
      boxShadow: 'none',
      opacity: 0.4,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    }
  );
};

export const invalidProps = props => {
  return (
    props.invalid && {
      boxShadow: 'errorInitial',
      '&:hover': {
        boxShadow: 'errorInitial'
      },
      '&:focus': {
        boxShadow: 'error'
      }
    }
  );
};

function filledVariant(props) {
  const bg = get(`colors.${props.bg}`)(props) || props.bg || 'transparent';
  const hoverBg = props.bg ? lighten(bg, 0.3) : 'blackAlpha.50';
  const textColor = props.color || 'blackAlpha.800';

  return css({
    bg: bg,
    color: textColor,
    borderRadius: props.borderRadius || 'sm',
    boxShadow: props.bg
      ? `inset 0 0 0 1px ${darken(bg, 0.1)}, inset 0 -1px 0 ${darken(bg, 0.2)}`
      : 'initial',
    '&:hover': {
      bg: hoverBg,
      boxShadow: props.noActiveBorder
        ? 'initial'
        : props.bg
        ? `inset 0 0 0 1.5px ${darken(bg, 0.1)}, inset 0 -1px 0 ${darken(
            bg,
            0.2
          )}`
        : 'hover'
    },
    '&:focus': {
      zIndex: 1,
      bg: 'transparent',
      boxShadow: props.noActiveBorder
        ? 'initial'
        : props.bg
        ? `0 0 0 1.5px ${darken(bg, 0.1)}, 0 0 0 3px ${darken(
            bg,
            0.2
          )}, inset 0 1px 1px ${darken(bg, 0.1)}`
        : 'focus'
    },
    '&:disabled': disabledProps(props),
    ...invalidProps(props),
    ...readOnlyProps(props)
  });
}
