'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import AppTextField from '@/src/components/common/form/AppTextField';
import SubmitButton from '@/src/components/common/form/SubmitButton';
import { useVerifyOtp } from '@/src/features/auth/hooks/use-verify-otp';
import {
  VerifyOtpFormValues,
  verifyOtpSchema,
} from '@/src/features/auth/schemas/verify-otp.schemas';

export default function VerifyOtpForm() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ?? '';

  const methods = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),

    defaultValues: {
      otp: '',
    },
  });

  const { mutate, isPending } = useVerifyOtp();

  const onSubmit = (values: VerifyOtpFormValues) => {
    mutate({
      email,
      otp: values.otp,
    });
  };

  return (
    <FormProvider {...methods}>
      <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <AppTextField<VerifyOtpFormValues>
            name='otp'
            label='Verification Code'
          />

          <SubmitButton loading={isPending}>Verify OTP</SubmitButton>

          <Typography
            variant='body2'
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Didn&apos;t receive the OTP?{' '}
            <Link href='/forgot-password'>Send Again</Link>
          </Typography>
        </Stack>
      </Box>
    </FormProvider>
  );
}
