import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ControlBox from '../control-box';
import VisuallyHidden from '../visually-hidden';
import Box from '../box';
import { useRadioStyle } from './styled';

const StyledRadioCircle = styled.span`
  background-color: currentColor;
  border-radius: 100%;
  width: 50%;
  height: 50%;
`;

const Radio = forwardRef(
  (
    {
      id,
      name,
      value,
      color,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-checked': ariaChecked,
      defaultChecked,
      checked,
      fluidWidth,
      size = 'md',
      disabled,
      invalid,
      onChange,
      onBlur,
      onFocus,
      children,
      ...rest
    },
    ref
  ) => {
    const styleProps = useRadioStyle({ size, color });
    return (
      <Box
        as="label"
        display="inline-flex"
        verticalAlign="top"
        htmlFor={id}
        alignItems="center"
        width={fluidWidth ? 'full' : undefined}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
        {...rest}
      >
        <VisuallyHidden
          as="input"
          type="radio"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-checked={ariaChecked}
          id={id}
          ref={ref}
          name={name}
          value={value}
          aria-invalid={invalid}
          defaultChecked={defaultChecked}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          checked={checked}
          disabled={disabled}
        />

        <ControlBox {...styleProps} type="radio">
          <StyledRadioCircle />
        </ControlBox>

        {children && (
          <Box
            ml={2}
            fontSize={size}
            style={{
              userSelect: 'none',
              opacity: disabled ? 0.32 : 1
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-checked': PropTypes.string,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  fluidWidth: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

Radio.defaultProps = {
  'aria-checked': 'mixed',
  size: 'md'
};
