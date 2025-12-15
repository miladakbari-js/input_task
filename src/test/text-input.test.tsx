import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { Eye } from 'lucide-react';
import { TextInput } from '@/components/text-input';
import { TestIcon } from '@/components/icon/icons';

describe('TextInput Component', () => {
  test('renders input with label', () => {
    render(<TextInput label="Email" />);

    expect(screen.getByText('Email')).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders startIcon and endIcon', () => {
    render(<TextInput label="Password" startIcon={<TestIcon icon="★" />} endIcon={<Eye />} />);

    expect(screen.getByText('★')).toBeInTheDocument();

    const endIconElement = screen.getByTestId('end-icon');
    expect(endIconElement).toBeInTheDocument();
  });

  test('displays error message', () => {
    render(<TextInput label="Email" error="Required field" />);

    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  test('allows typing in input', () => {
    render(<TextInput label="Email" />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'hello@example.com' } });

    expect(inputElement.value).toBe('hello@example.com');
  });
});
