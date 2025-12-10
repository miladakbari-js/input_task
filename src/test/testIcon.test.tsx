import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { TestIcon } from '@/components/ui/icons';

describe('TestIcon Component', () => {
  test('renders icon text', () => {
    const iconText = '★';
    render(<TestIcon icon={iconText} className="text-red-500" />);

    const iconElement = screen.getByText(iconText);
    expect(iconElement).toBeInTheDocument();

    expect(iconElement).toHaveClass('text-red-500');
  });

  test('renders default class when no className provided', () => {
    const iconText = '✔';
    render(<TestIcon icon={iconText} />);

    const iconElement = screen.getByText(iconText);
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('text-gray-500');
  });
});
