import React, { forwardRef } from 'react';
import Box from '../box';
import { useFormControl } from '../form-control';

export const FormLabel = forwardRef(({ children, fontSize, ...props }, ref) => {
  const formControl = useFormControl(props);
  return (
    <Box
      ref={ref}
      fontSize={fontSize}
      mb={2}
      opacity={formControl.disabled ? '0.4' : '1'}
      fontWeight="medium"
      textAlign="left"
      verticalAlign="middle"
      display="inline-block"
      as="label"
      {...props}
    >
      {children}
      {formControl.required && (
        <Box
          as="span"
          ml={1}
          color="red.500"
          aria-hidden="true"
          children="*"
          {...props}
        />
      )}
    </Box>
  );
});

export default FormLabel;

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = {
  fontSize: 'sm'
};
