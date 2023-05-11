import React from 'react';
import InputComponent from '../../components/common/InputComponent';
import { useCreatePractitioners } from '../../hooks/query/usePractitoners';
import { useQueryClient } from 'react-query';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  dob: '',
  workingDays: '',
  startTime: '',
  endTime: '',
};
const CreatePractioner = ({ className, toggleSideForm }) => {
  const queryClient = useQueryClient();
  const { values, handleChange, errors, handleSubmit } = useCreatePractitioners(
    {
      initialValues: initialValues,
      onSuccess: () => {
        toggleSideForm();
        queryClient.invalidateQueries('practitioners-list');
      },
    }
  );
  return (
    <div className={className}>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className='title'>Create New Practioner</h2>
        <button className='btn btn--error' onClick={toggleSideForm}>
          X
        </button>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <InputComponent
          name={'firstName'}
          labelText={'First Name'}
          onChange={handleChange}
          placeholder={'Enter First name'}
          value={values.firstName}
          errorMessage={errors.firstName}
        />
        <InputComponent
          name={'lastName'}
          labelText={'Last Name'}
          onChange={handleChange}
          placeholder={'Enter Last name'}
          value={values.lastName}
          errorMessage={errors.lastName}
        />
        <InputComponent
          name={'email'}
          type='email'
          labelText={'Email'}
          onChange={handleChange}
          placeholder={'someone@mail.com'}
          value={values.email}
          errorMessage={errors.email}
        />
        <InputComponent
          name={'contact'}
          labelText={'Contact'}
          onChange={handleChange}
          // placeholder={'someone@mail.com'}
          value={values.contact}
          errorMessage={errors.contact}
        />
        <InputComponent
          name={'dob'}
          labelText={'dob'}
          onChange={handleChange}
          placeholder={'1999-01-01'}
          value={values.dob}
          type='date'
          errorMessage={errors.dob}
        />
        <InputComponent
          type='number'
          name={'workingDays'}
          labelText={'Working Days'}
          onChange={handleChange}
          placeholder={'Enter Working days'}
          value={values.workingDays}
          errorMessage={errors.workingDays}
        />
        <InputComponent
          name={'startTime'}
          labelText={'Start Time'}
          onChange={handleChange}
          placeholder={'1999-01-01'}
          value={values.startTime}
          type='time'
          errorMessage={errors.startTime}
        />
        <InputComponent
          name={'endTime'}
          labelText={'End Time'}
          onChange={handleChange}
          placeholder={'1999-01-01'}
          value={values.endTime}
          type='time'
          errorMessage={errors.endTime}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePractioner;
