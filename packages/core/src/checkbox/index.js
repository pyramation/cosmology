import React, { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useForkRef } from '@webql/hooks';

import Box from '../box';
import VisuallyHidden from '../visually-hidden';
import Icon from '../icon';
import ControlBox from '../control-box';
import { useCheckboxStyle } from './styled';

const Checkbox = forwardRef((props, ref) => {
  const {
    id,
    name,
    value,
    color,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    defaultChecked,
    checked,
    fluidWidth,
    size = 'md',
    disabled,
    invalid,
    readOnly,
    indeterminate,
    onChange,
    onBlur,
    onFocus,
    children,
    ...rest
  } = props;

  const styleProps = useCheckboxStyle({ size, color });
  const checkboxRef = useRef();
  const handleRef = useForkRef(ref, checkboxRef);

  useEffect(() => {
    if (handleRef.current) {
      handleRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate, handleRef]);

  return (
    <Box
      as="label"
      display="inline-flex"
      verticalAlign="top"
      alignItems="center"
      width={fluidWidth ? 'full' : undefined}
      style={{
        cursor: disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer'
      }}
      {...rest}
    >
      <VisuallyHidden
        as="input"
        type="checkbox"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        id={id}
        ref={handleRef}
        name={name}
        value={value}
        onChange={readOnly ? undefined : onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        defaultChecked={readOnly ? undefined : defaultChecked}
        checked={
          readOnly ? Boolean(checked) : defaultChecked ? undefined : checked
        }
        disabled={disabled}
        readOnly={readOnly}
        aria-readonly={readOnly}
        aria-invalid={invalid}
        aria-checked="mixed"
      />
      <ControlBox opacity={readOnly ? 0.8 : 1} {...styleProps}>
        <Icon name={indeterminate ? 'minus' : 'check'} size="1em" />
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
});

export default Checkbox;

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  fluidWidth: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

Checkbox.defaultProps = {
  size: 'md'
};
