import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { useForkRef, useMeasure } from '@webql/hooks';
import Highlighter from 'react-highlight-words';
import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  VisuallyHidden,
  Tag,
  Icon,
  Divider,
  Flex,
  Text,
  Tooltip,
  Kbd
} from '../';

import { theme } from '../theme';
import { StyledMultiSelect, StyledItems } from './styled';
import { useMultiSelect } from './use-multi-select';
export { useMultiSelect } from './use-multi-select';

const CreateItem = ({ item }) => (
  <Flex justify="center" align="center" width="100%">
    <Text as="span" fontSize="sm">
      Create
    </Text>

    <Text as="span" fontSize="sm" ml={2} flex="1" minWidth="0">
      <Highlighter
        autoEscape
        searchWords={[item.label || '']}
        textToHighlight={item.label}
      />
    </Text>

    <Kbd size="sm">Enter</Kbd>
  </Flex>
);

const OptionItem = ({ item, inputValue, isSelected, itemToString }) => (
  <Flex width="100%">
    <Text flexGrow="1" color="inherit">
      <Highlighter
        autoEscape
        searchWords={[inputValue || '']}
        textToHighlight={itemToString(item)}
      />
    </Text>
    {isSelected && <Icon name="check" size={4} ml={4} />}
  </Flex>
);

const MultiSelect = React.forwardRef(
  (
    {
      initialSelectedItems,
      items,
      label,
      disabled,
      readOnly,
      creatable,
      placeholder,
      noMatchText,
      itemToString,
      selectedItems: selectedItemsProp,
      filterKeys,
      onChange,
      onCreateItem,
      InputProps,
      ...otherProps
    },
    forwardedRef
  ) => {
    const {
      isOpen,
      isCreating,
      selectedItems,
      highlightedIndex,
      inputValue,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      getItemProps,
      getSelectedItemProps,
      getDropdownProps,
      filteredItems,
      removeSelectedItem,
      reset
    } = useMultiSelect({
      items,
      selectedItems: selectedItemsProp,
      initialSelectedItems,
      // ====
      itemToString,
      itemFilterKeys: filterKeys,
      readOnly,
      creatable,
      onChange,
      onCreateItem
    });

    const { ref: inputRef, ...otherInputProps } = InputProps;
    const input = readOnly ? null : (
      <Input
        bare
        size="sm"
        m={1}
        placeholder={placeholder}
        readOnly={readOnly}
        {...getInputProps({
          ...getDropdownProps({ preventKeyAction: isOpen, ref: inputRef }),
          disabled,
          ...otherInputProps
        })}
        style={{
          background: 'transparent',
          width: 'auto',
          maxWidth: '100%',
          flex: 1
        }}
      />
    );

    const rootRef = useRef(null);
    const handleRef = useForkRef(rootRef, forwardedRef);
    const { ref: menuRef, ...menuProps } = getMenuProps(
      {},
      { suppressRefError: true }
    );

    const { height: menuHeight } = useMeasure(menuRef);
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: 'translate3d(0,-10px,0)' },
      to: {
        height: isOpen ? menuHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(0,${isOpen ? 0 : -10}px,0)`
      },
      config: {
        mass: 1,
        tension: 170
      }
    });

    const isMenuOpen =
      inputValue.length === 0 && filteredItems.length === 0 ? false : isOpen;

    return (
      <Box {...otherProps} position="relative" ref={handleRef}>
        {label && <VisuallyHidden {...getLabelProps()}>{label}</VisuallyHidden>}
        <Box>
          <StyledMultiSelect
            {...getComboboxProps()}
            disabled={disabled}
            readOnly={readOnly}
          >
            {selectedItems.length > 0 ? (
              <StyledItems mr={2}>
                {selectedItems.map((selectedItem, index) => (
                  <Tag
                    key={`selected-item-${index}`}
                    removeable={!readOnly}
                    onRemove={() => {
                      removeSelectedItem(selectedItem);
                    }}
                    m={1}
                    {...getSelectedItemProps({ selectedItem, index })}
                  >
                    {itemToString(selectedItem)}
                  </Tag>
                ))}

                {input}
              </StyledItems>
            ) : (
              input
            )}

            {!readOnly && (
              <Flex>
                <Tooltip content="Clear" placement="bottom">
                  <Button
                    bare
                    type="button"
                    icon="close"
                    size="sm"
                    iconSize={2}
                    onClick={reset}
                  />
                </Tooltip>

                <Divider orientation="vertical" />
                <Button
                  bare
                  type="button"
                  icon="chevron-down"
                  iconSize={4}
                  {...getToggleButtonProps(
                    { disabled },
                    { suppressRefError: true }
                  )}
                />
              </Flex>
            )}
          </StyledMultiSelect>
        </Box>

        <animated.div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: 0,
            right: 'auto',
            zIndex: theme.zIndices.dropdown,
            width: '100%',
            opacity,
            height: isMenuOpen ? 'auto' : height,
            transform
          }}
        >
          {isOpen && (
            <List width="100%" ref={menuRef} {...menuProps}>
              {!isCreating && filteredItems.length === 0 ? (
                <Text fontSize="xs" muted py="4" px="2">
                  {noMatchText}
                </Text>
              ) : (
                filteredItems.map((item, index) => (
                  <ListItem
                    key={`${item}${index}`}
                    selected={selectedItems.includes(item)}
                    highlighted={highlightedIndex === index}
                    {...getItemProps({ item, index, disabled })}
                  >
                    {isCreating ? (
                      <CreateItem item={item} />
                    ) : (
                      <OptionItem
                        item={item}
                        isSelected={selectedItems.includes(item)}
                        itemToString={itemToString}
                        inputValue={inputValue}
                      />
                    )}
                  </ListItem>
                ))
              )}
            </List>
          )}
        </animated.div>
      </Box>
    );
  }
);

export default MultiSelect;

MultiSelect.propTypes = {
  initialSelectedItems: PropTypes.array,
  selectedItems: PropTypes.array,
  filterKeys: PropTypes.array,
  itemToString: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  noMatchText: PropTypes.string,
  creatable: PropTypes.bool,
  InputProps: PropTypes.object
};

MultiSelect.defaultProps = {
  InputProps: {},
  initialSelectedItems: [],
  itemToString: i => (i == null ? '' : String(i)),
  noMatchText: 'No items to choose.',
  creatable: false
};

MultiSelect.displayName = 'MultiSelect';
