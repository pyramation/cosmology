import React from 'react';

/**
 * Get the latest value from the current render pass
 * @param {*} obj
 * @returns {CallableFunction}
 */
export function useGetLatest(obj) {
  const ref = React.useRef();
  ref.current = obj;

  return React.useCallback(() => ref.current, []);
}
