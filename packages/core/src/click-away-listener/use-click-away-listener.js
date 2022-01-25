import React from 'react';
import ReactDOM from 'react-dom';

import { DOM } from '../utils';
import { useForkRef, useEventCallback } from '@webql/hooks';

function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event) {
  return (
    document.documentElement.clientWidth < event.clientX ||
    document.documentElement.clientHeight < event.clientY
  );
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 * @param {Object} props
 * @param {Object} props.ref - The target ref to listen for clickaway event
 * @param {boolean} props.disableReactTree - The mouse event to listen to. You can disable the listener by providing `false`.
 * @param {'onClick' | 'onMouseDown' | 'onMouseUp' | false} props.mouseEvent - The mouse event to listen to. You can disable the listener by providing `false`.
 * @param {Function} props.onClickAway - Callback fired when a "click away" event is detected.
 * @param {'onTouchEnd' | 'onTouchStart' | false} props.touchEvent - The touch event to listen to. You can disable the listener by providing `false`.
 * @returns {Function} - A single function to bind to the children
 */
export function useClickAwayListener(props) {
  const {
    ref,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef(null);
  const mountedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // can be removed once we drop support for non ref forwarding class components
  const handleOwnRef = React.useCallback(instance => {
    // #StrictMode ready
    nodeRef.current = ReactDOM.findDOMNode(instance);
  }, []);
  const handleRef = useForkRef(ref, handleOwnRef);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviours like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = useEventCallback(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;

    // 1. IE 11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (
      !mountedRef.current ||
      !nodeRef.current ||
      clickedRootScrollbar(event)
    ) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    const insideDOM = DOM.isEventFromWithinNode(event, nodeRef.current);

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });

  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = DOM.getOwnerDocument(nodeRef.current);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);

      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = DOM.getOwnerDocument(nodeRef.current);

      doc.addEventListener(mappedMouseEvent, handleClickAway);

      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);

  const bind = (props = {}) => {
    const childrenProps = { ref: handleRef };

    // Keep track of mouse/touch events that bubbled up through the portal.
    const createHandleSynthetic = handlerName => event => {
      syntheticEventRef.current = true;

      const childrenPropsHandler = props[handlerName];
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };

    if (touchEvent !== false) {
      childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
    }

    if (mouseEvent !== false) {
      childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
    }

    return childrenProps;
  };

  return bind;
}
