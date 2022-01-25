import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useTransition, animated, config } from 'react-spring';
import Box from '../box';

export const ModalRoot = styled(Box)`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;

  ${css({
    zIndex: 'modal'
  })}
`;

const StyledModalBackdrop = styled(Box).attrs({
  'aria-hidden': true
})`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: -1;
  /* Remove grey highlight, workaround for chrome bug */
  -webkit-tap-highlight-color: transparent;
  /* Disable scroll capabilities. */
  touch-action: none;

  ${css({
    bg: 'blackAlpha.600'
  })}
`;

const AnimatedModalBackdrop = animated(StyledModalBackdrop);

export const ModalBackdrop = props => {
  const { in: inProp, children, ...rest } = props;

  const fadeTransitions = useTransition(!!inProp, null, {
    config: inProp ? { ...config.stiff } : { duration: 150 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return fadeTransitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedModalBackdrop key={key} style={props} {...rest}>
          {children}
        </AnimatedModalBackdrop>
      )
  );
};
