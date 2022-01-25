import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

const sizes = {
  '2xl': ['4xl', null, '5xl'],
  xl: ['3xl', null, '4xl'],
  lg: ['xl', null, '2xl'],
  md: 'xl',
  sm: 'md',
  xs: 'sm'
};

const Heading = forwardRef(({ size = 'xl', ...props }, ref) => (
  <Box
    ref={ref}
    fontSize={sizes[size]}
    lineHeight="shorter"
    fontWeight="bold"
    fontFamily="heading"
    color="headingText"
    {...props}
  />
));

export default Heading;

Heading.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  as: PropTypes.oneOfType([
    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    PropTypes.string
  ])
};

Heading.defaultProps = {
  as: 'h2'
};
