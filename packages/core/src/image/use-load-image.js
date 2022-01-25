import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsoLayoutEffect } from '@webql/hooks';

export const Status = Object.freeze({
  LOADING: 'loading',
  FAILED: 'failed',
  PENDING: 'pending',
  LOADED: 'loaded'
});

/**
 * Loads an image in the browser and let us know the `status` so we can show image
 * fallback if it's still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 */
export function useLoadImage(props) {
  const {
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;

  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    setStatus(src ? Status.LOADING : Status.PENDING);
  }, [src]);

  const imageRef = useRef(null);

  const load = useCallback(() => {
    if (!src) return;

    flush();

    const img = new Image();

    img.src = src;

    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }

    if (srcSet) {
      img.srcset = srcSet;
    }

    if (sizes) {
      img.sizes = sizes;
    }

    img.onload = event => {
      flush();
      setStatus('loaded');
      if (typeof onLoad === 'function') {
        onLoad(event);
      }
    };
    img.onerror = error => {
      flush();
      setStatus('failed');
      if (typeof onError === 'function') {
        onError(error);
      }
    };

    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError]);

  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };

  useIsoLayoutEffect(() => {
    /**
     * If user opts out of the fallback/placeholder
     * logic, let's bail out.
     */
    if (ignoreFallback) return undefined;

    if (status === Status.LOADING) {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);

  return ignoreFallback ? Status.LOADED : status;
}
