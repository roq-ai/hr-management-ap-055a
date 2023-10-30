import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  department: yup.string().required(),
  salary: yup.number().integer().required(),
  date_of_joining: yup.date().required(),
  date_of_leaving: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
