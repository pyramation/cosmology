let seed = 0;
const now = Date.now();

/**
 * Return a unique key for a toast message
 * @param {string} userProvidedId - optional id
 */
export function getToastKey(userProvidedId) {
  const id = [seed, userProvidedId].join('_');
  seed += 1;
  return `webql_toast_${now}_${id}`;
}

/**
 * Given a list of toast and a toast id, find the position and index of that toast
 * @param {Array} toasts
 * @param {String} id
 */
export function findToast(toasts, id) {
  const position = getToastPosition(toasts, id);

  const index = position
    ? toasts[position].findIndex(toast => toast.id === id)
    : -1;

  return {
    position,
    index
  };
}

/**
 * Find the position of a toast
 * @param {Array} toasts
 * @param {String} id
 */
export function getToastPosition(toasts, id) {
  return Object.values(toasts)
    .flat()
    .find(toast => toast.id === id)?.position;
}

export function isActive(toasts, id) {
  return !!getToastPosition(toasts, id);
}
