import React, { cloneElement, useRef, Children } from 'react';
import PropTypes from 'prop-types';

import { cleanChildren } from '../utils';
import { StyledButtonGroup } from './styled';

const ButtonGroup = ({
  children,
  disabled,
  variant,
  mode,
  selected,
  onSelect,
  ...rest
}) => {
  const validChildren = cleanChildren(children);
  const childRefs = useRef({});
  const focusIndex = useRef(Number(selected) ? Number(selected) : 0);
  const isRadio = mode === 'radio';
  const isCheckbox = mode === 'checkbox';
  const childCount = Children.count(validChildren);

  const setChildRef = index => ref => {
    childRefs.current[index] = ref;
  };

  const clones = validChildren.map((child, index) => {
    return cloneElement(child, {
      disabled: disabled || child.props.disabled,
      variant: variant || child.props.variant,
      ref: setChildRef(index),
      'aria-checked': isSelected(selected, index),
      'data-checked': isSelected(selected, index),
      role: isRadio ? 'radio' : isCheckbox ? 'checkbox' : 'button',
      selected: isSelected(selected, index),
      tabIndex:
        !isRadio ||
        isSelected(selected, index) ||
        (isRadio && (!selected || selected === -1) && index === 0)
          ? 0
          : -1,
      onClick: event => {
        if (disabled || child.props.disabled) return;

        if (typeof child.props.onClick === 'function') {
          child.props.onClick(event);
        }

        if (onSelect) onSelect(event, index);
      },
      onKeyDown: e => {
        e.preventDefault();
        if (e.key === 'Enter') {
          if (disabled || child.props.disabled) return;

          if (typeof child.props.onClick === 'function') {
            child.props.onClick(event);
          }

          if (onSelect) onSelect(event, index);
        }

        const currentFocusIndex = focusIndex.current;

        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          const prevIndex =
            currentFocusIndex - 1 < 0 ? childCount - 1 : currentFocusIndex - 1;
          focusIndex.current = prevIndex;
          if (childRefs.current[prevIndex]) {
            childRefs.current[prevIndex].focus();
          }
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          const nextIndex =
            currentFocusIndex + 1 > childCount - 1 ? 0 : currentFocusIndex + 1;
          focusIndex.current = nextIndex;
          if (childRefs.current[nextIndex]) {
            childRefs.current[nextIndex].focus();
          }
        }
      }
    });
  });

  return (
    <StyledButtonGroup {...rest} role={isRadio ? 'radiogroup' : 'group'}>
      {clones}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;

ButtonGroup.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  mode: PropTypes.oneOf(['radio', 'checkbox']),
  children: PropTypes.node,
  onSelect: PropTypes.func
};

ButtonGroup.defaultProps = {
  disabled: false
};

function isSelected(selected, index) {
  if (!Array.isArray(selected) && typeof selected !== 'number') {
    return false;
  }

  if (Array.isArray(selected)) {
    return selected.includes(index);
  }

  return selected === index;
}
