import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);
  const onToggle = useCallback(() => {
    setToggle(toggle => !toggle);
  }, []);
  return [toggle, onToggle];
};
