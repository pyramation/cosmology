import mergeWith from 'lodash/mergeWith';
import isFunction from 'lodash/isFunction';
import { theme } from './base-theme';

function mergeCustomizer(objValue, srcValue) {
  if (isFunction(objValue)) {
    return (...args) => {
      const sourceValue = objValue(...args);

      const overrideValue = isFunction(srcValue) ? srcValue(...args) : srcValue;

      return mergeWith({}, sourceValue, overrideValue, mergeCustomizer);
    };
  }

  // fallback to mergeWith default
  return undefined;
}

export function extendTheme(overrides, baseTheme = theme) {
  return mergeWith({}, baseTheme, overrides, mergeCustomizer);
}
