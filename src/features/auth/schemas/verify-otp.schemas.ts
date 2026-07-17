import { z } from 'zod';

export const verifyOtpSchema = z.object({
  otp: z.string().trim().length(4, 'OTP must be 4 digits'),
});

export type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>;
