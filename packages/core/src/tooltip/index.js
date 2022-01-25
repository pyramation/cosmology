import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import Color from 'color';
import { animated } from 'react-spring';
import get from '@styled-system/theme-get';
import { Intent } from '../constants';
import { lighten } from '../utils/colors';
import Popover from '../popover';
import Text from '../text';

const getColors = (props, isIntentValid) => {
  if (isIntentValid) {
    const intentColor = get(
      `colors.palette.${props.intent}.base`,
      props.intent
    )(props);

    return {
      bg: lighten(intentColor, 0.8),
      borderColor: intentColor
    };
  }

  return {
    bg: get(`colors.${props.bg}`, props.bg)(props),
    borderColor: null
  };
};

export const StyledTooltipPopper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => {
    const isIntentValid = Object.values(Intent).includes(props.intent);
    const { bg, borderColor } = getColors(props, isIntentValid);
    const colorObj = Color(bg);
    const textColor = colorObj.isDark() ? 'textLight' : 'text';

    return css({
      p: 2,
      bg,
      zIndex: 'tooltip',
      borderColor,
      borderStyle: 'solid',
      borderWidth: '1px',
      boxShadow: 'sm',
      color: textColor,
      borderRadius: 'sm'
    });
  }}
`;

const Tooltip = ({ content, placement, intent, children, ...rest }) => {
  return (
    <Popover
      {...rest}
      placement={placement}
      target={React.Children.only(children)}
      Popper={StyledTooltipPopper}
      PopperProps={{
        intent
      }}
    >
      {typeof content === 'string' ? (
        <Text fontSize="xs" color="inherit">
          {content}
        </Text>
      ) : (
        content
      )}
    </Popover>
  );
};

export default Tooltip;

Tooltip.propTypes = {
  content: PropTypes.node,
  placement: PropTypes.string,
  children: PropTypes.node,
  intent: PropTypes.oneOf(Object.values(Intent))
};

Tooltip.defaultProps = {
  delay: 500
};
