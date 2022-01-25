import { useRef, useState, useCallback } from 'react';

/**
 * This hook is for creating a state which can either be controlled or uncontrolled depends on the controlled (valueProp)
 * Do not switch back and forth between modes.
 * isControlled uses useRef for that purpose because you shouldn't change the mode after initialization
 */
export const useControlled = ({
  controlled: valueProp,
  defaultValue,
  onChange
}) => {
  const { current: isControlled } = useRef(typeof valueProp !== 'undefined');
  const [valueState, setValueState] = useState(
    isControlled ? valueProp : defaultValue
  );
  const value = isControlled ? valueProp : valueState;

  const setValue = useCallback(value => {
    if (isControlled) return onChange(value);
    setValueState(value);
    onChange(value);
  }, []); // eslint-disable-line

  return [value, setValue];
};
