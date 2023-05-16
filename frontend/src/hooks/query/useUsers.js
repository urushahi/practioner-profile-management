import { useMutation } from 'react-query';

import { useFormik } from 'formik';
import { createUsers } from '../../services/users';
import { createUsersSchema } from '../../schemas/users';

const defaultConfig = {
  validateOnBlur: true,
  // // validateOnMount: true,
  validateOnChange: true,
  enableReinitialize: true,
  dirty: false,
};
// export const usePractitioners = () => {
//   const queryKey = ['practitioners-list'];
//   const query = useQuery(queryKey, () => fetchAllPractitioners());
//   return {
//     ...query,
//   };
// };

export function useCreateUsers(props) {
  const { initialValues, onSuccess, onError } = props;
  const mutation = useMutation(createUsers, {
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
    validationSchema: createUsersSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
    ...defaultConfig,
    displayName: 'Create Users',
  });

  return {
    ...formik,
    ...mutation,
  };
}

// export const usePractitionersById = (id) => {
//   const queryKey = ['practitioners-list-byId', id];
//   const query = useQuery(queryKey, () => getPractitionerById(id));
//   return {
//     ...query,
//   };
// };

// export const useDeletePractitionersById = (id) => {
//   const queryClient = useQueryClient();
//   const queryKey = ['delete-practitioner-byId', id];
//   const query = useQuery(
//     queryKey,
//     () => deletePractitionerById(id),

//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries('practitioners-list');
//       },
//     }
//   );
//   return {
//     ...query,
//   };
// };
