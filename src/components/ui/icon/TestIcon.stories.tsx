import React from 'react';
import { Check, X } from 'lucide-react';
import { TestIcon } from './icons';

export default {
  title: 'Components/TestIcon',
  component: TestIcon,
  argTypes: {
    className: { control: 'text' },
    icon: { control: 'object' },
  },
};

export const Default = () => <TestIcon icon={<Check />} className="text-xl text-blue-500" />;
export const ErrorIcon = () => <TestIcon icon={<X />} className="text-2xl text-red-500" />;
