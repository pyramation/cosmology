import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import { useVirtual } from 'react-virtual';
import { animated } from 'react-spring';
import { useForkRef } from '@webql/hooks';

import { List, ListItem } from '../list';
import VisuallyHidden from '../visually-hidden';
import Box from '../box';
import Text from '../text';
import { SelectButton, useAnimation, NoItems } from './select.shared';

const Select = React.forwardRef(
  (
    {
      size,
      variant,
      intent,
      bg,
      listBg,
      color,
      listColor,
      items,
      placeholder,
      itemToString,
      itemToKey,
      selectedItem: value,
      defaultSelectedItem,
      onSelectedItemChange,
      fluidWidth,
      icon,
      iconSize,
      placement,
      noItems,
      ...otherProps
    },
    forwardedRef
  ) => {
    const listRef = useRef(null);
    const selectRef = useRef(null);
    const handleRef = useForkRef(forwardedRef, selectRef);

    const rowVirtualizer = useVirtual({
      size: items.length,
      parentRef: listRef,
      overscan: 50
    });

    const {
      isOpen,
      selectedItem,
      selectItem,
      getToggleButtonProps,
      // highlightedIndex,
      getLabelProps,
      getMenuProps,
      getItemProps
    } = useSelect({
      items,
      itemToString,
      selectedItem: value,
      defaultSelectedItem,
      onSelectedItemChange
    });

    const optionItems =
      items.length > 0
        ? rowVirtualizer.virtualItems.map(virtualRow => {
            const item = items[virtualRow.index];
            return (
              <Box
                style={{
                  transform: `translateY(${virtualRow.start}px)`
                }}
                position="absolute"
                top={0}
                left={0}
                width="full"
                height={`${virtualRow.size}px`}
                p={0}
                m={0}
              >
                <Box
                  ref={element => {
                    virtualRow.measureRef(element);
                  }}
                >
                  <ListItem
                    key={itemToKey(itemToString(item), virtualRow.index)}
                    selected={itemToString(item) === itemToString(selectedItem)}
                    {...getItemProps({
                      item,
                      index: virtualRow.index,
                      // Workaround for issue: https://github.com/downshift-js/downshift/issues/287
                      onMouseDown: () => selectItem(item)
                    })}
                    intent={intent}
                    bg={listBg}
                    color={listColor}
                  >
                    <Text
                      color="inherit"
                      fontSize="inherit"
                      width="full"
                      textAlign={placement}
                    >
                      {itemToString(item)}
                    </Text>
                  </ListItem>
                  {items.length !== virtualRow.index + 1 && (
                    <Box
                      position="relative"
                      left={0}
                      bottom={0}
                      height={2}
                      width="full"
                      bg="white"
                    ></Box>
                  )}
                </Box>
              </Box>
            );
          })
        : noItems;

    const animationProps = useAnimation({ isOpen });

    return (
      <Box position="relative" ref={handleRef}>
        <VisuallyHidden {...getLabelProps()}>{placeholder}</VisuallyHidden>

        <SelectButton
          size={size}
          bg={bg}
          color={color}
          fluidWidth={fluidWidth}
          variant={variant || 'secondary'}
          intent={intent}
          endIcon={icon || 'chevron-down'}
          iconSize={iconSize || '4'}
          {...otherProps}
          {...getToggleButtonProps({}, { suppressRefError: true })}
          type="button"
          data-select-element="button"
        >
          <Text
            width="full"
            textAlign={placement}
            color="inherit"
            fontSize={size}
            truncate
          >
            {selectedItem ? itemToString(selectedItem) : placeholder}
          </Text>
        </SelectButton>

        {isOpen && (
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
              zIndex="dropdown"
              position="relative"
              overflowY="scroll"
              minHeight="50px"
              maxHeight="300px"
              maxWidth={{ _: 'full', md: fluidWidth ? 'full' : size }}
              mt={2}
              mb={2}
              {...getMenuProps(
                {
                  ref: listRef
                },
                { suppressRefError: true }
              )}
            >
              <Box
                position="relative"
                top={0}
                width="full"
                height={`${rowVirtualizer.totalSize}px`}
              >
                {Array.isArray(items) && items.length === 0
                  ? noItems
                  : optionItems}
              </Box>

              {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
              {/* <div role="presentation" tabIndex="0" /> */}
            </List>
          </animated.div>
        )}
      </Box>
    );
  }
);

export default Select;

Select.propTypes = {
  selectedItem: PropTypes.any,
  items: PropTypes.array,
  itemToString: PropTypes.func,
  itemToKey: PropTypes.func,
  placeholder: PropTypes.string,
  onSelectedItemChange: PropTypes.func,
  placement: PropTypes.oneOf(['start', 'end']),
  // React content to render when there are no items
  noItems: PropTypes.node
};

Select.defaultProps = {
  items: [],
  size: 'md',
  itemToString: i => String(i),
  itemToKey: (itemStr, index) => `${itemStr}-${index}`,
  placeholder: 'Select...',
  placement: 'start',
  noItems: <NoItems />
};
