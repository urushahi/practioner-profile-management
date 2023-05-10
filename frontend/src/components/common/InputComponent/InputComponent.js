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
    size = '',
    className = '',
  } = props;

  const errorClass = errorMessage ? 'form-group--has-error' : '';
  return (
    <>
      <div
        className={`form-group ${errorClass} ${
          size === 'sm' ? 'form-group--sm' : ''
        } ${className}`}
      >
        <label className='form-group__label'>
          {labelText}
          {isRequired && <span className='text-error-base'> *</span>}
        </label>
        <input
          id={id}
          type={type}
          disabled={disabled}
          name={name}
          defaultValue={value}
          onBlur={onBlur}
          readOnly={isReadOnly}
          onChange={onChange}
          style={{ fontSize }}
          placeholder={placeholder}
          className='form-group__control'
          onKeyDown={onKeyDown}
          autoComplete={autoComplete}
        />
        {errorMessage && (
          <span className='form-group__error'>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default InputComponent;
