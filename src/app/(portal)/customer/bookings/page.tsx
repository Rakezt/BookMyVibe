'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import { useMyBookings } from '@/src/features/bookings/hooks/use-my-bookings';
import EmptyState from '@/src/components/common/EmptyState/EmptyState';
import BookingList from '@/src/components/booking/BookingList';

export default function MyBookingsPage() {
  const { data, isLoading } = useMyBookings();

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

  const bookings = data?.data ?? [];

  if (bookings.length === 0) {
    return (
      <EmptyState
        title='No Bookings Yet'
        description='Book your first event to see it here.'
      />
    );
  }

  return (
    <>
      <Typography
        variant='h3'
        sx={{
          mb: 4,
        }}
      >
        My Bookings
      </Typography>

      <BookingList bookings={bookings} />
    </>
  );
}
