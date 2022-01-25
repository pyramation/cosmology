import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

const Flex = forwardRef(({ align, justify, wrap, direction, ...rest }, ref) => (
  <Box
    ref={ref}
    display="flex"
    flexDirection={direction}
    alignItems={align}
    justifyContent={justify}
    flexWrap={wrap}
    {...rest}
  />
));

Flex.displayName = 'Flex';

export default Flex;

Flex.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string,
  direction: PropTypes.string
};
