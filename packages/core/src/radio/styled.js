import get from 'lodash/get';
import { darken } from '../utils/colors';
import colors from '../theme/base-theme/colors';

const baseProps = () => {
  return {
    userSelect: 'none',
    borderRadius: 'round',
    boxShadow: 'initial'
  };
};

const interactionProps = ({ color: bgColor }) => {
  const color = 'black';
  const bg = get(colors, bgColor) || get(colors, 'palette.primary.base');
  const hoverBg = darken(bg, 0.1);
  const active = darken(bg, 0.2);

  return {
    color,
    _checked: {
      bg: bg,
      color: 'white',
      boxShadow: `0 0 0 2px ${active}`
    },
    _checkedAndHover: {
      bg: hoverBg
    },
    _checkedAndDisabled: {
      borderColor: 'gray.200',
      bg: 'gray.200',
      boxShadow: 'initial',
      color: 'gray.500'
    },
    _disabled: {
      bg: 'gray.100'
    },
    _focus: {
      boxShadow: `0 0 0 2px ${active}`
    },
    _invalid: {
      boxShadow: 'error'
    }
  };
};

export const useRadioStyle = props => {
  const sizes = {
    lg: 5,
    md: 4,
    sm: 3
  };

  const iconSizes = {
    lg: 'md',
    md: 'sm',
    sm: 'xs'
  };

  return {
    ...baseProps(props),
    ...interactionProps(props),
    size: sizes[props.size],
    fontSize: iconSizes[props.size]
  };
};
