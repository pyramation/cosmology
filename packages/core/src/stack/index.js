import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StyledStack } from './styled';

const Stack = forwardRef((props, ref) => {
  const { recursive, space, align, children, ...rest } = props;
  return (
    <StyledStack
      ref={ref}
      recursive={recursive}
      space={space}
      align={align}
      {...rest}
    >
      {children}
    </StyledStack>
  );
});

export default Stack;

Stack.propTypes = {
  recursive: PropTypes.bool,
  inline: PropTypes.bool,
  wrap: PropTypes.bool,
  align: PropTypes.string,
  space: PropTypes.any,
  // ==== margin direction of each item
  // bottomUp will use margin-top, this is preferred since we don't need to reset margin for the last item
  // topDown is needed in case of drag-and-drop and disposition which will cause reflow
  marginDir: PropTypes.oneOf(['topDown', 'bottomUp']),
  splitAfter: PropTypes.number
};

Stack.defaultProps = {
  recursive: false,
  inline: false,
  wrap: false,
  space: 4,
  align: 'center',
  marginDir: 'bottomUp'
};
