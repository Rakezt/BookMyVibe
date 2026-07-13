import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/src/store/hooks';
import { setUser } from '@/src/store/slices/authSlice';
import { login } from '../api/auth.service';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: login,

    onSuccess: (response) => {
      dispatch(setUser(response.data.user));

      if (response.data.user.role === 'ORGANIZER') {
        router.replace('/organizer/dashboard');
      } else {
        router.replace('/customer/dashboard');
      }
    },
  });
};
