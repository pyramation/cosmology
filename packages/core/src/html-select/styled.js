import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';

export const StyledSelect = styled(Box)`
  position: relative;
  width: fit-content;
  ${props =>
    props.fluidWidth
      ? css({
          display: 'block',
          width: '100%'
        })
      : css({
          display: 'inline-block'
        })}
`;

export const StyledSelectIcon = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  width: 1.5rem;
  height: 100%;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`;
