'use client';
import { useEvents } from '@/src/features/events/hooks/use-events';
import { Alert, Container, Grid, Skeleton, Typography } from '@mui/material';
import EventCard from '../common/cards/EventCard';

export const TrendingSection = () => {
  const { data, isPending, isError } = useEvents({
    limit: 8,
  });
  console.log('DATA', data);
  const events = data?.pages.flatMap((page) => page.data.events ?? []) ?? [];
  if (isPending) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <Skeleton variant='rounded' height={420} />
          </Grid>
        ))}
      </Grid>
    );
  }
  if (isError) {
    return (
      <Container maxWidth='xl' sx={{ py: 10 }}>
        <Alert severity='error'>Unable to load events.</Alert>
      </Container>
    );
  }
  if (!events.length) {
    return (
      <Container
        maxWidth='xl'
        sx={{
          py: 10,
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          No events available.
        </Typography>
      </Container>
    );
  }
  return (
    <Container
      maxWidth='xl'
      sx={{
        py: 10,
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontWeight: 700,
          mb: 6,
        }}
      >
        Trending Events
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid
            key={event._id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
