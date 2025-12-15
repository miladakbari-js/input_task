import React from 'react';
import Label from '../label/label';

export default {
  title: 'Components/Label',
  component: Label,
};

export const Default = () => <Label label=" ایمیل" className="text-sm font-medium text-gray-700" />;

export const Highlighted = () => <Label label="پسورد" className="text-lg font-bold text-red-500" />;
