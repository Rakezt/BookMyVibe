import Booking from './booking.model';
import Event from '../event/event.model';

export const createBookingRepository = async (payload: any) => {
  return Booking.create(payload);
};

export const getCustomerBookingsRepository = async (customerId: string) => {
  return Booking.find({
    customerId,
  })
    .populate('eventId', 'title location date')
    .select('-__v')
    .sort({
      createdAt: -1,
    });
};

export const getEventBookingsRepository = async (eventId: string) => {
  return Booking.find({
    eventId,
  })
    .populate('customerId', 'name email')
    .select('-__v')
    .sort({
      createdAt: -1,
    });
};

export const decreaseAvailableTickets = async (
  eventId: string,
  quantity: number,
) => {
  return Event.findOneAndUpdate(
    {
      _id: eventId,

      availableTickets: {
        $gte: quantity,
      },
    },
    {
      $inc: {
        availableTickets: -quantity,
      },
    },
    {
      new: true,
    },
  );
};
