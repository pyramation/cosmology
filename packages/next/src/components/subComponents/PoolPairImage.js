import React, { Component } from 'react';
import axios from 'axios';

const PoolPairImage = ({ images, height }) => {
  const firstImg = images[0];
  const secondImg = images[1];

  const firstImgSrc =
    typeof firstImg === 'string'
      ? firstImg
      : firstImg && firstImg.images && firstImg.images.png;
  const secondImgSrc =
    typeof secondImg === 'string'
      ? secondImg
      : secondImg && secondImg.images && secondImg.images.png;
  return (
    <div
      className="pool-pair-image"
      style={{ height: height || 22, width: (height * 3) / 2 }}
    >
      <img src={firstImgSrc} style={{ height, width: 'auto', left: 0 }} />
      <img
        src={secondImgSrc}
        style={{ height, width: 'auto', left: height / 2 }}
      />
    </div>
  );
};

export default PoolPairImage;
