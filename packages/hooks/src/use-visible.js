import { useState, useEffect } from 'react';
import 'intersection-observer';

export const useVisible = (ref, rootRef, defaultValue = {}) => {
  const [io, setIo] = useState(null);
  const [visibility, setVisibility] = useState({
    visible: false,
    fullyVisible: false,
    ...defaultValue
  });

  useEffect(() => {
    if (io) return;
    setIo(
      new IntersectionObserver(
        ([entry]) => {
          setVisibility(() => ({
            visible: entry.intersectionRatio > 0,
            fullyVisible: entry.intersectionRatio >= 1
          }));
        },
        {
          root: rootRef.current,
          rootMargin: '0px',
          threshold: 0
        }
      )
    );
  }, [io, rootRef]);

  useEffect(() => {
    if (!ref || !ref.current || !rootRef || !rootRef.current || !io) return;
    io.observe(ref.current);
    return () => {
      io.disconnect();
    };
  }, [io, ref, rootRef]);

  return visibility;
};
