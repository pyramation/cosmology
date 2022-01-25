import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';

export const StyledAccordion = styled(Box)``;

export const StyledAccordionItem = styled.div`
  ${props =>
    props.open &&
    css({
      mb: 4
    })}
`;

export const StyledAccordionHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 250ms linear;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};

  ${css({
    fontSize: 'sm',
    borderBottom: '1px'
  })}
`;
