import React, { useEffect, useState } from 'react';
import InputComponent from '../../../components/common/InputComponent';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { hideSideBarAction } from '../../../slices/ui/allergySidebarSlice';
import { MdClose } from 'react-icons/md';
import {
  useAllergyById,
  useCreateAllergy,
} from '../../../hooks/query/useAllergies';

const initialValues = {
  allergy: '',
};
const CreateAllergy = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.ui.allergySidebar);
  const { show, id, title = 'Create New Allergy' } = sidebar;
  const queryClient = useQueryClient();

  const { data } = useAllergyById(id);

  const { values, handleChange, errors, handleSubmit, resetForm, handleBlur } =
    useCreateAllergy({
      initialValues: data ? data : initialValues,
      onSuccess: () => {
        resetForm({ values: '' });
        dispatch(hideSideBarAction());
        queryClient.invalidateQueries('allergies-list');
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
            {/* {id && (
              <InputComponent
                name={'id'}
                labelText={'Practitioner Id'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
                disabled={true}
              />
            )} */}
            <InputComponent
              name={'allergy'}
              labelText={'Allergy Name'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter Allergy name'}
              value={values.allergy}
              errorMessage={errors.allergy}
              isRequired={true}
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

export default CreateAllergy;
