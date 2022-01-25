import styled from 'styled-components';
import css from '@styled-system/css';

import Box from '../box';
import variantProp from './variants';
import { SIZE, SHAPE } from './shared';

const sizeProp = ({ size, bare, shape }) => {
  if (bare) {
    return css({
      height: 'auto',
      width: 'auto'
    });
  }

  // If it's round button, don't allow content grow
  const widthKey = shape === SHAPE.round ? 'width' : 'minWidth';

  const sizes = {
    [SIZE.lg]: {
      height: 12,
      [widthKey]: 12,
      fontSize: 'lg',
      px: 6
    },
    [SIZE.md]: {
      height: 10,
      [widthKey]: 10,
      fontSize: 'md',
      px: 4
    },
    [SIZE.sm]: {
      height: 8,
      [widthKey]: 8,
      fontSize: 'sm',
      px: 3
    },
    [SIZE.xs]: {
      height: 6,
      [widthKey]: 6,
      fontSize: 'xs',
      px: 2
    }
  };
  return css(sizes[size]);
};

const shapeProp = ({ shape }) => {
  const shapes = {
    [SHAPE.default]: {
      borderRadius: 'sm'
    },
    [SHAPE.pill]: {
      borderRadius: '38px'
    },
    [SHAPE.round]: {
      borderRadius: 'full'
    }
  };
  return css(shapes[shape]);
};

export const StyledButton = styled(Box).attrs(props => ({
  as: props.as || 'button'
}))`
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  transition: all 250ms;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.2;
  outline: none;
  width: unset;

  ${sizeProp}
  ${variantProp}
  ${shapeProp}
`;

export const StyledStartElement = styled.div`
  display: flex;
  ${css({
    marginRight: 2
  })}
`;

export const StyledEndElement = styled.div`
  display: flex;
  ${css({
    marginLeft: 2
  })}
`;

export const StyledMidElement = styled.div`
  display: flex;
`;
