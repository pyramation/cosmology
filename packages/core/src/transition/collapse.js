import React, { useRef } from 'react';
import { useSpring } from 'react-spring';

import Box from '../box';
import { useMeasure, usePrevious, useForkRef } from '@webql/hooks';
import { TransitionPropTypes, BaseTransition } from './shared';

const Collapse = React.forwardRef((props, ref) => {
  const { in: isOpen, children, as, forwardedAs, ...springConfigs } = props;
  const contentRef = useRef(null);
  const handleRef = useForkRef(ref, contentRef);
  const prevOpen = usePrevious(isOpen);
  console.log('prevOpen', prevOpen);
  console.log('isOpen', isOpen);

  const { height: realHeight } = useMeasure(contentRef);
  console.log('height', realHeight);

  const { height, opacity, transform } = useSpring({
    from: {
      height: 0,
      opacity: 0,
      transform: 'translate3d(20px,0,0)'
    },
    to: {
      height: isOpen ? realHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    },
    config: {
      ...{ mass: 1, tension: 170 },
      ...springConfigs
    }
  });

  return (
    <BaseTransition
      position="relative"
      style={{
        opacity,
        overflow: 'hidden',
        height: isOpen && prevOpen === isOpen ? 'auto' : height
      }}
    >
      <Box ref={handleRef} style={{ transform }}>
        {children}
      </Box>
    </BaseTransition>
  );
});

export default Collapse;

Collapse.propTypes = TransitionPropTypes;
