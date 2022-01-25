import * as React from 'react';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/**
 * useCallback invalidates too often, this is a workaround for that issue
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */
export const useEventCallback = fn => {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) => (0, ref.current)(...args), []);
};
