import * as React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
