import { z } from 'zod';
import { UserRole } from '../models/user.model';

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(3),

    email: z.string().email(),

    password: z.string().min(6),

    role: z.nativeEnum(UserRole).optional(),
  }),
});
