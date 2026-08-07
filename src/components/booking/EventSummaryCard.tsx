'use client';

import { BookingDetails } from '@/src/features/bookings/types/booking.types';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { Paper, Stack, Typography } from '@mui/material';

type Props = {
  booking: BookingDetails;
};

export default function EventSummaryCard({ booking }: Props) {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
          }}
        >
          Event Information
        </Typography>

        <Typography variant='h6'>{booking.event.title}</Typography>

        <Stack direction='row' spacing={1}>
          <EventRoundedIcon />

          <Typography>
            {new Date(booking.event.date).toLocaleString()}
          </Typography>
        </Stack>

        <Stack direction='row' spacing={1}>
          <LocationOnRoundedIcon />

          <Typography>{booking.event.venue.name}</Typography>
        </Stack>

        <Typography color='text.secondary'>
          {booking.event.venue.address}
        </Typography>

        <Typography>{booking.event.venue.city}</Typography>
      </Stack>
    </Paper>
  );
}
