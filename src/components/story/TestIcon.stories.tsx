import React from 'react';
import { Check, X } from 'lucide-react';
import { TestIcon } from '../ui/icons';

export default {
  title: 'Components/TestIcon',
  component: TestIcon,
  argTypes: {
    className: { control: 'text' },
    icon: { control: 'object' },
  },
};

export const Default = () => <TestIcon icon={<Check />} className="text-blue-500 text-xl" />;
export const ErrorIcon = () => <TestIcon icon={<X />} className="text-red-500 text-2xl" />;
