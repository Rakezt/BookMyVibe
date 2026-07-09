'use client';

import Image from 'next/image';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { getStatusColor } from '@/src/features/events/constants/event-category';
import { Event } from '@/src/features/events/types/event.types';

type EventBannerProps = {
  event: Event;
};
export default function EventBanner({ event }: EventBannerProps) {
  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        width: '100%',
        height: 520,
        overflow: 'hidden',
        borderRadius: theme.custom.shape.radius.xs,
      })}
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        priority
        style={{
          objectFit: 'cover',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,.90), rgba(0,0,0,.20))',
        }}
      />

      <Stack
        spacing={3}
        sx={{
          position: 'absolute',
          left: 40,
          right: 40,
          bottom: 40,
        }}
      >
        <Stack direction='row' spacing={2}>
          <Chip label={event.category} color='primary' />

          <Chip label={event.status} color={getStatusColor(event.status)} />
        </Stack>

        <Typography
          variant='h2'
          sx={(theme) => ({
            fontWeight: 800,
            color: theme.palette.primary.main,
          })}
        >
          {event.title}
        </Typography>

        <Stack direction='row' spacing={4}>
          <Stack
            direction='row'
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <LocationOnRoundedIcon />

            <Typography>{event.venue.city}</Typography>
          </Stack>

          <Stack
            direction='row'
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <CalendarMonthRoundedIcon />

            <Typography>
              {new Date(event.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
