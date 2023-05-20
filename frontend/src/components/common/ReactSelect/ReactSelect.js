import React, { useState } from 'react';
import Select from 'react-select';

const ReactSelect = (props) => {
  const {
    id,
    isMulti,
    options,
    labelText,
    isRequired,
    errorMessage,
    setFieldValue,
    selectedOption,
    setFieldTouched,
    placeholder = 'Select ',
    className = '',
  } = props;
  const errorClass = errorMessage ? 'form-group--has-error' : '';

  return (
    <>
      <div
        className={`form-group ${errorClass}
        } ${className}`}
      >
        <label className='form-group__label'>
          {labelText}
          {isRequired && <span className='color-danger--base'> *</span>}
        </label>
        <Select
          id={id}
          options={options}
          className='form-group__select'
          classNames={{
            control: (state) =>
              state.isFocused ? 'form-control--focus' : 'form-control',
          }}
          isMulti={isMulti}
          value={selectedOption}
          placeholder={placeholder}
          onBlur={() => setFieldTouched(id, false)}
          onChange={(option) => {
            if (isMulti) {
              console.log(option);
              if (!option) {
                return setFieldValue(id, [option]);
              }
              return setFieldValue(id, [...option]);
            }
            setFieldValue(id, { ...option });
          }}
        />
        {errorMessage && (
          <span className='form-group__error'>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default ReactSelect;
