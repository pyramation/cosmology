import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';

import Box from '../box';

const sizes = {
  sm: {
    lineHeight: 'base',
    fontSize: 'xs',
    minWidth: 4,
    px: 1
  },
  md: {
    lineHeight: 'taller',
    fontSize: 'sm',
    minWidth: 8,
    px: 2
  }
};

const StyledKbd = styled(Box).attrs(props => ({
  as: 'kbd',
  width: 'auto',
  height: 'auto',
  ...(sizes[props.size] || sizes.sm)
}))`
  ${css({
    bg: 'gray.100',
    border: '1px',
    borderRadius: 'sm'
  })}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #666;
`;

const Kbd = ({ children, ...props }) => {
  return <StyledKbd {...props}>{children}</StyledKbd>;
};

export default Kbd;

Kbd.propTypes = {
  size: PropTypes.oneOf(['sm', 'md'])
};
