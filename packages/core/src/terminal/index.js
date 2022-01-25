import styled from 'styled-components';
import get from '@styled-system/theme-get';
import css from '@styled-system/css';
import Box from '../box';

export const Terminal = styled(Box).attrs({ as: 'label', tabIndex: -1 })`
  border-style: solid;
  border-width: 0.5px;
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  height: 100%;

  ${css({
    fontSize: 'sm',
    lineHeight: 'shorter',
    px: [2, 3],
    backgroundColor: 'rgb(12,12,12)',
    borderColor: 'rgba(0,0,0,0.8)',
    color: 'rgb(180,180,180)',
    fontFamily: '"Source Code Pro", monospace'
  })}
`;

export const TerminalScreen = styled(Box)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const TerminalScreenOutput = styled(Box)``;

export const TerminalOutputBuffer = styled(Box).attrs({ as: 'pre' })`
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
`;

export const TerminalPrompt = styled(Box).attrs({ as: 'form', color: 'white' })`
  display: 'flex';
  flex-direction: 'row';
`;

export const TerminalPromptInput = styled(Box).attrs({
  as: 'input',
  color: 'white',
  autoCapitalize: 'off'
})`
  margin: 0;
  padding: 0;
  font: inherit;
  appearance: none;
  background-color: inherit;
  border: 0;
  outline: 0;
  flex: 1 0 auto;
  cursor: inherit;
  width: 0;
  caret-color: ${get('colors.blue.400')};
`;

export default Terminal;
