import { useState, useRef, useEffect, useCallback } from 'react';
import { useId } from '@reach/auto-id';
import merge from 'lodash/merge';
import { useFocusOnHide } from '../interactions';
import { makeId, Component } from '../utils';

// This file contains a collection of hooks for better modularizing similar components with popup-like behavior
// such as Popover and ContextMenu (we don't have this component, but these hooks combined with List can help).
// The main hook usePopupState is implemented in headless style (no UI, just behavior).

// For dedupe warning messgaes
const printedWarnings = {};

function warn(key, message) {
  if (printedWarnings[key]) return;
  printedWarnings[key] = true;
  console.error('[usePopupState] WARNING', message); // eslint-disable-line no-console
}

const TRIGGER = {
  click: 'click',
  hover: 'click'
};

const initCoreState = Object.freeze({
  isOpen: false,
  hovered: false
});

/**
 * Hook to implement popups
 * @param {Object} options
 * @param {string} options.id - popup id
 * @param {Object} options.state - initial state
 * @param {Object} options.parentState - parent popup state, need for implementing cascading menu
 * @param {boolean} options.disableAutoFocus - whether or not to focus on the popup content on mount
 * @param {'popover' | 'menu'} options.mode - determines the appropriate aria attributes
 * @returns {Object}
 */
export function usePopup({
  id,
  state: initialState,
  parentState,
  returnFocusOnClose = true,
  disableAutoFocus = false,
  closeOnEsc = true,
  mode = 'popover'
} = {}) {
  const _id = useId(id);
  const popupId = makeId('menu', _id);
  const [state, setState] = useState(merge(initCoreState, initialState));
  const triggerTypeRef = useRef('click');
  const popoverRef = useRef(null);
  const [triggerEl, setTriggerEl] = useState(null);
  // Since a popover can cascade (popover within popover)
  // we need to track child popup state too
  const childPopupRef = useRef(null);

  const { isOpen, hovered } = state;

  const _setState = nextState => {
    setState(lastState => ({ ...lastState, ...nextState }));
  };

  useFocusOnHide(popoverRef, {
    focusRef: triggerEl,
    visible: isOpen,
    shouldFocus: returnFocusOnClose && triggerTypeRef.current === TRIGGER.click
  });

  const open = useCallback(
    eventOrTargetEl => {
      if (!eventOrTargetEl) {
        warn('missingEvent', 'eventOrTargetEl should be defined');
      }

      if (parentState) {
        if (!parentState.isOpen) {
          return;
        }
        parentState._setChildPopupState(state);
      }

      const newState = {
        isOpen: true,
        hovered: eventOrTargetEl && eventOrTargetEl.type === 'mouseenter'
      };

      _setState(newState);
    },
    [parentState, state]
  );

  const close = useCallback(() => {
    if (typeof childPopupRef.current?.close === 'function') {
      childPopupRef.current.close();
    }
    if (parentState) parentState._setChildPopupState(null);
    _setState({ isOpen: false, hovered: false });
  }, [parentState]);

  const toggle = event => {
    if (isOpen) {
      close();
    } else {
      open(event);
    }
  };

  const setOpen = (nextOpen, eventOrAnchorEl) => {
    if (nextOpen) return open(eventOrAnchorEl);
    close();
  };

  useEffect(() => {
    const triggerType = triggerTypeRef.current;

    if (!triggerEl || triggerType === TRIGGER.click) return;
    if (!triggerEl.tabIndex || triggerEl.tabIndex === -1) {
      triggerEl.tabIndex = 0;
    }
    triggerEl.addEventListener('focus', open);
    triggerEl.addEventListener('blur', close);
    return () => {
      triggerEl.removeEventListener('focus', open);
      triggerEl.removeEventListener('blur', close);
    };
  }, [close, open, triggerEl]);

  const onMouseLeave = event => {
    const relatedTarget = event.relatedTarget;
    const triggerType = triggerTypeRef.current;
    if (
      triggerType === TRIGGER.hover &&
      hovered &&
      !isElementInPopup(relatedTarget, state)
    ) {
      close();
    }
  };

  const onKeyDown = event => {
    if (closeOnEsc && event.key === 'Escape') {
      close();
    }
  };

  const _setChildPopupState = _childPopupState => {
    childPopupRef.current = _childPopupState;
  };

  const bindContextMenu = (props = {}) => {
    triggerTypeRef.current = TRIGGER.click;
    return {
      [mode === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
        ? popupId
        : null,
      'aria-haspopup': mode === 'popover' ? true : undefined,
      onContextMenu: event => {
        event.preventDefault();
        open(event);
      },
      ref: Component.mergeRefs(setTriggerEl, props.ref)
    };
  };

  const bindTrigger = (props = {}) => {
    triggerTypeRef.current = TRIGGER.click;
    return {
      [mode === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
        ? popupId
        : null,
      'aria-expanded': isOpen,
      'aria-haspopup': mode === 'popover' ? true : undefined,
      onClick: open,
      ref: Component.mergeRefs(setTriggerEl, props.ref)
    };
  };

  const bindToggle = (props = {}) => {
    triggerTypeRef.current = TRIGGER.click;
    return {
      [mode === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
        ? popupId
        : null,
      'aria-expanded': isOpen,
      'aria-haspopup': mode === 'popover' ? true : undefined,
      onClick: toggle,
      ref: Component.mergeRefs(setTriggerEl, props.ref)
    };
  };

  const bindHover = (props = {}) => {
    triggerTypeRef.current = TRIGGER.hover;
    return {
      [mode === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
        ? popupId
        : null,
      'aria-haspopup': mode === 'popover' ? true : undefined,
      onMouseEnter: open,
      onMouseLeave,
      ref: Component.mergeRefs(setTriggerEl, props.ref)
    };
  };

  const bindPopover = (props = {}) => {
    return {
      id: popupId,
      ref: Component.mergeRefs(popoverRef, props.ref),
      tabIndex: -1,
      triggerEl,
      isOpen,
      role: triggerTypeRef.current === TRIGGER.hover ? 'tooltip' : 'dialog',
      onToggle: toggle,
      onClose: close,
      onKeyDown,
      onMouseLeave,
      disableAutoFocus
    };
  };

  return {
    trigger: triggerTypeRef.current,
    popupId,
    isOpen,
    open,
    close,
    toggle,
    setOpen,
    onMouseLeave,
    disableAutoFocus: Boolean(disableAutoFocus),
    // Bind handlers
    bindContextMenu,
    bindTrigger,
    bindToggle,
    bindHover,
    bindPopover,
    // Internal stuff
    _childPopupState: childPopupRef.current,
    _setChildPopupState
  };
}

// Utils
function isElementInPopup(element, popupState) {
  const { targetEl, _childPopupState } = popupState;
  return (
    isAncestor(targetEl, element) ||
    isAncestor(getPopup(popupState), element) ||
    (_childPopupState != null && isElementInPopup(element, _childPopupState))
  );
}

function isAncestor(parent, child) {
  if (!parent) return false;
  while (child) {
    if (child === parent) return true;
    child = child.parentElement;
  }
  return false;
}

function getPopup({ popupId }) {
  return popupId && typeof document !== 'undefined'
    ? document.getElementById(popupId)
    : null;
}
