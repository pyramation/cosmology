import React, { forwardRef } from 'react';
import { useFormControl } from '../form-control';
import Text from '../text';

export const FormHelperText = forwardRef((props, ref) => {
  const formControl = useFormControl(props);

  if (formControl.invalid) return null;

  return (
    <Text
      mt={2}
      ref={ref}
      id={formControl.id ? `${formControl.id}-help-text` : null}
      color="gray.500"
      lineHeight="normal"
      fontSize="xs"
      {...props}
    />
  );
});

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
