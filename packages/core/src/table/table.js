import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTfoot,
  StyledTh,
  StyledTd,
  StyledTr,
  variants,
  sizes
} from './styles';

export const Table = forwardRef((props, ref) => {
  return (
    <StyledTable
      as="table"
      {...props}
      role="table"
      ref={ref}
      size={props.size}
      variant={props.variant}
      data-table-variant={props.variant}
      data-table-size={props.size}
    />
  );
});

export const Thead = forwardRef((props, ref) => {
  return <StyledThead as="thead" {...props} ref={ref} />;
});

export const Tbody = forwardRef((props, ref) => {
  return <StyledTbody as="tbody" {...props} ref={ref} />;
});

export const Tfoot = forwardRef((props, ref) => {
  return <StyledTfoot as="tfoot" {...props} ref={ref} />;
});

export const Th = forwardRef(({ isNumeric, ...rest }, ref) => {
  return <StyledTh as="th" {...rest} ref={ref} data-is-numeric={isNumeric} />;
});

export const Tr = forwardRef((props, ref) => {
  return <StyledTr as="tr" {...props} ref={ref} role="row" />;
});

export const Td = forwardRef(({ isNumeric, ...rest }, ref) => {
  return (
    <StyledTd
      as="td"
      {...rest}
      role="gridcell"
      ref={ref}
      data-is-numeric={isNumeric}
    />
  );
});

Table.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes))
};

Table.defaultProps = {
  variant: 'simple',
  size: 'sm'
};
