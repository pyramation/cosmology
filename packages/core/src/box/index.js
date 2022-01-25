import styled from 'styled-components';
import css from '@styled-system/css';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const textTransform = props => {
  return css({ textTransform: props.textTransform });
};

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
);

const Box = styled.div.withConfig({
  shouldForwardProp
})`
  ${systemProps}
  ${textTransform}
`;

Box.displayName = 'Box';

export default Box;
