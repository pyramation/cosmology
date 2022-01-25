import styled from 'styled-components';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';
import { position, space, flexbox, border, compose } from 'styled-system';

import { darken } from '../utils/colors';
import { StyledButton } from '../button/styled';
import { StyledIconWrapper } from '../icon/styled';
import variants from './variants';

const selectProps = props => {
  if (props.as !== 'select') return null;
  return css({
    cursor: props.disabled ? 'not-allowed' : 'pointer'
  });
};

const sizes = {
  lg: {
    fontSize: 'lg',
    px: 4,
    height: 12
  },
  md: {
    fontSize: 'md',
    px: 4,
    height: 10
  },
  sm: {
    fontSize: 'sm',
    px: 3,
    height: 8
  }
};

const elemSizes = {
  lg: {
    width: 16,
    fontSize: 'md'
  },
  md: {
    width: 16,
    fontSize: 'md'
  },
  sm: {
    width: 8,
    fontSize: 'sm'
  }
};

const sizeProp = props => (props.bare ? null : css(sizes[props.size]));

const elementsPadding = props => {
  const size = sizes[props.size] || sizes.md;
  const elemSize = elemSizes[props.size] || elemSizes.md;

  const elemWidth = get(`sizes.${elemSize.width}`)(props);
  const basePadding = get(`sizes.${size.px}`)(props);

  const totalPadding = `calc(${elemWidth} + ${basePadding} / 2 + 4px)`;
  return css({
    paddingLeft: props.startElement ? totalPadding : undefined,
    paddingRight: props.endElement ? totalPadding : undefined
  });
};

export const StyledInput = styled.div.attrs(props => ({
  as: props.as || 'input'
}))`
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.2s;
  outline: none;
  appearance: none;
  width: ${props =>
    props.width ? props.width : props.fluidWidth ? '100%' : 'auto'};
  min-height: ${props =>
    get(`sizes.${props.minHeight}`, props.minHeight)(props)};

  ::placeholder {
    color: ${props => {
      const textColor =
        get(`colors.${props.color}`, props.color)(props) || props.color;
      return textColor;
    }};
  }

  ${sizeProp}
  ${variants}
  ${elementsPadding}
  ${selectProps}
  ${compose(space, position, flexbox, border)}
`;

export const StyledStartElement = styled.div`
  left: 2px;
`;

export const StyledEndElement = styled.div`
  right: 2px;
`;

/* stylelint-disable */
export const StyledInputGroup = styled.div`
  display: flex;
  position: relative;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};

  ${StyledIconWrapper} {
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${StyledInput} {
    flex: 1;
  }

  ${StyledStartElement}, ${StyledEndElement} {
    position: absolute;
    top: 2px;
    right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: all 0.2s;

    ${props =>
      css({
        height: 'calc(100% - 4px)',
        width: elemSizes[props.size].width,
        fontSize: elemSizes[props.size].fontSize
      })}
  }

  ${StyledStartElement} {
    ${props => {
      const bg = get(`colors.${props.bg}`, props.bg)(props) || props.bg;
      const borderColor = props.bg
        ? darken(bg, 0.1)
        : get('colors.divider')(props);

      return css({
        borderTopLeftRadius: 'sm',
        borderBottomLeftRadius: 'sm',
        borderRight: props.iconBorder ? '1px' : 'none',
        borderColor: borderColor
      });
    }}
  }

  ${StyledEndElement} {
    ${props => {
      const bg = get(`colors.${props.bg}`, props.bg)(props) || props.bg;
      const borderColor = props.bg
        ? darken(bg, 0.1)
        : get('colors.divider')(props);

      return css({
        borderTopRightRadius: 'sm',
        borderBottomRightRadius: 'sm',
        borderLeft: props.iconBorder ? '1px' : 'none',
        borderColor: borderColor
      });
    }}
  }

  ${StyledInput}:focus ~ ${StyledStartElement},
  ${StyledInput}:focus ~ ${StyledEndElement},
  ${StyledInput}:focus ~ ${StyledStartElement} ${StyledButton},
  ${StyledInput}:focus ~ ${StyledEndElement} ${StyledButton} {
    ${props =>
      css({
        bg: props.bg || 'bg.100'
      })}
  }
`;
/* stylelint-enable */
