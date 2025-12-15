import React from 'react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => (
  <Button className="rounded bg-blue-500 px-4 py-2 text-white">Click me</Button>
);
