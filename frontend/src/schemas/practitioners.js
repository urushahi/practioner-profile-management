import * as Yup from 'yup';

export const createPractitionerSchema = Yup.object({
  firstName: Yup.string().required('Please Enter first name'),
  lastName: Yup.string().required('Please Enter last name'),
  email: Yup.string().email().required('Please Enter valid email'),
  contact: Yup.string().required('Please Enter contact number'),
  dob: Yup.date().max(new Date()).required('Please Enter Valid Date'),
  workingDays: Yup.number().required('Please Enter number of working days'),
  startTime: Yup.string().required('Please Enter start time'),
  endTime: Yup.string().required('Please Enter end time'),
});
