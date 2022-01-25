import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useButton } from '@react-aria/button';
import Spinner from '../spinner';
import Icon from '../icon';

import {
  StyledButton,
  StyledStartElement,
  StyledEndElement,
  StyledMidElement
} from './styled';
import { VARIANT, SHAPE, SIZE } from './shared';
import { Intent } from '../constants';

export * from './shared';

const Button = forwardRef((props, forwardedRef) => {
  const {
    bare,
    size,
    variant,
    shape,
    intent,
    startElement,
    midElement,
    endElement,
    startIcon,
    midIcon,
    endIcon,
    icon,
    iconSize,
    disabled,
    loading,
    selected,
    onClick: onClickProp,
    children,
    // custom colors
    bg,
    color,
    iconColor,
    ...otherProps
  } = props;

  const { buttonProps } = useButton(
    {
      isDisabled: disabled,
      onPress: (...args) => {
        if (loading || !onClickProp) return;
        onClickProp(...args);
      }
    },
    forwardedRef
  );

  const content = (
    <>
      {(startElement || startIcon) && !loading && (
        <StyledStartElement>
          {startIcon ? <Icon name={startIcon} size={iconSize} /> : startElement}
        </StyledStartElement>
      )}

      {icon ? <Icon name={icon} size={iconSize} /> : children}

      {(endElement || endIcon) && !loading && (
        <StyledEndElement>
          {endIcon ? <Icon name={endIcon} size={iconSize} /> : endElement}
        </StyledEndElement>
      )}
      {(midElement || midIcon) && !loading && (
        <StyledMidElement>
          {midIcon ? (
            <Icon color={iconColor} name={midIcon} size={iconSize} />
          ) : (
            midElement
          )}
        </StyledMidElement>
      )}
    </>
  );

  return (
    <StyledButton
      ref={forwardedRef}
      variant={variant}
      size={size}
      shape={shape}
      selected={selected}
      bare={bare}
      intent={intent}
      bg={bg}
      color={color}
      data-loading={loading}
      {...(loading
        ? {
            ['aria-label']: `loading ${
              typeof children === 'string' ? children : ''
            }`,
            ['aria-busy']: 'true'
          }
        : {})}
      {...buttonProps}
      {...otherProps}
    >
      {loading ? <Spinner color="currentColor" size="1em" /> : content}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZE)),
  variant: PropTypes.oneOf(Object.keys(VARIANT)),
  shape: PropTypes.oneOf(Object.keys(SHAPE)),
  intent: PropTypes.oneOf(Object.values(Intent)),
  startElement: PropTypes.node,
  midElement: PropTypes.node,
  endElement: PropTypes.node,
  startIcon: PropTypes.string,
  midIcon: PropTypes.string,
  endIcon: PropTypes.string,
  icon: PropTypes.string,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  size: SIZE.md,
  iconSize: '1em',
  variant: VARIANT.primary,
  shape: SHAPE.default,
  disabled: false,
  selected: false,
  loading: false,
  bare: false
};
