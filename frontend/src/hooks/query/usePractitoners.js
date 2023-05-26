import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createPractioners,
  deletePractitionerById,
  fetchAllPractitioners,
  getPractitionerById,
  updatePractitionerById,
} from '../../services/practitioners';
import { useFormik } from 'formik';
import { createPractitionerSchema } from '../../schemas/practitioners';
import { useEffect } from 'react';

const defaultConfig = {
  validateOnBlur: true,
  // validateOnMount: true,
  validateOnChange: true,
  enableReinitialize: true,
  dirty: false,
};
export const usePractitioners = () => {
  const queryKey = ['practitioners-list'];
  const query = useQuery(queryKey, () => fetchAllPractitioners());
  return {
    ...query,
  };
};

export const useCreatePractitioners = (props) => {
  const { initialValues, onSuccess, onError, id } = props;

  const mutation = useMutation(
    id ? updatePractitionerById : createPractioners,
    {
      onSuccess: () => {
        onSuccess(id);
      },
      onError: (error) => {
        if (error?.response?.status === 409) {
          return formik.setFieldError('email', error?.response?.data?.message);
        }
        if (error?.response?.status === 422) {
          const errors = error?.response?.data?.errors || {};
          Object.entries(errors).forEach(([key, value]) => {
            formik.setFieldError(key, value);
          });
        }
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
    displayName: 'Create Practitioners',
    validationSchema: createPractitionerSchema, // Add your validation schema here
  });

  return {
    ...formik,
    ...mutation,
  };
};

export const usePractitionersById = (id) => {
  const queryKey = ['practitioners-list-byId', id];
  const query = useQuery(queryKey, () => getPractitionerById(id), {
    enabled: id !== null && id !== undefined,
  });
  return {
    ...query,
  };
};

export const useDeletePractitionerById = async (props) => {
  const queryClient = useQueryClient();
  const { id, onSuccess, onError } = props;

  const mutation = useMutation(() => deletePractitionerById(id), {
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries('practitioners-list');
    },
    onError: (error) => {
      onError(error);
    },
  });
  return {
    ...mutation,
  };
};
