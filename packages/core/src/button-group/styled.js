import styled from 'styled-components';
import Box from '../box';
import { StyledButton } from '../button/styled';

export const StyledButtonGroup = styled(Box)`
  display: inline-block;
  position: relative;
  z-index: 2;

  ${/* sc-selector */ StyledButton}[data-checked="true"] {
    z-index: 1;
  }

  ${/* sc-selector */ StyledButton}[data-checked="false"] {
    z-index: 0;
  }

  ${/* sc-selector */ StyledButton}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: -1px;
  }

  ${/* sc-selector */ StyledButton}:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin-right: -1px;
  }

  ${/* sc-selector */ StyledButton}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
