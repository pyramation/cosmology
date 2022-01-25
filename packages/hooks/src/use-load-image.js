import { useState, useEffect } from 'react';

const noop = () => {};

export const useLoadImage = ({ src, onError = noop, onSuccess = noop }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const image = new window.Image();
      image.src = src;
      image.onload = event => {
        setLoaded(true);
        onSuccess(event);
      };
      image.onerror = event => {
        setLoaded(false);
        onError(event);
      };
    }
  }, [src, onError, onSuccess]);

  return loaded;
};
