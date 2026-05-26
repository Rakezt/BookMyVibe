import { z } from 'zod';

export const createEventSchema = z.object({
  body: z.object({
    title: z.string().min(3),

    description: z.string().min(10),

    location: z.string(),

    date: z.string(),

    totalTickets: z.number().min(1),
  }),
});

export const updateEventSchema = z.object({
  body: z.object({
    title: z.string().optional(),

    description: z.string().optional(),

    location: z.string().optional(),

    date: z.string().optional(),

    totalTickets: z.number().optional(),
  }),
});
