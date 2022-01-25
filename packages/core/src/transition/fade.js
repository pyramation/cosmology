import React from 'react';
import { useTransition, config } from 'react-spring';

import { TransitionPropTypes, BaseTransition } from './shared';

const Fade = React.forwardRef((props, ref) => {
  const { in: inProp, children, as, forwardedAs, ...rest } = props;

  const fadeTransitions = useTransition(!!inProp, null, {
    config: inProp ? { ...config.stiff } : { duration: 150 },
    from: { opacity: 0, transform: `translate3d(0px, -10px, 0px)` },
    enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
    leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` }
  });

  return fadeTransitions.map(
    ({ item, key, props }) =>
      item && (
        <BaseTransition
          key={key}
          style={props}
          as={as}
          forwardedAs={forwardedAs}
          ref={ref}
          {...rest}
        >
          {children}
        </BaseTransition>
      )
  );
});

export default Fade;

Fade.propTypes = TransitionPropTypes;
