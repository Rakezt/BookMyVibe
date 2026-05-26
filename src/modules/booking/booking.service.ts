import { STATUS_CODES } from '../../constants/statusCodes';
import eventBus from '../../jobs/eventBus';
import ApiError from '../../utils/ApiError';
import { findEventByIdRepository } from '../event/event.repository';
import {
  createBookingRepository,
  decreaseAvailableTickets,
  getCustomerBookingsRepository,
  getEventBookingsRepository,
} from './booking.repository';

export const createBookingService = async (
  payload: any,
  customerId: string,
) => {
  const event = await findEventByIdRepository(payload.eventId);

  if (!event) {
    throw new ApiError(STATUS_CODES.NOT_FOUND, 'Event not found');
  }

  const updatedEvent = await decreaseAvailableTickets(
    payload.eventId,
    payload.quantity,
  );

  if (!updatedEvent) {
    throw new ApiError(
      STATUS_CODES.BAD_REQUEST,
      'Not enough tickets available',
    );
  }

  const booking = await createBookingRepository({
    customerId,
    eventId: payload.eventId,
    quantity: payload.quantity,
  });

  eventBus.emit('booking.created', {
    customerId,
    eventId: payload.eventId,
    quantity: payload.quantity,
  });

  return booking;
};

export const getMyBookingsService = async (customerId: string) => {
  return getCustomerBookingsRepository(customerId);
};

export const getEventBookingsService = async (eventId: string) => {
  return getEventBookingsRepository(eventId);
};
