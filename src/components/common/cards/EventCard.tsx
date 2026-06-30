'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { Event } from '@/src/features/events/types/event.types';
import {
  getOccupancyColor,
  getStatusColor,
} from '@/src/features/events/constants/event-category';

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  const router = useRouter();

  return (
    <Card
      sx={(theme) => ({
        maxWidth: 360,
        width: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: theme.custom.transitions.normal,

        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.custom.shadows?.hover,
        },
      })}
    >
      {/* Image */}

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 180,
        }}
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />

        {/* <Chip
          label={event.category}
          color='primary'
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
          }}
        /> */}
        <Chip
          label={event.status}
          color={getStatusColor(event.status)}
          size='small'
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
          }}
        />

        <Chip
          label={`₹${event.ticketPrice.toLocaleString('en-IN')}`}
          color='secondary'
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        />
      </Box>

      <CardContent>
        <Stack spacing={2}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 700,
            }}
          >
            {event.title}
          </Typography>

          <Stack
            direction='row'
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <CalendarMonthRoundedIcon fontSize='small' />

            <Typography color='text.secondary'>
              {new Date(event.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </Typography>
          </Stack>

          <Stack
            direction='row'
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <LocationOnRoundedIcon fontSize='small' />

            <Typography color='text.secondary'>{event.venue.city}</Typography>
          </Stack>

          <Box>
            <Typography
              variant='body2'
              sx={{
                fontWeight: 600,
              }}
            >
              🎫 {event.availableTickets.toLocaleString()} Tickets Left
            </Typography>

            <Box>
              <Typography
                variant='body2'
                sx={{
                  mb: 1,
                  color: 'text.secondary',
                }}
              >
                {event.occupancyRate}% Filled
              </Typography>

              <LinearProgress
                variant='determinate'
                color={getOccupancyColor(event.occupancyRate)}
                value={event.occupancyRate}
                sx={(theme) => ({
                  height: 8,
                  borderRadius: theme.custom.shape.radius.pill,

                  '& .MuiLinearProgress-bar': {
                    borderRadius: theme.custom.shape.radius.pill,
                  },
                })}
              />
            </Box>
          </Box>

          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
            }}
          >
            Organized by{' '}
            <Box
              component='span'
              sx={{
                color: 'text.primary',
                fontWeight: 600,
              }}
            >
              {event.organizer.name}
            </Box>
          </Typography>

          <Button
            variant='contained'
            fullWidth
            onClick={() => router.push(`/events/${event._id}`)}
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
