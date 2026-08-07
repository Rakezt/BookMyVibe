'use client';

import { useMemo, useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Event } from '@/src/features/events/types/event.types';
import { useCreateBooking } from '@/src/features/bookings/hooks/use-create-booking';

type Props = {
  event: Event;
};

export default function BookingCard({ event }: Props) {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = useMemo(() => {
    return quantity * event.ticketPrice;
  }, [quantity, event.ticketPrice]);

  const increaseQuantity = () => {
    if (quantity >= event.availableTickets) return;

    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;

    setQuantity((prev) => prev - 1);
  };

  const { mutate, isPending } = useCreateBooking();

  return (
    <Paper
      sx={{
        p: 4,
        position: 'sticky',
        top: 100,
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 800,
            }}
          >
            ₹{event.ticketPrice.toLocaleString('en-IN')}
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',
            }}
          >
            Per Ticket
          </Typography>
        </Box>

        <Divider />

        <Stack
          direction='row'
          spacing={1}
          sx={{
            alignItems: 'center',
          }}
        >
          <ConfirmationNumberRoundedIcon color='primary' />

          <Typography>
            {event.availableTickets.toLocaleString('en-IN')} Tickets Left
          </Typography>
        </Stack>

        <Box>
          <Typography
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            Quantity
          </Typography>

          <Stack
            direction='row'
            spacing={2}
            sx={{
              alignItems: 'center',
            }}
          >
            <IconButton onClick={decreaseQuantity} disabled={quantity === 1}>
              <RemoveRoundedIcon />
            </IconButton>

            <Typography
              variant='h5'
              sx={{
                minWidth: 32,
                textAlign: 'center',
              }}
            >
              {quantity}
            </Typography>

            <IconButton
              onClick={increaseQuantity}
              disabled={quantity >= event.availableTickets}
            >
              <AddRoundedIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider />

        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            Total
          </Typography>

          <Typography
            variant='h5'
            sx={{
              fontWeight: 700,
            }}
          >
            ₹{totalPrice.toLocaleString('en-IN')}
          </Typography>
        </Stack>

        <Button
          variant='contained'
          size='large'
          fullWidth
          disabled={event.availableTickets === 0 || isPending}
          onClick={() =>
            mutate({
              eventId: event._id,
              quantity,
            })
          }
        >
          {isPending ? 'Booking...' : 'Book Now'}
        </Button>
      </Stack>
    </Paper>
  );
}
