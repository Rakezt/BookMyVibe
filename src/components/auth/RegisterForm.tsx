'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import AppTextField from '@/src/components/common/form/AppTextField';
import SubmitButton from '@/src/components/common/form/SubmitButton';

import { useRegister } from '@/src/features/auth/hooks/use-register';
import {
  RegisterFormData,
  registerSchema,
} from '@/src/features/auth/schemas/register.schema';

export default function RegisterForm() {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, isPending } = useRegister();

  const onSubmit = (values: RegisterFormData) => {
    const { confirmPassword, ...payload } = values;

    mutate(payload);
  };

  return (
    <FormProvider {...methods}>
      <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <AppTextField<RegisterFormData> name='name' label='Full Name' />

          <AppTextField<RegisterFormData> name='email' label='Email' />

          <AppTextField<RegisterFormData>
            name='password'
            label='Password'
            type='password'
          />

          <AppTextField<RegisterFormData>
            name='confirmPassword'
            label='Confirm Password'
            type='password'
          />

          <SubmitButton loading={isPending}>Create Account</SubmitButton>

          <Typography
            variant='body2'
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Already have an account? <Link href='/login'>Sign In</Link>
          </Typography>
        </Stack>
      </Box>
    </FormProvider>
  );
}
