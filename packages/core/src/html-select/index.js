import React, { forwardRef } from 'react';

import Input from '../input';
import Icon from '../icon';
import { StyledSelect, StyledSelectIcon } from './styled';
import { Input as InputUtils } from '../utils';

const SelectInput = forwardRef(function SelectInput(
  { as = 'select', placeholder, children, ...rest },
  ref
) {
  return (
    <Input
      as={as}
      appearance="none"
      ref={ref}
      pr="2rem"
      pb="px"
      lineHeight="normal"
      {...rest}
      style={{
        border: 'none'
      }}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </Input>
  );
});

const Select = forwardRef(
  ({ as, rootProps, icon, iconSize = 4, fluidWidth, ...props }, ref) => {
    const color = 'inherit';
    const opacity = props.readOnly || props.disabled ? 0.5 : null;

    const { root, input } = InputUtils.splitProps(props);

    return (
      <StyledSelect as={as} fluidWidth={fluidWidth} {...root} {...rootProps}>
        <SelectInput ref={ref} color={color} {...input} />
        <StyledSelectIcon opacity={opacity} color={input.color || color}>
          <Icon
            focusable="false"
            aria-hidden="true"
            name={icon || 'chevron-down'}
            size={iconSize}
          />
        </StyledSelectIcon>
      </StyledSelect>
    );
  }
);

Select.displayName = 'HTMLSelect';

export default Select;
