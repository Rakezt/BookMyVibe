import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { resetPassword } from '../api/auth.service';

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
      router.replace('/login');
    },
  });
};
