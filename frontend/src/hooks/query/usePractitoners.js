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

const defaultConfig = {
  validateOnBlur: true,
  // // validateOnMount: true,
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
  const { initialValues, onSuccess, onError, id } = props;

  const mutation = useMutation(
    id ? updatePractitionerById : createPractioners,
    {
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
    }
  );

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

export const usePractitionersById = (id) => {
  const queryKey = ['practitioners-list-byId', id];
  const query = useQuery(queryKey, () => getPractitionerById(id));
  return {
    ...query,
  };
};

export const useDeletePractitionersById = (id) => {
  const queryClient = useQueryClient();
  const queryKey = ['delete-practitioner-byId', id];
  const query = useQuery(
    queryKey,
    () => deletePractitionerById(id),

    {
      onSuccess: () => {
        queryClient.invalidateQueries('practitioners-list');
      },
    }
  );
  return {
    ...query,
  };
};
