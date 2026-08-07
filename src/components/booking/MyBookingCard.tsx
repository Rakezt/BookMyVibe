'use client';

import Link from 'next/link';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { MyBooking } from '@/src/features/bookings/types/booking.types';

type Props = {
  booking: MyBooking;
};

export default function MyBookingCard({ booking }: Props) {
  return (
    <Card>
      <CardMedia component='img' height='220' image={booking.eventId.image} />

      <CardContent>
        <Typography
          variant='h5'
          sx={{
            mb: 2,
          }}
        >
          {booking.eventId.title}
        </Typography>

        <Stack spacing={2}>
          <Stack
            direction='row'
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <CalendarMonthRoundedIcon />

            <Typography>
              {new Date(booking.eventId.date).toLocaleDateString()}
            </Typography>
          </Stack>

          <Stack
            direction='row'
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <LocationOnRoundedIcon />

            <Typography>{booking.eventId.venue.city}</Typography>
          </Stack>

          <Chip label={booking.status} color='success' />

          <Typography>Quantity : {booking.quantity}</Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <Button
              component={Link}
              href={`/customer/bookings/${booking._id}`}
              variant='contained'
            >
              View Details
            </Button>

            <Button
              component={Link}
              href={`/bookings/${booking._id}/ticket`}
              variant='outlined'
            >
              Download Ticket
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
