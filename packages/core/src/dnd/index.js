import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';

export const DnDItem = styled(Box)`
  user-select: none;
  cursor: grab;

  ${props =>
    props.isDragging &&
    css({
      opacity: 0.8,
      cursor: 'grabbing',
      boxShadow: 'sm',
      borderRadius: 'sm',
      borderLeftStyle: 'solid',
      borderLeftWidth: '4px',
      borderLeftColor: 'purple.400'
    })}
`;

export const DnDDropzone = styled(Box)`
  border-style: dashed;
  border-width: 2px;
  transition: border-color 0.2s ease-in-out;

  ${props =>
    css({
      bg: 'white',
      p: props.p || props.padding || 4,
      borderColor: 'gray.200'
    })}

  ${props =>
    props.isOver &&
    css({
      borderColor: 'purple.400'
    })}

  ${props =>
    props.disabled &&
    css({
      opacity: 0.4,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    })}
`;

export const DnDPlaceholder = styled(Box).attrs(props => ({
  top: props.placeholder.clientY,
  left: props.placeholder.clientX,
  height: props.placeholder.clientHeight,
  width: props.placeholder.clientWidth,
  mb: 4
}))`
  position: absolute;
  ${css({
    bg: 'blue.100',
    border: '2px dashed',
    borderColor: 'blue.300'
  })}
`;
