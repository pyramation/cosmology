import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';

const getSelectors = type => ({
  checkedAndDisabled: `input[type=${type}]:checked:disabled + &, input[type=${type}]:checked[aria-checked=mixed]:disabled + &`,
  checkedAndHover: `input[type=${type}]:checked:hover:not(:disabled) + &, input[type=${type}]:checked[aria-checked=mixed]:hover:not(:disabled) + &`,
  checkedAndFocus: `input[type=${type}]:checked:focus + &, input[type=${type}]:checked[aria-checked=mixed]:focus + &`,
  disabled: `input[type=${type}]:disabled + &`,
  focus: `input[type=${type}]:focus + &`,
  hover: `input[type=${type}]:hover:not(:disabled):not(:checked) + &`,
  checked: `input[type=${type}]:checked + &, input[type=${type}]:checked[aria-checked=mixed] + &`,
  invalid: `input[type=${type}][aria-invalid=true] + &`
});

const ControlBox = styled(Box)`
  transition: background-color 120ms, box-shadow 250ms;
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};

  ${props => {
    const selectors = getSelectors(props.type);
    return css({
      [selectors.focus]: props._focus,
      [selectors.hover]: props._hover,
      [selectors.disabled]: props._disabled,
      [selectors.invalid]: props._invalid,
      [selectors.checkedAndDisabled]: props._checkedAndDisabled,
      [selectors.checkedAndFocus]: props._checkedAndFocus,
      [selectors.checkedAndHover]: props._checkedAndHover,
      '& > *': props._child,
      [selectors.checked]: {
        ...props._checked,
        '& > *': props._checkedAndChild
      }
    });
  }}
`;

export default ControlBox;

ControlBox.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  _hover: PropTypes.object,
  _invalid: PropTypes.object,
  _disabled: PropTypes.object,
  _focus: PropTypes.object,
  _checked: PropTypes.object,
  _child: PropTypes.object,
  _checkedAndChild: PropTypes.object,
  _checkedAndDisabled: PropTypes.object,
  _checkedAndFocus: PropTypes.object,
  _checkedAndHover: PropTypes.object
};

ControlBox.defaultProps = {
  type: 'checkbox',
  _child: {
    opacity: 0
  },
  _checkedAndChild: {
    opacity: 1
  }
};
