import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@reach/auto-id';
import Modal from '../modal';
import Slide from '../transition/slide';

const Drawer = props => {
  const { open, onClose, id: idProp, anchor, children, ...otherProps } = props;
  const id = useId(idProp);

  return (
    <Modal {...otherProps} id={id} open={open} onClose={onClose}>
      <Slide in={open} anchor={anchor}>
        {children}
      </Slide>
    </Modal>
  );
};

export default Drawer;

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
  backdrop: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Drawer.defaultProps = {
  backdrop: true,
  onClose: () => {}
};
