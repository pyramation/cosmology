import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal';

import { DialogContent } from './components';

export {
  DialogHeader,
  DialogCloseButton,
  DialogBody,
  DialogFooter
} from './components';

import { DialogContext } from './context';

const Dialog = ({
  id,
  open,
  onClose,
  size,
  disableBackdropClick,
  // ====
  scrollLock,
  autoFocus,
  restoreFocus,
  keyboard,
  // ====
  container,
  children
}) => {
  return (
    <Modal
      id={id}
      open={open}
      onClose={onClose}
      disableBackdropClick={disableBackdropClick}
      scrollLock={scrollLock}
      autoFocus={autoFocus}
      restoreFocus={restoreFocus}
      keyboard={keyboard}
      container={container}
    >
      <DialogContext.Provider value={{ open, onClose }}>
        <DialogContent tabIndex="0" maxWidth={size}>
          {children}
        </DialogContent>
      </DialogContext.Provider>
    </Modal>
  );
};

export default Dialog;

Dialog.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  // ====
  keyboard: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  centered: PropTypes.bool,
  // If enabled, when dialog mounts, html body scroll is disabled
  scrollLock: PropTypes.bool,
  // Scroll behavior: scroll within html body or dialog content
  scroll: PropTypes.oneOf(['body', 'dialog']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};

Dialog.defaultProps = {
  size: 'md'
};
