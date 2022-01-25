import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { FocusScope } from '@react-aria/focus';

import { useId } from '@reach/auto-id';
import { useForkRef } from '@webql/hooks';
import { getOwnerDocument } from '../utils/dom';

import Portal from '../portal';
import ModalManager, { getModal } from './modal-manager';
import Fade from '../transition/fade';
import { ModalRoot, ModalBackdrop } from './styled';

const manager = new ModalManager();

const getContainer = container => {
  container = typeof container === 'function' ? container() : container;
  return ReactDOM.findDOMNode(container);
};

const Modal = React.forwardRef(function Modal(props, ref) {
  const {
    id,
    open,
    onClose,
    onRendered,
    backdrop,
    disableBackdropClick,
    // ====
    scrollLock,
    keyboard,
    // ====
    container,
    children,
    style,
    ariaLabelledBy,
    ariaDescribedBy,
    TransitionProps,
    BackdropProps
  } = props;
  const modalId = useId(id);

  const modal = useRef({});
  const mountNodeRef = useRef(null);
  const modalRef = useRef(null);
  const handleRef = useForkRef(modalRef, ref);

  const handleKeyDown = event => {
    if (!keyboard) return;
    switch (event.key) {
      case 'Esc':
      case 'Escape': {
        event.stopPropagation();
        return onClose(event);
      }
      default:
        return;
    }
  };

  const handleMounted = () => {
    if (!modalRef.current) return;
    manager.mount(getModal(modal, mountNodeRef, modalRef));
    modalRef.current.scrollTop = 0;
  };

  const handleRendered = () => {
    if (onRendered) onRendered();
    if (open) {
      handleMounted();
    } else {
      if (!modalRef.current) return;
      modalRef.current.setAttribute('aria-hidden', true);
    }
  };

  useEffect(() => {
    const handleOpen = () => {
      const modalContainer = getContainer(container) || getOwnerDocument().body;
      manager.add(getModal(modal, mountNodeRef, modalRef), modalContainer);

      // The element was already mounted.
      if (modalRef.current) {
        handleMounted();
      }
    };

    const handleClose = () => {
      manager.remove(getModal(modal, mountNodeRef, modalRef));
    };

    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [open, container]);

  useEffect(() => {
    if (!scrollLock) return;
    if (open) document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [open, scrollLock]);

  const childProps = {
    id: modalId + '-body',
    role: children.role || 'document',
    tabIndex: children.tabIndex || '-1'
  };

  if (!open) return null;

  return (
    <Portal
      ref={mountNodeRef}
      container={container}
      onRendered={handleRendered}
    >
      <ModalRoot
        id={`${modalId}`}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        ref={handleRef}
        style={style}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {backdrop && (
          <ModalBackdrop
            {...BackdropProps}
            in={open}
            tabIndex={-1}
            onClick={event => {
              if (disableBackdropClick) return;
              onClose(event);
            }}
          />
        )}
        <Fade in={open} {...TransitionProps}>
          <FocusScope contain restoreFocus autoFocus>
            {React.cloneElement(children, childProps)}
          </FocusScope>
        </Fade>
      </ModalRoot>
    </Portal>
  );
});

export default Modal;

Modal.displayName = 'Modal';

Modal.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  // ====
  // The mounting container of the modal, if not provided, default to document.body
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  // ====
  backdrop: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  // ====
  scrollLock: PropTypes.bool,
  autoFocus: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  // Whether or not user can close the modal using keyboard
  keyboard: PropTypes.bool,
  // ====
  onRendered: PropTypes.func,
  onBackdropClick: PropTypes.func,
  onClose: PropTypes.func,
  BackdropProps: PropTypes.object,
  TransitionProps: PropTypes.object
};

Modal.defaultProps = {
  keyboard: true,
  backdrop: true,
  disableBackdropClick: false,
  scrollLock: true,
  autoFocus: true,
  restoreFocus: true,
  onRendered: () => {},
  onBackdropClick: () => {},
  onClose: () => {}
};
