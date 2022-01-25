import isFunction from 'lodash/isFunction';
/**
 * Compose many HOCs together,
 * returns a HOC that is a combination of all HOCs
 * @param  {...any} funcs
 */
export const compose = (...funcs) => {
  if (funcs.length === 0) return arg => arg;

  if (funcs.length === 1) return funcs[0];

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

export const componentName = Comp =>
  Comp.displayName || Comp.name || 'Component';

/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
export function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
    return;
  }

  try {
    // @ts-ignore
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

/**
 * Combine multiple React refs into a single ref function.
 * @param refs refs to assign to value to
 */
export function mergeRefs(...refs) {
  return value => {
    refs.forEach(ref => assignRef(ref, value));
  };
}
