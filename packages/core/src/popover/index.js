import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { useSpring } from 'react-spring';
import { useControlled } from '@webql/hooks';
import wrap from 'lodash/wrap';

import Portal from '../portal';
import ClickAwayListener from '../click-away-listener';
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
  {}
);

// TODO: trap focus inside popper
const Popover = React.forwardRef(
  (
    {
      target,
      open: openProp,
      onClose,
      defaultOpen,
      trigger,
      placement,
      delay,
      closeOnClickAway,
      bg,
      zIndex,
      // ==== Handlers
      onToggle,
      onClickAway,
      // ==== Refs
      targetRef,
      // ==== Customize popper.js stuff
      Arrow,
      Popper,
      PopperProps,
      offset,
      // ====
      children
    },
    forwardedRef
  ) => {
    const [open, setOpen] = useControlled({
      controlled: openProp,
      defaultValue: defaultOpen,
      onChange: onToggle
    });
    const timeout = useRef(null);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes, state } = usePopper(
      referenceElement,
      popperElement,
      {
        placement,
        modifiers: [
          { name: 'arrow', options: { element: arrowElement } },
          {
            name: 'offset',
            options: {
              offset
            }
          }
        ]
      }
    );

    const animation = useSpring({ opacity: open ? 1 : 0 });

    const cleanup = () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    };

    const toggle = (cb, event) => {
      if (typeof cb === 'function') cb(event);
      if (typeof onClose === 'function') onClose();
      setOpen(open => !open);
    };

    const handleMouseEnter = (cb, event) => {
      cleanup();
      if (typeof cb === 'function') cb(event);
      if (open) return;
      if (Number.isInteger(delay)) {
        timeout.current = setTimeout(() => {
          setOpen(() => true);
        }, delay);
      } else {
        setOpen(() => true);
      }
    };

    const handleMouseLeave = (cb, event) => {
      cleanup();
      if (typeof cb === 'function') cb(event);
      if (typeof onClose === 'function') onClose();
      if (!open) return;
      setOpen(() => false);
    };

    useEffect(() => {
      return cleanup;
    }, []);

    const popperRef = ref => {
      if (forwardedRef) forwardedRef.current = ref;
      setPopperElement(ref);
    };

    const childrenContent =
      typeof children === 'function'
        ? children({ open, toggleOpen: toggle })
        : children;

    const popper = (
      <Popper
        ref={popperRef}
        open={open}
        bg={bg}
        zIndex={zIndex}
        style={{
          ...animation,
          ...styles.popper
        }}
        {...attributes.popper}
        {...PopperProps}
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
    );

    const content =
      closeOnClickAway && trigger === 'click' ? (
        <ClickAwayListener
          onClickAway={event => {
            setOpen(false);
            if (typeof onClose === 'function') onClose();
            if (onClickAway) onClickAway(event);
          }}
        >
          <div>{popper}</div>
        </ClickAwayListener>
      ) : (
        popper
      );

    const targetHandlers = props => {
      return trigger === 'click'
        ? { onClick: wrap(props.onClick, toggle) }
        : {
            onMouseEnter: wrap(props.onMouseEnter, handleMouseEnter),
            onMouseLeave: wrap(props.onMouseLeave, handleMouseLeave)
          };
    };

    const targetContent =
      typeof target === 'function'
        ? target({
            ref: setReferenceElement,
            toggleOpen: toggle,
            handlers:
              trigger === 'click'
                ? {
                    onClick: toggle
                  }
                : {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave
                  }
          })
        : React.cloneElement(target, {
            ...target.props,
            ref: node => {
              setReferenceElement(node);
              if (targetRef) {
                if (typeof targetRef === 'function') {
                  targetRef(node);
                } else {
                  targetRef.current = node;
                }
              }
            },
            ...targetHandlers(target.props)
          });

    return (
      <>
        {targetContent}
        {open && <Portal>{content}</Portal>}
      </>
    );
  }
);

export default Popover;

Popover.displayName = 'Popover';

Popover.propTypes = {
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  closeOnClickAway: PropTypes.bool,
  delay: PropTypes.number,
  onToggle: PropTypes.func,
  onClickAway: PropTypes.func,
  // Background color of the overlay
  bg: PropTypes.string,
  // ====
  placement: PropTypes.oneOf(Object.keys(PLACEMENTS)),
  trigger: PropTypes.oneOf(['hover', 'click']),
  target: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // ====
  targetRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  // ==== Overrides for Arrow and Popper elements
  Arrow: PropTypes.any,
  Popper: PropTypes.any,
  PopperProps: PropTypes.object
};

Popover.defaultProps = {
  onToggle: () => {},
  zIndex: 'popover',
  defaultOpen: false,
  closeOnClickAway: true,
  trigger: 'hover',
  bg: 'blackAlpha.800',
  offset: [0, 14],
  Arrow: null,
  Popper: StyledPopper,
  PopperProps: {
    p: 3
  }
};
