import * as yup from 'yup';
import { schema } from './schema';

export type CustomInputProps = {
  label?: string;
  error?: string | null;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  name?: string;
} & React.ComponentProps<'input'>;

export type FormValues = yup.InferType<typeof schema>;


