import { useState, useCallback, useRef } from 'react';

export const useLocalStorage = (keyProp, initialValue) => {
  // Prevent changing key multiple times
  const key = useRef(keyProp);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key.current);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error('useLocalStorage: could not getItem with key'); // eslint-disable-line
      return initialValue;
    }
  });

  const setValue = useCallback(value => {
    try {
      const rawValue = typeof value === 'function' ? value() : value;
      setStoredValue(rawValue);
      window.localStorage.setItem(key.current, JSON.stringify(rawValue));
    } catch (err) {
      console.error('useLocalStorage: could not setValue', err); // eslint-disable-line
    }
  }, []);

  return [storedValue, setValue];
};
