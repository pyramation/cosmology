import { useEffect, useRef } from 'react';

const isPrimitive = val => val !== Object(val);

// useEffect with a custom compare dependencies depsEqual function
export const useCustomCompareEffect = (effect, deps, depsEqual) => {
  /* eslint-disable no-console */
  if (process.env.NODE_ENV !== 'production') {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn(
        '`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.'
      );
    }

    if (deps.every(isPrimitive)) {
      console.warn(
        '`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }

    if (typeof depsEqual !== 'function') {
      console.warn(
        '`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list'
      );
    }
  }
  /* eslint-enable no-console */

  const ref = useRef(undefined);

  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps;
  }

  useEffect(effect, ref.current); // eslint-disable-line
};
