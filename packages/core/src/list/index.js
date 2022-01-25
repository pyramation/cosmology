import React from 'react';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';
import styled from 'styled-components';
import { useFocusRing } from '@react-aria/focus';
import { useButton } from '@react-aria/button';
import Box from '../box';
import { lighten, darken, getForegroundColor } from '../utils/colors';

export const List = styled(Box).attrs(props => ({
  as: props.as || 'ul',
  boxShadow: props.boxShadow || 'sx'
}))`
  overflow-x: hidden;
  overflow-y: auto;

  ${props =>
    css({
      height: props.height,
      width: props.width,
      bg: 'white',
      borderRadius: 'sm',
      p: 2
    })}
`;

List.defaultProps = {
  maxHeight: 'xs',
  boxShadow: 'xs',
  minWidth: '3xs'
};

const StyledListItem = styled(Box).attrs(props => ({
  as: props.as || 'li'
}))`
  display: flex;
  align-items: center;
  pointer-events: ${props => (props.disable ? 'none' : 'auto')};

  & a {
    display: flex;
    align-items: center;
  }

  ${css({
    p: 2,
    fontSize: 'sm',
    '& + &': {
      mt: 2
    }
  })}

  ${props => {
    const selectedAndHighlighted = props.selected && props.highlighted;

    const baseBg =
      get(`colors.${props.bg}`)(props) ||
      props.bg ||
      get(`colors.palette.primary.base`)(props);

    const textColor =
      get(`colors.${props.color}`)(props) ||
      props.color ||
      get(`colors.gray.700`)(props);

    const getBg = getForegroundColor(baseBg);

    console.log('getBg', getBg);

    const bg = selectedAndHighlighted
      ? lighten(baseBg, 0.8) // slightly darker than if only either selected or highlighted
      : lighten(baseBg, 0.9);

    if (props.selected || props.highlighted) {
      return css({
        bg,
        color: selectedAndHighlighted ? darken(baseBg, 0.1) : baseBg,
        '&:hover': {
          bg
        },
        '&:active': {
          bg
        },
        '&:focus': {
          bg
        }
      });
    }

    if (!props.heading) {
      return css({
        cursor: 'pointer',
        bg: 'transparent',
        color: textColor,
        '&:hover': {
          bg: props.bg ? bg : 'gray.100'
        },
        '&:active': {
          bg: props.bg ? bg : 'gray.200'
        },
        '&:focus': {
          boxShadow: 'outline',
          bg: props.bg ? bg : 'gray.100'
        }
      });
    }
  }}
`;

export const ListItem = React.forwardRef(function ListItem(
  { onClick, onPress, ...otherProps },
  forwardedRef
) {
  const { isFocusVisible } = useFocusRing();
  const { buttonProps } = useButton(
    { ...otherProps, onPress: onClick || onPress },
    forwardedRef
  );

  return (
    <StyledListItem
      {...otherProps}
      {...buttonProps}
      boxShadow={isFocusVisible ? 'focus' : 'none'}
      ref={forwardedRef}
    />
  );
});
