import styled from 'styled-components';
import get from 'lodash/get';
import colors from '../theme/base-theme/colors';
import Box from '../box';

const sizes = {
  sm: {
    width: '1.375rem',
    height: '0.75rem'
  },
  md: {
    width: '1.875rem',
    height: '1rem'
  },
  lg: {
    width: '2.875rem',
    height: '1.5rem'
  }
};

export const StyledSwitchKnob = styled(Box).attrs(props => ({
  bg: 'white',
  size: props.height,
  borderRadius: 'round'
}))`
  transition: transform 250ms;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
`;

export const getControlBoxStyles = props => {
  const width = sizes[props.size] && sizes[props.size]['width'];
  const height = sizes[props.size] && sizes[props.size]['height'];
  const bg = props.color
    ? get(colors, props.color)
    : get(colors, 'palette.primary.base');

  return {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    minWidth: width,
    height,
    borderRadius: '1.75em',
    border: '1px',
    bg: 'gray.300',
    p: '2px',
    _checked: {
      bg: bg
    },
    _child: {
      transform: `translateX(0)`
    },
    _checkedAndChild: {
      transform: `translateX(100%)`
    },
    _focus: {
      boxShadow: 'outline'
    },
    _hover: {
      cursor: 'pointer'
    },
    _checkedAndHover: {
      cursor: 'pointer'
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed'
    }
  };
};
