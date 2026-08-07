import { useQuery } from '@tanstack/react-query';
import { getMyBookings } from '../api/bookings.service';
import { queryKeys } from '@/src/lib/queryKeys';

export const useMyBookings = () => {
  return useQuery({
    queryKey: queryKeys.bookings.all,

    queryFn: getMyBookings,
  });
};
