import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from '../box';

const styles = css`
  position: relative;

  &:before {
    height: 0;
    content: '';
    display: block;
    padding-bottom: ${props => (1 / props.ratio) * 100}%;
  }

  & > *:first-child {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const StyledAspectRatio = styled(Box)`
  ${css}
`;

const AspectRatioBox = ({ ratio = 4 / 3, children, ...props }) => {
  const child = Children.only(children);
  return (
    <StyledAspectRatio ratio={ratio} {...props}>
      {Children.only(children)}
    </StyledAspectRatio>
  );
};

export default AspectRatioBox;

// For cases when we want to reuse the stylesheet in a different styled component
AspectRatioBox.styles = styles;

AspectRatioBox.propTypes = {
  ratio: PropTypes.number
};
