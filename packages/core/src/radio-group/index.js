import React, {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import { useId as getId } from '@reach/auto-id';
import { useControlled, useForkRef } from '@webql/hooks';

import Box from '../box';
import { cleanChildren } from '../utils';

const RadioGroup = forwardRef(
  (
    {
      onChange,
      name,
      size,
      defaultValue,
      inline,
      value: valueProp,
      space = 2,
      children,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = useControlled({
      controlled: valueProp,
      defaultValue,
      onChange
    });

    const rootRef = useRef();
    const handleRef = useForkRef(rootRef, ref);

    const handleOnChange = event => {
      setValue(event.target.value);
    };

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
            size: child.props.size || size,
            name: name || `radio-${getId()}`,
            onChange: handleOnChange,
            checked: child.props.value === value
          })}
        </Box>
      );
    });

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          let input = handleRef.current.querySelector(
            'input:not(:disabled):checked'
          );
          if (!input) {
            input = handleRef.current.querySelector('input:not(:disabled)');
          }
          if (input) input.focus();
        }
      }),
      []
    );

    return (
      <Box ref={handleRef} role="radiogroup" {...rest}>
        {clones}
      </Box>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  inline: PropTypes.bool,
  space: PropTypes.any,
  children: PropTypes.node
};

RadioGroup.defaultProps = {
  defaultValue: null,
  space: 2,
  onChange: () => {}
};
