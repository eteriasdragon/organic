import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  email: Yup.string()
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/, 'Invalid email format')
    .email('Invalid email format'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/, 'Invalid phone format'),
  message: Yup.string(),
});

export const initialValues = {
  fullName: '',
  email: '',
  address: '',
  phone: '',
  message: '',
};