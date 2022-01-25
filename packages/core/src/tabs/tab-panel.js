import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabPanel = styled.div`
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
`;

const TabPanel = React.forwardRef(function TabPanel(
  { id, as: Component, selected, selectedPanelRef, children, ...otherProps },
  ref
) {
  const Comp = Component || StyledTabPanel;
  return (
    <Comp
      id={`panel:${id}`}
      tabIndex={-1}
      aria-labelledby={`tab:${id}`}
      role="tabpanel"
      hidden={!selected}
      ref={selected ? selectedPanelRef : ref}
      {...otherProps}
    >
      {children}
    </Comp>
  );
});

TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = {
  id: PropTypes.string,
  index: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isSelected: PropTypes.bool,
  children: PropTypes.node,
  selectedPanelRef: PropTypes.object,
  onSelectTab: PropTypes.func
};

export default TabPanel;
