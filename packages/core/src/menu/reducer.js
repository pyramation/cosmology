import { useContext } from 'react';
import { MenuContext } from './context';
import { makeId } from '../utils';

export const ACTION = {
  CLEAR_SELECTION_INDEX: 'CLEAR_SELECTION_INDEX',
  CLICK_MENU_ITEM: 'CLICK_MENU_ITEM',
  CLOSE_MENU: 'CLOSE_MENU',
  OPEN_MENU_AT_FIRST_ITEM: 'OPEN_MENU_AT_FIRST_ITEM',
  OPEN_MENU_CLEARED: 'OPEN_MENU_CLEARED',
  SEARCH_FOR_ITEM: 'SEARCH_FOR_ITEM',
  SELECT_ITEM_AT_INDEX: 'SELECT_ITEM_AT_INDEX',
  SET_BUTTON_ID: 'SET_BUTTON_ID'
};

export const initialState = {
  buttonId: null,
  isExpanded: false,
  typeaheadQuery: '',
  selectionIndex: -1
};

export default function menuReducer(state, action = {}) {
  switch (action.type) {
    case ACTION.CLICK_MENU_ITEM:
      return {
        ...state,
        isExpanded: false,
        selectionIndex: -1
      };
    case ACTION.CLOSE_MENU:
      return {
        ...state,
        isExpanded: false,
        selectionIndex: -1
      };
    case ACTION.OPEN_MENU_AT_FIRST_ITEM:
      return {
        ...state,
        isExpanded: true,
        selectionIndex: 0
      };
    case ACTION.OPEN_MENU_CLEARED:
      return {
        ...state,
        isExpanded: true,
        selectionIndex: -1
      };
    case ACTION.SELECT_ITEM_AT_INDEX:
      if (action.payload.index >= 0) {
        return {
          ...state,
          selectionIndex:
            action.payload.max != null
              ? Math.min(Math.max(action.payload.index, 0), action.payload.max)
              : Math.max(action.payload.index, 0)
        };
      }
      return state;
    case ACTION.CLEAR_SELECTION_INDEX:
      return {
        ...state,
        selectionIndex: -1
      };
    case ACTION.SET_BUTTON_ID:
      return {
        ...state,
        buttonId: action.payload
      };
    case ACTION.SEARCH_FOR_ITEM:
      if (typeof action.payload !== 'undefined') {
        return {
          ...state,
          typeaheadQuery: action.payload
        };
      }
      return state;
    default:
      return state;
  }
}

export function useMenuItemIndex(index) {
  const { menuId } = useContext(MenuContext);
  return index != null && index > -1
    ? makeId(`option-${index}`, menuId)
    : undefined;
}
