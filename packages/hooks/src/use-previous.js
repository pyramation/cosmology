import { useEffect, useRef } from 'react';

// This hook allows accessing a previous value from a previous render pass
export const usePrevious = (value, defaultValue = null) => {
  const ref = useRef(defaultValue);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
