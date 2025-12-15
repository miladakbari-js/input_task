import { cn } from '@/utils/ui';
import { InputProps } from './types';

function Input({ className, type, ...props }: InputProps) {
  return <input type={type} data-slot="input" className={cn(className)} {...props} />;
}

export { Input };
