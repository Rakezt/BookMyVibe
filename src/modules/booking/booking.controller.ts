import { Request, Response } from 'express';
import { AuthRequest } from '../../middleware/auth.middleware';
import asyncHandler from '../../utils/asyncHandler';
import {
  createBookingService,
  getEventBookingsService,
  getMyBookingsService,
} from './booking.service';

interface BookingParams {
  eventId: string;
}

export const createBooking = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await createBookingService(req.body, req.user.userId);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: result,
    });
  },
);

export const getMyBookings = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await getMyBookingsService(req.user.userId);

    res.status(200).json({
      success: true,
      message: 'Booking list',
      data: result,
    });
  },
);

export const getEventBookings = asyncHandler(
  async (req: AuthRequest & Request<BookingParams>, res: Response) => {
    const result = await getEventBookingsService(req.params.eventId);

    res.status(200).json({
      success: true,
      message: 'Event list',
      data: result,
    });
  },
);
