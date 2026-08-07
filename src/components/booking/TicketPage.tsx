'use client';

import { Alert, Box, CircularProgress } from '@mui/material';
import TicketCard from './TicketCard';
import { useBooking } from '@/src/features/bookings/hooks/use-booking';

type Props = {
  bookingId: string;
};

export default function TicketPage({ bookingId }: Props) {
  const { data, isLoading, isError } = useBooking(bookingId);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return <Alert severity='error'>Unable to load ticket.</Alert>;
  }

  return <TicketCard booking={data.data} />;
}
