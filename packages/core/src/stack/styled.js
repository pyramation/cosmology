import styled, { css } from 'styled-components';
import themeGet from '@styled-system/theme-get';
import Box from '../box';

const marginProps = props => {
  const space = themeGet(`space.${props.space}`)(props);
  const marginSide = props.inline
    ? 'margin-left'
    : props.marginDir === 'bottomUp'
    ? 'margin-top'
    : 'margin-bottom';

  const resetMargin =
    props.marginDir === 'topDown'
      ? `
      & *:last-child {
        margin-bottom: 0;
      }
    `
      : '';

  const selectors = {
    topDown: {
      flat: '& > *',
      recursive: '& > *'
    },
    bottomUp: {
      flat: '& > * + *',
      recursive: '& * + *'
    }
  };
  const dir = selectors[props.marginDir];
  const selector = props.recursive ? dir.recursive : dir.flat;

  return `
    ${selector} {
      ${marginSide}: ${space};
    }
    ${resetMargin}
  `;
};

const display = props =>
  props.inline
    ? css`
        display: flex;
        flex-direction: row;
        align-items: ${props => props.alignItems || 'center'};
      `
    : css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      `;

const splitAfter = props => {
  if (!props.splitAfter) return '';
  const margins = props.inline
    ? `
    margin-right: auto;
  `
    : `
    margin-bottom: auto;
  `;

  return css`
    &:only-child {
      height: 100%;
    }

    & > :nth-child(${props.splitAfter}) {
      ${margins}
    }
  `;
};

/* stylelint-disable no-duplicate-selectors */
const wrapInlineProps = props => {
  if (!props.inline || !props.wrap) return '';
  const space = themeGet(`space.${props.space}`)(props);

  return css`
    & > * {
      margin: ${space};
    }
    & {
      flex-wrap: wrap;
      margin: -${space};
    }
  `;
};
/* stylelint-enable */

export const StyledStack = styled(Box)`
  ${display}
  ${splitAfter}
  ${props =>
    css`
      ${marginProps(props)}
    `}
  ${wrapInlineProps}
`;
