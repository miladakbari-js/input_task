import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from '@/components/label/label';

describe('Label Component', () => {
  test('renders label text', () => {
    const text = 'ایمیل';
    render(<Label label={text} className="text-gray-500" />);

    expect(screen.getByText(text)).toBeInTheDocument();

    const labelElement = screen.getByText(text);
    expect(labelElement).toHaveClass('text-gray-500');
  });
});
