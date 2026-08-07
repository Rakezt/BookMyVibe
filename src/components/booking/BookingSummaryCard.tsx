'use client';

import { BookingDetails } from '@/src/features/bookings/types/booking.types';
import { Chip, Paper, Stack, Typography } from '@mui/material';

type Props = {
  booking: BookingDetails;
};

export default function BookingSummaryCard({ booking }: Props) {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
          }}
        >
          Booking Summary
        </Typography>

        <Typography>Booking ID</Typography>

        <Typography
          sx={{
            color: 'text.secondary',
          }}
        >
          {booking.bookingId}
        </Typography>

        <Typography>Quantity</Typography>

        <Typography>{booking.quantity}</Typography>

        <Typography>Booked On</Typography>

        <Typography>{new Date(booking.bookedAt).toLocaleString()}</Typography>

        <Chip color='success' label={booking.status} />
      </Stack>
    </Paper>
  );
}
