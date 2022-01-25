import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { useId } from '@reach/auto-id';
import { useControlled } from '@webql/hooks';
import { cleanChildren } from '../utils';

import Box from '../box';

const CheckboxGroup = ({
  onChange,
  name,
  size,
  defaultValue,
  inline,
  value: valueProp,
  space = 2,
  children,
  ...rest
}) => {
  const [values, setValues] = useControlled({
    controlled: valueProp,
    defaultValue,
    onChange
  });

  const handleOnChange = event => {
    const { checked, value } = event.target;
    let newValues;
    if (checked) {
      newValues = [...values, value];
    } else {
      newValues = values.filter(val => val !== value);
    }
    setValues(newValues);
  };

  const fallbackName = `checkbox-${useId()}`;
  const _name = name || fallbackName;

  const validChildren = cleanChildren(children);
  const clones = validChildren.map((child, index) => {
    const lastChild = validChildren.length === index + 1;
    const spacings = inline ? { mr: space } : { mb: space };

    return (
      <Box
        key={index}
        display={inline ? 'inline-block' : 'block'}
        {...(!lastChild && spacings)}
      >
        {cloneElement(child, {
          size: size,
          name: `${_name}-${index}`,
          onChange: handleOnChange,
          isChecked: values.includes(child.props.value)
        })}
      </Box>
    );
  });

  return (
    <Box role="group" {...rest}>
      {clones}
    </Box>
  );
};

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  inline: PropTypes.bool,
  space: PropTypes.any,
  children: PropTypes.node
};

CheckboxGroup.defaultProps = {
  onChange: () => {},
  defaultValue: []
};
