import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';

import Box from '../box';

const skeletonGlow = props => keyframes`
  0% {
    border-color: ${get('colors.gray.200')(props)};
    background-color: ${get('colors.gray.200')(props)};
  }

  100% {
    border-color: ${get('colors.gray.300')(props)};
    background-color: ${get('colors.gray.300')(props)};
  }
`;

const StyledSkeleton = styled(Box)`
  border-radius: 2px;
  box-shadow: none !important;
  color: transparent !important;
  animation: ${skeletonGlow} 1s linear infinite alternate;
  user-select: none;
  pointer-events: none;
  background-clip: padding-box;
  cursor: default;

  ${css({
    borderColor: 'gray.300',
    bg: 'gray.300'
  })}
`;

const Skeleton = ({ loading, width, height, children }) => {
  if (loading) {
    return (
      <StyledSkeleton width={width} height={height}>
        {children}
      </StyledSkeleton>
    );
  }

  return children ?? null;
};

export default Skeleton;

Skeleton.propTypes = {
  loading: PropTypes.bool
};
