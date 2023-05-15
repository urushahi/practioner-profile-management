import * as Yup from 'yup';

export const createUsersSchema = Yup.object({
  name: Yup.string().required('Please Enter your name'),
  email: Yup.string().email().required('Please Enter valid email'),
  password: Yup.string().required('Please enter a valid pasword'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});
