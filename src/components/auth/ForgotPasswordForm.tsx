'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import AppTextField from '@/src/components/common/form/AppTextField';
import SubmitButton from '@/src/components/common/form/SubmitButton';

import { useForgotPassword } from '@/src/features/auth/hooks/use-forgot-password';

import {
  forgotPasswordSchema,
  ForgotPasswordFormValues,
} from '@/src/features/auth/schemas/forgot-password.schema';

export default function ForgotPasswordForm() {
  const methods = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),

    defaultValues: {
      email: '',
    },
  });

  const { mutate, isPending } = useForgotPassword();

  const onSubmit = (values: ForgotPasswordFormValues) => {
    mutate(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <AppTextField<ForgotPasswordFormValues> name='email' label='Email' />

          <SubmitButton loading={isPending}>Send OTP</SubmitButton>

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
