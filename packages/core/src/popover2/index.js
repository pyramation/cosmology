import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { useSpring } from 'react-spring';

import { useClickAwayListener } from '../click-away-listener';
import Portal from '../portal';
import { StyledPopper } from './styled';

export const PLACEMENTS = ['top', 'bottom', 'left', 'right'].reduce(
  (obj, dir) => {
    obj[dir] = dir;
    ['-start', '-end'].forEach(postfix => {
      const pos = `${dir}${postfix}`;
      obj[pos] = pos;
    });
    return obj;
  },
  {
    auto: 'auto'
  }
);

// This component is for positioning a popover against a target node (like a button)
// It focuses mostly on positioning state, use usePopup() hook to manage open/close state and aria attributes
// TODO: trap focus inside popper
const Popover2 = React.forwardRef(
  (
    {
      id,
      triggerEl,
      isOpen,
      onToggle,
      onClose,
      placement,
      fallbackPlacements,
      trigger,
      closeOnClickAway,
      bg,
      zIndex,
      // ==== Customize popper.js props
      Arrow,
      Popper,
      PopperProps,
      PortalProps,
      offset,
      // ====
      onClickAway,
      // ====
      children,
      ...otherProps
    },
    forwardedRef
  ) => {
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const popperRef = ref => {
      setPopperElement(ref);
      // This is kinda hacky, because popper.js popperElement only works if use setState
      // we gotta hack the forwardedRef to work normally with useRef
      if (!forwardedRef) return;
      if (typeof forwardedRef === 'function') {
        forwardedRef(ref);
      } else {
        forwardedRef.current = ref;
      }
    };

    const handleClickAway = event => {
      if (
        trigger === 'hover' ||
        !closeOnClickAway ||
        !isOpen ||
        triggerEl?.contains(event.target) ||
        popperElement.contains(event.target)
      ) {
        return;
      }
      if (typeof onClose === 'function') onClose();
      if (onClickAway) onClickAway(event);
    };

    const bindClickAwayListener = useClickAwayListener({
      ref: popperRef,
      onClickAway: handleClickAway
    });

    const { styles, attributes, state } = usePopper(triggerEl, popperElement, {
      placement,
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        {
          name: 'offset',
          options: {
            offset
          }
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements
          }
        }
      ]
    });

    const animation = useSpring({ opacity: isOpen ? 1 : 0 });

    const childrenContent =
      typeof children === 'function'
        ? children({ isOpen, toggleOpen: onToggle })
        : children;

    return isOpen ? (
      <Portal {...PortalProps}>
        <Popper
          id={id}
          ref={popperRef}
          open={isOpen}
          bg={bg}
          zIndex={zIndex}
          data-popover="popper"
          style={{
            ...animation,
            ...styles.popper
          }}
          {...bindClickAwayListener()}
          {...attributes.popper}
          {...PopperProps}
          {...otherProps}
        >
          {childrenContent}
          {Arrow && (
            <Arrow
              ref={setArrowElement}
              data-placement={state && state.placement}
              style={styles.arrow}
              bg={bg}
            />
          )}
        </Popper>
      </Portal>
    ) : null;
  }
);

export default Popover2;

Popover2.displayName = 'Popover2';

Popover2.propTypes = {
  isOpen: PropTypes.bool,
  closeOnClickAway: PropTypes.bool,
  onClose: PropTypes.func,
  onClickAway: PropTypes.func,
  // Background color of the overlay
  bg: PropTypes.string,
  // ====
  placement: PropTypes.oneOf(Object.keys(PLACEMENTS)),
  fallbackPlacements: PropTypes.arrayOf(PropTypes.string),
  trigger: PropTypes.oneOf(['hover', 'click']),
  triggerEl: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // ==== Overrides for Arrow and Popper elements
  Arrow: PropTypes.any,
  Popper: PropTypes.any,
  PopperProps: PropTypes.object
};

Popover2.defaultProps = {
  fallbackPlacements: [],
  onClose: () => {},
  zIndex: 'popover',
  closeOnClickAway: true,
  bg: 'blackAlpha.800',
  offset: [0, 14],
  Arrow: null,
  Popper: StyledPopper,
  PopperProps: {
    p: 3
  }
};
