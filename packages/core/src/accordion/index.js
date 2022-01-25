import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Button from '../button';
import Box from '../box';
import { Collapse } from '../transition';
import {
  StyledAccordion,
  StyledAccordionHeader,
  StyledAccordionItem
} from './styled';
import { useAccordion, defaultReducer, singleOpen } from './use-accordion';

const noop = () => {};

const Accordion = React.forwardRef(function Accordion(
  {
    initialOpen,
    openIndexes: openIndexesProp,
    onClose: onCloseProp = noop,
    onOpen: onOpenProp = noop,
    // ==
    single = false,
    children,
    onChange = () => {},
    ...otherProps
  },
  ref
) {
  // useRef because we don't encourage to change between controlled and uncontrolled during runtime;
  const controlled = React.useRef(typeof openIndexesProp !== 'undefined');

  const { openIndexes: openIndexesState, close, open } = useAccordion({
    reducer: single ? singleOpen : defaultReducer,
    initialOpenIndexes: initialOpen,
    onChange
  });

  const openIndexes = controlled.current ? openIndexesProp : openIndexesState;
  const handlers = React.useMemo(
    () =>
      controlled.current
        ? {
            open: onOpenProp,
            close: onCloseProp
          }
        : { close, open },
    [close, onCloseProp, onOpenProp, open]
  );

  const handleItemClick = index => {
    const isClosing = openIndexes.indexOf(index) !== -1;
    if (isClosing) return handlers.close(index);
    handlers.open(index);
  };

  const items = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      onItemClick: () => handleItemClick(index),
      isOpen: openIndexes.includes(index),
      open: () => handlers.open(index),
      close: () => handlers.close(index)
    });
  });
  return (
    <StyledAccordion {...otherProps} ref={ref}>
      {items}
    </StyledAccordion>
  );
});

Accordion.propTypes = {
  initialOpen: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  // If true, only one can be open at a time
  single: PropTypes.bool,
  children: PropTypes.node,
  // == props in controlled mode
  openIndexes: PropTypes.array,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
};

// AccordionPanel
const AccordionPanel = ({ children, isOpen, open, close, ...otherProps }) => {
  return (
    <Collapse in={isOpen}>
      <Box width="100%" bg="bg.50" p={4} {...otherProps}>
        {typeof children === 'function' ? children({ open, close }) : children}
      </Box>
    </Collapse>
  );
};

AccordionPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isOpen: PropTypes.bool.isRequired,
  open: PropTypes.func,
  close: PropTypes.func
};

AccordionPanel.defaultProps = {
  isOpen: false,
  role: 'region'
};

// ====
const AccordionIcon = ({ open, openIcon, closeIcon, onClick }) => {
  if (onClick) {
    return (
      <Button
        icon={open ? openIcon : closeIcon}
        iconSize={5}
        onClick={onClick}
      />
    );
  }

  return (
    <Icon name={open ? openIcon : closeIcon} color="accent" size={5} ml={2} />
  );
};

AccordionIcon.defaultProps = {
  openIcon: 'chevron-up',
  closeIcon: 'chevron-down'
};

AccordionIcon.propTypes = {
  open: PropTypes.bool,
  openIcon: PropTypes.string,
  closeIcon: PropTypes.string,
  onClick: PropTypes.func
};

// AccordionHeader
const AccordionHeader = ({ children, open, ...otherProps }) => {
  return (
    <StyledAccordionHeader open={open} py={4} px={3} {...otherProps}>
      {React.Children.map(children, child => {
        if (child.type === AccordionIcon) {
          return React.cloneElement(child, {
            open
          });
        } else {
          return child;
        }
      })}
    </StyledAccordionHeader>
  );
};

AccordionHeader.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool
};

AccordionHeader.defaultProps = {
  role: 'heading'
};

// AccordionItem
const AccordionItem = ({
  children,
  onItemClick,
  open,
  close,
  isOpen,
  ...otherProps
}) => {
  return (
    <StyledAccordionItem open={isOpen} {...otherProps}>
      {React.Children.map(children, child => {
        if (!child) {
          return null;
        } else if (child.type === AccordionHeader) {
          return React.cloneElement(child, {
            onClick: child.props.disabled ? () => {} : onItemClick,
            open: isOpen
          });
        } else if (child.type === AccordionPanel) {
          return React.cloneElement(child, {
            isOpen,
            open,
            close
          });
        } else {
          return child;
        }
      })}
    </StyledAccordionItem>
  );
};

AccordionItem.propTypes = {
  children: PropTypes.node,
  onItemClick: PropTypes.func,
  open: PropTypes.func,
  close: PropTypes.func,
  isOpen: PropTypes.bool
};

Accordion.Item = AccordionItem;
Accordion.Icon = AccordionIcon;
Accordion.Panel = AccordionPanel;
Accordion.Header = AccordionHeader;

export * from './use-accordion';
export default Accordion;
