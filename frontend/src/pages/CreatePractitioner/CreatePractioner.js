import React from 'react';
import InputComponent from '../../components/common/InputComponent';
import {
  useCreatePractitioners,
  usePractitionersById,
} from '../../hooks/query/usePractitoners';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { hideSideBarAction } from '../../slices/ui/sidebarSlice';
import { MdClose } from 'react-icons/md';

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
const CreatePractioner = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.ui.sidebar);
  const { show, id, title = 'Create New Practioner' } = sidebar;

  const queryClient = useQueryClient();

  const { data } = usePractitionersById(id);

  const { values, handleChange, errors, handleSubmit, resetForm } =
    useCreatePractitioners({
      initialValues: data ? data : initialValues,
      onSuccess: () => {
        dispatch(hideSideBarAction());
        queryClient.invalidateQueries('practitioners-list');
      },
      id,
    });

  const closeForm = () => {
    dispatch(hideSideBarAction());
    resetForm();
  };
  return (
    <div className={classNames({ show: show }, 'sideForm-wrapper', className)}>
      <div className='sideForm'>
        <div className='d-flex align-items-center justify-content-between'>
          <h2 className='title'>{title}</h2>
          <button className='btn btn__iconOnly' onClick={closeForm}>
            <MdClose size='24' />
          </button>
        </div>
        <form action='' onSubmit={handleSubmit} className=' mt-4x'>
          <div>
            {id && (
              <InputComponent
                name={'id'}
                labelText={'Practitioner Id'}
                onChange={handleChange}
                value={values.id}
                disabled={true}
              />
            )}
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
              labelText={'Date of Birth'}
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
          </div>
          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-secondary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePractioner;
