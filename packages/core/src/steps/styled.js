import styled from 'styled-components';
import css from '@styled-system/css';
import Box, { systemProps } from '../box';
import { STEP_STATUS } from './shared';

export const StyledSteps = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  ${systemProps}
`;

export const StyledStep = styled(Box)`
  position: relative;
  overflow: hidden;
  display: inline-block;
  flex: 1;

  ${props =>
    css({
      cursor: props.clickable ? 'pointer' : 'default',
      '& + &': {
        ml: 4
      }
    })}
`;

export const StyledStepContainer = styled(Box)`
  display: inline-flex;
`;

export const StyledStepContent = styled(Box)`
  display: inline-block;
  vertical-align: top;
  ${css({
    ml: 2
  })}
`;

export const StyledStepTail = styled(Box)`
  display: block;
  position: absolute;
  height: 1px;
  width: 9999px;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  ${props =>
    css({
      bg: props.status === STEP_STATUS.complete ? 'accent' : 'gray.200'
    })}
`;

const iconSizes = {
  sm: {
    width: 6,
    height: 6
  },
  md: {
    width: 8,
    height: 8
  }
};

const iconProps = props => {
  const bg =
    props.status === STEP_STATUS.complete
      ? 'bg.50'
      : props.status === STEP_STATUS.process
      ? 'accent'
      : 'bg.100';

  const borderColor = props.status === STEP_STATUS.wait ? 'gray.300' : 'accent';

  const sizes = iconSizes[props.size] || iconSizes.sm;

  return css({
    bg,
    borderRadius: 'round',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor,
    width: sizes.width,
    height: sizes.height
  });
};

export const StyledStepIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: background-color 0.3s, border-color 0.3s;

  ${iconProps}
`;
