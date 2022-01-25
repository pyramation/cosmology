import * as React from 'react';
import { useUpdateEffect, useEventListener } from '@webql/hooks';
import { contains, focus, getAllFocusable } from '../utils/dom';

const defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};

export function useFocusOnShow(target, options = defaultOptions) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = target && 'current' in target ? target.current : target;

  const autoFocus = shouldFocus && visible;

  const onFocus = React.useCallback(() => {
    if (!element || !autoFocus) return;

    if (contains(element, document.activeElement)) return;

    if (focusRef?.current) {
      focus(focusRef.current, { preventScroll });
    } else {
      const tabbableEls = getAllFocusable(element);
      if (tabbableEls.length > 0) {
        focus(tabbableEls[0], { preventScroll });
      }
    }
  }, [autoFocus, element, focusRef, preventScroll]);

  useUpdateEffect(() => {
    onFocus();
  }, [onFocus]);

  useEventListener('transitionend', onFocus, element);
}
