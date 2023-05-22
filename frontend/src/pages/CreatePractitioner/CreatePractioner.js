import React, { useEffect, useState } from 'react';
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
import { useAllergies } from '../../hooks/query/useAllergies';
import ReactSelect from '../../components/common/ReactSelect/ReactSelect';
import { WorkingDays } from '../../constants/constants';
import InputCheckbox from '../../components/common/InputCheckbox';
import * as toast from '../../utils/toast';
import Dropzone from 'react-dropzone';
import ImageDropzone from '../../components/common/ImageDropzone';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  dob: '',
  workingDays: [],
  startTime: '',
  endTime: '',
  image: '',
  isIcuSpecialist: false,
  allergies: [],
};
const CreatePractioner = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.ui.sidebar);
  const { show, id, title = 'Create New Practioner' } = sidebar;

  const queryClient = useQueryClient();

  const { data } = usePractitionersById(id);
  const { data: allergy } = useAllergies();

  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
    resetForm,
    handleBlur,
    touched,
  } = useCreatePractitioners({
    initialValues: data ? data : initialValues,
    onSuccess: (id) => {
      resetForm();
      toast.success({
        title: 'Success',
        message: id
          ? 'Practitioner updated successfully'
          : 'Practitioner created successfully',
      });
      dispatch(hideSideBarAction());
      queryClient.invalidateQueries('practitioners-list');
    },
    id,
  });

  console.log(values.image);
  const workingDaysOptions = Object.keys(WorkingDays).map((key) => ({
    value: parseInt(key),
    label: WorkingDays[key],
  }));

  const closeForm = () => {
    dispatch(hideSideBarAction());
    resetForm();
  };

  const errorHandler = (inputId) => {
    return errors?.[inputId] && touched?.[inputId] ? errors?.[inputId] : '';
  };

  console.log(values);

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
                onBlur={handleBlur}
                value={values.id}
                disabled={true}
              />
            )}
            {/* <ImageDropzone
              id={'image'}
              name={'image'}
              onChange={handleChange}
              value={values.image}
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
            /> */}

            <InputComponent
              id={'image'}
              name={'image'}
              labelText={'Image'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter First name'}
              value={values.image}
              errorMessage={errorHandler('image')}
              isRequired={true}
              type={'file'}
            />
            <InputComponent
              id={'firstName'}
              name={'firstName'}
              labelText={'First Name'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter First name'}
              value={values.firstName}
              errorMessage={errorHandler('firstName')}
              isRequired={true}
            />
            <InputComponent
              name={'lastName'}
              id={'lastName'}
              labelText={'Last Name'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter Last name'}
              value={values.lastName}
              errorMessage={errorHandler('lastName')}
              isRequired={true}
            />
            <InputComponent
              name={'email'}
              id={'email'}
              type='email'
              labelText={'Email'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'someone@mail.com'}
              value={values.email}
              disabled={id}
              isRequired={true}
              errorMessage={errorHandler('email')}
            />
            <InputComponent
              name={'contact'}
              id={'contact'}
              labelText={'Contact'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'example : 9841234567'}
              value={values.contact}
              isRequired={true}
              errorMessage={errorHandler('contact')}
            />
            <InputComponent
              name={'dob'}
              id={'dob'}
              labelText={'Date of Birth'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'1999-01-01'}
              value={values.dob}
              type='date'
              errorMessage={errorHandler('dob')}
              isRequired={true}
            />
            <ReactSelect
              id={'workingDays'}
              isMulti={true}
              options={workingDaysOptions}
              name={'workingDays'}
              labelText='Working days'
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              selectedOption={values?.['workingDays'] || []}
              isRequired={true}
              errorMessage={errorHandler('workingDays')}
            />

            <InputComponent
              name={'startTime'}
              id={'startTime'}
              labelText={'Start Time'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'1999-01-01'}
              value={values.startTime}
              type='time'
              errorMessage={errorHandler('startTime')}
              isRequired={true}
            />
            <InputComponent
              name={'endTime'}
              id={'endTime'}
              labelText={'End Time'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'1999-01-01'}
              value={values.endTime}
              type='time'
              errorMessage={errorHandler('endTime')}
              isRequired={true}
            />
            <InputCheckbox
              id={'isIcuSpecialist'}
              name={'isIcuSpecialist'}
              labelText={'Icu Specialist ?'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.isIcuSpecialist}
            />
            <ReactSelect
              id={'allergies'}
              isMulti={true}
              options={allergy}
              name={'allergies'}
              labelText='Allergies'
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              selectedOption={values?.['allergies'] || []}
              errorMessage={errors.allergies}
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
