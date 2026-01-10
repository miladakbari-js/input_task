'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TestIcon } from '@/components/ui/icon/icons';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { schema } from '@/components/ui/text-input/schema';

import { Button } from '@/components/ui/button';
import { FormValues, TextInput } from '@/components/ui/text-input';
import { MailIcon } from '@/components/shared/icons';

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

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mx-auto mt-10 max-w-md space-y-8 rounded border-2 p-10">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-xl font-bold"> فرم تست text-input</h1>
      </div>

      {/* Email */}
      <TextInput
        label="ایمیل"
        startIcon={<MailIcon className="h-4 w-4 text-white" />}
        error={errors.email?.message}
        {...register('email')}
        placeholder="ایمیل خود را وارد کنید"
      />

      {/* Password */}
      <TextInput
        label="رمز عبور"
        startIcon={<Lock size={18} />}
        endIcon={
          showPassword ? (
            <EyeOff size={18} className="cursor-pointer" onClick={togglePasswordVisibility} />
          ) : (
            <Eye size={18} className="cursor-pointer" onClick={togglePasswordVisibility} />
          )
        }
        error={errors.password?.message}
        {...register('password')}
        type={showPassword ? 'text' : 'password'}
        placeholder="رمز عبور خود را وارد کنید"
      />

      <Button
        onClick={handleSubmit(onSubmit)}
        className="mt-6 h-10 w-full cursor-pointer rounded-sm bg-blue-600 transition-all duration-200 hover:bg-blue-700 active:scale-95"
      >
        ارسال فرم
      </Button>
    </div>
  );
}

export default TestInpuForm;
