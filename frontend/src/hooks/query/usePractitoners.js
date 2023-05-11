import { useMutation, useQuery } from 'react-query';
import {
  createPractioners,
  fetchAllPractitioners,
} from '../../services/practitioners';
import { useFormik } from 'formik';
import { createPractitionerSchema } from '../../schemas/practitioners';

const defaultConfig = {
  validateOnBlur: true,
  validateOnMount: true,
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

export function useCreatePractitioners(props) {
  const { initialValues, onSuccess, onError } = props;

  const mutation = useMutation(createPractioners, {
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      const errors = error?.response?.data?.errors || {};
      Object.entries(errors).map(([key, value]) => {
        formik.setFieldError(key, value);
      });
      onError(error);
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema: createPractitionerSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
    ...defaultConfig,
    displayName: 'Create Practitioners',
  });

  return {
    ...formik,
    ...mutation,
  };
}
