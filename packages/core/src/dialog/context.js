import { createContext } from 'react';

export const DialogContext = createContext({
  open: false,
  onClose: () => {}
});
