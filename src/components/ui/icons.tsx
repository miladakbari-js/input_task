import React from 'react';

export const TestStartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <span className={className ?? 'text-gray-500'}>✉</span>
);

export const TestEndIcon: React.FC<{ className?: string }> = ({ className }) => (
  <span className={className ?? 'text-gray-500'}>✦</span>
);
