import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForkRef } from '@webql/hooks';
import { useFormControl } from '../form-control';

import {
  StyledInput,
  StyledInputGroup,
  StyledStartElement,
  StyledEndElement
} from './styled';
import { VARIANT } from './shared';

const Input = forwardRef((props, forwardedRef) => {
  const {
    size,
    as,
    variant,
    bg,
    iconBorder,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    readOnly,
    fluidWidth,
    disabled,
    invalid,
    required,
    autoFocus,
    startElement,
    endElement,
    bare,
    noActiveBorder,
    ...rest
  } = props;
  const inputRef = useRef(null);
  const handleRef = useForkRef(inputRef, forwardedRef);
  const formControlProps = useFormControl(props);

  const inputBody = (
    <StyledInput
      ref={handleRef}
      as={as}
      size={size}
      bg={bg}
      variant={variant}
      autoFocus={autoFocus}
      readOnly={formControlProps.readOnly}
      required={formControlProps.required}
      disabled={formControlProps.disabled}
      invalid={formControlProps.invalid}
      // ====
      aria-readonly={readOnly}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-invalid={formControlProps.invalid}
      aria-required={formControlProps.required}
      aria-disabled={formControlProps.disabled}
      // ====
      startElement={startElement}
      endElement={endElement}
      fluidWidth={fluidWidth}
      bare={bare}
      noActiveBorder={noActiveBorder}
      {...rest}
    />
  );
  return startElement || endElement ? (
    <StyledInputGroup
      bg={bg}
      size={size}
      disabled={disabled}
      variant={variant}
      fluidWidth={fluidWidth}
      invalid={formControlProps.invalid}
      iconBorder={iconBorder}
    >
      {inputBody}
      {startElement && <StyledStartElement>{startElement}</StyledStartElement>}
      {endElement && <StyledEndElement>{endElement}</StyledEndElement>}
    </StyledInputGroup>
  ) : (
    inputBody
  );
});

export default Input;

Input.displayName = 'Input';

Input.propTypes = {
  size: PropTypes.string,
  as: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANT)),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  fluidWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
  bare: PropTypes.bool,
  iconBorder: PropTypes.bool,
  // ====
  startElement: PropTypes.node,
  endElement: PropTypes.node
};

Input.defaultProps = {
  size: 'md',
  as: 'input',
  variant: 'filled',
  fluidWidth: true,
  autoFocus: false,
  bare: false,
  iconBorder: false
};
