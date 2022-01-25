import React, { useRef, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import { cleanChildren, DOM } from '../utils';
import { MenuContext } from './context';
import reducer, { initialState, ACTION } from './reducer';
import Divider from '../divider';
import Popover from '../popover2';
import { usePopup } from '../popup';

import MenuButton from './menu-button';
import MenuItem from './menu-item';
import MenuList from './menu-list';
import { StyledMenuList } from './styled';

const splitChildren = children => {
  let button, list;
  cleanChildren(children).forEach(child => {
    if (child.type === MenuButton) {
      button = child;
    }
    if (child.type === MenuList) {
      list = child;
    }
  });
  return { button, list };
};

const Menu = ({ id, children }) => {
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const popoverRef = useRef(null);
  const buttonClickedRef = useRef(false);
  const selectCallbacks = useRef([]);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { bindTrigger, bindPopover, bindHover, popupId } = usePopup({ id });

  useEffect(() => {
    if (state.isExpanded) {
      window.requestAnimationFrame(() => {
        DOM.focus(menuRef.current);
      });
    }
  }, [state.isExpanded]);

  const { button, list } = splitChildren(children);

  return (
    <MenuContext.Provider
      value={{
        menuId: popupId,
        buttonRef,
        menuRef,
        popoverRef,
        buttonClickedRef,
        selectCallbacks,
        state,
        dispatch
      }}
    >
      <>
        {React.cloneElement(button, {
          ...bindTrigger()
        })}

        <Popover
          placement="bottom"
          Popper={StyledMenuList}
          onClickAway={event => {
            // Don't close menu if target is within MenuButton
            if (buttonRef.current.contains(event.target)) return;
            dispatch({ type: ACTION.CLOSE_MENU, payload: { buttonRef } });
          }}
          {...bindPopover()}
        >
          {list}
        </Popover>
      </>
    </MenuContext.Provider>
  );
};

export default Menu;

Menu.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

Menu.Button = MenuButton;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Divider = Divider;
