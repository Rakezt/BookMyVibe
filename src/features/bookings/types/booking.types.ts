export interface CreateBookingRequest {
  eventId: string;
  quantity: number;
}

export interface Booking {
  _id: string;
  customerId: string;
  eventId: string;
  quantity: number;
  status: string;
}

export interface CreateBookingResponse {
  success: boolean;
  message: string;
  data: Booking;
}

export interface MyBookingEvent {
  _id: string;
  title: string;
  image: string;
  date: string;

  venue: {
    city: string;
  };
}

export interface MyBooking {
  _id: string;
  quantity: number;
  status: string;

  eventId: MyBookingEvent;
}

export interface MyBookingsResponse {
  success: boolean;
  data: MyBooking[];
}
export interface BookingDetails {
  bookingId: string;
  quantity: number;
  status: string;
  bookedAt: string;
  event: {
    _id: string;
    title: string;
    date: string;
    organizerId: string;
    venue: {
      name: string;
      city: string;
      address: string;
    };
  };
}

export interface BookingDetailsResponse {
  success: boolean;
  data: BookingDetails;
}
