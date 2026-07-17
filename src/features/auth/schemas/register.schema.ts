import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, 'Name must be at least 3 characters')
      .max(100),

    email: z.string().trim().email('Invalid email address'),

    password: z.string().min(8, 'Password must be at least 8 characters'),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
