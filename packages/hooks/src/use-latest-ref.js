import React from 'react';

/**
 * Persist any value between renders
 * but keeps it up-to-date if it changes.
 * @param value the value or function to persist
 */
export function useLatestRef(value) {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
