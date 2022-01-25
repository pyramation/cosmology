import React from 'react';
import styled from 'styled-components';
import { useSpring, config } from 'react-spring';
import matchSorter from 'match-sorter';
import isObj from 'lodash/isObject';

import Button from '../button';
import { ListItem } from '../list';

export const SelectButton = styled(Button)`
  justify-content: space-between;
  max-width: 100%;

  ${({ size, fluidWidth }) => {
    switch (true) {
      case size === 'sm' && !fluidWidth:
        return `height: 2rem; width: 24rem;`;
      case size === 'md' && !fluidWidth:
        return `height: 2.5rem; width: 28rem;`;
      case size === 'lg' && !fluidWidth:
        return `height: 3rem; width: 32rem;`;
      case fluidWidth:
        return `width: 100%;`;
      default:
        return 'height: 2rem;';
    }
  }}
`;

export function useAnimation({ isOpen }) {
  return useSpring({
    config: config.gentle,
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 'auto' : 0,
    transform: isOpen
      ? 'translate3d(0%, 0px, 0px)'
      : 'translate3d(0%, -25%, 0px)'
  });
}

export function NoItems() {
  return (
    <ListItem
      data-select-element="no-items"
      style={{
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    >
      No items.
    </ListItem>
  );
}

export function NoResults() {
  return (
    <ListItem
      data-select-element="no-results"
      style={{
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    >
      No results.
    </ListItem>
  );
}

export function filterItems(items, queryValue) {
  if (isObj(items[0])) {
    const objKeys = Object.keys(items[0]);
    return matchSorter(items, queryValue, { keys: objKeys });
  } else {
    return matchSorter(items, queryValue);
  }
}
