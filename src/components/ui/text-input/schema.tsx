import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  password: yup.string().min(6, 'رمز عبور حداقل 6 کارکتر باشد').required('رمز عبور الزامی است'),
});
