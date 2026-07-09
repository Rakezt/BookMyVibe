'use client';

import {
  Box,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Event } from '@/src/features/events/types/event.types';

type Props = {
  event: Event;
};

export default function EventInformation({ event }: Props) {
  return (
    <Stack spacing={4}>
      <Paper
        sx={{
          p: 4,
        }}
      >
        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
            mb: 3,
          }}
        >
          About this Event
        </Typography>

        <Typography
          sx={{
            color: 'text.secondary',
            lineHeight: 1.8,
          }}
        >
          {event.description}
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
            }}
          >
            <Stack spacing={2}>
              <LocationOnRoundedIcon color='primary' />

              <Typography
                variant='h6'
                sx={{
                  fontWeight: 700,
                }}
              >
                Venue
              </Typography>

              <Typography>{event.venue.name}</Typography>

              <Typography color='text.secondary'>
                {event.venue.address}
              </Typography>

              <Typography color='text.secondary'>{event.venue.city}</Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
            }}
          >
            <Stack spacing={2}>
              <PersonRoundedIcon color='primary' />

              <Typography
                variant='h6'
                sx={{
                  fontWeight: 700,
                }}
              >
                Organizer
              </Typography>

              <Typography>{event.organizer.name}</Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
            }}
          >
            <Stack spacing={2}>
              <CalendarMonthRoundedIcon color='primary' />

              <Typography
                variant='h6'
                sx={{
                  fontWeight: 700,
                }}
              >
                Event Information
              </Typography>

              <Typography>
                {new Date(event.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Typography>

              <Typography color='text.secondary'>
                {new Date(event.date).toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>

              <Stack
                direction='row'
                spacing={1}
                sx={{
                  alignItems: 'center',
                }}
              >
                <CategoryRoundedIcon fontSize='small' />

                <Typography>{event.category}</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
            }}
          >
            <Stack spacing={2}>
              <ConfirmationNumberRoundedIcon color='primary' />

              <Typography
                variant='h6'
                sx={{
                  fontWeight: 700,
                }}
              >
                Ticket Information
              </Typography>

              <Typography>
                ₹{event.ticketPrice.toLocaleString('en-IN')}
              </Typography>

              <Typography>
                🎫 {event.availableTickets.toLocaleString('en-IN')} Tickets Left
              </Typography>

              <Box>
                <Typography
                  variant='body2'
                  sx={{
                    mb: 1,
                  }}
                >
                  {event.occupancyRate}% Filled
                </Typography>

                <LinearProgress
                  variant='determinate'
                  value={event.occupancyRate}
                />
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
