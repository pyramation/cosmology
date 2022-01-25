import { useState, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * Measure a dom node using resize observer
 */
export const useMeasure = (ref, cb) => {
  const [rect, setRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });

  const savedCb = useRef();
  const ro = useRef(
    new ResizeObserver(([entry]) => {
      const onResize = savedCb.current;
      if (typeof onResize === 'function') onResize(entry);
      setRect(entry.contentRect);
    })
  );

  useEffect(() => {
    // Save the latest cb
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    if (!ref || !ref.current) return;
    const observer = ro.current;
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [cb, ref]);

  return rect;
};
