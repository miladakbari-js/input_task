'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import CustomInput from '@/components/ui/CustomInput';
import { Button } from '@/components/ui/button';
import { TestStartIcon, TestEndIcon } from '@/components/ui/icons';

const schema = yup.object({
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  password: yup.string().min(6, 'رمز عبور حداقل 6 کارکتر باشد').required('رمز عبور الزامی است'),
});

type FormValues = yup.InferType<typeof schema>;

function TestInpuForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data);
  };

  return (
    <div className="mx-auto mt-10 max-w-md space-y-6">
      <h1 className="text-xl font-bold"> فرم تست CustomInput</h1>

      {/* Email */}
      <CustomInput
        label="ایمیل"
        startIcon={<TestStartIcon />}
        error={errors.email?.message}
        {...register('email')}
        placeholder="ایمیل خود را وارد کنید"
      />

      {/* Password */}
      <CustomInput
        label="پسورد"
        startIcon={<TestEndIcon />}
        error={errors.password?.message}
        {...register('password')}
        type="password"
        placeholder="رمز عبور خود را وارد کنید"
      />

      <Button onClick={handleSubmit(onSubmit)} className="w-full">
        ارسال فرم
      </Button>
    </div>
  );
}

export default TestInpuForm;
