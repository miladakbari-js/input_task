import React from 'react';
import { TestIconProps } from './types';

export const TestIcon: React.FC<TestIconProps> = ({ className, icon }) => (
  <span className={className ?? 'text-gray-500'}>{icon}</span>
);
