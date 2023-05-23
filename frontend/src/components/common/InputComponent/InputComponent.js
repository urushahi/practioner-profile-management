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
    setFieldValue,
  } = props;

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append(name, file);

    setFieldValue(name, formData);
  };

  const errorClass = errorMessage ? 'form-group--has-error' : '';

  return (
    <>
      <div className={`form-group ${errorClass}`}>
        <label className='form-group__label'>
          {labelText}
          {isRequired && <span className='color-danger--base'> *</span>}
        </label>
        <div className={`${icon && 'input-group'}  `}>
          {type === 'file' ? (
            <input
              id={id}
              type={type}
              disabled={disabled}
              name={name}
              onBlur={onBlur}
              onChange={handleFileChange} // Use custom file change handler
              style={{ fontSize }}
              className='form-group__file'
              accept='image/*' // Limit accepted files to images
              autoComplete={autoComplete}
            />
          ) : (
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
          )}
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
