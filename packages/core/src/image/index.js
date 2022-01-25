import React, { memo } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { Status, useLoadImage } from './use-load-image';
import Box from '../box';
import Skeleton from '../skeleton';

export const DefaultFallbackImg = ({ width, height }) => {
  return <Skeleton loading width={width} height={height} />;
};

const NativeImage = React.forwardRef((props, forwardedRef) => {
  const { width, height, alt, ...rest } = props;
  return (
    <img width={width} height={height} ref={forwardedRef} alt={alt} {...rest} />
  );
});

const Image = React.forwardRef((props, forwardedRef) => {
  const {
    fallbackSrc,
    fallback,
    src,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    ...rest
  } = props;

  const shouldIgnore = loading != null || ignoreFallback;

  const status = useLoadImage({
    ...props,
    ignoreFallback: shouldIgnore
  });

  const shared = {
    ref: forwardedRef,
    objectFit: fit,
    objectPosition: align,
    ...(shouldIgnore ? rest : omit(rest, ['onError', 'onLoad']))
  };

  if (status !== Status.LOADED) {
    // if there is custom fallback component, render here
    if (fallback) return fallback;

    return <Box as={NativeImage} src={fallbackSrc} {...shared} />;
  }

  return (
    <Box
      as={NativeImage}
      src={src}
      crossOrigin={crossOrigin}
      loading={loading}
      {...shared}
    />
  );
});

export default memo(Image);

Image.DefaultFallbackImg = DefaultFallbackImg;
Image.displayName = 'Image';
Image.propTypes = {
  fallbackSrc: PropTypes.string,
  fallback: PropTypes.node,
  src: PropTypes.string,
  align: PropTypes.any,
  fit: PropTypes.any,
  loading: PropTypes.bool,
  ignoreFallback: PropTypes.bool,
  crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials'])
};
