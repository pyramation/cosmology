import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';

import { useForkRef } from '@webql/hooks';
import Text from '../text';
import Button from '../button';
import Box from '../box';
import { systemProps } from '../box';
import { darken, lighten } from '../utils/colors';

const StyledTag = styled(Box)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;

  ${props => {
    const customColor = props.color
      ? get(`colors.${props.color}`, props.color)(props)
      : null;
    const bg = customColor ? lighten(customColor, 0.8) : 'gray.100';
    const textColor = customColor ? darken(customColor, 0.3) : 'textMuted';
    const buttonColorHover = customColor ? customColor : 'text';
    const borderColor = customColor ? 'transparent' : 'divider';

    return css({
      fontSize: props.fontSize,
      lineHeight: 'short',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '2px',
      bg: bg,
      borderColor,
      px: 2,
      py: 1,
      '& > button:hover': {
        color: buttonColorHover
      },
      '& > *': {
        color: textColor
      },
      '& > div': {
        bg: textColor
      }
    });
  }}

  ${systemProps}
`;

const Tag = React.forwardRef(
  (
    { dot, children, removeable, onRemove, truncate, ...restProps },
    forwardedRef
  ) => {
    const nodeRef = useRef(null);
    const handleRef = useForkRef(nodeRef, forwardedRef);

    return (
      <StyledTag as="span" ref={handleRef} {...restProps}>
        {dot && (
          <Box height="1" width="1" bg="inherit" borderRadius="round" mr="2" />
        )}
        <Text fontSize="inherit" truncate={truncate}>
          {children}
        </Text>
        {removeable && (
          <Button
            bare
            ml={2}
            icon="close"
            type="button"
            iconSize={2}
            onClick={onRemove}
          />
        )}
      </StyledTag>
    );
  }
);

export default Tag;

Tag.displayName = 'Tag';

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  fontSize: PropTypes.any,
  removeable: PropTypes.bool,
  dot: PropTypes.bool,
  onRemove: PropTypes.func
};

Tag.defaultProps = {
  fontSize: '2xs',
  dot: false,
  removeable: false,
  onRemove: () => {}
};
