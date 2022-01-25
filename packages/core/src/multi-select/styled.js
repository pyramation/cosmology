import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';
import { StyledInput } from '../input/styled';
import { disabledProps, readOnlyProps } from '../input/variants';

export const StyledMultiSelect = styled(StyledInput).attrs(props => ({
  as: 'div',
  size: props.size || 'sm',
  px: 2,
  py: 1,
  minHeight: 8
}))`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: auto;

  ${props => css(disabledProps(props))}
  ${props => css(readOnlyProps(props))}
`;

export const StyledItems = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  flex: 1 1 100%;
  overflow: hidden;
`;
