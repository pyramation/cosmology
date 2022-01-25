import React, { useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useForkRef } from '@webql/hooks';

import Button from '../button';

const variant = props => {
  const variants = {
    enclosed: css({
      bg: 'transparent',
      color: 'gray.500',
      borderColor: 'gray.300',
      borderTopLeftRadius: 'sm',
      borderTopRightRadius: 'sm',
      borderLeftStyle: 'solid',
      borderLeftWidth: '4px',
      borderTopWidth: '1px',
      borderRightWidth: '1px',
      borderBottomColor: 'white',
      borderBottomLeftRadius: '0',
      // States
      '&:hover': {
        color: 'gray.700'
      },
      "&[aria-selected='true']": {
        mb: 0,
        color: 'black',
        bg: 'white',
        borderColor: 'accent'
      }
    })
  };
  return variants[props['data-variant'] || 'enclosed'];
};

export const StyledTab = styled(Button).attrs({
  variant: 'secondary'
})`
  ${css({
    px: 2,
    py: 1,
    height: 10
  })}
  ${variant}
`;

const Tab = forwardRef(function Tab(
  {
    index,
    id,
    as,
    variant,
    color,
    children,
    selected,
    userInteractedRef,
    onSelectTab,
    ...otherProps
  },
  forwardedRef
) {
  const ownRef = useRef(null);
  const ref = useForkRef(ownRef, forwardedRef);

  useEffect(() => {
    if (selected && ref.current && userInteractedRef.current) {
      userInteractedRef.current = false;
      ref.current.focus();
    }
  }, [selected, ref, userInteractedRef]);

  return (
    <StyledTab
      ref={ref}
      as={as}
      role="tab"
      id={`tab:${id}`}
      color={color}
      aria-selected={selected}
      aria-controls={`panel:${id}`}
      selected={selected}
      data-variant={variant}
      onClick={event => {
        if (typeof onSelectTab === 'function') onSelectTab(index, event);
      }}
      {...otherProps}
    >
      {children}
    </StyledTab>
  );
});

Tab.displayName = 'Tab';

Tab.propTypes = {
  id: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  index: PropTypes.number,
  selected: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['enclosed', 'line']),
  userInteractedRef: PropTypes.object,
  onSelectTab: PropTypes.func
};

export default Tab;
