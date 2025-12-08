import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

type CustomInputProps = {
  label?: string;
  error?: string | null;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  name?: string;
} & React.ComponentProps<'input'>;

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, startIcon, endIcon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        {label ? <label>{label}</label> : null}

        <div className="relative">
          {startIcon && (
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
              {startIcon}
            </span>
          )}
          <Input
            ref={ref}
            className={cn(
              'w-full',
              startIcon ? 'pl-10' : 'pl-3',
              endIcon ? 'pr-10' : 'pr-3',
              error ? 'border-red-500 focus:ring-red-500' : '',
              className,
            )}
            {...props}
          />

          {endIcon && (
            <span className="pointer-events-auto absolute top-1/2 right-3 -translate-y-1/2">
              {endIcon}
            </span>
          )}
        </div>
        {error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}
      </div>
    );
  },
);

CustomInput.displayName = 'CustomInput';
export default CustomInput;
