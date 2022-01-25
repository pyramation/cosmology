import React, { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import css from '@styled-system/css';

import Box from '../box';
import VisuallyHidden from '../visually-hidden';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const sizes = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem'
};

const StyledSpinner = styled(Box)`
  display: inline-block;
  border-color: currentColor;
  border-style: solid;
  border-radius: 50%;
  animation: ${spin} ${props => props.speed} linear infinite;

  ${props =>
    css({
      borderWidth: props.thickness,
      borderBottomColor: props.emptyColor,
      borderLeftColor: props.emptyColor,
      color: props.color,
      size: sizes[props.size]
    })}
`;

const Spinner = forwardRef(
  (
    {
      size = 'md',
      label = 'Loading...',
      thickness = '2px',
      speed = '0.45s',
      color,
      emptyColor = 'transparent',
      ...props
    },
    ref
  ) => {
    return (
      <StyledSpinner
        ref={ref}
        size={size}
        thickness={thickness}
        speed={speed}
        color={color}
        emptyColor={emptyColor}
        {...props}
      >
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </StyledSpinner>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
