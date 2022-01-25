import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import get from '@styled-system/theme-get';
import Box from '../box';

const alternate = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const getSizes = size => {
  const dotSize = 0.2 * size;
  return {
    squareSize: size,
    dotSize,
    dots: [
      [0.1 * size, 0.1 * size, '0'],
      [0.1 * size, 0.4 * size, '-0.4'],
      [0.1 * size, 0.7 * size, '-0.8'],
      [0.4 * size, 0.1 * size, '-0.4'],
      [0.4 * size, 0.4 * size, '-0.8'],
      [0.4 * size, 0.7 * size, '-1.2'],
      [0.7 * size, 0.1 * size, '-0.8'],
      [0.7 * size, 0.4 * size, '-1.2'],
      [0.7 * size, 0.7 * size, '-1.8']
    ]
  };
};

const StyledLoader = styled(Box)`
  display: inline-block;
  position: relative;
  width: ${props => props.sizes.squareSize}px;
  height: ${props => props.sizes.squareSize}px;

  div {
    position: absolute;
    width: ${props => props.sizes.dotSize}px;
    height: ${props => props.sizes.dotSize}px;
    border-radius: 50%;
    background: ${props => get(`colors.${props.color || 'accent'}`)(props)};
    animation: ${alternate} 1.2s linear infinite;
  }

  ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(
    i => css`
      & div:nth-child(${i + 1}) {
        top: ${props => props.sizes.dots[i][0]}px;
        left: ${props => props.sizes.dots[i][1]}px;
        animation-delay: ${props => props.sizes.dots[i][2]}s;
      }
    `
  )}
`;

const Loader = ({ size, color }) => {
  const sizes = getSizes(size);
  return (
    <StyledLoader sizes={sizes} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

export default Loader;

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.any
};

Loader.defaultProps = {
  size: 80
};
