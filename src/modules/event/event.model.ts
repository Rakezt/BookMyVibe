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

eventSchema.index({
  organizerId: 1,
});

eventSchema.index({
  location: 1,
});

eventSchema.index({
  title: 'text',
});

const Event = mongoose.model('Event', eventSchema, 'events');

export default Event;
