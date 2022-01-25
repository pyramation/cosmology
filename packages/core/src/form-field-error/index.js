import React, { forwardRef } from 'react';
import Box from '../box';
import Icon from '../icon';
import Text from '../text';
import { useFormControl } from '../form-control';

const FormFieldError = forwardRef(({ children, icon, ...props }, ref) => {
  const formControl = useFormControl(props);

  if (!formControl.invalid) return null;

  return (
    <Box
      ref={ref}
      display="flex"
      color="intent.danger"
      id={formControl.id ? `${formControl.id}-error-message` : null}
      mt={2}
      fontSize="xs"
      alignItems="center"
      {...props}
    >
      <Icon aria-hidden name={icon || 'alert-triangle'} size={3} />
      <Text lineHeight="normal" fontSize="xs" color="inherit" ml={2}>
        {children}
      </Text>
    </Box>
  );
});

FormFieldError.displayName = 'FormFieldError';

export default FormFieldError;
