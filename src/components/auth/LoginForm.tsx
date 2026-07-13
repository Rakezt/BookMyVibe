'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Paper, Stack, Typography } from '@mui/material';
import AppTextField from '@/src/components/common/form/AppTextField';
import SubmitButton from '@/src/components/common/form/SubmitButton';
import { useLogin } from '@/src/features/auth/hooks/use-login';
import {
  loginSchema,
  LoginFormValues,
} from '@/src/features/auth/schemas/login.schema';

export default function LoginForm() {
  const router = useRouter();

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useLogin();

  const onSubmit = (values: LoginFormValues) => {
    mutate(values, {
      onSuccess: () => {
        router.push('/customer/dashboard');
      },
    });
  };

  return (
    <Paper
      sx={{
        width: 480,
        mx: 'auto',
        mt: 10,
        p: 5,
      }}
    >
      <Typography
        variant='h4'
        sx={{
          fontWeight: 700,
          mb: 1,
        }}
      >
        Welcome Back
      </Typography>

      <Typography
        color='text.secondary'
        sx={{
          mb: 4,
        }}
      >
        Sign in to BookMyVibe
      </Typography>

      <FormProvider {...methods}>
        <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <AppTextField<LoginFormValues> name='email' label='Email' />

            <AppTextField<LoginFormValues>
              name='password'
              label='Password'
              type='password'
            />

            <Link href='/forgot-password'>Forgot Password?</Link>

            <SubmitButton loading={isPending}>Login</SubmitButton>
          </Stack>
        </Box>
      </FormProvider>
    </Paper>
  );
}
