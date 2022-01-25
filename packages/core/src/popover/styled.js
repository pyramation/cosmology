import styled from 'styled-components';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';
import { animated } from 'react-spring';
import Color from 'color';

import { systemProps } from '../box';

const getBg = props => get(`colors.${props.bg}`, props.bg)(props);

export const StyledPopper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => {
    const bgColor = getBg(props);
    const colorObj = Color(bgColor);
    const textColor = colorObj.isDark() ? 'white' : 'black';

    return css({
      bg: bgColor,
      boxShadow: 'sm',
      color: textColor,
      borderRadius: 'sm'
    });
  }}
  ${systemProps}
`;

export const StyledArrow = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;

  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-top: -0.3rem;

    ${props =>
      css({
        '&:before': {
          borderWidth: '0 0.5rem 0.5rem 0.5rem',
          borderColor: `transparent transparent ${getBg(props)} transparent`
        }
      })}
  }
  &[data-placement*='top'] {
    bottom: 0;
    left: 0;
    margin-bottom: -0.8rem;

    ${props =>
      css({
        '&:before': {
          borderWidth: '0.5rem 0.5rem 0 0.5rem',
          borderColor: `${getBg(props)} transparent transparent transparent`
        }
      })}
  }
  &[data-placement*='right'] {
    left: 0;
    margin-left: -0.6rem;

    ${props =>
      css({
        '&:before': {
          borderWidth: '0.5rem 0.5rem 0.5rem 0',
          borderColor: `transparent ${getBg(props)} transparent transparent`
        }
      })}
  }
  &[data-placement*='left'] {
    right: 0;
    margin-right: -0.6rem;

    ${props =>
      css({
        '&:before': {
          borderWidth: '0.5rem 0 0.5rem 0.5rem',
          borderColor: `transparent transparent transparent ${getBg(props)}`
        }
      })}
  }

  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;
