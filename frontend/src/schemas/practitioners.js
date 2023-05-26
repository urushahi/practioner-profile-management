import * as Yup from 'yup';

export const createPractitionerSchema = Yup.object({
  firstName: Yup.string().required('Please Enter first name'),
  lastName: Yup.string().required('Please Enter last name'),
  email: Yup.string().email().required('Please Enter valid email'),
  contact: Yup.string().required('Please Enter contact number'),
  dob: Yup.date().max(new Date()).required('Please Enter Valid Date'),
  workingDays: Yup.array()
    .required('Please Select any one of working days')
    .test(
      'is-non-empty',
      'Please Select any one of working days',
      (value) => value && value.length > 0
    ),
  startTime: Yup.string().required('Please Enter start time'),
  endTime: Yup.string().required('Please Enter end time'),
});
