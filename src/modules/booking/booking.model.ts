import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

bookingSchema.index({
  customerId: 1,
});

bookingSchema.index({
  eventId: 1,
});
const Booking = mongoose.model('Booking', bookingSchema, 'eventBooking');

export default Booking;
