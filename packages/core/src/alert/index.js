import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../box';
import Button from '../button';
import Flex from '../flex';
import Stack from '../stack';
import Modal from '../modal';
import Fade from '../transition/fade';
import Icon from '../icon';
import Text from '../text';

import { Intent } from '../constants';

const AlertContainer = styled(Box).attrs({
  borderRadius: 'sm',
  p: 4,
  bg: 'white',
  boxShadow: 'md'
})`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StatelessAlert = ({
  icon,
  intent,
  message,
  // ====
  cancelText,
  confirmText,
  // ====
  onCancel,
  onConfirm,
  confirmLoading,
  ...otherProps
}) => {
  const hasActions = cancelText || confirmText;
  return (
    <AlertContainer {...otherProps}>
      <Stack space={6}>
        <Stack inline alignItems="flex-start">
          {icon && <Icon name={icon} color={`intent.${intent}`} size={8} />}

          {typeof message === 'string' ? (
            <Text fontSize="sm">{message}</Text>
          ) : (
            message
          )}
        </Stack>

        {hasActions && (
          <Flex justifyContent="flex-end">
            {cancelText && (
              <Button onClick={onCancel} size="sm" variant="secondary">
                {cancelText}
              </Button>
            )}

            {confirmText && (
              <Button
                ml={4}
                onClick={onConfirm}
                size="sm"
                color={`intent.${intent}`}
                loading={confirmLoading}
                variant={
                  intent === Intent.NONE && !cancelText
                    ? 'secondary'
                    : 'primary'
                }
              >
                {confirmText}
              </Button>
            )}
          </Flex>
        )}
      </Stack>
    </AlertContainer>
  );
};

const Alert = ({
  id,
  open,
  onClose,
  container,
  message,
  icon,
  intent,
  confirmLoading,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  ...otherProps
}) => {
  const handleConfirm = () => {
    onClose();
    onConfirm();
  };

  const handleCancel = () => {
    onClose();
    onCancel();
  };

  return (
    <Modal
      id={id}
      open={open}
      onClose={onClose}
      disableBackdropClick
      scrollLock
      keyboard={false}
      container={container}
    >
      <Fade in={open}>
        <StatelessAlert
          message={message}
          icon={icon}
          intent={intent}
          confirmLoading={confirmLoading}
          confirmText={confirmText}
          cancelText={cancelText}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          my={12}
          width="md"
          mx={['auto', 'auto']}
          {...otherProps}
        />
      </Fade>
    </Modal>
  );
};

export default Alert;

Alert.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool,
  container: PropTypes.node,
  message: PropTypes.node.isRequired,
  icon: PropTypes.string,
  intent: PropTypes.oneOf(Object.values(Intent)),
  // ====
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,
  confirmText: PropTypes.string,
  confirmLoading: PropTypes.bool,
  onConfirm: PropTypes.func
};

Alert.defaultProps = {
  intent: Intent.NONE,
  onConfirm: () => {},
  onCancel: () => {}
};
