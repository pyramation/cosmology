import { useRef, useEffect, useState, useCallback } from 'react';

export const useTimeout = (callback, delay) => {
  const [run, setRun] = useState(false);
  const timeout = useRef(null);
  const cb = useRef(null);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  const reset = useCallback(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (typeof cb.current === 'function') cb.current();
      setRun(false);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (typeof delay === 'number' && run) {
      reset();
      return () => {
        clearTimeout(timeout.current);
      };
    }
  }, [delay, reset, run]);

  const start = () => setRun(true);

  return { reset, start };
};
