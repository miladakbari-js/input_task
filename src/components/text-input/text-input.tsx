import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/input/input';
import { CustomInputProps } from './types.d';
import Label from '@/components/label/label';

export const TextInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, startIcon, endIcon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        {label ? <Label label={label} /> : null}

        <div className="relative">
          {startIcon && (
            <div className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
              {startIcon}
            </div>
          )}
          <Input
            ref={ref}
            className={cn(
              'mx-auto flex w-full max-w-md flex-col gap-1 p-2',
              startIcon ? 'pl-10' : 'pl-3',
              endIcon ? 'pr-10' : 'pr-3',
              error ? 'border-rose-500 focus:ring-rose-500' : '',
              className,
            )}
            {...props}
          />

          {endIcon && (
            <span
              data-testid="end-icon"
              className="pointer-events-auto absolute top-1/2 right-3 -translate-y-1/2"
            >
              {endIcon}
            </span>
          )}
        </div>
        {error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}
      </div>
    );
  },
);

TextInput.displayName = 'CustomInput';
