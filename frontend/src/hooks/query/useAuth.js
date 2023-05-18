import { useMutation } from 'react-query';

import { useFormik } from 'formik';
import { login, signup } from '../../services/auth';
import { createLoginSchema, createUsersSchema } from '../../schemas/users';

const defaultConfig = {
  validateOnBlur: true,
  // // validateOnMount: true,
  validateOnChange: true,
  enableReinitialize: true,
  dirty: false,
};

export function useSignUp(props) {
  const { initialValues, onSuccess, onError } = props;
  const mutation = useMutation(signup, {
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      const errors = error?.response?.data?.errors || {};
      Object.entries(errors).map(([key, value]) => {
        return formik.setFieldError(key, value);
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
  console.log(formik);
  return {
    ...formik,
    ...mutation,
  };
}

export const useLogin = (props) => {
  const { initialValues, onSuccess, onError } = props;
  const mutation = useMutation(login, {
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      const errors = error?.response?.data?.errors || {};
      Object.entries(errors).map(([key, value]) => {
        return formik.setFieldError(key, value);
      });
      onError(error);
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema: createLoginSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
    ...defaultConfig,
    displayName: 'Get Users',
  });
  return {
    ...formik,
    ...mutation,
  };
};