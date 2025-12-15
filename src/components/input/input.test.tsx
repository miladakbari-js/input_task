import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Input } from '@/components/input/input';

describe('Input Component', () => {
  test('renders input element with provided type and className', () => {
    render(<Input type="text" className="input-class" />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input-class');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('allows typing in input', () => {
    render(<Input type="text" />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement.value).toBe('Hello');
  });
});
