import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import { animated } from 'react-spring';
import Box from '../box';
import Button from '../button';
import Stack from '../stack';
import Icon from '../icon';
import Text from '../text';
import { Intent } from '../constants';

const AnimatedToast = animated.div;

const StyledToastMessage = styled(Box).attrs(props => ({
  color: 'textLight',
  borderRadius: 'sm',
  boxShadow:
    '0 0 0 1px rgba(16,22,26,.1), 0 2px 4px rgba(16,22,26,.2), 0 8px 24px rgba(16,22,26,.2)',
  bg: `palette.${props.intent}.base`,
  minWidth: { _: 'sm' },
  maxWidth: { _: 'lg' }
}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  pointer-events: auto;

  & [data-toast='message'] {
    ${css({
      lineHeight: 'short'
    })}
  }

  & [data-toast='button'] {
    ${css({
      bg: 'transparent',
      color: 'whiteAlpha.800',
      '&:hover': {
        bg: 'whiteAlpha.300',
        color: 'textLight'
      }
    })}
  }
`;

const ToastMessage = React.forwardRef((props, forwardedRef) => {
  const {
    intent,
    dismissable,
    onDismiss,
    icon,
    iconProps,
    action,
    children,
    style,
    ...otherProps
  } = props;
  const dismiss = useRef(null);

  const triggerDismiss = useCallback((event, didTimeoutExpire) => {
    if (typeof dismiss.current !== 'function') return;
    dismiss.current(event, didTimeoutExpire);
  }, []);

  useEffect(() => {
    dismiss.current = onDismiss;
  }, [onDismiss]);

  const handleActionClick = event => {
    if (typeof action?.onClick === 'function') {
      action.onClick(event);
    }
    triggerDismiss(event, false);
  };

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Icon name={icon} {...iconProps} size={5} />;
    } else if (React.isValidElement(icon)) {
      return icon;
    } else {
      return null;
    }
  };

  const renderActionButton = () => {
    if (action == null) {
      return undefined;
    } else if (typeof action === 'object') {
      return (
        <Button
          size="xs"
          variant="tertiary"
          onClick={handleActionClick}
          children={action.text}
          data-toast="button"
        />
      );
    }
  };

  return (
    <StyledToastMessage
      ref={forwardedRef}
      as={AnimatedToast}
      intent={intent}
      tabIndex={0}
      style={style}
      {...otherProps}
    >
      <Stack inline space={2} alignItems="flex-start" flex="1" p={4}>
        {renderIcon(icon, iconProps)}
        <Text fontSize="sm" as="span" color="inherit" data-toast="message">
          {children}
        </Text>
      </Stack>

      <Stack inline space={1} flex="0" ml={2} p={4}>
        {renderActionButton(action)}
        <Button
          size="xs"
          variant="tertiary"
          intent={intent}
          icon="x"
          iconSize={4}
          onClick={event => triggerDismiss(event, false)}
          data-toast="button"
        />
      </Stack>
    </StyledToastMessage>
  );
});

ToastMessage.displayName = 'ToastMessage';
ToastMessage.propTypes = {
  intent: PropTypes.oneOf(Object.values(Intent)),
  icon: PropTypes.string,
  dismissable: PropTypes.bool,
  autoDismiss: PropTypes.bool,
  // Allow pressing escape while current focus is in a toast message to dismiss that message
  dismissOnEscape: PropTypes.bool,
  messageKey: PropTypes.string.isRequired,
  children: PropTypes.node,
  action: PropTypes.shape({
    text: PropTypes.node,
    onClick: PropTypes.func
  }),
  onDismiss: PropTypes.func
};

ToastMessage.defaultProps = {
  intent: Intent.PRIMARY,
  dismissable: true,
  autoDismiss: true,
  dismissOnEscape: true
};

export default ToastMessage;
