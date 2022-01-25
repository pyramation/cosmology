import styled from 'styled-components';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';

import Box from '../box';

export const StyledIconWrapper = styled(Box).attrs({
  as: 'span'
})`
  font-size: ${props => get(`sizes.${props.size}`, props.size)};
  ${props =>
    css({
      display: 'inline-block',
      lineHeight: 0,
      verticalAlign: 'top',
      color: props.color
    })}
`;
