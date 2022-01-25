import React, { forwardRef } from 'react';

import Box from '../box';
import ControlBox from '../control-box';
import VisuallyHidden from '../visually-hidden';
import { StyledSwitchKnob, getControlBoxStyles } from './styled';

const Switch = forwardRef((props, ref) => {
  const {
    id,
    name,
    value,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-checked': ariaChecked,
    color,
    defaultChecked,
    checked,
    size,
    disabled,
    invalid,
    onChange,
    onBlur,
    onFocus,
    children,
    onLabel,
    offLabel,
    ...rest
  } = props;
  const styles = getControlBoxStyles(props);

  return (
    <Box as="label" display="inline-block" verticalAlign="middle" {...rest}>
      <VisuallyHidden
        as="input"
        type="checkbox"
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
      <ControlBox {...styles}>
        <StyledSwitchKnob height={styles.height} />
      </ControlBox>
    </Box>
  );
});

export default Switch;

Switch.displayName = 'Switch';

Switch.defaultProps = {
  'aria-checked': 'mixed',
  size: 'md'
};
