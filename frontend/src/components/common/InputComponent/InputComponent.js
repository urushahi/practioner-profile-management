import React from 'react';

/**
 * Custom input common component.
 *
 * @param {Object} props
 *
 * @returns {JSX.Element}
 */
const InputComponent = (props) => {
  const {
    id,
    type,
    name,
    value,
    onBlur,
    onChange,
    labelText,
    isRequired,
    placeholder,
    errorMessage,
    fontSize = '14px',
    isReadOnly = false,
    onKeyDown,
    disabled,
    autoComplete = 'off',
    icon = '',
  } = props;

  const errorClass = errorMessage ? 'form-group--has-error' : '';
  return (
    <>
      <div className={`form-group ${errorClass}`}>
        <label className='form-group__label'>
          {labelText}
          {isRequired && <span className='color-danger--base'> *</span>}
        </label>
        <div className={`${icon && 'input-group'}  `}>
          <input
            id={id}
            type={type}
            disabled={disabled}
            name={name}
            value={value}
            onBlur={onBlur}
            readOnly={isReadOnly}
            onChange={onChange}
            style={{ fontSize }}
            placeholder={placeholder}
            className='form-group__control'
            onKeyDown={onKeyDown}
            autoComplete={autoComplete}
          />
          {icon}
        </div>
        {errorMessage && (
          <span className='form-group__error'>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default InputComponent;
