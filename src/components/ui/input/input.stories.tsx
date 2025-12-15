import React from 'react';
import { Input } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    className: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export const Default = (args: any) => <Input {...args} />;

Default.args = {
  className: 'border p-2 rounded-md w-64',
  type: 'text',
  placeholder: 'ایمیل خود را وارد کنید',
};

export const Password = (args: any) => <Input {...args} />;

Password.args = {
  className: 'border p-2 rounded-md w-64',
  type: 'password',
  placeholder: 'رمز عبور خود را وارد کنید',
};
