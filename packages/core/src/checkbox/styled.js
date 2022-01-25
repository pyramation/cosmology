import get from 'lodash/get';
import { darken } from '../utils/colors';
import colors from '../theme/base-theme/colors';

const baseProps = () => {
  return {
    userSelect: 'none',
    borderRadius: 'sm',
    boxShadow: 'initial'
  };
};

const interactionProps = ({ color: bgColor }) => {
  const textColor = 'black';
  const bg = get(colors, bgColor) || get(colors, 'palette.primary.base');
  const hoverBg = darken(bg, 0.2);
  const active = darken(bg, 0.1);

  return {
    color: textColor,
    overflow: 'hidden',
    _checked: {
      bg: bg,
      color: 'white',
      boxShadow: `0 0 0 2px ${active}`
    },
    _child: {
      transform: `translateX(-100%)`
    },
    _checkedAndChild: {
      transform: `translateX(0)`
    },
    _checkedAndHover: {
      bg: hoverBg,
      boxShadow: `0 0 0 2px ${hoverBg}`
    },
    _checkedAndDisabled: {
      borderColor: 'gray.200',
      bg: 'gray.200',
      boxShadow: 'initial',
      color: 'gray.500'
    },
    _disabled: {
      bg: 'gray.200'
    },
    _focus: {
      boxShadow: 'focus'
    },
    _invalid: {
      boxShadow: 'error'
    }
  };
};

export const useCheckboxStyle = props => {
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
