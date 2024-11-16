import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(6, ({ min }) => `Username must be at least ${min} characters`)
      .required('Username is required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });