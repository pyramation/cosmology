import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useClickAwayListener } from './use-click-away-listener';

export * from './use-click-away-listener';

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree,
    mouseEvent,
    onClickAway,
    touchEvent
  } = props;
  const childRef = useRef(null);

  const bind = useClickAwayListener({
    ref: childRef,
    disableReactTree,
    mouseEvent,
    onClickAway,
    touchEvent
  });

  return (
    <React.Fragment>
      {React.cloneElement(children, {
        ref: childRef,
        ...bind(children.props)
      })}
    </React.Fragment>
  );
}

ClickAwayListener.propTypes = {
  /**
   * The wrapped element.
   */
  children: PropTypes.node,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   */
  disableReactTree: PropTypes.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   */
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: PropTypes.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   */
  touchEvent: PropTypes.oneOf(['onTouchEnd', 'onTouchStart', false])
};

export default ClickAwayListener;
