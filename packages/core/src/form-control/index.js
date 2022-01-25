import React, { createContext, useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

const FormControlContext = createContext();

export const useFormControlContext = () => useContext(FormControlContext);

export const useFormControl = props => {
  const context = useFormControlContext();
  if (!context) return props;

  const keys = Object.keys(context);
  return keys.reduce((acc, prop) => {
    /** Giving precedence to `props` over `context` in case we want to override */
    acc[prop] = props[prop];
    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop];
      }
    }
    return acc;
  }, {});
};

const FormControl = forwardRef(
  ({ invalid, required, disabled, readOnly, ...rest }, ref) => {
    const context = {
      required,
      disabled,
      invalid,
      readOnly
    };

    return (
      <FormControlContext.Provider value={context}>
        <Box role="group" ref={ref} {...rest} />
      </FormControlContext.Provider>
    );
  }
);

export default FormControl;

FormControl.displayName = 'FormControl';

FormControl.propTypes = {
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool
};
