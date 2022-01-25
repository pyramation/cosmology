import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { useForkRef } from '@webql/hooks';
import { cleanChildren, wrapEvent } from '../utils';

import Divider from '../divider';
import MenuItem from './menu-item';

import { MenuContext } from './context';
import { useMenuItemIndex, ACTION } from './reducer';

const pickChildren = children => {
  const valid = cleanChildren(children);
  return valid.filter(c => c.type === MenuItem || c.type === Divider);
};

const MenuList = forwardRef((props, forwardedRef) => {
  const { id, as: Comp, onKeyDown, children, ...rest } = props;

  const {
    menuId,
    dispatch,
    buttonRef,
    menuRef,
    selectCallbacks,
    state: { isExpanded, buttonId, selectionIndex, typeaheadQuery }
  } = useContext(MenuContext);
  const menuItems = pickChildren(children);
  const ref = useForkRef(menuRef, forwardedRef);

  const handleKeyDown = event => {
    const { key } = event;
    if (!isExpanded) return;

    switch (key) {
      case 'Enter':
      case ' ': {
        const selected = menuItems.find(item => item.index === selectionIndex);
        // For links, the Enter key will trigger a click by default, but for
        // consistent behavior across menu items we'll trigger a click when
        // the spacebar is pressed.
        if (selected) {
          if (selected.props.href && selected.element) {
            selected.element.click();
          } else {
            event.preventDefault();
            // Focus the button first by default when an item is selected.
            // We fire the onSelect callback next so the app can manage
            // focus if needed.
            focus(buttonRef.current);
            if (selectCallbacks.current[selected.index]) {
              selectCallbacks.current[selected.index]();
            }
            dispatch({ type: ACTION.CLICK_MENU_ITEM });
          }
        }
        break;
      }
      case 'Escape':
        focus(buttonRef.current);
        dispatch({ type: ACTION.CLOSE_MENU, payload: { buttonRef } });
        break;
      case 'Tab':
        // prevent leaving
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <Comp
      // https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
      aria-activedescendant={useMenuItemIndex(selectionIndex) || undefined}
      // https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
      aria-labelledby={buttonId || undefined}
      // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
      role="menu"
      tabIndex={-1}
      {...rest}
      ref={ref}
      id={menuId}
      onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
    >
      {menuItems}
    </Comp>
  );
});

export default MenuList;

MenuList.displayName = 'MenuList';

MenuList.propTypes = {
  id: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onKeyDown: PropTypes.func,
  children: PropTypes.node
};

MenuList.defaultProps = {
  as: 'ul'
};
