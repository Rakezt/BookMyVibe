'use client';

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props<T extends FieldValues> = {
  name: Path<T>;
} & TextFieldProps;

export default function AppTextField<T extends FieldValues>({
  name,
  ...props
}: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
