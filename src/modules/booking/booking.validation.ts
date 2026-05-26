import { z } from 'zod';

export const createBookingSchema = z.object({
  body: z.object({
    eventId: z.string(),

    quantity: z.number().min(1),
  }),
});
