import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForkRef, useMeasure } from '@webql/hooks';
import { useSpring } from 'react-spring';

import { TransitionPropTypes, BaseTransition } from './shared';

const Slide = React.forwardRef((props, forwardedRef) => {
  const {
    in: inProp,
    anchor,
    children,
    as,
    forwardedAs,
    config,
    ...rest
  } = props;
  const nodeRef = useRef(null);
  const handleRef = useForkRef(forwardedRef, nodeRef);
  const rect = useMeasure(nodeRef);
  const pos = useMemo(() => getPos(anchor, rect), [anchor, rect]);

  const slideAnimation = useSpring({
    from: pos.from,
    to: inProp ? pos.to : pos.from,
    config: config
  });

  return (
    <BaseTransition
      position="fixed"
      style={slideAnimation}
      as={as}
      forwardedAs={forwardedAs}
      ref={handleRef}
      {...rest}
    >
      {children}
    </BaseTransition>
  );
});

export default Slide;

Slide.displayName = 'TransitionSlide';
Slide.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  ...TransitionPropTypes
};
Slide.defaultProps = {
  anchor: 'left'
};

function getPos(anchor, size) {
  if (!size.width && !size.height) {
    size = {
      width: 999,
      height: 999
    };
  }

  const posByAnchor = {
    left: {
      from: {
        left: -size.width
      },
      to: {
        left: 0
      }
    },
    right: {
      from: {
        right: -size.width
      },
      to: {
        right: 0
      }
    },
    top: {
      from: {
        top: -size.height
      },
      to: {
        top: 0
      }
    },
    bottom: {
      from: {
        bottom: -size.height
      },
      to: {
        bottom: 0
      }
    }
  };

  return posByAnchor[anchor] || posByAnchor.left;
}
