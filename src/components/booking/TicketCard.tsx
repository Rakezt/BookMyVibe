'use client';

import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import TicketQRCode from './TicketQRCode';
import { BookingDetails } from '@/src/features/bookings/types/booking.types';

type Props = {
  booking: BookingDetails;
};

export default function TicketCard({ booking }: Props) {
  const qrValue = JSON.stringify({
    bookingId: booking.bookingId,
    eventId: booking.event._id,
    quantity: booking.quantity,
  });

  return (
    <Paper
      sx={{
        maxWidth: 650,
        mx: 'auto',
        p: 5,
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
            }}
          >
            BookMyVibe
          </Typography>

          <Typography color='text.secondary'>Electronic Ticket</Typography>
        </Box>

        <Divider />

        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
          }}
        >
          {booking.event.title}
        </Typography>

        <Chip
          label={booking.status}
          color='success'
          sx={{
            width: 'fit-content',
          }}
        />

        <Divider />

        <Stack spacing={2}>
          <Typography>
            <strong>Booking ID:</strong> {booking.bookingId}
          </Typography>

          <Typography>
            <strong>Date:</strong>{' '}
            {new Date(booking.event.date).toLocaleString()}
          </Typography>

          <Typography>
            <strong>Venue:</strong> {booking.event.venue.name}
          </Typography>

          <Typography>
            <strong>Address:</strong> {booking.event.venue.address}
          </Typography>

          <Typography>
            <strong>City:</strong> {booking.event.venue.city}
          </Typography>

          <Typography>
            <strong>Quantity:</strong> {booking.quantity}
          </Typography>

          <Typography>
            <strong>Booked On:</strong>{' '}
            {new Date(booking.bookedAt).toLocaleString()}
          </Typography>
        </Stack>

        <Divider />

        <TicketQRCode value={qrValue} />

        <Divider />

        <Stack direction='row' spacing={2}>
          <Button
            fullWidth
            variant='outlined'
            startIcon={<PrintRoundedIcon />}
            onClick={() => window.print()}
          >
            Print
          </Button>

          <Button
            fullWidth
            variant='contained'
            startIcon={<DownloadRoundedIcon />}
            onClick={() => {
              // Next Sprint
            }}
          >
            Download PDF
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
