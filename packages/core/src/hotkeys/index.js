import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

// TODO: scoped commands to within a DOM node not working yet
const bindOne = (keys, onEntered, isGlobal, ref) => {
  const bindMethod = isGlobal ? 'bindGlobal' : 'bind';
  const trap = new Mousetrap(ref ? ref.current : null);
  trap[`${bindMethod}`](keys, onEntered);
  return () => {
    trap.unbind(keys);
  };
};

const bindMany = (combos, isGlobal, ref) => {
  const cleanups = [];
  combos.forEach(c => {
    const { keys, onEntered } = c;
    cleanups.push(bindOne(keys, onEntered, isGlobal, ref));
  });

  return () => {
    cleanups.forEach(cleanup => cleanup());
  };
};

const Hotkeys = ({ keys, onEntered, global, children }) => {
  const [childRef, setChildRef] = useState(null);

  useEffect(() => {
    let cleanup;
    if (Array.isArray(keys)) {
      cleanup = bindMany(keys, global, childRef);
    } else {
      cleanup = bindOne(keys, onEntered, global, childRef);
    }
    return cleanup;
  }, [keys, global, onEntered, childRef]);

  if (!global && !children) {
    throw new Error(
      'Hotkeys: children must be available when binding non-global hotkeys'
    );
  }

  return children
    ? React.cloneElement(React.Children.only(children), {
        ref: setChildRef
      })
    : null;
};

export default Hotkeys;

Hotkeys.propTypes = {
  keys: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        keys: PropTypes.string,
        onEntered: PropTypes.func
      })
    )
  ]),
  onEntered: PropTypes.func,
  global: PropTypes.bool,
  children: PropTypes.node
};

Hotkeys.defaultProps = {
  global: true
};
