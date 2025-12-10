import { type ReactNode } from 'react';

export type TestIconProps = {
  className?: string;
  icon?: ReactNode;
};

export type ButtonProps = React.ComponentProps<'button'> & {
  className?: string;
};
