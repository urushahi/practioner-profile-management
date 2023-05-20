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
import { useAllergies } from '../../hooks/query/useAllergies';
import ReactSelect from '../../components/common/ReactSelect/ReactSelect';
import { WorkingDays } from '../../constants/constants';
import InputCheckbox from '../../components/common/InputCheckbox';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  dob: '',
  workingDays: [],
  startTime: '',
  endTime: '',
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
  } = useCreatePractitioners({
    initialValues: data ? data : initialValues,
    onSuccess: () => {
      dispatch(hideSideBarAction());
      queryClient.invalidateQueries('practitioners-list');
    },
    id,
  });

  const workingDaysOptions = Object.keys(WorkingDays).map((key) => ({
    value: parseInt(key),
    label: WorkingDays[key],
  }));

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
                onBlur={handleBlur}
                value={values.id}
                disabled={true}
              />
            )}
            <InputComponent
              name={'firstName'}
              labelText={'First Name'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter First name'}
              value={values.firstName}
              errorMessage={errors.firstName}
              isRequired={true}
            />
            <InputComponent
              name={'lastName'}
              labelText={'Last Name'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter Last name'}
              value={values.lastName}
              errorMessage={errors.lastName}
              isRequired={true}
            />
            <InputComponent
              name={'email'}
              type='email'
              labelText={'Email'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'someone@mail.com'}
              value={values.email}
              errorMessage={errors.email}
              disabled={id}
              isRequired={true}
            />
            <InputComponent
              name={'contact'}
              labelText={'Contact'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'example : 9841234567'}
              value={values.contact}
              errorMessage={errors.contact}
              isRequired={true}
            />
            <InputComponent
              name={'dob'}
              labelText={'Date of Birth'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'1999-01-01'}
              value={values.dob}
              type='date'
              errorMessage={errors.dob}
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
              errorMessage={errors.workingDays}
              isRequired={true}
            />

            <InputComponent
              name={'startTime'}
              labelText={'Start Time'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'1999-01-01'}
              value={values.startTime}
              type='time'
              errorMessage={errors.startTime}
              isRequired={true}
            />
            <InputComponent
              name={'endTime'}
              labelText={'End Time'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'1999-01-01'}
              value={values.endTime}
              type='time'
              errorMessage={errors.endTime}
              isRequired={true}
            />
            <InputCheckbox
              id={'isIcuSpecialist'}
              name={'isIcuSpecialist'}
              labelText={'Icu Specialist ?'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.isIcuSpecialist}
              errorMessage={errors.endTime}
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
