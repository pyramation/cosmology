import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../box';

export const StyledTabPanels = styled(Box)``;

const TabPanels = React.forwardRef(function TabPanels(
  {
    _id,
    as: Component,
    selectedIndex,
    selectedPanelRef,
    children,
    onFocusPanel, // eslint-disable-line no-unused-vars
    onSelectTab, // eslint-disable-line no-unused-vars
    ...otherProps
  },
  ref
) {
  const clonedPanels = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      selected: index === selectedIndex,
      selectedPanelRef,
      id: `${_id}:${index}`
    });
  });
  const Comp = Component || StyledTabPanels;
  return (
    <Comp ref={ref} {...otherProps}>
      {clonedPanels}
    </Comp>
  );
});

TabPanels.displayName = 'TabPanels'; //make eslint happy
TabPanels.propTypes = {
  _id: PropTypes.any,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  selectedIndex: PropTypes.number,
  onKeyDown: PropTypes.func,
  onFocusPanel: PropTypes.func,
  onSelectTab: PropTypes.func,
  selectedPanelRef: PropTypes.object,
  children: PropTypes.node
};

export default TabPanels;
