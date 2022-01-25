import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useForkRef } from '@webql/hooks';
import Input from '../input';

const BaseTextarea = forwardRef(({ minHeight, ...rest }, ref) => {
  return (
    <Input
      py={2}
      lineHeight="short"
      height="auto"
      ref={ref}
      as="textarea"
      minHeight={minHeight}
      style={{
        appearance: 'initial'
      }}
      {...rest}
    />
  );
});

BaseTextarea.displayName = 'BaseTextarea';

const Textarea = forwardRef(
  ({ minHeight, onChange, rows, cols, expandable, resize, ...props }, ref) => {
    const [height, setHeight] = useState(0);
    const textAreaRef = useRef(null);
    const handleRef = useForkRef(ref, textAreaRef);

    useLayoutEffect(() => {
      if (textAreaRef.current && expandable) {
        setHeight(textAreaRef.current.scrollHeight);
      }
    }, [textAreaRef, expandable]);

    const handleInput = event => {
      if (textAreaRef.current && expandable) {
        setTimeout(() => {
          setHeight('auto');
          setHeight(textAreaRef.current.scrollHeight);
        }, 0);
      }
      if (onChange) onChange(event);
    };

    const expandableProps = {
      height,
      willChange: 'height'
    };

    return (
      <BaseTextarea
        rows={rows}
        cols={cols}
        minHeight={minHeight}
        onChange={handleInput}
        ref={handleRef}
        style={{
          ...(expandable ? expandableProps : {}),
          resize
        }}
        {...props}
      />
    );
  }
);

export default Textarea;

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  onChange: PropTypes.func,
  rows: PropTypes.number,
  cols: PropTypes.number,
  // == height on the sizes theme scale or pixel value
  minHeight: PropTypes.any,
  expandable: PropTypes.bool,
  resize: PropTypes.any
};

Textarea.defaultProps = {
  minHeight: '20',
  rows: 1,
  expandable: false,
  resize: 'auto'
};
