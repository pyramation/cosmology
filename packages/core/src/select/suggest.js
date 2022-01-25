import React, { useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useCombobox } from 'downshift';
import {
  useForkRef,
  useDebouncedCallback,
  useDeepCompareEffect
} from '@webql/hooks';
import { useVirtual } from 'react-virtual';
import { animated } from 'react-spring';
import noop from 'lodash/noop';

import Input from '../input';
import { List, ListItem } from '../list';
import VisuallyHidden from '../visually-hidden';
import Box from '../box';
import { useAnimation, NoResults, NoItems, filterItems } from './select.shared';

const Suggest = React.forwardRef(
  (
    {
      size,
      isOpen: isOpenProp,
      items: itemsProp,
      placeholder,
      itemToString,
      itemToKey,
      itemRenderer,
      listEndRenderer,
      selectedItem: value,
      defaultSelectedItem,
      defaultInputValue,
      // === events
      onSelectedItemChange,
      onQueryChange,
      onFilteredItemsChange,
      onFocus,
      onBlur,
      // === booleans
      disabled,
      fluidWidth,
      closeOnSelect,
      closeOnBlur,
      // === renderers
      placement,
      noItems,
      noResults,
      virtualized,
      VirtualProps,
      ...otherProps
    },
    forwardedRef
  ) => {
    const selectRef = useRef(null);
    const listRef = useRef(null);
    const lastInputValue = useRef(defaultInputValue);
    const [inputValue, setInputValue] = useState(defaultInputValue);
    const handleRef = useForkRef(forwardedRef, selectRef);

    const filteredItems = useMemo(() => filterItems(itemsProp, inputValue), [
      inputValue,
      itemsProp
    ]);

    const rowVirtualizer = useVirtual({
      size: filteredItems.length,
      parentRef: listRef,
      estimateSize: React.useCallback(() => 30, []),
      overscan: 2,
      ...VirtualProps
    });

    const {
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      selectItem,
      highlightedIndex,
      selectedItem,
      getComboboxProps,
      isOpen,
      openMenu,
      closeMenu
    } = useCombobox({
      isOpen: isOpenProp,
      items: filteredItems,
      inputValue,
      itemToString,
      selectedItem: value,
      defaultInputValue,
      defaultSelectedItem,
      onSelectedItemChange,
      onInputValueChange: ({ inputValue: newValue }) => {
        setInputValue(newValue);
        onQueryChange(newValue);
      },
      onHighlightedIndexChange: ({ highlightedIndex }) => {
        if (!virtualized) return;
        rowVirtualizer.scrollToIndex(highlightedIndex);
      }
    });

    const placementProps =
      placement === 'start'
        ? {
            left: 0
          }
        : { right: 0 };

    const sourceOptions = virtualized
      ? rowVirtualizer.virtualItems
      : filteredItems;

    const filteredOptions =
      filteredItems.length > 0
        ? sourceOptions.map((row, idx) => {
            const item = virtualized ? filteredItems[row.index] : row;
            // When filtered, original items and filtered items indexes are mismatched,
            // thus item can be undefined
            if (!item) return null;

            const key = virtualized
              ? itemToKey(itemToString(item), row.index)
              : itemToKey(itemToString(item));
            const itemIndex = virtualized ? row.index : idx;
            const highlighted = itemIndex === highlightedIndex;
            const virtualStyles = {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: row.size,
              transform: `translateY(${row.start}px)`
            };

            return (
              <ListItem
                key={key}
                selected={itemToString(item) === itemToString(selectedItem)}
                highlighted={highlighted}
                mt="2"
                style={virtualized ? virtualStyles : undefined}
                {...getItemProps({
                  item,
                  index: itemIndex
                })}
              >
                {typeof itemRenderer === 'function'
                  ? itemRenderer(item)
                  : itemToString(item)}
              </ListItem>
            );
          })
        : noResults;

    const animationProps = useAnimation({ isOpen });

    const handleFocus = () => {
      lastInputValue.current = inputValue;
      setInputValue('');
      if (!isOpen) openMenu();
      onFocus();
    };

    const handleBlur = () => {
      lastInputValue.current = '';
      if (isOpen && closeOnBlur) {
        closeMenu();
      }
      onBlur();
    };

    const [debouncedOnFilterOptions] = useDebouncedCallback(
      filteredOptions => onFilteredItemsChange(filteredOptions),
      300
    );

    useDeepCompareEffect(() => {
      debouncedOnFilterOptions(filteredItems);
    }, [debouncedOnFilterOptions, filteredItems]);

    const optionsEmpty =
      !itemsProp || (Array.isArray(itemsProp) && itemsProp.length === 0);

    return (
      <Box
        display="inline-block"
        position="relative"
        width={fluidWidth ? '100%' : 'auto'}
        ref={handleRef}
        {...otherProps}
      >
        <VisuallyHidden {...getLabelProps()}>{placeholder}</VisuallyHidden>

        <div {...getComboboxProps()}>
          <Input
            {...getInputProps({ type: 'text', value: inputValue })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            size={size}
            placeholder={lastInputValue.current || placeholder}
            data-select-element="input"
          />
        </div>

        <animated.div
          style={{
            ...animationProps,
            position: 'absolute',
            top: '100%',
            width: '100%',
            zIndex: 1500
          }}
        >
          <List
            position="relative"
            width="auto"
            minWidth={['200px', '300px']}
            maxHeight="300px"
            overflowY="scroll"
            mt="2"
            p="0"
            {...placementProps}
            {...getMenuProps(
              {
                ref: listRef
              },
              { suppressRefError: true }
            )}
            data-select-element="menu"
            style={{
              opacity: isOpen ? 1 : 0
            }}
          >
            {isOpen && (
              <>
                {virtualized ? (
                  <li
                    key="total-size"
                    style={{ height: rowVirtualizer.totalSize }}
                  />
                ) : null}
                {optionsEmpty ? noItems : filteredOptions}
                {typeof listEndRenderer === 'function' &&
                  listEndRenderer({ optionsEmpty })}
              </>
            )}
          </List>
        </animated.div>
      </Box>
    );
  }
);

export default Suggest;

Suggest.NoResults = NoResults;
Suggest.NoItems = NoItems;

Suggest.propTypes = {
  selectedItem: PropTypes.any,
  items: PropTypes.array,
  itemToString: PropTypes.func,
  itemToKey: PropTypes.func,
  itemRenderer: PropTypes.func,
  listEndRenderer: PropTypes.func,
  placeholder: PropTypes.string,
  onSelectedItemChange: PropTypes.func,
  onQueryChange: PropTypes.func,
  onFilteredItemsChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placement: PropTypes.oneOf(['start', 'end']),
  defaultInputValue: PropTypes.string,
  // React content to render when there are no items
  noItems: PropTypes.node,
  noResults: PropTypes.node,
  closeOnSelect: PropTypes.bool,
  closeOnBlur: PropTypes.bool,
  virtualized: PropTypes.bool
};

Suggest.defaultProps = {
  items: [],
  itemToString: i => String(i),
  itemToKey: (itemStr, index) =>
    [itemStr, index].filter(i => i != null).join('-'),
  defaultInputValue: '',
  onSelectedItemChange: noop,
  onFilteredItemsChange: noop,
  onQueryChange: noop,
  onFocus: noop,
  onBlur: noop,
  placeholder: 'Suggest...',
  placement: 'start',
  closeOnSelect: true,
  closeOnBlur: false,
  virtualized: false,
  noItems: <NoItems />,
  noResults: <NoResults />
};
