'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import AppTextField from '@/src/components/common/form/AppTextField';
import SubmitButton from '@/src/components/common/form/SubmitButton';

import { useLogin } from '@/src/features/auth/hooks/use-login';
import {
  loginSchema,
  LoginFormValues,
} from '@/src/features/auth/schemas/login.schema';

export default function LoginForm() {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useLogin();

  const onSubmit = (values: LoginFormValues) => {
    mutate(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <AppTextField<LoginFormValues> name='email' label='Email' />

          <AppTextField<LoginFormValues>
            name='password'
            label='Password'
            type='password'
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Link href='/forgot-password'>Forgot Password?</Link>
          </Box>

          <SubmitButton loading={isPending}>Sign In</SubmitButton>

          <Typography
            variant='body2'
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Don&apos;t have an account?{' '}
            <Link href='/register'>Create Account</Link>
          </Typography>
        </Stack>
      </Box>
    </FormProvider>
  );
}
