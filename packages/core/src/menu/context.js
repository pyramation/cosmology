import { createContext } from 'react';

export const MenuContext = createContext({
  isExpanded: false,
  id: undefined
});
