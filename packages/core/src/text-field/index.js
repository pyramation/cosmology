import React from 'react';
import { useTextField } from '@react-aria/textfield';
import Input from '../input';
import FormLabel from '../form-label';
import FormControl from '../form-control';
import FormFieldError from '../form-field-error';

export default function TextField(props) {
  const {
    label,
    readOnly,
    fluidWidth,
    disabled,
    invalid,
    required,
    autoFocus,
    autoComplete,
    // ====
    size,
    as,
    variant,
    startElement,
    endElement,
    bare,
    noActiveBorder,
    error,
    FormControlProps,
    LabelProps,
    ErrorProps,
    ...otherProps
  } = props;
  const ref = React.useRef();
  const { labelProps, inputProps } = useTextField(
    {
      isDisabled: disabled,
      isReadOnly: readOnly,
      isRequired: required,
      validationState: invalid ? 'invalid' : 'valid',
      autoFocus,
      autoComplete,
      ...otherProps
    },
    ref
  );

  return (
    <FormControl
      {...FormControlProps}
      invalid={invalid}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
    >
      <FormLabel {...LabelProps} {...labelProps}>
        {label}
      </FormLabel>
      <Input
        {...inputProps}
        bare={bare}
        noActiveBorder={noActiveBorder}
        size={size}
        as={as}
        variant={variant}
        startElement={startElement}
        endElement={endElement}
        ref={ref}
      />
      {typeof error === 'string' && <FormFieldError>{error}</FormFieldError>}
    </FormControl>
  );
}
