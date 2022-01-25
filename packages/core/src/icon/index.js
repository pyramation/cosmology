import React from 'react';
import PropTypes from 'prop-types';

import { StyledIconWrapper } from './styled';
import icons from './icons';

const Icon = React.forwardRef(
  ({ name, color, size, ...otherProps }, forwardedRef) => {
    const Svg = icons[ensureFallback(name)];

    return (
      <StyledIconWrapper
        {...otherProps}
        color={color}
        size={size}
        ref={forwardedRef}
      >
        <Svg />
      </StyledIconWrapper>
    );
  }
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.any,
  color: PropTypes.string
};

Icon.defaultProps = {
  size: 6
};

export default Icon;

function ensureFallback(iconName) {
  if (icons[iconName]) return iconName;
  return 'borders';
}
