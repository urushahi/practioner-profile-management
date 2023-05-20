import React from 'react';

/**
 * Custom input common component.
 *
 * @param {Object} props
 *
 * @returns {JSX.Element}
 */
const InputCheckbox = (props) => {
  const {
    id,
    name,
    value,
    onBlur,
    onChange,
    labelText,
    isRequired,
    placeholder,
    errorMessage,
    className = '',
  } = props;

  const errorClass = errorMessage ? 'form-group--has-error' : '';
  return (
    <>
      <div
        className={`form-group form-group--inline form-group--checkbox${errorClass} ${className}`}
      >
        <input
          id={id}
          type={'checkbox'}
          name={name}
          defaultValue={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          checked={value}
        />
        <label className='form-group__label' htmlFor={id}>
          {labelText}
          {isRequired && <span className='color-danger--base'> *</span>}
        </label>
      </div>
      {errorMessage && (
        <span className='form-group__error'>{errorMessage}</span>
      )}
    </>
  );
};

export default InputCheckbox;
