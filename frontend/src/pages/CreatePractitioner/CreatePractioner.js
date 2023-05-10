import React from 'react';
import InputComponent from '../../components/common/InputComponent';

const CreatePractioner = ({ className, toggleSideForm }) => {
  return (
    <div className={className}>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className='title'>Create New Practioner</h2>
        <button className='btn btn--error' onClick={toggleSideForm}>
          X
        </button>
      </div>
      <form action=''>
        <InputComponent
          name={'firstname'}
          labelText={'First Name'}
          //   onChange={handleChange}
          placeholder={'Enter First name'}
          //   value={values[CREATE_BAG_FIELDS.NAME.name]}
          //   errorMessage={errorHandler(CREATE_BAG_FIELDS.NAME.name)}
        />
      </form>
    </div>
  );
};

export default CreatePractioner;
