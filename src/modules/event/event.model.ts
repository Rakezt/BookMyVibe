import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    totalTickets: {
      type: Number,
      required: true,
    },

    availableTickets: {
      type: Number,
      required: true,
    },

    organizerId: {
      type: Schema.Types.ObjectId,
      ref: 'eventUser',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model('Event', eventSchema, 'events');

export default Event;
