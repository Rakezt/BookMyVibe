import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { register } from '../api/auth.service';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      router.replace('/login');
    },
  });
};
