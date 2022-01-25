import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';
import Icon from '../icon';

const StyledLink = styled(Box).attrs(props => ({
  as: props.as || 'a'
}))`
  transition: all 0.15s ease-out;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  ${props =>
    css({
      color: props.color ? 'blue.500' : null,
      '&:hover': {
        color: props.color ? 'blue.400' : 'gray.600'
      },
      '&:focus': {
        boxShadow: 'outline'
      },
      '&[aria-disabled="true"]': {
        opacity: 0.4,
        cursor: 'not-allowed',
        textDecoration: 'none'
      }
    })}

  ${props =>
    props.underline &&
    css({
      textDecoration: 'underline'
    })}
`;

const Link = forwardRef(
  (
    {
      as,
      disabled,
      external,
      noIcon,
      onClick,
      children,
      color,
      underline,
      ...rest
    },
    ref
  ) => {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' } // prevent reverse tabnapping security exploit
      : null;

    return (
      <StyledLink
        as={as}
        ref={ref}
        tabIndex={disabled ? -1 : undefined}
        aria-disabled={disabled}
        onClick={disabled ? event => event.preventDefault() : onClick}
        underline={underline}
        color={color}
        {...externalProps}
        {...rest}
      >
        {children}
        {external && !noIcon && (
          <Icon name="external-link" color="inherit" size={4} ml={1} />
        )}
      </StyledLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;

Link.propTypes = {
  href: PropTypes.string,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  noIcon: PropTypes.bool,
  color: PropTypes.bool
};

Link.defaultProps = {
  as: 'a',
  underline: false
};
