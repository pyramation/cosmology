import { usePopup } from './use-popup';

export { usePopup } from './use-popup';

const Popup = ({ children, ...props }) => {
  const state = usePopup(props);
  return children(state);
};

export default Popup;
