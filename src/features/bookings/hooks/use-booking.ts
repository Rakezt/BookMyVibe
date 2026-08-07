import { useQuery } from '@tanstack/react-query';

import { getBooking } from '../api/bookings.service';

import { queryKeys } from '@/src/lib/queryKeys';

export const useBooking = (bookingId: string) => {
  return useQuery({
    queryKey: [...queryKeys.bookings.all, bookingId],

    queryFn: () => getBooking(bookingId),

    enabled: !!bookingId,
  });
};
