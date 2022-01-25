import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useForkRef } from '@webql/hooks';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';
import Box from '../box';

const StyledText = styled(Box).attrs(props => ({
  as: props.as || 'p'
}))`
  ${props =>
    css({
      fontFamily: 'body',
      color:
        typeof props.color !== 'undefined'
          ? props.color
          : props.muted
          ? 'textMuted'
          : 'text'
    })}

  ${props => {
    if (!props.truncate || typeof props.truncateLines !== 'number') return '';
    const lineHeight = get(`lineHeights.${props.lineHeight || 'base'}`)(props);

    return css({
      overflow: 'hidden',
      maxHeight: `calc(${lineHeight} * 1em * ${props.truncateLines})`,
      '&:after': {
        bg: props.ellipsisBg
      }
    });
  }}

  /* Normal text truncate */
  ${props => {
    if (props.truncate && typeof props.truncateLines === 'undefined') {
      return css({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      });
    }
  }}

  /* Multiline text truncate */
  ${props =>
    props.truncate &&
    props.lineCount > 1 &&
    props.lineCount >= props.truncateLines &&
    `
    position: relative;
    padding-right: 1em; /* Space for ellipsis */

    &:before {
      content: "...";
      position: absolute;
      bottom: 2px;
      right: 0;
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      width: 1em;
      height: 1em;
    }
  `}
`;

const Text = React.forwardRef((props, forwardedRef) => {
  const [textNode, setTextNode] = useState(null); // useState instead of useRef to force lineCount update
  const handleRef = useForkRef(setTextNode, forwardedRef);

  const lineCount = useMemo(() => countLines(textNode), [textNode]);

  return <StyledText ref={handleRef} {...props} lineCount={lineCount} />;
});

Text.displayName = 'Text';

export default Text;

Text.propTypes = {
  // Change color to a gentler gray
  muted: PropTypes.bool,
  truncate: PropTypes.bool,
  truncateLines: PropTypes.number,
  // The color of the cover of ellipsis when it's not shown
  ellipsisBg: PropTypes.string,
  fontSize: PropTypes.any
};

Text.defaultProps = {
  muted: false,
  truncate: false,
  ellipsisBg: 'white',
  fontSize: 'md'
};

function countLines(node) {
  if (!node) return 0;

  const style = window.getComputedStyle(node);
  const divHeight = node.offsetHeight;
  const lines = divHeight / parseInt(style.lineHeight);
  return lines;
}
