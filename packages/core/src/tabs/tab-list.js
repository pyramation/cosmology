import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../box';
import { StyledTab } from './tab';

export const StyledTabList = styled(Box)`
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: ${props =>
    props.align === 'left'
      ? 'flex-start'
      : props.align === 'center'
      ? 'center'
      : 'flex-end'};

  ${/* sc-selector */ StyledTab}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: -1px;
  }

  ${/* sc-selector */ StyledTab}:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin-right: -1px;
  }

  ${/* sc-selector */ StyledTab}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const TabList = React.forwardRef(function TabList(
  {
    _id,
    as: Component,
    variant,
    color,
    selectedIndex,
    userInteractedRef,
    onSelectTab,
    onFocusPanel, // eslint-disable-line no-unused-vars
    onKeyDown,
    children,
    ...otherProps
  },
  ref
) {
  const clonedTabs = React.Children.map(children, (child, index) => {
    const isSelected = index === selectedIndex;
    return React.cloneElement(child, {
      index,
      selected: isSelected,
      id: `${_id}:${index}`,
      userInteractedRef,
      variant,
      color: child.props.color || color,
      onSelectTab
    });
  });

  const Comp = Component || StyledTabList;
  return (
    <Comp onKeyDown={onKeyDown} ref={ref} role="tablist" {...otherProps}>
      {clonedTabs}
    </Comp>
  );
});

TabList.displayName = 'TabList';
TabList.propTypes = {
  _id: PropTypes.any,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  selectedIndex: PropTypes.number,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(['enclosed', 'line']),
  color: PropTypes.string,
  onKeyDown: PropTypes.func,
  onSelectTab: PropTypes.func,
  onFocusPanel: PropTypes.func,
  userInteractedRef: PropTypes.object,
  children: PropTypes.node
};

export default TabList;
