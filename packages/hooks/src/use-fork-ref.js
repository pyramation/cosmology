import { useMemo } from 'react';

const setRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && typeof ref !== 'undefined') {
    ref.current = value;
  }
};

/**
 * fork a ref, useful when need to both handle a ref internally and expose it to the component consumer
 * For more context, see: https://github.com/facebook/react/issues/13029
 * @param {*} refA
 * @param {*} refB
 */
export const useForkRef = (refA, refB) => {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return instance => {
      setRef(refA, instance);
      setRef(refB, instance);
    };
  }, [refA, refB]);
};
