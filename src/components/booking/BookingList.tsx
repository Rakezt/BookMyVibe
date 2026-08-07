'use client';

import { MyBooking } from '@/src/features/bookings/types/booking.types';
import { Grid } from '@mui/material';
import MyBookingCard from './MyBookingCard';

type Props = {
  bookings: MyBooking[];
};

export default function BookingList({ bookings }: Props) {
  return (
    <Grid container spacing={3}>
      {bookings.map((booking) => (
        <Grid
          key={booking._id}
          size={{
            xs: 12,
            md: 6,
            lg: 4,
          }}
        >
          <MyBookingCard booking={booking} />
        </Grid>
      ))}
    </Grid>
  );
}
