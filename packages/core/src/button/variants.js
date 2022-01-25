import css from '@styled-system/css';
import get from '@styled-system/theme-get';
import { lighten, darken, getForegroundColor } from '../utils/colors';
import { VARIANT } from './shared';

export default function variantProp(props) {
  if (props.bare) {
    return css({
      color: 'inherit',
      ...disableProp()
    });
  }

  if (props.bg) {
    return customBgVariant(props);
  }

  switch (props.variant) {
    case VARIANT.primary:
      return primaryVariant(props);
    case VARIANT.secondary:
      return secondaryVariant(props);
    case VARIANT.tertiary:
      return tertiaryVariant(props);
    default:
      return {};
  }
}

const disableProp = hoverBg => ({
  '&:disabled': {
    bg: hoverBg || null,
    opacity: 0.8,
    cursor: 'not-allowed',
    boxShadow: 'none'
  }
});

function customBgVariant(props) {
  const bgColorKey = props.intent ? `palette.${props.intent}.base` : props.bg;

  // props.bg can be a key in the color scale or a valid CSS color
  const bg =
    get(`colors.${props.bg}`)(props) || get(bgColorKey, props.bg)(props);

  const activeBg = darken(bg, 0.2);

  const hoverBg = lighten(bg, 0.2);

  const textColor = props.color || getForegroundColor(bg);

  return css({
    bg: props.selected ? activeBg : bg,
    color: textColor,
    backgroundImage: `linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))`,
    '&:hover': {
      bg: hoverBg
    },
    '&:active': {
      bg: activeBg
    },
    '&:focus': {
      bg: activeBg
    },
    ...disableProp(hoverBg)
  });
}

function primaryVariant(props) {
  const bg = props.intent
    ? `palette.${props.intent}.base`
    : 'palette.primary.base';

  const activeBg = props.intent
    ? `palette.${props.intent}.light`
    : 'palette.primary.base';

  const hoverBg = props.intent
    ? `palette.${props.intent}.lightest`
    : 'palette.primary.lightest';

  const getBg = get(`colors.${bg}`)(props);

  const textColor = getForegroundColor(getBg);

  const shadowColor = props.intent
    ? get(`colors.palette.${props.intent}.base`)(props)
    : get(`colors.palette.${props.variant}.dark`)(props);

  const selectedShadow = `inset 0 0 0 1px ${shadowColor}, inset 0 1px 4px ${shadowColor}`;

  return css({
    bg: props.selected ? activeBg : bg,
    boxShadow: props.selected ? selectedShadow : 'none',
    color: textColor,
    '&:hover': {
      bg: props.selected ? activeBg : hoverBg
    },
    '&:active': {
      bg: activeBg,
      boxShadow: selectedShadow
    },
    '&:focus': {
      bg: activeBg,
      boxShadow: selectedShadow
    },
    ...disableProp(hoverBg)
  });
}

function secondaryVariant(props) {
  const bg = 'transparent';

  const activeBg = props.intent
    ? `palette.${props.intent}.lightest`
    : 'palette.secondary.base';

  const hoverBg = props.intent
    ? `palette.${props.intent}.base`
    : 'palette.secondary.base';

  const textColor = props.intent
    ? `palette.${props.intent}.base`
    : 'palette.secondary.darkest';

  const shadowColor = props.intent
    ? get(`colors.palette.${props.intent}.base`)(props)
    : get(`colors.palette.${props.variant}.dark`)(props);

  const defaultShadow = `0 0 0 1px ${shadowColor}`;

  const selectedShadow = `inset 0 0 0 1px ${shadowColor}, inset 0 1px 2px ${shadowColor}`;

  return css({
    bg: props.selected ? activeBg : bg,
    color: textColor,
    boxShadow: props.selected ? selectedShadow : defaultShadow,
    '&:hover': {
      bg: props.selected ? activeBg : hoverBg,
      color: props.selected || props.disabled ? textColor : 'white'
    },
    '&:active': {
      bg: activeBg,
      boxShadow: props.selected ? selectedShadow : defaultShadow
    },
    '&:focus': {
      bg: activeBg,
      boxShadow: props.selected ? selectedShadow : defaultShadow
    },
    ...disableProp(hoverBg)
  });
}

function tertiaryVariant(props) {
  const activeBg = props.intent
    ? `palette.${props.intent}.dark`
    : `palette.tertiary.darkest`;

  const hoverBg = props.intent
    ? `palette.${props.intent}.base`
    : 'palette.tertiary.dark';

  const bg = props.intent ? `palette.${props.intent}.lightest` : 'transparent';

  const textColor = props.intent
    ? `palette.${props.intent}.base`
    : `palette.tertiary.light`;

  const focusTextColor = props.intent
    ? `palette.${props.intent}.lightest`
    : `palette.tertiary.lightest`;

  return css({
    bg: props.selected ? activeBg : bg,
    color: props.selected ? focusTextColor : textColor,
    '&:hover': {
      bg: props.selected ? activeBg : hoverBg,
      color: props.disabled
        ? textColor
        : focusTextColor || props.selected
        ? focusTextColor
        : textColor
    },
    '&:active': {
      bg: activeBg,
      color: focusTextColor
    },
    '&:focus': {
      bg: activeBg,
      color: focusTextColor
    },
    ...disableProp('transparent')
  });
}
