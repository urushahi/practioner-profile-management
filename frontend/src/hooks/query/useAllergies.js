import { useMutation, useQuery } from 'react-query';
import {} from '../../services/practitioners';
import {
  createAllergies,
  fetchAllergies,
  getAllergyById,
  updateAllergyById,
} from '../../services/allergies';
import { useFormik } from 'formik';
import { createAllergySchema } from '../../schemas/allergies';

const defaultConfig = {
  validateOnBlur: true,
  validateOnChange: true,
  enableReinitialize: true,
  dirty: true,
};

export const useAllergies = () => {
  const queryKey = ['allergies-list'];
  const query = useQuery(queryKey, () => fetchAllergies());
  return {
    ...query,
  };
};

export const useCreateAllergy = (props) => {
  const { initialValues, onSuccess, onError, id } = props;

  const mutation = useMutation(
    id ? updateAllergyById : createAllergies,

    {
      onSuccess: () => {
        onSuccess(id);
      },
      onError: (error) => {
        const errors = error?.response?.data?.errors || {};
        Object.entries(errors).forEach(([key, value]) => {
          formik.setFieldError(key, value);
        });
        onError(error);
      },
    }
  );

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
    ...defaultConfig, // Add your desired configuration options for useFormik here
    displayName: 'Create Allergy',
    validationSchema: createAllergySchema, // Add your validation schema here
  });
  return {
    ...formik,
    ...mutation,
  };
};

export const useAllergyById = (id) => {
  const queryKey = ['allergy-byId', id];
  const query = useQuery(queryKey, () => getAllergyById(id), {
    enabled: id !== null && id !== undefined,
  });
  return {
    ...query,
  };
};
