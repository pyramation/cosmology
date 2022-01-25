import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useId } from '@reach/auto-id';

import Box from '../box';
import TabList from './tab-list';

const StyledTabsWrapper = styled(Box)``;

const Tabs = React.forwardRef(function Tabs(
  {
    as: Component,
    defaultIndex,
    align,
    variant,
    onChange,
    children: childrenProp,
    ...rest
  },
  ref
) {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex || 0);
  // Track if user has interacted with the tabs or not
  const userInteractedRef = React.useRef(false);
  const selectedPanelRef = React.useRef(null);
  const _id = useId();

  const onSelectTab = index => {
    userInteractedRef.current = true;
    setSelectedIndex(index);
    if (onChange) onChange(index);
  };

  const onFocusPanel = () => {
    if (!selectedPanelRef.current) return;
    selectedPanelRef.current.focus();
  };

  const children = React.Children.map(childrenProp, child => {
    let childProps = {
      _id,
      selectedIndex,
      userInteractedRef,
      selectedPanelRef,
      // callbacks
      onSelectTab,
      onFocusPanel
    };
    // Ignore <span />, <div /> ...etc
    if (typeof child.type === 'string') return child;
    if (child.type.name === TabList.name) {
      childProps = { ...childProps, align, variant };
    }
    return React.cloneElement(child, childProps);
  });

  const Comp = Component || StyledTabsWrapper;

  return (
    <Comp ref={ref} {...rest}>
      {children}
    </Comp>
  );
});

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  // Default tab, starting from 0
  defaultIndex: PropTypes.number,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['enclosed', 'line']),
  align: PropTypes.oneOf(['right', 'left', 'center']),
  children: PropTypes.node
};

Tabs.defaultProps = {
  defaultIndex: 0,
  align: 'left',
  variant: 'line'
};

export default Tabs;
