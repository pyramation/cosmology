import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useControlled } from '@webql/hooks';
import { filterChildrenType, clamp } from '../utils';
import Text from '../text';
import Icon from '../icon';
import {
  StyledStep,
  StyledStepIcon,
  StyledStepContent,
  StyledStepContainer,
  StyledStepTail,
  StyledSteps
} from './styled';
import { STEP_STATUS } from './shared';

const StepContext = React.createContext({
  current: 0
});

export const Step = ({
  index,
  title,
  description,
  icon,
  status,
  size,
  clickable,
  isLastItem,
  ...otherProps
}) => {
  const { goToStep } = useContext(StepContext);

  const stepIcon =
    typeof icon !== 'undefined' ? (
      icon
    ) : (
      <Icon name="check" color="accent" size={size === 'sm' ? 4 : 6} />
    );

  const handleStepClick = () => {
    if (!clickable) return;
    goToStep(index);
  };

  return (
    <StyledStep clickable={clickable} onClick={handleStepClick} {...otherProps}>
      <StyledStepContainer>
        <StyledStepIcon status={status} size={size}>
          {status === STEP_STATUS.complete ? (
            stepIcon
          ) : (
            <Text
              as="span"
              fontSize="sm"
              color={
                status === STEP_STATUS.wait
                  ? 'textMuted'
                  : status === STEP_STATUS.process
                  ? 'white'
                  : 'text'
              }
            >
              {index + 1}
            </Text>
          )}
        </StyledStepIcon>
        <StyledStepContent>
          {title && (
            <Text
              lineHeight="taller"
              position="relative"
              display="inline-block"
              fontWeight={status === STEP_STATUS.process ? 'normal' : 'light'}
              pr={4}
            >
              {title}
              {!isLastItem && (
                <StyledStepTail aria-hidden="true" status={status} />
              )}
            </Text>
          )}
          {description && (
            <Text fontSize="xs" muted={status !== STEP_STATUS.process}>
              {description}
            </Text>
          )}
        </StyledStepContent>
      </StyledStepContainer>
    </StyledStep>
  );
};

Step.displayName = 'Step';
Step.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  icon: PropTypes.node
};

export const useSteps = ({
  current: currentProp,
  defaultStep,
  stepCount,
  onChange = () => {}
}) => {
  const [current, setCurrent] = useControlled({
    controlled: currentProp,
    defaultValue: defaultStep,
    onChange
  });
  const prevStep = useCallback(() => {
    setCurrent(current => Math.max(current - 1, 0));
  }, [setCurrent]);

  const nextStep = useCallback(() => {
    setCurrent(current => Math.min(current + 1, stepCount - 1));
  }, [setCurrent, stepCount]);

  const goToStep = useCallback(
    step => {
      setCurrent(clamp(step, 0, stepCount - 1));
    },
    [setCurrent, stepCount]
  );

  return {
    current,
    prevStep,
    nextStep,
    goToStep
  };
};

export const Steps = ({
  current: currentProp,
  defaultStep,
  dot,
  size,
  clickable,
  direction,
  onChange,
  children
}) => {
  const validSteps = filterChildrenType(children, Step);

  const { current, prevStep, nextStep, goToStep } = useSteps({
    current: currentProp,
    defaultStep,
    onChange,
    stepCount: validSteps.length
  });

  return (
    <StepContext.Provider
      value={{
        dot,
        direction,
        current,
        prevStep,
        nextStep,
        goToStep
      }}
    >
      <StyledSteps>
        {validSteps.map((child, index) =>
          React.cloneElement(child, {
            index,
            size: size,
            isLastItem: index === validSteps.length - 1,
            status: getStepStatus(current, index, child.props),
            clickable
          })
        )}
      </StyledSteps>
    </StepContext.Provider>
  );
};

Steps.Step = Step;
Steps.displayName = 'Steps';
Steps.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  current: PropTypes.number,
  defaultStep: PropTypes.number,
  dot: PropTypes.bool,
  clickable: PropTypes.bool,
  direction: PropTypes.oneOf(['vertical', 'horizontal'])
};
Steps.defaultProps = {
  size: 'sm',
  defaultStep: 0,
  dot: false,
  clickable: false,
  direction: 'horizontal',
  onChange: () => {}
};

function getStepStatus(current, index, childProps) {
  // childProps.status overrides parent state
  if (Object.values(STEP_STATUS).includes(childProps.status)) {
    return childProps.status;
  }
  // else determined by parent state
  if (current === index) {
    return STEP_STATUS.process;
  } else if (current > index) {
    return STEP_STATUS.complete;
  } else {
    return STEP_STATUS.wait;
  }
}
