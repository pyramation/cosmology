import styled from 'styled-components';
import { Box } from '@webql/core';

export const MaxWidthWrapper = styled(Box).attrs(props => ({
  paddingLeft: props.paddingLeft || props.pl || { _: 4, md: 8 },
  paddingRight: props.paddingRight || props.pr || { _: 4, md: 8 }
}))`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavBarWidthWrapper = styled(Box).attrs(props => ({
  paddingLeft: props.paddingLeft || props.pl || { _: 4, lg: 8 },
  paddingRight: props.paddingRight || props.pr || { _: 4, lg: 8 }
}))`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
