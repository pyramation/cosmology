import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { systemProps } from '../box';

export const BaseTransition = styled(animated.div)`
  ${systemProps}
`;

export const TransitionPropTypes = {
  children: PropTypes.node.isRequired,
  in: PropTypes.bool,
  // ---- react-spring props, see: https://www.react-spring.io/docs/hooks/api
  duration: PropTypes.number,
  mass: PropTypes.number,
  tension: PropTypes.number,
  friction: PropTypes.number,
  clamp: PropTypes.bool,
  velocity: PropTypes.bool
};
