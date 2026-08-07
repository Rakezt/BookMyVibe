import { api } from '@/src/services/api';

import {
  BookingDetailsResponse,
  CreateBookingRequest,
  CreateBookingResponse,
  MyBookingsResponse,
} from '../types/booking.types';

export const createBooking = async (
  payload: CreateBookingRequest,
): Promise<CreateBookingResponse> => {
  const { data } = await api.post<CreateBookingResponse>('/bookings', payload);

  return data;
};

export const getMyBookings = async (): Promise<MyBookingsResponse> => {
  const { data } = await api.get<MyBookingsResponse>('/bookings/my-bookings');

  return data;
};

export const getBooking = async (
  bookingId: string,
): Promise<BookingDetailsResponse> => {
  const { data } = await api.get<BookingDetailsResponse>(
    `/bookings/${bookingId}`,
  );

  return data;
};
