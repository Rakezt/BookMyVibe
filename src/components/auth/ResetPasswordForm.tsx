'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import AppTextField from '@/src/components/common/form/AppTextField';
import SubmitButton from '@/src/components/common/form/SubmitButton';

import { useResetPassword } from '@/src/features/auth/hooks/use-reset-password';

import {
  resetPasswordSchema,
  ResetPasswordFormValues,
} from '@/src/features/auth/schemas/reset-password.schema';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ?? '';

  const otp = searchParams.get('otp') ?? '';

  const methods = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),

    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, isPending } = useResetPassword();

  const onSubmit = (values: ResetPasswordFormValues) => {
    mutate({
      email,
      otp,
      password: values.password,
    });
  };

  return (
    <FormProvider {...methods}>
      <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <AppTextField<ResetPasswordFormValues>
            name='password'
            label='New Password'
            type='password'
          />

          <AppTextField<ResetPasswordFormValues>
            name='confirmPassword'
            label='Confirm Password'
            type='password'
          />

          <SubmitButton loading={isPending}>Reset Password</SubmitButton>

          <Typography
            variant='body2'
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Remember your password? <Link href='/login'>Sign In</Link>
          </Typography>
        </Stack>
      </Box>
    </FormProvider>
  );
}
