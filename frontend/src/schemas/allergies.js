import * as Yup from 'yup';

export const createAllergySchema = Yup.object({
  allergy: Yup.string().required('Please Enter Name of allergy'),
});
