import { useState, useEffect } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import matchSorter from 'match-sorter';
import isObj from 'lodash/isObject';
import { useDeepCompareEffect } from '@webql/hooks';

const filterItems = (items, queryValue, itemFilterKeys) => {
  if (isObj(items[0])) {
    const objKeys = Object.keys(items[0]);
    return matchSorter(items, queryValue, { keys: itemFilterKeys || objKeys });
  } else {
    return matchSorter(items, queryValue);
  }
};

export function useMultiSelect({
  items,
  initialSelectedItems,
  // ====
  itemToString = defaultItemToString,
  itemFilterKeys,
  readOnly = false,
  creatable = false,
  onChange = () => {},
  onCreateItem
}) {
  const [isCreating, setIsCreating] = useState(false);
  // Store thef the props.items and new creatable item, if any
  const [inputItems, setInputItems] = useState(items);

  const {
    selectedItems,
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    reset,
    activeIndex
  } = useMultipleSelection({
    initialSelectedItems,
    itemToString,
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useMultipleSelection.stateChangeTypes.FunctionReset: {
          if (readOnly) return state;
          return changes;
        }
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem: {
          if (readOnly) return state;
          return {
            ...changes,
            activeIndex: null
          };
        }
        default:
          return changes;
      }
    },
    onSelectedItemsChange: changes => {
      onChange(changes.selectedItems);
    }
  });

  const selectedItemValues = selectedItems.map(item => itemToString(item));

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    selectItem,
    highlightedIndex,
    setHighlightedIndex,
    inputValue,
    setInputValue
  } = useCombobox({
    selectedItem: null,
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      const input = inputValue || '';
      const filteredItems = filterItems(items, input, itemFilterKeys);
      // There is a match in existing tags, so it's not create mode
      const isCreateMode = creatable && isCreating && filteredItems.length > 0;

      if (isCreateMode) {
        setIsCreating(false);
      }

      setInputItems(filteredItems);
    },
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputBlur: {
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
            inputValue: creatable ? '' : state.inputValue // and reset input value if creatable
          };
        }
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick: {
          return {
            ...changes, // default Downshift new state changes on item selection.
            isOpen: readOnly ? false : true, // but keep menu open, unless it's readOnly.
            highlightedIndex: state.highlightedIndex, // with the item highlighted.
            inputValue: creatable ? '' : state.inputValue // and reset input value if creatable
          };
        }
        case useCombobox.stateChangeTypes.ToggleButtonClick:
          return {
            ...changes,
            isOpen: readOnly ? false : true
          };
        default:
          return changes;
      }
    },
    onStateChange: ({ type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick: {
          if (!selectedItem) return;

          const exists = selectedItemValues.includes(
            itemToString(selectedItem)
          );

          if (exists) {
            removeSelectedItem(selectedItem);
          } else {
            if (onCreateItem && isCreating) {
              onCreateItem(selectedItem);
              setIsCreating(false);
              setInputItems(items);
            } else {
              addSelectedItem(selectedItem);
            }
          }

          selectItem(null);
          break;
        }
        default:
          break;
      }
    }
  });

  useEffect(() => {
    if (creatable && inputItems.length === 0 && inputValue.length > 0) {
      setIsCreating(true);
      setInputItems([{ label: `${inputValue}`, value: inputValue }]);
      setHighlightedIndex(0);
    }
  }, [
    inputItems,
    setIsCreating,
    setHighlightedIndex,
    activeIndex,
    inputValue,
    creatable
  ]);

  // Sync props.items with local items, but only when it changes
  useDeepCompareEffect(() => {
    setInputItems(items);
  }, [items]);

  const clearQuery = () => {
    setInputValue('');
  };

  return {
    isOpen,
    isCreating,
    inputValue,
    filteredItems: inputItems,
    selectedItems,
    selectedItemValues,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    getSelectedItemProps,
    getDropdownProps,
    selectItem,
    removeSelectedItem,
    reset,
    clearQuery
  };
}

export function defaultItemToString(i) {
  return i == null ? '' : String(i);
}

useMultiSelect.defaultItemToString = defaultItemToString;
