import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createBooking } from '../api/bookings.service';
import { queryKeys } from '@/src/lib/queryKeys';

export const useCreateBooking = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.events.all,
      });

      router.push('/customer/bookings');
    },
  });
};
