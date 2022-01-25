import isEqual from 'fast-deep-equal/react';
import { useCustomCompareEffect } from './use-custom-compare-effect';

const isPrimitive = val => val !== Object(val);

export const useDeepCompareEffect = (effect, deps) => {
  /* eslint-disable no-console */
  if (process.env.NODE_ENV !== 'production') {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn(
        '`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.'
      );
    }

    if (deps.every(isPrimitive)) {
      console.warn(
        '`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }
  }
  /* eslint-enable no-console */

  useCustomCompareEffect(effect, deps, isEqual); // eslint-disable-line
};
