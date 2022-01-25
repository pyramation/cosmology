import React from 'react';
import { useLatestRef } from './use-latest-ref';

export const getWindow = node => node?.ownerDocument?.defaultView ?? window;

function isBrowser() {
  const win = getWindow();
  return Boolean(
    typeof win !== 'undefined' && win.document && win.document.createElement
  );
}

/**
 * React hook to manage browser event listeners
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 */
export function useEventListener(
  event,
  handler,
  doc = isBrowser() ? document : null,
  options
) {
  const savedHandler = useLatestRef(handler);

  React.useEffect(() => {
    if (!doc) return undefined;

    const listener = event => {
      if (!savedHandler.current) return;
      savedHandler.current(event);
    };

    doc.addEventListener(event, listener, options);

    return () => {
      doc.removeEventListener(event, listener, options);
    };
  }, [event, doc, options, savedHandler]);

  return () => {
    if (savedHandler.current && doc.removeEventListener) {
      doc.removeEventListener(event, savedHandler.current, options);
    }
  };
}
