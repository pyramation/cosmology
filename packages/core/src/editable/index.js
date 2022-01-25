import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useControlled, usePrevious } from '@webql/hooks';

import { StyledEditable, StyledInput, StyledPreview } from './styled';

const Editable = React.forwardRef((props, forwardedRef) => {
  const {
    type,
    value: valueProp,
    defaultValue,
    disabled,
    placeholder,
    editing: editingProp,
    hoverShadow,
    // ====
    onCancel,
    onChange,
    onConfirm,
    onEdit,
    ...otherProps
  } = props;

  const inputRef = useRef(null);
  const previewRef = useRef(null);

  const [value, setValue] = useControlled({
    defaultValue,
    controlled: valueProp,
    onChange
  });

  const [editing, setEditing] = useControlled({
    defaultValue: Boolean(editingProp),
    controlled: editingProp,
    onChange: onEdit
  });

  const prevEditing = usePrevious(editing);
  const prevValueRef = useRef(value);
  const inputWidthRef = useRef(null);

  // Focus the input when clicking on the preview
  useEffect(() => {
    if (!prevEditing && editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing, prevEditing]);

  // Ensure the preview width is always capped to prevent overflow
  useEffect(() => {
    if (!inputRef.current || !editing) return;
    const inputWidth = inputRef.current.clientWidth;
    inputWidthRef.current = inputWidth;
  }, [editing]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleEdit = () => {
    if (disabled) return;
    setEditing(true);
  };

  const handleConfirm = () => {
    if (!disabled) setEditing(false);
    onConfirm(value);
    prevValueRef.current = value;
  };

  const handleCancel = () => {
    const prevValue = prevValueRef.current;
    setEditing(false);
    setValue(prevValue);
    onCancel(prevValue);
  };

  const handleOnBlur = () => {
    if (typeof editingProp !== 'undefined') return;
    handleConfirm();
  };

  const handleKeyDown = event => {
    const { key } = event;
    if (key === 'Escape') {
      handleCancel();
      return;
    }

    if (key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <StyledEditable
      tabIndex={-1}
      ref={forwardedRef}
      disabled={disabled}
      {...otherProps}
    >
      {editing ? (
        <StyledInput
          ref={inputRef}
          placeholder={placeholder}
          type={isTypeSupported(type) ? type : 'text'}
          value={value}
          disabled={disabled}
          editing={editing}
          onChange={handleChange}
          onBlur={handleOnBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <StyledPreview
          onClick={handleEdit}
          ref={previewRef}
          maxWidth={inputWidthRef.current ? inputWidthRef.current : 'unset'}
          hoverShadow={hoverShadow}
        >
          {value || placeholder}
        </StyledPreview>
      )}
    </StyledEditable>
  );
});

export default Editable;

Editable.propTypes = {
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  editing: PropTypes.bool,
  // Whether or not box shadow is shown in Preview on hover
  hoverShadow: PropTypes.bool,
  // ====
  maxWidth: PropTypes.any,
  minWidth: PropTypes.any,
  // ====
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'textarea',
    'text',
    'search',
    'tel',
    'url',
    'password'
  ]),
  // ====
  // Cb invoked when user presses esc, captures last accepted input value
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  // Cb invoked when user confirms by pressing enter or unfocus/blur input
  onConfirm: PropTypes.func,
  // Cb invoked when switch to edit mode
  onEdit: PropTypes.func
};

const noop = () => {};

Editable.displayName = 'Editable';
Editable.defaultProps = {
  placeholder: 'Click to edit',
  type: 'text',
  onCancel: noop,
  onChange: noop,
  onConfirm: noop,
  onEdit: noop
};

function isTypeSupported(input) {
  const supported = ['textarea', 'text', 'search', 'tel', 'url', 'password'];
  return supported.includes(input.type);
}
