import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

const Divider = forwardRef(({ orientation, space, ...props }, ref) => {
  const borderProps =
    orientation === 'vertical'
      ? {
          borderLeft: '0.0625rem solid',
          height: 'auto',
          mx: space,
          my: 0
        }
      : { borderBottom: '0.0625rem solid', width: 'auto', my: space, mx: 0 };

  return (
    <Box
      ref={ref}
      as="hr"
      aria-orientation={orientation}
      border="0"
      {...borderProps}
      borderColor="divider"
      {...props}
    />
  );
});

export default Divider;

Divider.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  space: PropTypes.any
};

Divider.defaultProps = {
  orientation: 'horizontal',
  space: 2
};
