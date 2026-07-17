import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { forgotPassword } from '../api/auth.service';

export const useForgotPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (_, variables) => {
      router.push(`/verify-otp?email=${encodeURIComponent(variables.email)}`);
    },
  });
};
