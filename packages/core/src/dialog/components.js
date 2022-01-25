import React from 'react';
import css from '@styled-system/css';
import styled from 'styled-components';
import Box from '../box';
import Button from '../button';
import { wrapEvent } from '../utils';

import { DialogContext } from './context';

export const DialogContent = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${css({
    borderRadius: 'sm',
    bg: 'white',
    boxShadow: 'md',
    mx: ['auto', 'auto'],
    my: 12
  })}
`;

// ==== Dialog components
export const DialogHeader = styled(Box)`
  ${css({
    px: 6,
    py: 4
  })}
`;

const StyledCloseButton = styled.div`
  position: absolute;
  ${css({
    top: 2,
    right: 2
  })}
`;

export const DialogCloseButton = ({ onClick }) => {
  return (
    <DialogContext.Consumer>
      {({ onClose }) => (
        <StyledCloseButton>
          <Button
            icon="close"
            variant="tertiary"
            size="sm"
            onClick={wrapEvent(onClose, onClick)}
          />
        </StyledCloseButton>
      )}
    </DialogContext.Consumer>
  );
};

export const DialogBody = styled(Box)`
  ${css({
    px: 6,
    py: 2
  })}
`;

export const DialogFooter = styled(Box).attrs(props => ({
  as: props.as || 'footer'
}))`
  ${css({
    px: 6,
    py: 4
  })}

  display: flex;
  justify-content: flex-end;
`;
