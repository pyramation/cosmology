import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';
import Text from '../text';

const baseState = css({
  borderRadius: 'sm',
  p: 2
});

const hoverState = css({
  boxShadow: 'border'
});

const focusState = css({
  boxShadow: 'outline'
});

export const StyledEditable = styled(Box)`
  cursor: ${props => (props.disabled ? 'auto' : 'text')};
  display: block;
  max-width: 100%;
  white-space: nowrap;
`;

export const StyledPreview = styled(Text).attrs({
  as: 'span'
})`
  display: inline-block;
  position: relative;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  width: 100%;
  height: 100%;

  ${baseState}

  &:hover {
    ${props => props.hoverShadow && hoverState}
  }
`;

export const StyledInput = styled(Box).attrs({
  as: 'input'
})`
  color: inherit;
  display: inherit;
  letter-spacing: inherit;
  max-width: inherit;
  min-width: inherit;
  width: 100%;
  height: 100%;
  position: relative;
  resize: none;
  text-transform: inherit;
  vertical-align: top;
  padding: 0;
  white-space: pre-wrap;

  ${baseState}

  ${css({
    p: 2,
    bg: 'white',
    color: 'black'
  })}

  &:hover {
    ${props => !props.editing && hoverState}
  }

  &:focus {
    ${focusState}
  }

  ${props => props.editing && focusState}
`;
