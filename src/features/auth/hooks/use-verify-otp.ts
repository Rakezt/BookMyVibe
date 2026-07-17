import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { verifyOtp } from '../api/auth.service';

export const useVerifyOtp = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyOtp,

    onSuccess: (_, variables) => {
      router.push(
        `/reset-password?email=${encodeURIComponent(variables.email)}&otp=${encodeURIComponent(
          variables.otp,
        )}`,
      );
    },
  });
};
