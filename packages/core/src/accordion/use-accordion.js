import { useReducer } from 'react';

function accordionReducer(state, action) {
  switch (action.type) {
    case useAccordion.types.OPEN: {
      if (state.openIndexes.indexOf(action.index) === -1) {
        return {
          ...state,
          openIndexes: state.openIndexes.slice().concat([action.index])
        };
      }
      return state;
    }
    case useAccordion.types.CLOSE: {
      if (state.openIndexes.indexOf(action.index) !== -1) {
        return {
          ...state,
          openIndexes: []
            .concat(state.openIndexes)
            .filter(idx => idx !== action.index)
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export const defaultReducer = (state, action) => action.changes;

export const useAccordion = (opts = {}) => {
  const {
    reducer = defaultReducer,
    initialOpenIndexes = [],
    onChange = () => {}
  } = opts;

  const [{ openIndexes }, dispatch] = useReducer(
    (state, action) => {
      const changes = accordionReducer(state, action);
      // Run through custom reducer, if provide any
      const finalChanges = reducer(state, { ...action, changes });
      onChange(finalChanges);
      return finalChanges;
    },
    {
      openIndexes: initialOpenIndexes
    }
  );

  const open = index => {
    dispatch({ type: useAccordion.types.OPEN, index });
  };
  const close = index => {
    dispatch({ type: useAccordion.types.CLOSE, index });
  };

  return { openIndexes, open, close };
};

useAccordion.types = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
};

// === utils
export const singleOpen = (state, action) => {
  if (action.type === useAccordion.types.OPEN) {
    return { openIndexes: action.changes.openIndexes.slice(-1) };
  }
  return action.changes;
};
