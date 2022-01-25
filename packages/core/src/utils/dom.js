import { isFocusable } from './tabbable';

export const isSSR = () => {
  return !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const isBrowser = !isSSR();

export const getOwnerDocument = node => {
  if (isSSR()) return null;
  return (node && node.ownerDocument) || document;
};

export const focus = node => {
  if (node) node.focus();
};

export const isRightClick = event => {
  return event.nativeEvent.which === 3;
};

let scrollBarSize = null;

export const getScrollbarSize = () => {
  if (isSSR()) return 0;
  if (scrollBarSize) return scrollBarSize;
  let size = 0;
  const scrollDiv = document.createElement('div');

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';

  document.body.appendChild(scrollDiv);
  size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  scrollBarSize = size;
  return size;
};

export const isWindow = node => {
  return node === node.window
    ? node
    : node.nodeType === 9
    ? node.defaultView || node.parentWindow
    : false;
};

// Check if an object is a dom node based on nodeType property
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
export const isDomNode = obj => {
  return obj && obj.nodeType && obj.nodeType === 1;
};

export function getActiveElement(node) {
  const doc = getOwnerDocument(node);
  return doc?.activeElement;
}

export function contains(parent, child) {
  return parent === child || parent.contains(child);
}

// Check if event originates from within a dom node
export const isEventFromWithinNode = (event, parentNode) => {
  let isWithin;

  if (event.composedPath) {
    isWithin = event.composedPath().indexOf(parentNode) > -1;
  } else {
    const doc = getOwnerDocument(parentNode);
    isWithin =
      !(doc.documentElement && doc.documentElement.contains(event.target)) ||
      parentNode.contains(event.target);
  }
  return isWithin;
};

const isBody = node => {
  return node && node.tagName.toLowerCase() === 'body';
};

export const isOverflowing = container => {
  const bodyIsOverflowing = node => {
    const doc = getOwnerDocument(node);
    return doc.body.clientWidth < window.innerWidth;
  };
  return isWindow(container) || isBody(container)
    ? bodyIsOverflowing(container)
    : container.scrollHeight > container.clientHeight;
};

export function getAllFocusable(container) {
  const focusableEls = Array.from(container.querySelectorAll);
  focusableEls.unshift(container);
  return focusableEls
    .filter(isFocusable)
    .filter(el => window.getComputedStyle(el).display !== 'none');
}
