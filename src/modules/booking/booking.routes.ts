import express from 'express';
import authMiddleware from '../../middleware/auth.middleware';
import authorizeRoles from '../../middleware/role.middleware';
import validate from '../../middleware/validate.middleware';
import {
  createBooking,
  getEventBookings,
  getMyBookings,
} from './booking.controller';
import { createBookingSchema } from './booking.validation';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  authorizeRoles('CUSTOMER'),
  validate(createBookingSchema),
  createBooking,
);

router.get(
  '/my-bookings',
  authMiddleware,
  authorizeRoles('CUSTOMER'),
  getMyBookings,
);

router.get(
  '/event/:eventId',
  authMiddleware,
  authorizeRoles('ORGANIZER'),
  getEventBookings,
);

export default router;
