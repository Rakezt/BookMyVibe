'use client';

import { useEvent } from '@/src/features/events/hooks/use-events';
import { Alert, CircularProgress, Container, Grid } from '@mui/material';
import EventBanner from './EventBanner';
import EventInformation from './EventInformation';
import BookingCard from './BookingCard';

type Props = {
  id: string;
};

export default function EventDetailsPage({ id }: Props) {
  const { data, isLoading, isError } = useEvent(id);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !data) {
    return <Alert severity='error'>Unable to load event.</Alert>;
  }

  return (
    <Container
      maxWidth='xl'
      sx={{
        py: 4,
      }}
    >
      <EventBanner event={data.data} />

      <Grid
        container
        spacing={4}
        sx={{
          mt: 1,
        }}
      >
        <Grid size={{ xs: 12, lg: 8 }}>
          <EventInformation event={data.data} />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <BookingCard event={data.data} />
        </Grid>
      </Grid>
    </Container>
  );
}
