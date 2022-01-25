import React, { useState } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useTransition } from 'react-spring';
import ToastMessage from './message';
import { getToastKey, findToast } from './utils';

// TODO: pause and resume onMouseEnter and onMouseLeave
const ToastPositionContainer = styled.div`
  ${props => {
    const position = props.position;
    const isTopOrBottom = position === 'top' || position === 'bottom';
    const margin = isTopOrBottom ? '0 auto' : undefined;

    const top = position.includes('top') ? 0 : undefined;
    const bottom = position.includes('bottom') ? 0 : undefined;
    const right = !position.includes('left') ? 0 : undefined;
    const left = !position.includes('right') ? 0 : undefined;
    return css({
      position: 'fixed',
      zIndex: 'toast',
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      margin,
      top,
      bottom,
      right,
      left,
      '& [data-toast-id]': {
        marginX: 'auto',
        marginBottom: position.includes('bottom') ? 4 : 0,
        marginTop: position.includes('top') ? 4 : 0,
        left: position.includes('left') ? 4 : undefined,
        right: position.includes('right') ? 4 : undefined
      },
      '& [data-toast-id]:first-child': {
        marginTop: position.includes('top') ? 0 : undefined
      },
      '& [data-toast-id]:last-child': {}
    });
  }}
`;

const TIMEOUT = 3500;
const MAX_COUNT = 5;

const animationConfig = { tension: 125, friction: 20, precision: 0.1 };

const ToastList = ({ items, timeout = TIMEOUT, onRemoveItem, position }) => {
  const [refMap] = useState(() => new WeakMap());
  const [cancelMap] = useState(() => new WeakMap());

  const transitions = useTransition(items, item => item.id, {
    from: {
      opacity: 0,
      height: '100%',
      life: '100%'
    },
    enter: item => async next =>
      await next({
        opacity: 1,
        height: refMap.get(item).offsetHeight
      }),
    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({ life: '0%' });
      await next({ opacity: 0 });
      await next({ height: 0 });
    },
    onRest: item => {
      onRemoveItem(item.id, item.position);
    },
    config: (_, state) =>
      state === 'leave'
        ? [{ duration: timeout }, animationConfig, animationConfig]
        : animationConfig
  });

  return (
    <ToastPositionContainer
      as="ul"
      space={2}
      position={position}
      data-toast-container={position}
    >
      {transitions.map(({ key, item, props: { ...style } }) => (
        <ToastMessage
          key={key}
          data-toast-id={item.id}
          style={style}
          intent={item.intent}
          dismissable={item.dismissable}
          icon={item.icon}
          iconProps={item.iconProps}
          action={item.action}
          ref={ref => ref && refMap.set(item, ref)}
          onDismiss={() => {
            if (cancelMap.has(item)) {
              cancelMap.get(item)();
              onRemoveItem(item.id, item.position);
            }
          }}
        >
          {item.message}
        </ToastMessage>
      ))}
    </ToastPositionContainer>
  );
};

export default class ToastManager extends React.Component {
  state = {
    top: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    bottom: [],
    'bottom-right': []
  };

  constructor(props) {
    super(props);

    const methods = {
      notify: this.notify,
      closeAll: this.closeAll,
      close: this.removeToast,
      update: this.updateToast
    };

    if (typeof props.bind === 'function') {
      props.bind(methods);
    }
  }

  notify = (message, options) => {
    const toast = this.createToast(message, options);
    const { position, id } = toast;

    this.setState(prevToasts => {
      const isTop = position.includes('top');
      const toasts = prevToasts[position];
      const surpassLimit = toasts.length + 1 === MAX_COUNT;
      const existing = surpassLimit
        ? isTop
          ? toasts.slice(0, toasts.length - 1)
          : toast.slice(1)
        : toasts;

      /**
       * If top anchored, the most recent toast stack on top
       * if bottom anchored, the most recent toast stack below
       */
      const newToasts = isTop ? [toast, ...existing] : [...existing, toast];

      return {
        ...prevToasts,
        [position]: newToasts
      };
    });

    return id;
  };

  updateToast = (id, options) => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      const { position, index } = findToast(nextState, id);

      if (position && index !== -1) {
        nextState[position][index] = {
          ...nextState[position][index],
          ...options
        };
      }

      return nextState;
    });
  };

  closeAll = (options = {}) => {
    const { positions } = options;

    this.setState(prev => {
      const allPositions = [
        'bottom',
        'bottom-right',
        'bottom-left',
        'top',
        'top-left',
        'top-right'
      ];

      const positionsToClose = positions ?? allPositions;

      return positionsToClose.reduce((acc, position) => {
        acc[position] = [];
        return acc;
      }, {});
    });
  };

  /**
   * Create properties for a new toast
   */
  createToast = (message, options) => {
    const id = getToastKey(options.id);

    return {
      id,
      message,
      intent: options.intent,
      dismissable: options.dismissable,
      position: options.position ?? 'bottom-right',
      icon: options.icon,
      action: options.action,
      iconProps: options.iconProps
    };
  };

  /**
   * Delete a toast record at its position
   */
  removeToast = (id, position) => {
    this.setState(prevState => ({
      ...prevState,
      [position]: prevState[position].filter(toast => toast.id != id)
    }));
  };

  render() {
    return Object.keys(this.state).map(position => {
      const toasts = this.state[position];
      return (
        <ToastList
          key={position}
          position={position}
          items={toasts}
          onRemoveItem={this.removeToast}
        />
      );
    });
  }
}
