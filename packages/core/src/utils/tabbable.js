export function isTabbable(element) {
  if (!element) return false;
  return (
    isHTMLElement(element) &&
    isFocusable(element) &&
    !hasNegativeTabIndex(element)
  );
}

export function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }

  const { localName } = element;
  const focusableTags = ['input', 'select', 'textarea', 'button'];
  if (focusableTags.indexOf(localName) >= 0) return true;

  const others = {
    a: () => element.hasAttribute('href'),
    audio: () => element.hasAttribute('controls'),
    video: () => element.hasAttribute('controls')
  };

  if (localName in others) {
    return others[localName]();
  }

  if (isContentEditable(element)) return true;

  return hasTabIndex(element);
}

export function isDisabled(element) {
  return (
    Boolean(element.getAttribute('disabled')) === true ||
    Boolean(element.getAttribute('aria-disabled')) === true
  );
}

export function isContentEditable(element) {
  const value = element.getAttribute('contenteditable');
  return value !== 'false' && value != null;
}

export function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement)) return true;
  return element.hidden;
}

export function isHTMLElement(element) {
  return element instanceof HTMLElement;
}

export const hasTabIndex = element => element.hasAttribute('tabindex');

export const hasNegativeTabIndex = element =>
  hasTabIndex(element) && element.tabIndex === -1;
