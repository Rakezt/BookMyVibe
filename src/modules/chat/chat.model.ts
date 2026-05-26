import mongoose, { Schema } from 'mongoose';

const chatSchema = new Schema(
  {
    roomId: {
      type: String,
      required: true,
    },

    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Chat = mongoose.model('Chat', chatSchema, 'eventChat');

export default Chat;
