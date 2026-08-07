'use client';

import { Alert, CircularProgress, Grid } from '@mui/material';
import BookingSummaryCard from './BookingSummaryCard';
import EventSummaryCard from './EventSummaryCard';
import { useBooking } from '@/src/features/bookings/hooks/use-booking';

type Props = {
  bookingId: string;
};

export default function BookingDetailsPage({ bookingId }: Props) {
  const { data, isLoading, isError } = useBooking(bookingId);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !data) {
    return <Alert severity='error'>Unable to load booking.</Alert>;
  }

  return (
    <Grid container spacing={4}>
      <Grid
        size={{
          xs: 12,
          lg: 5,
        }}
      >
        <BookingSummaryCard booking={data.data} />
      </Grid>

      <Grid
        size={{
          xs: 12,
          lg: 7,
        }}
      >
        <EventSummaryCard booking={data.data} />
      </Grid>
    </Grid>
  );
}
