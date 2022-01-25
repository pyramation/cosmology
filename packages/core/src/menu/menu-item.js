import React, {
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import { useForkRef } from '@webql/hooks';
import { DOM, wrapEvent } from '../utils';

import Link from '../link';
import Button from '../button';
import Heading from '../heading';
import { ListItem } from '../list';

import { MenuContext } from './context';
import { ACTION, useMenuItemIndex } from './reducer';

const MenuItem = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    index,
    onClick,
    onDragStart,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseUp,
    onSelect,
    valueText: valueTextProp,
    children,
    // ==== link props
    href,
    external,
    disabled,
    // ==== header
    heading,
    ...rest
  } = props;

  const {
    buttonRef,
    dispatch,
    selectCallbacks,
    state: { selectionIndex }
  } = useContext(MenuContext);

  const ownRef = useRef(null);

  const [valueText, setValueText] = useState(valueTextProp || '');
  const setValueTextFromDom = useCallback(
    node => {
      if (node) {
        ownRef.current = node;
        if (
          !valueTextProp ||
          (node.textContent && valueText !== node.textContent)
        ) {
          setValueText(node.textContent);
        }
      }
    },
    [valueText, valueTextProp]
  );

  const ref = useForkRef(forwardedRef, setValueTextFromDom);
  const mouseEventStarted = useRef(false);
  const isSelected = index === selectionIndex;
  selectCallbacks.current[index] = onSelect;

  const select = () => {
    focus(buttonRef.current);
    if (onSelect) onSelect();
    dispatch({ type: ACTION.CLICK_MENU_ITEM });
  };

  const handleClick = event => {
    if (href && !DOM.isRightClick(event)) {
      select();
    }
  };
  const handleDragStart = event => {
    // Because we don't preventDefault on mousedown for links (we need the
    // native click event), clicking and holding on a link triggers a
    // dragstart which we don't want.
    if (href) event.preventDefault();
  };

  const handleMouseDown = event => {
    if (DOM.isRightClick(event)) return;

    if (href) {
      // Signal that the mouse is down so we can react call the right function
      // if the user is clicking on a link.
      mouseEventStarted.current = true;
    } else {
      event.preventDefault();
    }
  };

  const handleMouseEnter = () => {
    if (!isSelected && index != null) {
      dispatch({ type: ACTION.SELECT_ITEM_AT_INDEX, payload: { index } });
    }
  };

  const handleMouseLeave = () => {
    // Clear out selection when mouse over a non-menu item child.
    dispatch({ type: ACTION.CLEAR_SELECTION_INDEX });
  };

  const handleMouseMove = () => {
    if (!isSelected && index != null) {
      dispatch({ type: ACTION.SELECT_ITEM_AT_INDEX, payload: { index } });
    }
  };

  const handleMouseUp = event => {
    if (DOM.isRightClick(event)) return;

    if (href) {
      if (mouseEventStarted.current) {
        mouseEventStarted.current = false;
      } else if (ownRef.current) {
        ownRef.current.click();
      }
    } else {
      select();
    }
  };

  // Any time a mouseup event occurs anywhere in the document, we reset the
  // mouseEventStarted ref so we can check it again when needed.
  useEffect(() => {
    const ownerDocument = DOM.getOwnerDocument(ownRef.current) || document;
    const listener = () => (mouseEventStarted.current = false);
    ownerDocument.addEventListener('mouseup', listener);
    return () => ownerDocument.removeEventListener('mouseup', listener);
  }, []);

  const itemId = useMenuItemIndex(index);

  if (heading) {
    return (
      <ListItem
        heading
        role="menuitem"
        id={itemId}
        tabIndex={-1}
        data-valuetext={valueText}
        ref={ref}
      >
        <Heading as="h5" size="xs" fontWeight="semibold">
          {children}
        </Heading>
      </ListItem>
    );
  }

  return (
    <ListItem
      role="menuitem"
      id={itemId}
      tabIndex={-1}
      ref={ref}
      data-selected={isSelected ? '' : undefined}
      data-valuetext={valueText}
      disabled={disabled}
      onPress={wrapEvent(onClick, handleClick)}
      onDragStart={wrapEvent(onDragStart, handleDragStart)}
      onMouseDown={wrapEvent(onMouseDown, handleMouseDown)}
      onMouseEnter={wrapEvent(onMouseEnter, handleMouseEnter)}
      onMouseLeave={wrapEvent(onMouseLeave, handleMouseLeave)}
      onMouseMove={wrapEvent(onMouseMove, handleMouseMove)}
      onMouseUp={wrapEvent(onMouseUp, handleMouseUp)}
    >
      {href ? (
        <Link href={href} external={external} disabled={disabled} {...rest}>
          {children}
        </Link>
      ) : (
        <Button as={as} disabled={disabled} bare {...rest}>
          {children}
        </Button>
      )}
    </ListItem>
  );
});

export default MenuItem;

MenuItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  index: PropTypes.any,
  heading: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  onDragStart: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  onSelect: PropTypes.func,
  valueText: PropTypes.string
};

MenuItem.defaultProps = {
  heading: false
};
