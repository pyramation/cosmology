import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useForkRef } from '@webql/hooks';
import { makeId, wrapEvent, DOM } from '../utils/';
import Button from '../button';
import { MenuContext } from './context';
import { ACTION } from './reducer';

const MenuButton = React.forwardRef((props, forwardedRef) => {
  const { as, onKeyDown, onMouseDown, id, ...rest } = props;
  const {
    buttonRef,
    buttonClickedRef,
    menuId,
    state: { buttonId, isExpanded },
    dispatch
  } = useContext(MenuContext);

  const ref = useForkRef(buttonRef, forwardedRef);

  useEffect(() => {
    const newButtonId =
      id != null ? id : menuId ? makeId('menu-button', menuId) : 'menu-button';
    if (buttonId !== newButtonId) {
      dispatch({
        type: ACTION.SET_BUTTON_ID,
        payload: newButtonId
      });
    }
  }, [buttonId, dispatch, id, menuId]);

  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        event.preventDefault(); // prevent scroll
        dispatch({ type: ACTION.OPEN_MENU_AT_FIRST_ITEM });
        break;
      case 'Enter':
      case ' ':
        dispatch({ type: ACTION.OPEN_MENU_AT_FIRST_ITEM });
        break;
      default:
        break;
    }
  }

  function handleMouseDown(event) {
    if (!isExpanded) {
      buttonClickedRef.current = true;
    }
    if (DOM.isRightClick(event)) {
      return;
    } else if (isExpanded) {
      dispatch({ type: ACTION.CLOSE_MENU, payload: { buttonRef } });
    } else {
      dispatch({ type: ACTION.OPEN_MENU_CLEARED });
    }
  }

  return (
    <Button
      as={as}
      aria-expanded={isExpanded ? true : undefined}
      aria-haspopup
      aria-controls={menuId}
      {...rest}
      ref={ref}
      id={buttonId || undefined}
      onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
      onMouseDown={wrapEvent(onMouseDown, handleMouseDown)}
      type="button"
    />
  );
});

export default MenuButton;

MenuButton.displayName = 'MenuButton';

MenuButton.propTypes = {
  id: PropTypes.string,
  as: PropTypes.any,
  onKeyDown: PropTypes.func,
  onMouseDown: PropTypes.func
};
