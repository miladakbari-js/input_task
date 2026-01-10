import React from 'react';
import { TextInput } from './text-input';
import { Eye } from 'lucide-react';
import { TestIcon } from '@/components/ui/icon/icons';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const Default = () => (
  <TextInput
    label="Email"
    placeholder="Enter your email"
  />
);

export const WithError = () => (
  <TextInput
    label="Email"
    placeholder="Enter your email"
    error="Required field"
  />
);

export const WithIcons = () => (
  <TextInput
    label="Password"
    type="password"
    placeholder="Enter your password"
    startIcon={<TestIcon icon="★" />}
    endIcon={<Eye />}
  />
);

export const Disabled = () => (
  <TextInput
    label="Username"
    placeholder="Disabled input"
    disabled
  />
);
